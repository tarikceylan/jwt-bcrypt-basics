const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const path = require('path');
const envPath = path.join(__dirname, '..', '.env');
require('dotenv').config({ path: envPath });
