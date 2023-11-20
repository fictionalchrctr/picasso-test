import { Container } from '@mui/material'
import { PostDetails } from '../../../entities/post'

export const PostsDetailPage = () => {
  return (
    <Container sx={{ mt: '2rem' }}>
      <PostDetails />
    </Container>
  )
}
