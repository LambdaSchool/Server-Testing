exports.up = (knex, Promise) => {
  return knex.schema.createTable('gameofthrones', characters => {
    characters.increments();
    characters
      .string('name', 128)
      .notNullable()
      .unique();
    characters.string('house', 128).notNullable();
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('gameofthrones');
