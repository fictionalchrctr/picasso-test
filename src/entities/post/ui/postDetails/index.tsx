import {
  Card,
  CardContent,
  Divider,
  LinearProgress,
  Typography
} from '@mui/material'
import { BackButton } from '..'
import { useFetchPostByIdQuery } from '../../model'
import { useParams } from 'react-router'

export const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>()

  const { data: post, isLoading } = useFetchPostByIdQuery(Number(postId))
  if (isLoading) {
    return <LinearProgress />
  }
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">№ {post?.id}</Typography>
        <Divider />
        <Typography variant="h5" className="postitem__title">
          Title: {post?.title}
        </Typography>
        <Typography variant="h5">Body: {post?.body}</Typography>
        <Divider />
        <BackButton />
      </CardContent>
    </Card>
  )
}
