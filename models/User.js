const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

// User Table
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: [8, "Password must be atleast 8 characters long."],
        maxlength: [20, "Password must not be more than 20 characters long."],
        required: true
    },

    profile_photo: {
        type: String,
        default: null
    },

    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(uniqueValidator, { message: 'Sorry, {PATH} already taken.' });

userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        user.password = hash;
        next();
    });
});

// User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
