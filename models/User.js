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
        minlength: 8,
        maxlength: 20,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });

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
