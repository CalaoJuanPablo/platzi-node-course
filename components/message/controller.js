const store = require('./store')

function getMessages() {
	return new Promise((resolve, reject) => {
		resolve(store.list())
	})
}

function getMessagesFromUser(username) {
	return new Promise((resolve, reject) => {
		resolve(store.list(username))
	})
}

function addMessage(user, message) {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error(
				'[message controller] addMessage: No hay usuario y/o mensaje'
			)
			reject({ status: 400, message: 'Los datos son incorrectos' })
		}
		const fullMessage = {
			user,
			message,
			date: new Date()
		}

		store.add(fullMessage)
		resolve(fullMessage)
	})
}

function updateMessage(id, message) {
	return new Promise((resolve, reject) => {
		if (!id || !message) {
			console.error(
				'[message controller] updateMessage: No hay id de usuario y/o mensaje'
			)
			reject({ status: 400, message: 'Los datos son incorrectos' })
		}

		const result = store.updateText(id, message)
		resolve(result)
	})
}

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	getMessagesFromUser
}
