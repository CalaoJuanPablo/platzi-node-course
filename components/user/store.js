const Model = require('./model')
const { MongooseDocument } = require('mongoose')

async function addUser(user) {
	const userInDB = await Model.findOne({ name: user })
	if (userInDB.name) {
		return Promise.reject({ status: 422, message: 'User already exists' })
	}
	const myUser = new Model(user)

	return myUser.save()
}

function getUser(username) {
	if (username) {
		return Model.findOne({ name: username })
	}

	return Model.find()
}

module.exports = {
	add: addUser,
	get: getUser
}
