const Model = require('./model')

function addMessage(message) {
	const myMessage = new Model(message)
	myMessage.save()
}

async function getMessagesList(username) {
	if (!username) {
		const messages = await Model.find()
		return messages
	}

	const messages = await Model.findOne({
		user: username
	})
	return messages
}

async function updateMessage(id, message) {
	const filteredMessage = await Model.findOne({
		_id: id
	})
	filteredMessage.message = message
	const newMessage = await filteredMessage.save()
	return newMessage
}

async function removeMessage(id) {
	const result = await Model.deleteOne({
		_id: id
	})

	return result
}

module.exports = {
	add: addMessage,
	list: getMessagesList,
	updateText: updateMessage,
	remove: removeMessage
}
