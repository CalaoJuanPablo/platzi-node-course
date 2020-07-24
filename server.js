const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const networkResponse = require('./network/response')

var app = express()

app.use(bodyParser.json())
app.use(router)

router.get('/', function (request, response) {
	networkResponse.success(request, response, 200, 'Lista de mensajes')
})

router.post('/', function (request, response) {
	if (request.query.error === 'ok') {
		networkResponse.error(request, response, 400, 'Error simulado')
	} else {
		networkResponse.success(request, response, 201, 'Creado correctamente')
	}
})

app.listen(3000)

console.log('La app está escuchando en http://localhost:3000')
