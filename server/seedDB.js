// server/seedDB.js
const { ServerHeartbeatSucceededEvent } = require('mongodb');
const ServiceProvider = require('./models/ServiceProvider');

const seedDatabase = async () => {
  try {
    // Add seed data to the database
    await ServiceProvider.deleteMany(); // Clear existing data
    await ServiceProvider.insertMany([
    
    

        {
          "location": "Mumbai",
          "service": "Graphic Design",
          "cost": 60,
          "rating": 4.5,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+91 987 654 3210",
          "isAvailable":true
        },


        
      ]
    );

    console.log('Existing data cleared.');
    console.log('Seed data inserted with',ServiceProvider.length,'documents');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase;
