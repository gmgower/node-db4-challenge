// Update with your config settings.
//? s26 term: knex init (create knexfile.js)
module.exports = {

  development: {
    client: 'sqlite3',
    //? s31
    useNullAsDefault: true,
    connection: {
      //? s32
      filename: './data/recipe.db3'
    },
    //? s33 creates codebase method to create database
    migrations: {
      //? s34 createS migration directory 
      //? s34a term: knex (shows command)
      //? s34b term: knex migrate:make recipe-schema

      directory: './data/migrations'
    },
    //? s42 create seeds dir
    seeds: {
      directory: './data/seeds'
      //? s43 term cmd: npx knex seed:make 00-cleanup
    },
    //? s57 create pool for foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }    
  },
};
