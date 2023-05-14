const express = require('express')
const mongoose = require('mongoose')
const Track = mongoose.model('Track')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.post('/create', async (req, res) => {
    try {
        const {name, locations} = req.body
        if (!name || !locations) {
            res.sendStatus(422).send({ error:"You must provide name and locations" })
        }
        console.log(req.user)
        const track = new Track({name, locations, userId:req.user._id})
        await track.save()
        res.send(track)
    } catch (err) {
        res.send(err.message)
    }
})//test

module.exports = router