const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req,res,next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.sendStatus(401).send({ error:"You must be logged in." })
  } 
  const token = authorization.replace('Bearer ', '') //authorization = "Bearer <token here>"
  jwt.verify(token,"RANDOM", async (err,payload) => {
    if (err) {
      return res.sendStatus(401).send(err)
    }
    const { userId } = payload
    const user = await User.findById(userId)
    req.user = user
    next()
  })
}
