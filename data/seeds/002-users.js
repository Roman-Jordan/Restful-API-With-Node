exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { name: "rowValue1", username: "1", password: "1", email: "1" },
        { name: "rowValue2", username: "2", password: "2", email: "2" },
        { name: "rowValue3", username: "3", password: "3", email: "3" }
      ]);
    });
};
