// server/server.js
const express = require('express');
const cors = require('cors');
const serviceProviderRoutes = require('./routes/ServiceProviderRoutes');
const userRoutes = require('./routes/UserRoutes');
const connectDB = require('./db');
const seedDatabase = require('./seedDB');
const User = require('./models/User'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());

connectDB()
  .then(() => seedDatabase())
  .then(() => {
    console.log("from server");
    //trying this 
    app.use('/api/users', userRoutes);
    app.use('/api/serviceproviders', serviceProviderRoutes);
    


    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error during server setup:', error);
  });
