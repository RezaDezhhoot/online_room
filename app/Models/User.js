const mongoose = require('mongoose');
const schema = require('../Secure/UserValidation');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, "نام و نام خانوادگی الزامی می باشد"],
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 255,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

userSchema.statics.userValidation = function(body) {
    return schema.validate(body, {
        abortEarly: false,
    });
}

userSchema.pre("save", function(next) {
    let user = this;
    if (!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next();

        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;