const jwt = require('jsonwebtoken');
const fetch = require("node-fetch");

exports.makeToken = (user) => {
    return jwt.sign({
            user: { _id: user._id, email: user["email"] }
        }, 'TOP_SECRET'
    );
};
