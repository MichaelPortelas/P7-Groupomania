const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    pseudo: { type: String, required: true },
    message: { type: String, required: true },
    imageUrl: { type: String},
    date: { type: Date, required: true },
    likes: { type: Number},
    usersLiked: [String],
});

module.exports = mongoose.model('Post', postSchema);