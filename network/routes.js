const express = require('express')
const message = require('../components/message/network')
const user = require('../components/user/network')

const routes = function (server) {
	server.use('/messages', message)
	server.use('/user', user)
}

module.exports = routes
