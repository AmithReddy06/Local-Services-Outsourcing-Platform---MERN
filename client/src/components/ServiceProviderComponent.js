// ServiceProviderComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceProviderComponent = ({ serviceProviderId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`/api/serviceproviders/notifications/${serviceProviderId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [serviceProviderId]);

  return (
    <div>
      <h3>Service Provider: {serviceProviderId}</h3>
      <h4>Notifications</h4>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceProviderComponent;
