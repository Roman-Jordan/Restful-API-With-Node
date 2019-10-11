const db = require('../../data/db-config')
module.exports={
    findAll,
    findAllById,
    remove,
    add
}

const table = "products"

function findAll(){
    return db(table)
    
}

function findAllById(id){
    return db(table)
    .where({product_id:id})
    .first()
}

function remove(id) {
    return db(table)
    .where({product_id:id})
    .delete()
}

function add(product){
    return db(table)
    .insert(product)
    .then(findAll())
}
