const express = require('express')

const app = express()

app.get('/', (req,res) => {
  res.send('Hello! My first message from express API!!!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})