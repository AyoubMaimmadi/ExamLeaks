import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/exams', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
  res.send("Welcome to GPA-Booster's API")
})

// const CONNECTION_URL = process.env.CONNECTION_URL

const CONNECTION_URL =
  'mongodb+srv://ayoubmaimmadi:ayoubmaimmadi123@cluster0.jmgd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)
