const mongoose = require('mongoose');
const schema = require('../Secure/RoomValidation');
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

roomSchema.statics.roomValidation = function(body) {
    return schema.validate(body, {
        abortEarly: false,
    });
}

module.exports = mongoose.model('room',roomSchema);