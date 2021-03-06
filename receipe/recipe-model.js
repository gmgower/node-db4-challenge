//? s13
const db = require('../data/db-config')

//? s15
function find() {
    return db('recipes');
}

//? s18
function findById(id){
    return db('recipes').where({id});
}

//? s19
function findPosts(id) {

}

//? s21
function add(recipeData){
    return db('recipes').insert(recipeData)
}

//? s23
function update(changes, id) {
    return db('recipes').where({id}).update(changes);
}


//? s25
function remove(id) {
    return db('recipes').where({id}).del();
}




  //? s14
module.exports = {
    find,
    findById,
    findPosts, 
    add,
    update,
    remove
}