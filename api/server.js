const primaryRouter = require('express').Router()

//ROUTES
const users = require('./users/users')
const products = require('./products/products')
const orders = require('./orders/orders')

//Primary Routes
primaryRouter.use('/users', users)
primaryRouter.use('/products', products)
primaryRouter.use('/orders', orders)

module.exports=primaryRouter