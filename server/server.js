// // server/server.js
// const express = require('express');
// const cors = require('cors');
// const serviceProviderRoutes = require('./routes/ServiceProviderRoutes');
// const userRoutes = require('./routes/UserRoutes');
// const connectDB = require('./db');
// const seedDatabase = require('./seedDB');
// const User = require('./models/User'); 

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({
//   origin: "http://localhost:3000"
// }));
// app.use(express.json());

// connectDB()
//   .then(() => seedDatabase())
//   .then(() => {
//     console.log("from server");
//     //trying this 
//     app.use(cors({ origin: "http://localhost:3000" }));
//     app.use(express.json());
//     app.use('/api/users', userRoutes);
//     app.use('/api/serviceproviders', serviceProviderRoutes);
//     console.log('Registered routes:', app._router.stack.map(r => r.route));



//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);

//     });
//   })
//   .catch((error) => {
//     console.error('Error during server setup:', error);
//   });



// const express = require('express');
// const cors = require('cors');
// const serviceProviderRoutes = require('./routes/ServiceProviderRoutes');
// const userRoutes = require('./routes/UserRoutes');
// const connectDB = require('./db');
// const seedDatabase = require('./seedDB');
// const User = require('./models/User');
// const ServiceProvider = require('./models/ServiceProvider')
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());

// // Log registered routes before mounting
// console.log('Before mounting routes:', app._router.stack.map(r => r.route));

// // Directly mount the userRoutes
// // app.post('/api/users', userRoutes);

// app.post('/api/users', async (req, res) => {
//   try {
//     const userData = req.body;
//     console.log('Received user data:', userData);
//     const user = new User(userData);
//     const savedUser = await user.save();
//     res.json(savedUser);
//     console.log(savedUser);
//   } catch (error) {
//     console.error('Error processing /users route:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/api/serviceproviders', async (req, res) => {
//   try {
//     const serviceProviderData = req.body;
//     console.log(serviceProviderData);
//     const serviceProvider = new ServiceProvider(serviceProviderData);
//     const savedServiceProvider = await serviceProvider.save();
//     res.json(savedServiceProvider);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



// // Log registered routes after mounting
// console.log('After mounting routes:', app._router.stack.map(r => r.route));

// // Other routes
// // app.use('/api/serviceproviders', serviceProviderRoutes);

// console.log('Registered routes:', app._router.stack.map(r => r.route));

// connectDB()
//   .then(() => seedDatabase())
//   .then(() => {
//     console.log("from server");
    
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error during server setup:', error);
//   });




// server.js
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./db');
// const seedDatabase = require('./seedDB');
// const User = require('./models/User');
// const ServiceProvider = require('./models/ServiceProvider');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());



// // Directly mount the userRoutes
// app.post('/api/users', async (req, res) => {
//   try {
//     const userData = req.body;
//     console.log('Received user data:', userData);
//     const user = new User(userData);
//     const savedUser = await user.save();
//     res.json(savedUser);
//     console.log(savedUser);
//   } catch (error) {
//     console.error('Error processing /users route:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Directly mount the serviceProviderRoutes
// app.post('/api/another', async (req, res) => {
//   try {
//     const serviceProviderData = req.body;
//     console.log("Received service provider data:", serviceProviderData);
//     const serviceProvider = new ServiceProvider(serviceProviderData);
//     const savedServiceProvider = await serviceProvider.save();
//     res.json(savedServiceProvider);
//   } catch (error) {
//     console.error('Error processing /api/another route:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// connectDB()
//   .then(() => seedDatabase())
//   .then(() => {
//     console.log("from server");

//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error during server setup:', error);
//   });


// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./db');
// const ServiceProvider = require('./models/ServiceProvider');
// const User = require('./models/User')
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());



// app.post('/api/users', async (req, res) => {
//   try {
//     const userData = req.body;
//     console.log('Received user data:', userData);
//     const user = new User(userData);
//     const savedUser = await user.save();
//     res.json(savedUser);
//     console.log(savedUser);
//   } catch (error) {
//     console.error('Error processing /users route:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/api/serviceproviders', async (req, res) => {
//   try {
//     const serviceProviderData = req.body;
//     console.log("Received service provider data:", serviceProviderData);
//     const serviceProvider = new ServiceProvider(serviceProviderData);
//     const savedServiceProvider = await serviceProvider.save();
//     res.json(savedServiceProvider);
//   } catch (error) {
//     console.error('Error processing /api/serviceproviders route:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Search route
// app.get('/api/serviceproviders', async (req, res) => {
//   const { service, location } = req.query;

//   try {
//     const query = {
//       service,
//       location,
//       isAvailable: true,
//     };

//     const results = await ServiceProvider.find(query);
//     res.json(results);
//   } catch (error) {
//     console.error('Error searching service providers:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// // Selection route
// app.put('/api/serviceproviders/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const serviceProvider = await ServiceProvider.findById(id);

//     if (!serviceProvider) {
//       return res.status(404).json({ error: 'Service provider not found' });
//     }

//     serviceProvider.isAvailable = false;
//     await serviceProvider.save();

//     res.json(serviceProvider);
//   } catch (error) {
//     console.error('Error updating service provider availability:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error during server setup:', error);
//   });


const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const ServiceProvider = require('./models/ServiceProvider');
const User = require('./models/User');
const Notification = require('./models/Notification')
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();


const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;



const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());




app.post('/api/users', async (req, res) => {
  try {
    const { name, location, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Create a new user
    const user = new User({ name, location, email, password });
    await user.save();

    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    console.log('User object before comparePassword:', user);
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({
      _id: user._id,
      email: user.email,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/plogin', async (req,res) => {
  const {email, password} = req.body;

  try {
    const puser = await ServiceProvider.findOne({email});

    if(!puser)
    {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({
      _id:puser._id,
      email:puser.email,
    });
  }
  catch(error)
  {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






app.post('/api/serviceproviders', async (req, res) => {

  try {
    const { name, location,service,cost,contact,email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Create a new user
    const provider = new ServiceProvider({ name, location,service,cost,contact, email, password });
    await provider.save();

    res.json(provider);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }




  // try {
  //   const serviceProviderData = req.body;
  //   console.log('Received service provider data:', serviceProviderData);
  //   const serviceProvider = new ServiceProvider(serviceProviderData);
  //   const savedServiceProvider = await serviceProvider.save();
  //   res.json(savedServiceProvider);
  // } catch (error) {
  //   console.error('Error processing /api/serviceproviders route:', error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
});


app.get('/api/serviceproviders', async (req, res) => {
  const { service, location } = req.query;

  console.log('Received search criteria:', { service, location });

  try {
    const query = {
      service,
      location,
      isAvailable: true,
    };

    const results = await ServiceProvider.find(query);
    console.log('Search results:', results);
    res.json(results);
  } catch (error) {
    console.error('Error searching service providers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.put('/api/serviceproviders/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const serviceProvider = await ServiceProvider.findById(id);

    if (!serviceProvider) {
      return res.status(404).json({ error: 'Service provider not found' });
    }

    serviceProvider.isAvailable = false;
    await serviceProvider.save();

    res.json(serviceProvider);
  } catch (error) {
    console.error('Error updating service provider availability:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.get('/api/serviceproviders/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const serviceProvider = await ServiceProvider.findById(id);

    if (!serviceProvider) {
      return res.status(404).json({ error: 'Service provider not found' });
    }

    res.json(serviceProvider);
  } catch (error) {
    console.error('Error fetching service provider details by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






app.listen(PORT, 'localhost', () => {
  console.log(`Server is running on port ${PORT}`);
});



connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
