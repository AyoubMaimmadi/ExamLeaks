import axios from 'axios'

const url = 'https://gpa-booster-api.herokuapp.com/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
