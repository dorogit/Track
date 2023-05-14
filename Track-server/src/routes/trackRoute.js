const express = require('express')
const mongoose = require('mongoose')
const Track = mongoose.model('Track')
const router = express.Router()
const requireAuth = require('../middleware/requrieAuth')

router.post('/create', (req, res) => {
    try {
        res.send('A request was made')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router