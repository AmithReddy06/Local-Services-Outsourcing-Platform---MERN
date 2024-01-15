// client/src/components/UserForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UserForm = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     location: '',
//     email:''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {

//       console.log("Entered server to save data of user.")
//       console.log('Sending request to:', 'http://localhost:5000/api/users'); // Add this line
//       console.log('Form data to be sent:', userData); // Add this line

//       const response = await axios.post('http://localhost:5000/api/users', userData);
//       console.log('Form submitted successfully:', response.data);

//      } 
//     catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>User Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={userData.name}
//           onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//         />
//         <br />
//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           value={userData.location}
//           onChange={(e) => setUserData({ ...userData, location: e.target.value })}
//         />
//         <br />
//         <label htmlFor="Email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={userData.email}
//           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//         />
//                 <br />

//        <br /> <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserForm;





// components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    location: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if passwords match
      if (userData.password !== userData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      const response = await axios.post('http://localhost:5000/api/users', userData);
      console.log('Form submitted successfully:', response.data);

      // Optionally, you can redirect or perform other actions after successful submission
      navigate('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors or display error messages to the user
    }
  };

  return (
    <div className="App">
      <div className="card">
      <h2 className='signup'>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        </div>
        <br />
        <div className="mb-3">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={userData.location}
          onChange={(e) => setUserData({ ...userData, location: e.target.value })}
        />
        </div>
        <br />
        <div className="mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        </div>
        <br />
        <div className="mb-3">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        </div>
        <br />
        <div className="mb-3">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={userData.confirmPassword}
          onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
        />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    // </div>
  );
};

export default UserForm;







// const response = await axios.post('http://localhost:5000/api/users/register', userData);
