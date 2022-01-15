const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    url: String
}, { timestamps: true })

module.exports = mongoose.model('Course', courseSchema)