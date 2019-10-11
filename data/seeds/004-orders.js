exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("orders")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("orders").insert([
        { user_id: 1, product_id: 1 },
        { user_id: 2, product_id: 2 },
        { user_id: 1, product_id: 3 }
      ]);
    });
};


