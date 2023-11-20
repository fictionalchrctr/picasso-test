import { useState, useEffect } from 'react'
import { Grid, LinearProgress } from '@mui/material'
import { useFetchAllPostsQuery } from '../../entities/post/model'
import { PostCard } from '../../entities/post/ui'
import { IPost } from '../../shared/api'

export const PostsList = () => {
  const [currentPostStart, setCurrentPostStart] = useState(0)

  const [isMyFetching, setIsFetchingDown] = useState(false)
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
  const { data: posts, isLoading } = useFetchAllPostsQuery({
    limit: 20,
    start: currentPostStart
  })

  useEffect(() => {
    if (isMyFetching) {
      setCurrentPostStart((prev) => {
        return prev < 80 ? prev + 1 : prev
      })
      setIsFetchingDown(false)
    }
  }, [isMyFetching])

  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 1 : prev
      })
      setIsMyFetchingUp(false)
    }
  }, [isMyFetchingUp])

  const scrollHandler = (): void => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight

    if (scrollTop < 50) {
      setIsMyFetchingUp(true)
    } else if (scrollHeight - scrollTop - windowHeight < 50) {
      setIsFetchingDown(true)
      window.scrollTo(0, scrollHeight + scrollTop)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div>
      <Grid container maxWidth="sm" spacing={2}>
        {posts?.map((post: IPost) => <PostCard key={post.id} post={post} />)}
      </Grid>
      {isLoading && <LinearProgress />}
    </div>
  )
}
