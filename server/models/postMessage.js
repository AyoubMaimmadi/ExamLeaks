import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: String,
  category: String,
  name: String,
  img: String,
  link: String,
  desc: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
