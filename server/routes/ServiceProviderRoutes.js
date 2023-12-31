// server/routes/ServiceProviderRoutes.js
const express = require('express');
const router = express.Router();
const ServiceProvider = require('../models/ServiceProvider');
const User = require('../models/User')
router.post('/', async (req, res) => {
  try {
    const serviceProvider = new ServiceProvider(req.body);
    console.log(serviceProvider);
    await serviceProvider.save();
    res.json(serviceProvider);
  } catch (error) {
    console.error('Error creating service provider:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/serviceproviders', async (req, res) => {
  try {
    const serviceProviderData = req.body;
    console.log(serviceProviderData)
    const serviceProvider = new ServiceProvider(serviceProviderData);
    const savedServiceProvider = await serviceProvider.save();
    res.json(savedServiceProvider);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




router.get('/', async (req, res) => {
  const { service, location } = req.query;

  try {
    const query = {
      service,
      location,
      isAvailable: true,
    };

    const results = await ServiceProvider.find(query);
    res.json(results);
  } catch (error) {
    console.error('Error searching service providers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
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

module.exports = router;
