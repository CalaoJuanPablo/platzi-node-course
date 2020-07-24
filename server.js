const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()

app.use(bodyParser.json())
app.use(router)

router.get('/', function (request, response) {
	response.send('Hola desde get')
})

router.post('/', function (request, response) {
	console.log(request.body)
	console.log(request.query)
	response.send('Hola desde post')
})

app.listen(3000)

console.log('La app está escuchando en http://localhost:3000')
