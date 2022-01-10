const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    url: String
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)