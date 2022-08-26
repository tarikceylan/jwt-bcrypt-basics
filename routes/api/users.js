const express = require('express');
const router = express.Router();
const User = require('../../models/UserModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../../utils/generateToken');

//@desc REGISTER USER
//@route POST/api/users
//@access Public

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      username: username,
      email: email,
    });
  } else {
    res.status(400);
    throw new Error('Inavlid User Data');
  }
});

//@desc LOGIN USER
//@route POST/api/users/login
//@access Public

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      message: `Logged in as ${user.username}`,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid Credentials' });
  }
});

//@desc USER PROFILE
//@route GET/api/users/:username
//access Private

router.get('/:username', async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username }).select('-password -__v');
  res.status(200).json({ UserProfile: user });
});

module.exports = router;
