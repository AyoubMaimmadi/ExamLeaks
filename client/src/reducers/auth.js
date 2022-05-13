// Action types for authentication and what they return
const authReducer = (state = { authData: null }, action) => {
  // authenticate action -> saves user data in the local storage
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return { ...state, authData: action.data, loading: false, errors: null }

    // Logout option -> not yet imlimented in the front-end
    case 'LOGOUT':
      // deletes user data from local storages
      localStorage.clear()
      return { ...state, authData: null, loading: false, errors: null }

    default:
      return state
  }
}

export default authReducer
