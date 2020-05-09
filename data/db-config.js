//? s27 create db-config.js under data folder
//? s28
const knex = require('knex');

//? s29
const config = require('../knexfile.js');

//? s30
module.exports = knex(config.development);