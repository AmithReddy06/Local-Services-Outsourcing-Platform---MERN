// UserComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const UserComponent = ({ serviceProviderId, userId }) => {
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleNotify = async () => {
    try {
      await axios.post(`/api/serviceproviders/notify/${serviceProviderId}/${userId}`, {
        message: notificationMessage,
      });
      alert('Notification sent successfully!');
    } catch (error) {
      console.error('Error sending notification:', error);
      alert('Failed to send notification. Please try again.');
    }
  };

  return (
    <div>
      <h3>Service Provider: {serviceProviderId}</h3>
      <textarea
        placeholder="Enter notification message..."
        value={notificationMessage}
        onChange={(e) => setNotificationMessage(e.target.value)}
      />
      <button onClick={handleNotify}>Notify</button>
    </div>
  );
};

export default UserComponent;
