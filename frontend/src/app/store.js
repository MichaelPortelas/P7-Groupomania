import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users.slice'
import postsReducer from '../features/posts.slice'

export default configureStore({
  reducer: {
    users: userReducer,
    posts: postsReducer,
  },
})
