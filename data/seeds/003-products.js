exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        { name: "rowValue1", price: 19.99, quantity: 5, description: "yup" },
        { name: "rowValue2", price: 19.99, quantity: 5, description: "yup" },
        { name: "rowValue3", price: 19.99, quantity: 5, description: "yup" }
      ]);
    });
};
