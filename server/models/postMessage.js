import mongoose from 'mongoose'

// the Exam/Quizes Schema -> has to have the attributes
const postSchema = mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  name: String,
  img: String,
  link: String,
  desc: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
