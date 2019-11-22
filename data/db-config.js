//? s13 create db-config.js under data folder
//? s14
const knex = require('knex');

//? s15
const config = require('../knexfile.js');

//? s16
module.exports = knex(config.development);