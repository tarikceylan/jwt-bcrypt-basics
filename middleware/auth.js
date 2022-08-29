const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const path = require('path');
const envPath = path.join(__dirname, '..', '.env');
require('dotenv').config({ path: envPath });

const validateToken = async (req, res) => {
  token = req.header('User-Token');
  if (!token) {
    res.status(400).json('No Access!');
  } else {
    try {
      const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
      if (verifiedUser) {
        return true;
      }
    } catch {
      res.status(400).json('Not Authorized');
    }
  }
};

module.exports = validateToken;
