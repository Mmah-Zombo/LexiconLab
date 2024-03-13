const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

// User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
