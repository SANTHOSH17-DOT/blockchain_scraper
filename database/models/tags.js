const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    blogs: {
        medium: [{ type: String }],
        hashnode: [{ type: String }],
        devTo: [{ type: String }]
    },
    projects: {
        github: [{ type: String }]
    },
    hackathon: {
        devpost: [{ type: String }]
    },
    videos: {
        youtube: [{ type: String }]
    },
    courses: {
        edX: [{ type: String }],
        coursera: [{ type: String }]
    }
})

module.exports = mongoose.model('Tag', tagSchema)