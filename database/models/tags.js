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

})

module.exports = mongoose.model('Tag', tagSchema)