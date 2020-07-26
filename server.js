const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const db = require('./db')
const router = require('./network/routes')

dotenv.config()
db(process.env.DB_URI)

var app = express()

app.use(bodyParser.json())
router(app)

app.use('/app', express.static('public'))

app.listen(3000)

console.log('La app está escuchando en http://localhost:3000')
