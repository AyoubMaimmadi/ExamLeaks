import * as api from '../api'

// Action Creators

// We dispatch the action fetch all the posts from the database
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.error(error)
  }
}

// we dispatch the action create a new post given entered data
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.error(error)
  }
}

// we dispatch delete a specific post from the database given a unique ID
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.error(error)
  }
}

// we dispatch update a specific post given a unique ID (ont implimented in the front-end)
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.error(error)
  }
}
