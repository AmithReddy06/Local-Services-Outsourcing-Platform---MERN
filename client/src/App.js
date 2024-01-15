// client/src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ServiceProviderForm from './components/ServiceProviderForm';
import UserForm from './components/UserForm';
import SearchComponent from './components/SearchComponent';
import ProviderLogin from './components/ProviderLogin'
import LoginForm from './components/LoginForm';
import ServiceProviderDetails from './components/ServiceProviderDetails';
import './App.css';

// import PaymentInterface from '.components/PaymentInterface'; // Replace with the correct path

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user-form" element={<UserForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/plogin" element={<ProviderLogin />} />
      <Route path="/service-provider-form" element={<ServiceProviderForm />} />
      <Route path="/search" element={<SearchComponent />} />
      <Route path="/serviceproviders/:id" component={ServiceProviderDetails} />
      {/* <Route path="/payment/:id" component={PaymentInterface} /> */}
  
    </Routes>
  );
};



const Home = () => {
  return <div>Home Page Alone Works</div>;
};


export default App;




// const UserForm = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     location: '',
//     // Add other user-related fields as needed
//   });
//   const history = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/users', userData);
//       // Redirect to the home page or another page after successful submission
//       history.push('/');
//     } catch (error) {
//       console.error('Error submitting user data:', error);
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
//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           value={userData.location}
//           onChange={(e) => setUserData({ ...userData, location: e.target.value })}
//         />
//         {/* Add other input fields for user data as needed */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

