import { Navigate, Route, Routes } from 'react-router'
import { PostsListPage } from './ui/postsListPage/'
import { PostsDetailPage } from './ui/postDetailsPage'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsListPage />} />
      <Route path="/:postId" element={<PostsDetailPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Routing
