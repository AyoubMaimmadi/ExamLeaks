import axios from 'axios'

const url = 'https://gpabooster-api.herokuapp.com/exams'
// const url = 'http://localhost:5000/exams'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post)
