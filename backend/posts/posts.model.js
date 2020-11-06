const mongoose = require('mongoose');

PostsSchema = new mongoose.Schema({
    title: String,
    
    body: {
        type: String,
        minlength: 5,
        required: true
    },

    category: String,
    
    img: String
}, { versionKey: false });

module.exports = mongoose.model('Posts', PostsSchema);