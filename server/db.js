// server/db.js
const mongoose = require('mongoose');
const uri ='mongodb+srv://amit1:Dumma12@mern.vymfdul.mongodb.net/mern?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(uri, );
    console.log('MongoDB Connected Securely.');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
