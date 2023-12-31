// client/src/components/ServiceProviderForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceProviderForm = () => {
  const [providerData, setProviderData] = useState({
    name: '',
    location: '',
    service: '',
    cost: 0,
    // Add other service provider-related fields as needed
  });
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(providerData);
      await axios.post('/api/serviceproviders', providerData);
      // Redirect to the home page or another page after successful submission
      history.push('/');
    } catch (error) {
      console.error('Error submitting service provider data:', error);
    }
  };

  return (
    <div>
      <h2>Service Provider Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={providerData.name}
          onChange={(e) => setProviderData({ ...providerData, name: e.target.value })}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={providerData.location}
          onChange={(e) => setProviderData({ ...providerData, location: e.target.value })}
        />
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          id="service"
          value={providerData.service}
          onChange={(e) => setProviderData({ ...providerData, service: e.target.value })}
        />
        <label htmlFor="cost">Cost:</label>
        <input
          type="number"
          id="cost"
          value={providerData.cost}
          onChange={(e) => setProviderData({ ...providerData, cost: parseFloat(e.target.value) })}
        />
        {/* Add other input fields for service provider data as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServiceProviderForm;
