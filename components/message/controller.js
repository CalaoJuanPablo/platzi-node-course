const store = require('./store')

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

function getMessages() {
	return new Promise((resolve, reject) => {
		resolve(store.list())
	})
}

module.exports = {
	addMessage,
	getMessages
}
