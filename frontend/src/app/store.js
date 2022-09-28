import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users.slice'

export default configureStore({
  reducer: {
    users: userReducer,
  },
})
