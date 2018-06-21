const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,        
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

userSchema.pre("save", function (next) {
    bcrypt
        .hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(err => {
            next(err);
        });
});

module.exports = mongoose.model("User", userSchema);