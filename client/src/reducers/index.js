import { combineReducers } from 'redux'

// import posts and auth from their files to be exported using the combineReducers function
import posts from './posts'
import auth from './auth'

// export const reducers = combineReducers({ posts, auth })
export default combineReducers({ posts, auth })
