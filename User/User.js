const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
})

userSchema.pre('save', function(next) {
  return bcrypt.hash(this.password, 10)
  .then(hash => {
    this.password = hash;
    return next();
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = mongoose.model('User', userSchema);