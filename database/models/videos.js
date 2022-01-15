const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    url: String
}, { timestamps: true })

module.exports = mongoose.model('Video', videoSchema)