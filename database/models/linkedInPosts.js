const mongoose = require('mongoose')

const linkedInPostsSchema = new mongoose.Schema({
    postBy: String,
    content: String
}, { timestamps: true })

module.exports = mongoose.model('LinkedInPost', linkedInPostsSchema)