const list = []

function addMessage(message) {
	list.push(message)
}

function getMessagesList() {
	return list
}

module.exports = {
	add: addMessage,
	list: getMessagesList
}
