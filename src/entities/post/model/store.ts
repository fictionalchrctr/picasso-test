import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './postsApi'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(postsApi.middleware)
})
