const mongoose = require('mongoose')

const udemySchema = new mongoose.Schema({
    data: Object
}, { timestamps: true })

module.exports = mongoose.model('UdemyCourse', udemySchema)