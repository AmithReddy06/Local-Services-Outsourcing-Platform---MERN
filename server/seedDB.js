// server/seedDB.js
const ServiceProvider = require('./models/ServiceProvider');

const seedDatabase = async () => {
  try {
    // Add seed data to the database
    await ServiceProvider.deleteMany(); // Clear existing data
    await ServiceProvider.insertMany([
    
        {
          "location": "Bangkok",
          "service": "Air Conditioning Repair",
          "cost": 65,
          "rating": 4.2,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+66 12 345 6789",
          "isAvailable":true
        },
        {
          "location": "Tokyo",
          "service": "Home Security Installation",
          "cost": 80,
          "rating": 4.8,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+81 90 1234 5678",
          "isAvailable":true
        },
        {
          "location": "Paris",
          "service": "Event Photography",
          "cost": 75,
          "rating": 4.5,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+33 6 12 34 56 78",
          "isAvailable":true
        },
        {
          "location": "Berlin",
          "service": "Furniture Assembly",
          "cost": 40,
          "rating": 4.0,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+49 176 9876 5432",
          "isAvailable":true
        },
        {
          "location": "London",
          "service": "Dog Walking",
          "cost": 30,
          "rating": 4.7,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+44 20 1234 5678",
          "isAvailable":true
        },
        {
          "location": "New York",
          "service": "Personal Chef",
          "cost": 100,
          "rating": 4.9,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+1 212 345 6789",
          "isAvailable":true
        },
        {
          "location": "Sydney",
          "service": "Yoga Instructor",
          "cost": 55,
          "rating": 4.3,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+61 2 9876 5432",
          "isAvailable":true
        },
        {
          "location": "Dubai",
          "service": "Car Detailing",
          "cost": 70,
          "rating": 4.6,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+971 50 123 4567",
          "isAvailable":true
        },
        {
          "location": "Singapore",
          "service": "Mobile App Development",
          "cost": 120,
          "rating": 4.4,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+65 9123 4567",
          "isAvailable":true
        },
        {
          "location": "Seoul",
          "service": "Language Tutoring",
          "cost": 50,
          "rating": 4.1,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+82 10 1234 5678",
          "isAvailable":true
        },
        {
          "location": "Mumbai",
          "service": "Graphic Design",
          "cost": 60,
          "rating": 4.5,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+91 987 654 3210",
          "isAvailable":true
        },
        {
          "location": "Shanghai",
          "service": "Interior Design",
          "cost": 85,
          "rating": 4.2,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+86 136 1234 5678",
          "isAvailable":true
        },
        {
          "location": "Cape Town",
          "service": "Lawn Care",
          "cost": 45,
          "rating": 4.7,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+27 21 123 4567",
          "isAvailable":true
        },
        {
          "location": "Sao Paulo",
          "service": "Fitness Trainer",
          "cost": 55,
          "rating": 4.0,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+55 11 98765 4321",
          "isAvailable":true
        },
        {
          "location": "Istanbul",
          "service": "Handyman",
          "cost": 50,
          "rating": 4.8,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+90 533 123 4567",
          "isAvailable":true
        },
        {
          "location": "Moscow",
          "service": "Virtual Assistant",
          "cost": 70,
          "rating": 4.6,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+7 495 123 45 67",
          "isAvailable":true
        },
        {
          "location": "Toronto",
          "service": "Pool Cleaning",
          "cost": 65,
          "rating": 4.3,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+1 416 123 4567",
          "isAvailable":true
        },
        {
          "location": "Rome",
          "service": "Tour Guide",
          "cost": 35,
          "rating": 4.9,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+52 55 1234 5678",
          "isAvailable":true
        },
        {
          "location": "Rome",
          "service": "Tour Guide",
          "cost": 80,
          "rating": 4.4,
          "availability": ["Monday", "Wednesday", "Friday"],
          "contact": "+39 06 1234 5678",
          "isAvailable":true
        },
        {
          "location": "Rome",
          "service": "Tour Guide",
          "cost": 60,
          "rating": 4.5,
          "availability": ["Tuesday", "Thursday", "Saturday"],
          "contact": "+20 12 3456 7890",
          "isAvailable":true
        }
      ]
    );

    console.log('Existing data cleared.');
    console.log('Seed data inserted.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase;
