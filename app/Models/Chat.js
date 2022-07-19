const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    status:{
        type: String,
        required: true,
        default: "public",
        enum: ["group","private"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default : null
    },
    user2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default : null
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Chat',chatSchema);