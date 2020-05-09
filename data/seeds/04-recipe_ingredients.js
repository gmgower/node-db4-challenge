//? s55
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1 },
        { recipe_id: 1, ingredient_id: 2, quantity: 1 },
        { recipe_id: 1, ingredient_id: 3, quantity: 1 },
      ]);
};
  //? s56 term cmd: knex seed:run & check sqlite 

  