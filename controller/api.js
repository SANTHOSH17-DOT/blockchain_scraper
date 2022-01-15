const router = require('express').Router()
const blogModel = require('../database/models/blogs')
const projectModel = require('../database/models/projects')
const hackathonModel = require('../database/models/hackathon')
const videoModel = require('../database/models/videos')

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
router.get('/hackathon', async(req, res) => {
    const hackathonData = await hackathonModel.find({})
    res.status(200).json({
        data: hackathonData
    })
})
router.get('/videos', async(req, res) => {
    const videoData = await videoModel.find({})
    res.status(200).json({
        data: videoData
    })
})
module.exports = router