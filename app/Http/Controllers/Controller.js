const jwt = require('jsonwebtoken');
const fetch = require("node-fetch");
const Room = require('../../Models/Room');

exports.makeToken = (user) => {
    return jwt.sign({
            user: { _id: user._id, email: user["email"] }
        }, 'TOP_SECRET'
    );
};
