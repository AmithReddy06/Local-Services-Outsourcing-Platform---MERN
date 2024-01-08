// server/models/ServiceProvider.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const serviceProviderSchema = new mongoose.Schema({
  name: String,
  location: String,
  service: String,
  cost: Number,
  isAvailable: { type: Boolean, default: true },
  availability: Array,
  contact: String,
  email: String, 
  password: String,
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],

});



// Hash the user's password before saving it to the database
serviceProviderSchema.pre('save', async function (next) {
  const provider = this;

  // Only hash the password if it has been modified or is new
  if (!provider.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password along with the new salt
    const hashedPassword = await bcrypt.hash(provider.password, salt);

    // Replace the plain text password with the hashed password
    provider.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// Compare a provided password with the hashed password in the database
serviceProviderSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Use bcrypt to compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log("Match:",isMatch)
    return isMatch;
  } catch (error) {
    throw error;
  }
};




const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema);

module.exports = ServiceProvider;
