exports.up = function(knex, Promise) {
  return knex.schema.createTable('names', function(tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments(); // pass the name if you wanted to be called anything other than id
    tbl
      .string('name', 255)
      .notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('names');
};