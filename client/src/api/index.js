import axios from 'axios'

const API = axios.create({ baseURL: 'https://gpabooster-api.herokuapp.com' })

export const fetchPosts = () => API.get('/exams')
export const createPost = (newPost) => API.post('/exams', newPost)
export const deletePost = (id) => API.delete(`/exams/${id}`)
export const updatePost = (id, post) => API.patch(`/exams/${id}`, post)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
