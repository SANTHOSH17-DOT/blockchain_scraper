const mongoose = require('mongoose')

const hackathonSchema = new mongoose.Schema({
    url: String
}, { timestamps: true })

module.exports = mongoose.model('Hackathon', hackathonSchema)