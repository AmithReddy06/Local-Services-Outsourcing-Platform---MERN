// ServiceProviderDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useNavigate, useParams } from 'react-router-dom';

const ServiceProviderDetails = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [providerDetails, setProviderDetails] = useState(null);

  useEffect(() => {
    const fetchProviderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/serviceproviders/${id}`);
        setProviderDetails(response.data);
      } catch (error) {
        console.error('Error fetching service provider details:', error);
      }
    };

    fetchProviderDetails();
  }, [id]);

  const handlePayment = () => {
    // Assuming you have a route for the payment interface, navigate to it after payment
    history(`/payment/${id}`);
  };

  return (
    <div>
      {providerDetails ? (
        <div>
          <h2>Service Provider Details</h2>
          <p>Name: {providerDetails.name}</p>
          <p>Location: {providerDetails.location}</p>
          {/* Display other details as needed */}

          <button onClick={handlePayment}>Proceed to Payment</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ServiceProviderDetails;
