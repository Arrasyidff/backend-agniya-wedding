const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000
const routes = require('./routes')
const errorHandler = require("./middleware/errorHandlers")

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/', routes)
app.use(errorHandler)

app.listen(PORT, () => console.log('listening on http://localhost:' + PORT))