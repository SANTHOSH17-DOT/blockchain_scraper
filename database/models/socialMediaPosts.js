const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    data: Array
}, { timestamps: true })

module.exports = mongoose.model('Post', postsSchema)