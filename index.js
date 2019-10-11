const express = require('express')
const server = express()
const routes = require('./api/server')
const helmet = require('helmet')

server.use(helmet())
server.use(express.json())
server.use('/api', routes)

//LOGGER
const port = 5000
server.listen(port,()=>{
console.log(`
*********************************
Server is listening on port:${port}
*********************************
`)
})