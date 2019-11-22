//? s46 refactor

exports.seed = function(knex) {
       // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Scramble Eggs'},
      ]);
};
//? s47 term cmd: knex seed:run & check sqlite 

//? s48 term cmd: knex seed:make 02-ingredients


// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
