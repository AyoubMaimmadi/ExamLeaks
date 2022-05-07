import * as api from '../api'

// dispatch action auth for sign in,then signs in and goes back to home page
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)
    dispatch({ type: 'AUTH', data })
    history.push('/')
  } catch (error) {
    console.error(error)
  }
}

// dispatch action auth for signin up,
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)
    dispatch({ type: 'AUTH', data })
    history.push('/')
  } catch (error) {
    console.error(error)
  }
}
