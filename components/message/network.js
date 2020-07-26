const express = require('express')
const networkResponse = require('../../network/response')

const router = express.Router()

router.get('/', function (request, response) {
	networkResponse.success(request, response, 200, 'Lista de mensajes')
})

router.post('/', function (request, response) {
	if (request.query.error === 'ok') {
		networkResponse.error(
			request,
			response,
			500,
			'Error simulado',
			'Es solo una simulación de los errores'
		)
	} else {
		networkResponse.success(request, response, 201, 'Creado correctamente')
	}
})

module.exports = router
