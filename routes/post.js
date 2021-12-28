const express = require('express')
const router = express.Router()
const Posts = require('../models/Posts.js')

//Routes
router.get('/', (req, res) => {
    res.send('We are on post')
})

router.post('/', async (req, res) => {

    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    })

    const postSave = await post.save()
    res.status(200).json(postSave)
})

module.exports = router