const express = require('express')
const networkResponse = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', function (request, response) {
	const { name } = request.body
	controller
		.addUser(name)
		.then(data => networkResponse.success(request, response, 201, data))
		.catch(error =>
			networkResponse.success(
				request,
				response,
				error.status,
				error.message
			)
		)
})

router.get('/:username', function (request, response) {
	const { username } = request.params
	controller
		.getUser(username)
		.then(data => networkResponse.success(request, response, 200, data))
		.catch(error => networkResponse.error(request, response, 500, error))
})

router.get('/', function (request, response) {
	controller
		.getUser()
		.then(data => networkResponse.success(request, response, 200, data))
		.catch(error => networkResponse.error(request, response, 500, error))
})

module.exports = router
