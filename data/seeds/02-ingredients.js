//? s49 refactor

exports.seed = function(knex) {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'eggs'},
        { name: 'cheddar cheese'},
        { name: 'salt'}
      ]);
};

//? s50 term cmd: knex seed:run & check sqlite 

//? s51 term cmd: knex seed:make 03-directions
