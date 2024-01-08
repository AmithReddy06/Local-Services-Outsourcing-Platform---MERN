
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, unique: true, required: false },
  location: {type: String,  required: true},
  password: { type: String, required: true },


});

// Hash the user's password before saving it to the database
userSchema.pre('save', async function (next) {
  const user = this;

  // Only hash the password if it has been modified or is new
  if (!user.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password along with the new salt
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // Replace the plain text password with the hashed password
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// Compare a provided password with the hashed password in the database
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Use bcrypt to compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log("Match:",isMatch)
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;