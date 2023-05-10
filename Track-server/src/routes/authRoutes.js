const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/signup', async (req,res) => {
  const { email, password } = req.body

  try {

    const user = new User({ email,password })
    await user.save()

    const token = jwt.sign( { userId: user._id }, "RANDOM" )
    res.send({token:token})

  } catch (err) {
    return (
      res.sendStatus(422).send(err.message)
    )
  }

})

module.exports = router