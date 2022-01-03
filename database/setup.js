const mongoose = require('mongoose')
require('dotenv').config({ path: '../env/.env' })

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', err => console.log(err.message))
db.once('open', () => console.log('Connected to db'))