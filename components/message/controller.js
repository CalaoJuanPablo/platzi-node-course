function addMessage(user, message) {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error(
				'[message controller] addMessage: No hay usuario y/o mensaje'
			)
			reject('Los datos son incorrectos')
		}
		const fullMessage = {
			user,
			message,
			date: new Date()
		}

		console.log('Mensaje creado')
		resolve(fullMessage)
	})
}

module.exports = {
	addMessage
}
