const jsonwebtoken = require("jsonwebtoken");

require("dotenv").config();

const generateToken = (userId) => {
  return jsonwebtoken.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = (token) => {
  try {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
