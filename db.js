const db = require('mongoose')
db.Promise = global.Promise

async function connect(url) {
	try {
		await db.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		console.log('[DB] Conectada con éxito')
	} catch (error) {
		console.error(error)
	}
}

module.exports = connect
