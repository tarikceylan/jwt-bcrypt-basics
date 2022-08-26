const jwt = require('jsonwebtoken');
const path = require('path');
const envPath = path.join(__dirname, '..', '.env');

require('dotenv').config({ path: envPath });

const generateToken = (userID) => {
  return jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;
