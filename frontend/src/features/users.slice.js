import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    userCache: null,
  },
  reducers: {
    setCache: (state, { payload }) => {
      state.userCache = payload
    },
    deleteCache: (state) => {
      state.userCache = null
    },
  },
})

export const { setCache, deleteCache } = usersSlice.actions
export default usersSlice.reducer
