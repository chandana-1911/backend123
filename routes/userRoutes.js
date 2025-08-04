const express = require('express');
const router = express.Router();
const User = require("./../model/User");

// POST /register - create a new user
router.post('/register', async (req , res) => {
  try {
    const newUser = new User({
      name: req.body.name
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

module.exports = router;