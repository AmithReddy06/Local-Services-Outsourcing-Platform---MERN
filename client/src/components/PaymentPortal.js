// Payment.js
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Razorpay from 'razorpay';

const PaymentPortal = () => {
  const location = useLocation();
  const history = useHistory();
  const [serviceProvider, setServiceProvider] = useState(null);

  useEffect(() => {
    const fetchServiceProviderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/serviceproviders/${location.state.serviceProvider._id}`);
        setServiceProvider(response.data);
      } catch (error) {
        console.error('Error fetching service provider details:', error);
        // Handle error and redirect to a failure page if needed
        history.push('/payment-failure');
      }
    };

    fetchServiceProviderDetails();
  }, [location.state.serviceProvider._id, history]);

  useEffect(() => {
    if (serviceProvider) {
      const options = {
        key: 'YOUR_RAZORPAY_API_KEY',
        amount: serviceProvider.cost * 100,
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Service Payment',
        image: 'https://your-logo-url.png',
        handler: async (response) => {
          try {
            // Payment success, update availability and navigate to success page
            await axios.put(`http://localhost:5000/api/serviceproviders/${serviceProvider._id}`, {
              isAvailable: false,
            });

            // Redirect to a success page or any other route
            history.push('/payment-success');
          } catch (error) {
            console.error('Error updating availability:', error);
            // Handle error and redirect to a failure page if needed
            history.push('/payment-failure');
          }
        },
        // ... (unchanged)
      };

      const rzp = new Razorpay(options);
      rzp.open();

      return () => {
        // Cleanup logic, if needed
      };
    }
  }, [serviceProvider, history]);

  return <div>Processing Payment...</div>;
};

export default PaymentPortal;
