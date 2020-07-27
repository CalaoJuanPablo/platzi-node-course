const store = require('./store')

function addUser(name) {
	if (!name) {
		console.error('[user controller] addUser: no name')
		Promise.reject({ status: 400, message: 'Los datos son incorrectos' })
	}

	const user = {
		name
	}

	return store.add(user)
}

module.exports = {
	addUser
}
