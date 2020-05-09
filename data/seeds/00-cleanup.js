//? s44 refactor cleanup seed
const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    node: 'truncate', // resets ids
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],  // don't empty migration tables
  });
}

//? s45 create recipes seed file
//? s45a term cmd: knex seed:make 01-recipes
//? s45 term cmd: knex seed:run
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
