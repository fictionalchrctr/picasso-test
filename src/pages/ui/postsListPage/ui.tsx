import { Container } from '@mui/material'
import { PostsList } from '../../../widgets/postsList'

export const PostsListPage = () => {
  return (
    <Container sx={{ mt: '2rem' }}>
      <PostsList />
    </Container>
  )
}
