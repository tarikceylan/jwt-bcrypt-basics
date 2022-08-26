const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`DB Connected on DB_NAME: ${conn.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
