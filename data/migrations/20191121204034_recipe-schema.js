
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments();

            tbl.string
        })
  )
};

exports.down = function(knex) {
  
};
