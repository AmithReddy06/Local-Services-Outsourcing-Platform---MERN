const express = require('express');
const router = express.Router();
const User = require('../models/User');

// router.post('/api/users', async (req, res) => {
//     try {
//       const userData = req.body;
//       console.log('Received user data:', userData);
//       const user = new User(userData);
//       const savedUser = await user.save();

//       res.json(savedUser);
//       console.log(savedUser)
//     } catch (error) {
//       console.error('Error processing /users route:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

  

module.exports = router;
