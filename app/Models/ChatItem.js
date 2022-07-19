const mongoose = require('mongoose');
const chatItemSchema = new mongoose.Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    },
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('ChatItem',chatItemSchema);