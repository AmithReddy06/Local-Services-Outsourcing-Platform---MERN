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
    contact: '',
    email: '',
    password: '',
    confirmPassword: '', 
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting service provider data:', providerData);
      await axios.post('http://localhost:5000/api/serviceproviders', providerData);
      console.log('Service provider data submitted successfully');
      navigate('/plogin');
    } catch (error) {
      console.error('Error submitting service provider data:', error);
    }
  };

  return (
    <div className='App'>
      <div className='card'>
        <h2>Service Provider Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={providerData.name}
              onChange={(e) => setProviderData({ ...providerData, name: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={providerData.location}
              onChange={(e) => setProviderData({ ...providerData, location: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="service">Service:</label>
            <input
              type="text"
              id="service"
              value={providerData.service}
              onChange={(e) => setProviderData({ ...providerData, service: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="cost">Cost:</label>
            <input
              type="number"
              id="cost"
              value={providerData.cost}
              onChange={(e) => setProviderData({ ...providerData, cost: parseFloat(e.target.value) })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              value={providerData.contact}
              onChange={(e) => setProviderData({ ...providerData, contact: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"  // Fix the type attribute
              id="email"
              value={providerData.email}
              onChange={(e) => setProviderData({ ...providerData, email: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={providerData.password}
              onChange={(e) => setProviderData({ ...providerData, password: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={providerData.confirmPassword}
              onChange={(e) => setProviderData({ ...providerData, confirmPassword: e.target.value })}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceProviderForm;




// // client/src/components/ServiceProviderForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ServiceProviderForm = () => {
//   const [providerData, setProviderData] = useState({
//     name: '',
//     location: '',
//     service: '',
//     cost: 0,
//     contact: ''
//     // Add other service provider-related fields as needed
//   });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Submitting service provider data:', providerData);
//       await axios.post('http://localhost:5000/api/serviceproviders', providerData);
//       console.log('Service provider data submitted successfully');
//       navigate('/plogin');
//     } catch (error) {
//       console.error('Error submitting service provider data:', error);
//     }
//   };
//   return (
//     <div className='App'>
//         <div className='card'>
//            <h2>Service Provider Form</h2>
//       <form onSubmit={handleSubmit}>

//         <div className='mb-3'>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={providerData.name}
//           onChange={(e) => setProviderData({ ...providerData, name: e.target.value })}
//         />
//         </div>

//         <div className='mb-3'></div>
//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           value={providerData.location}
//           onChange={(e) => setProviderData({ ...providerData, location: e.target.value })}
//         />
//         </div>

//         <div className='mb-3'>
//         <label htmlFor="service">Service:</label>
//         <input
//           type="text"
//           id="service"
//           value={providerData.service}
//           onChange={(e) => setProviderData({ ...providerData, service: e.target.value })}
//         />
//         </div>

//         <div className='mb-3'>
//         <label htmlFor="cost">Cost:</label>
//         <input
//           type="number"
//           id="cost"
//           value={providerData.cost}
//           onChange={(e) => setProviderData({ ...providerData, cost: parseFloat(e.target.value) })}
//         />
//         </div>

//         <div className='mb-3'>
//         <label htmlFor="contact">Contact:</label>
//         <input
//           type="text"
//           id="contact"
//           value={providerData.contact}
//           onChange={(e) => setProviderData({ ...providerData, contact: e.target.value })}
//         />
//         </div>

//         <div className='mb-3'>
//         <label htmlFor="email">Email ID:</label>
//         <input
//           type="mail"
//           id="email"
//           value={providerData.email}
//           onChange={(e) => setProviderData({ ...providerData, email: e.target.value })}
//         />
//         </div>

//         <div className='mb-3'>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={providerData.password}
//           onChange={(e) => setProviderData({ ...providerData, password: e.target.value })}
//         />
//         </div>

//         <div className='mb-3'>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           value={providerData.confirmPassword}
//           onChange={(e) => setProviderData({ ...providerData, confirmPassword: e.target.value })}
//         />
//         </div>
        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ServiceProviderForm;
