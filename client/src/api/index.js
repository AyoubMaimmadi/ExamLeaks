import axios from 'axios'

// API for this application, hosted in the PaaS --> Heroku
const API = axios.create({ baseURL: 'https://gpa-booster-api.herokuapp.com' })

// Axios funcs for geting, posting, deteling, and updating posts.

export const fetchPosts = () => API.get('/exams')
export const createPost = (newPost) => API.post('/exams', newPost)
export const deletePost = (id) => API.delete(`/exams/${id}`)
export const updatePost = (id, post) => API.patch(`/exams/${id}`, post)

// Sign in and sign up options
export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
