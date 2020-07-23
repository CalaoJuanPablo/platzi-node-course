const express = require('express')

var app = express()

app.use('/', function (request, response) {
	response.send('Hola')
})

app.listen(3000)

console.log('La app está escuchando en http://localhost:3000')
