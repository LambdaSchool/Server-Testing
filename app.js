const mongoose = require('mongoose');
const server = require('./server');

/* eslint no-console: 0 */
/* eslint no-multi-str: 0 */
mongoose.connect('mongodb://localhost/food', {}, (err) => {
  if (err) return console.log('\nyoYOyo-yo!!! WTF, yo??????\n', err);
  console.log('DUDE! You are like totally connected to the food DataBase, man!\
  \nLike, all your chakras are, like, totally... cool...\
  \ny\'know, like: lined up and in balance, man... Whoa.\n');
});

server.listen(8080, () => {
  console.log("\nYe ol' server is listening on port 8080, me boy-o!\n");
});
