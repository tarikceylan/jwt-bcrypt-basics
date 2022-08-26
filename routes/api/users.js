const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  res.status(201).json({
    username: username,
    email: email,
    password: password,
  });
});

module.exports = router;
