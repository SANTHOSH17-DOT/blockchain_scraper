const router = require('express').Router()
const blogModel = require('../database/models/blogs')
const projectModel = require('../database/models/projects')

router.get('/blog', async(req, res) => {
    const blogData = await blogModel.find({})
    res.status(200).json({
        data: blogData
    })
})
router.get('/project', async(req, res) => {
    const projectData = await projectModel.find({})
    res.status(200).json({
        data: projectData
    })
})
module.exports = router