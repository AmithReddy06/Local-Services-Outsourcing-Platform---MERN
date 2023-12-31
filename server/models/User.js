// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, unique: true, required: false },
  location: {type: String,  required: true}

});

const User = mongoose.model('User', userSchema);

module.exports = User;
