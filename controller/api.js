const router = require('express').Router()
const blogModel = require('../database/models/blogs')
const projectModel = require('../database/models/projects')
const hackathonModel = require('../database/models/hackathon')
const videoModel = require('../database/models/videos')
const courseModel = require('../database/models/courses')
const postsModel = require('../database/models/socialMediaPosts')

router.get('/blog', async(req, res) => {
    try {
        const blogData = await blogModel.find({})
        res.status(200).json({
            data: blogData
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Server error"
        })
    }

})
router.get('/project', async(req, res) => {
    try {
        const projectData = await projectModel.find({})
        res.status(200).json({
            data: projectData
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Server error"
        })
    }

})
router.get('/hackathon', async(req, res) => {
    try {
        const hackathonData = await hackathonModel.find({})
        res.status(200).json({
            data: hackathonData
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Server error"
        })
    }
})
router.get('/videos', async(req, res) => {
    try {
        const videoData = await videoModel.find({})
        res.status(200).json({
            data: videoData
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Server error"
        })
    }

})
router.get('/courses', async(req, res) => {
    try {
        const courseData = await courseModel.find({})
        res.status(200).json({
            data: courseData
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Server error"
        })
    }

})
router.get('/posts', async(req, res) => {
    try {
        const postsData = await postsModel.find({})
        res.status(200).json({
            data: postsData
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Server error"
        })
    }

})
module.exports = router