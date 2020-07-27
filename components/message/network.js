const express = require('express')
const networkResponse = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (request, response) {
	controller
		.getMessages()
		.then(messagesList =>
			networkResponse.success(request, response, 200, messagesList)
		)
		.catch(error =>
			networkResponse.error(
				request,
				response,
				error.status,
				error.message
			)
		)
})

router.get('/user/:username', function (request, response) {
	const { username } = request.params

	controller
		.getMessagesFromUser(username)
		.then(messagesList =>
			networkResponse.success(request, response, 200, messagesList)
		)
		.catch(error =>
			networkResponse.error(
				request,
				response,
				error.status,
				error.message
			)
		)
})

router.post('/', function (request, response) {
	const { body } = request
	controller
		.addMessage(body.user, body.message)
		.then(fullMessage =>
			networkResponse.success(request, response, 201, fullMessage)
		)
		.catch(error =>
			networkResponse.error(
				request,
				response,
				error.status,
				error.message
			)
		)
})

router.patch('/:id', function (request, response) {
	console.log(request.params.id)
	const { id } = request.params
	const { message } = request.body

	controller
		.updateMessage(id, message)
		.then(fullMessage =>
			networkResponse.success(request, response, 200, fullMessage)
		)
		.catch(error =>
			networkResponse.error(
				request,
				response,
				error.status,
				error.message
			)
		)
})

router.delete('/:id', function (request, response) {
	const { id } = request.params
	controller
		.deleteMessage(id)
		.then(() =>
			networkResponse.success(
				request,
				response,
				200,
				`Mensaje &{id} eliminado`
			)
		)
		.catch(error =>
			networkResponse.error(
				request,
				response,
				error.status,
				error.message
			)
		)
})

module.exports = router
