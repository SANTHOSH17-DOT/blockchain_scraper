require('dotenv').config({ path: './env/.env' })
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const dataRouter = require('./controller/api')
require('./database/setup')
require('./scrapper/cronjob')

app.use(cors())
app.use('/api', dataRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))