//? s3
const express = require('express');

//? s4
const helmet = require('helmet');

//? s5 s17
const db = require('./data/db-config')

//? s6
const server = express();

//? s7
server.use(helmet());
server.use(express.json());

//? s8
server.get('/api/recipes', (req, res) => {
    db('recipes')
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


//?s9
module.exports = server;