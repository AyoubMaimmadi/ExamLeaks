import * as api from '../api'

// Action Creators
// Functions that return actions
// The action is an object with a type property, and a payload property
// The payload property is the data that the action will send to the reducer
// The type property is a string that describes the action
// As soon as the action is dispatched, the reducer will be called
// The reducer will then update the state based on the action
// and return it to the component that called the action

// We return the action fetch all the posts with dispatch type FETCH_ALL and the payload is the response/ data from the api
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.error(error)
  }
}

// we return the action create a new post with dispatch type CREATE given the post object
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.error(error)
  }
}

// we retuen action of delete a specific post from the database given a unique ID
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.error(error)
  }
}

// we return action of update a specific post given a unique ID (not yet implimented in the front-end)
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.error(error)
  }
}
