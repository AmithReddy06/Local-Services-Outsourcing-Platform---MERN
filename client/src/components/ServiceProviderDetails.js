// ServiceProviderDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServiceProviderDetails = () => {
  const { id } = useParams();
  const [serviceProvider, setServiceProvider] = useState(null);

  useEffect(() => {
    const fetchServiceProviderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/serviceproviders/${id}`);
        console.log(response);
        setServiceProvider(response.data);
      } catch (error) {
        console.error('Error fetching service provider details:', error);
      }
    };

    fetchServiceProviderDetails();
  }, [id]);

  if (!serviceProvider) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h2>Service Provider Details</h2>
      <p>Name: {serviceProvider.name}</p>
      <p>Service: {serviceProvider.service}</p>
      <p>Location: {serviceProvider.location}</p>
      <p>Cost: {serviceProvider.cost}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ServiceProviderDetails;
