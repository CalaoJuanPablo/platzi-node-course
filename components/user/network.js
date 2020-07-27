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

module.exports = router
