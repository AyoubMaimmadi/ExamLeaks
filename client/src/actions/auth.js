import * as api from '../api'

// sign in function to be called when the user wants to signs in
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)
    dispatch({ type: 'AUTH', data })
    history.push('/')
  } catch (error) {
    console.error(error)
  }
}

// sign up function to be called when the user wants to signs up
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)
    dispatch({ type: 'AUTH', data })
    history.push('/')
  } catch (error) {
    console.error(error)
  }
}
