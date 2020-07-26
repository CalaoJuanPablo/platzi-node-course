const db = require('mongoose')
const Model = require('./model')
const dotenv = require('dotenv')
const model = require('./model')
dotenv.config()

db.Promise = global.Promise
db.connect(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
console.log('[DB] Conectada con éxito')

const list = []

function addMessage(message) {
	const myMessage = new Model(message)
	myMessage.save()
}

async function getMessagesList() {
	const messages = await model.find()
	return messages
}

module.exports = {
	add: addMessage,
	list: getMessagesList
}
