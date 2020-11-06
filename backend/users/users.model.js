const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 40,
        required: true
    },

    password: {
        type: String,
        minLength: 3,
        maxLength: 25,
        required: true
    }

}, { versionKey: false });

module.exports = mongoose.model('Users', usersSchema);