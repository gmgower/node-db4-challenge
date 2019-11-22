// Update with your config settings.
//? s10 term: knex init (create knexfile.js)
module.exports = {

  development: {
    client: 'sqlite3',
    //? s11
    useNullAsDefault: true,
    connection: {
      //? s12
      filename: './data/recipe.db3'
    },
    //? s18 creates codebase method to create database
    migrations: {
      //? s19 create migration directory 
      //? s20 term: knex (shows command)
      //? s21 term: knex migrate:make recipe-schema

      directory: './data/migrations'
    },
    
  },
  


};
