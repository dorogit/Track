const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const router = express.Router()
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "RANDOM");
    res.send({ token: token });
    console.log(token)
    console.log("sign up success")
  } catch (err) {
    console.log("sign up failed")
    res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  console.log(req)
  console.log(req.body)

  if (!email || !password) {
    return res.send({ error: "Missing password or Email" })
  }

  const user = await User.findOne({ email })

  if (!user) {
    return res.send({ error: "Missing password or Email" })
  }

  try {
    await user.comparePassword(password)
    const token = jwt.sign( { userId: user._id }, "RANDOM" )
    res.send({ token: token, message:"success!!" })
    console.log("sign in success")
  } catch (err) {
    console.log("sign in failed")
    res.send({ error: "Invalid password or email" })
  }

}) //testing


module.exports = router