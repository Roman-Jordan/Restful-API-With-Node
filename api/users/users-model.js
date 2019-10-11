const db = require('../../data/db-config')
module.exports={
    findAll,
    findAllById,
    remove,
    add
}

const table = "users"

function findAll(){
    return db(table)
    
}

function findAllById(id){
    return db(table)
    .where({user_id:id})
    .first()
}

function remove(id) {
    return db(table)
    .where({user_id:id})
    .delete()
}

function add(user){
    return db(table)
    .insert(user)
    .then(findAll())
}
