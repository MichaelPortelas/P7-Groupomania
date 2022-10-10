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
          if (payload[0].imageUrl) {
            return {
              ...post,
              imageUrl: payload[0].imageUrl,
              message: payload[0].message,
            }
          }

          return {
            ...post,
            message: payload[0].message,
          }
        } else {
          return post
        }
      })
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload)
    },
    postLike: (state, { payload }) => {
      // si le payload est dans le tableau on le supprime sinon on l'ajoute
      state.posts = state.posts.map((post) => {
        if (post.id === payload[0]) {
          if (post.usersLiked.find((element) => element === payload[1])) {
            for (let i = 0; i < post.usersLiked.length; i++) {
              if (post.usersLiked[i] === payload[1]) {
                post.usersLiked.splice(i, 1)
              }
            }

            post.likes = post.usersLiked.length

            return post
          } else {
            post.usersLiked.push(payload[1])

            post.likes = post.usersLiked.length

            return post
          }
        } else {
          return post
        }
      })
    },
  },
})

export const { postLike, setPostsData, addPost, editPost, deletePost } =
  postsSlice.actions
export default postsSlice.reducer
