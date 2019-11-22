//? 52 refactor
exports.seed = function(knex) {
  
      return knex('directions').insert([
        { steps: 'crack open eggs into bowl', step_number: 1, recipe_id: 1 },
        { steps: 'scramble eggs with cheese', step_number: 2, recipe_id: 1 },
        { steps: 'cook on medium heat',       step_number: 3, recipe_id: 1 },
      ]);
  };

  //? s53 term cmd: knex seed:run & check sqlite 

//? s54 term cmd: knex seed:make 04-recipe_ingredients