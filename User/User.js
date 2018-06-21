const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 

const userModel = new mongoose.Schema({
    username: {
        type: String,
        unique: true, 
    }, 
    password: {
        type: String,
        lowercase: true, 
    }
});

userModel.pre('save', function(){
    bcrypt
        .hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next(); 
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = mongoose.model('User', userModel);