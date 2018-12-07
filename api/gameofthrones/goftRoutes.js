/*== GAME OF THRONES API ============================================

POST -> /api/characters
	Creates a character using the information sent inside the body of the
	request.

DELETE -> /api/characters/:id
	Deletes a character with the id param in the url path.
*/

// EXPRESS ROUTER, DEPENDENCIES
// ==============================================
const router = require('express').Router();

const goftDb = require('./goftHelper');

// GAME OF THRONES ROUTES
// ==============================================
router.post('/characters', addCharacter);
router.delete('/characters/:id', deleteCharacter);

// CALLBACK FUNCTIONS
// ==============================================
async function addCharacter(req, res) {
  try {
    const character = req.body;
    const name = await goftDb.checkCharacter(character.name);
    if (name) {
      res.status(404).json({ message: 'Character is already in database.' });
    } else {
      await goftDb.addCharacter(character);
      res.status(201).json({ message: 'Sucessfully added character.' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteCharacter(req, res) {
  try {
    const count = await goftDb.deleteCharacter(req.params.id);
    count
      ? res.status(200).json({ message: 'Successfully deleted character.' })
      : res.status(404).json({ error: 'The character with the specified ID does not exist.' });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = router;
