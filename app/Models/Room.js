const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 255,
    },
    key: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        default : null,
        trim: true,
    },
    capacity: {
        type: Number,
        min: 2,
        max: 9999
    },
    status:{
        type: String,
        required: true,
        default: "close",
        enum: ["open","close"]
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    updated_at:{
        type: Date,
        default: Date.now()
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('roomSchema',roomSchema);