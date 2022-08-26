const express = require('express');
const connectDB = require('./utils/connectDB');
const app = express();

const users = require('./routes/api/users');
const PORT = process.env.PORT;

connectDB();

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Require Routes
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
