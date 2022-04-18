import axios from 'axios'

const API = axios.create({ baseURL: 'https://gpabooster-api.herokuapp.com' })

// const url = 'https://gpabooster-api.herokuapp.com/exams'
// const url = 'http://localhost:5000/exams'

export const fetchPosts = () => API.get('/exams')
export const createPost = (newPost) => API.post('/exams', newPost)
export const deletePost = (id) => API.delete(`/exams/${id}`)
export const updatePost = (id, post) => API.patch(`/exams/${id}`, post)
