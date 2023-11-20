import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../../../shared/api'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], { limit: number; start: number }>({
      query: ({ limit = 20, start = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _start: start
        }
      })
    }),
    fetchPostById: build.query<IPost, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`
      })
    })
  })
})

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postsApi
