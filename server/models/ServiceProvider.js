// server/models/ServiceProvider.js
const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
  location: String,
  service: String,
  cost: Number,
  isAvailable: { type: Boolean, default: true },
  availability: Array,
  contact: String,
  email: String, // Add the email field
  // Add more fields as needed
});

const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema);

module.exports = ServiceProvider;
