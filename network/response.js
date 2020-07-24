exports.success = function (request, response, status, message) {
	response.status(status || 200).send({
		error: '',
		message
	})
}

exports.error = function (request, response, status, errorMessage) {
	response.status(status || 500).send({
		error: errorMessage,
		message: ''
	})
}
