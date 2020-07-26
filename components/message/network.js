const express = require('express')
const networkResponse = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function (request, response) {
	networkResponse.success(request, response, 200, 'Lista de mensajes')
})

router.post('/', function (request, response) {
	const { body } = request
	controller
		.addMessage(body.user, body.message)
		.then(fullMessage =>
			networkResponse.success(request, response, 201, fullMessage)
		)
		.catch(error => networkResponse.error(request, response, 400, error))
})

module.exports = router
