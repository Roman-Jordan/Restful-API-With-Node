exports.up = function(knex) {
   return knex.schema.createTable('users', col=>{
        col//USERID
          .increments('user_id')
        col//NAME
          .string('name',20)
          .notNullable()
        col//USERNAME
          .string('username')
          .notNullable()
          .unique()
        col//PASSWORD
          .string('password',18)
          .notNullable()
        col//EMAIL
          .string('email')
          .notNullable()
          .unique()  
    })
    .createTable('products', col=>{
        col//Product ID
          .increments('product_id')
        col//PRODUCT NAME
          .string('name',50)
          .unique()
          .notNullable()
        col
          .decimal('price', 10, 2)
          .notNullable()
        col
          .string('description',255)
        col
          .integer('quantity',5)
          .notNullable()
    })
    .createTable('orders',col =>{
        col//ORDER ID
          .increments('order_id')
        col//USER ID -- FOREIGN KEY
          .integer('user_id')
          .unsigned()
          .references('user_id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT')
        col//PRODUCT ID -- FOREIGN KEY
          .integer('product_id')
          .unsigned()
          .references('product_id')
          .inTable('products')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('orders')
    .dropTableIfExists('products')
    .dropTableIfExists('users')
  };