//? s3
const express = require('express');

//? s4
const helmet = require('helmet');

// ? s5
const recipeRouter = require('./receipe/recipe-router')

//?  s17
// const db = require('./data/db-config')

//? s6
const server = express();

//? s7
server.use(helmet());
server.use(express.json());



//? s8
server.use('/api/recipes', recipeRouter);




//?s9
module.exports = server;