// DEPENDENCIES
// ==============================================
const db = require('../../database/dbConfig');

// AUTH MIDDLEWARE
// ==============================================
module.exports = {
  checkCharacter: function(name) {
    return db('gameofthrones')
      .where('name', name)
      .first();
  },
  addCharacter: function(character) {
    return db('gameofthrones')
      .insert(character)
      .then(ids => ({ id: ids[0] }));
  },
  deleteCharacter: function(id) {
    return db('gameofthrones')
      .where('id', id)
      .del();
  }
};
