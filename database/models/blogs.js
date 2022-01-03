const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    url: String
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)