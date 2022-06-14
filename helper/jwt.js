const jwt = require("jsonwebtoken");
const rahasia = "kankajdakjdaskjajk";

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
    };

    const token = jwt.sign(payload, rahasia);
    return token;
}

module.exports = { generateToken };