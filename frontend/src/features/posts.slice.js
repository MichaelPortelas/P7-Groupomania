import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
  },
  reducers: {
    setPostsData: (state, { payload }) => {
      state.posts = payload.reverse()
    },
    addPost: (state, { payload }) => {
      state.posts.reverse().push(payload)
      state.posts = state.posts.reverse()
    },
    editPost: (state, { payload }) => {
      state.posts = state.posts.map((post) => {
        if (post.id === payload[1]) {
          return {
            ...post,
            // changement a determiner
          }
        } else {
          return post
        }
      })
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload)
    },
  },
})

export const { setPostsData, addPost, editPost, deletePost } =
  postsSlice.actions
export default postsSlice.reducer
