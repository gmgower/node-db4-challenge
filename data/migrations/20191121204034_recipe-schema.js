//? S35 work on schema
exports.up = function(knex) {
  return (
      knex.schema
        //? s36 recipes table
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl.string("name", 255).notNullable();
        })

        //? s37 ingredients table
        .createTable('ingredients', tbl => {
          tbl.increments();

          tbl.string('name', 255).notNullable();
        })

        //? s38 directions table
        .createTable('directions', tbl => {
          tbl.increments();

          tbl.string('steps', 255).notNullable()
        
          tbl.integer('step_number').notNullable();

          tbl
          .integer('recipe_id')
          .unsigned()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
        })
        

        //? s39 recipe_ingredients table
        .createTable('recipe_ingredients', tbl => {
          tbl.increments()

          tbl
          .integer('recipe_id')
          .unsigned()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')

          tbl
          .integer('ingredient_id')
          .unsigned()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
          

          tbl.float('quantity').notNullable();
        })
  )
};

exports.down = function(knex) {
  //?40 
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('directions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')  
};

//? s41 term: npx knex migrate:latest