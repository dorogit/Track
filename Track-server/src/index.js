const mongoose = require('mongoose')
const express = require('express')
const authRoutes = require('./routes/authRoutes')

const mongoUri = 'mongodb+srv://ishaanjainlock10:0810200A@cluster0.7gmouvx.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUri)
mongoose.connection.on('connected',() => {
  console.log('Connected to mongoose instance')
})
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err)
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes)

app.get('/', (req,res) => {
  res.send('Hello! My first message from express API!!!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})