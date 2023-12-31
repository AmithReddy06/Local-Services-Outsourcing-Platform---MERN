// client/src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    location: '',
    email:''
  });
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      console.log("Entered server to save data of user.");
      console.log('Sending request to:', '/api/users');
      console.log('Form data to be sent:', userData);

      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Form submitted successfully:', responseData);



    //   console.log("Entered server to save data of user.")
    //   console.log('Sending request to:', '/api/users'); // Add this line
    //   console.log('Form data to be sent:', userData); // Add this line

    //   const response = await axios.post('http://localhost:5000/api/users', userData);
    //   console.log('Form submitted successfully:', response.data);
     } 
    catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={userData.location}
          onChange={(e) => setUserData({ ...userData, location: e.target.value })}
        />
        <br />
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
                <br />

       <br /> <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
