const router = require('express').Router()
const blogModel = require('../database/models/blogs')

router.get('/blog', async(req, res) => {
    const blogData = await blogModel.find({})
    res.status(200).json({
        data: blogData
    })
})

module.exports = router