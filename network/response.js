exports.success = function (request, response, status, body) {
	response.status(status || 200).send({
		error: '',
		body
	})
}

exports.error = function (request, response, status, errorMessage) {
	response.status(status || 500).send({
		error: errorMessage,
		body: ''
	})
}
