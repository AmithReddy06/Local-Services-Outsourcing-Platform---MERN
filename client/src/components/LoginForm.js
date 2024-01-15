
// components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic password validation
    if (!validatePassword(loginData.password)) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    } else {
      setPasswordError('');
    }

    try {
      console.log('Sending login request to server:', loginData);
      console.log('Going in for logging in the user');

      const response = await axios.post('http://localhost:5000/api/login',loginData);

      console.log('Login successful:', response.data);

      navigate('/search');
    } catch (error) {
      console.error('Error submitting login form:', error);
      setLoginError('Invalid email or password'); // Set an error if login fails
    }
  };

  // Basic password validation function
  const validatePassword = (password) => {
    return password.length >= 2;
  };

  return (
    <div className="App">
      <div className="card">
        <h2 className="signup"> Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            {passwordError && (
              <p style={{ color: 'red' }}>{passwordError}</p>
            )}
          </div>
          <button type="submit">Login</button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


// // components/LoginForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         console.log('Sending login request to server:', loginData);
//       console.log("going in for logging in the user ")
//       const response = await axios.post('http://localhost:5000/api/login', loginData);

//       console.log('Login successful:', response.data);

//       navigate('/search');
//     } catch (error) {
//       console.error('Error submitting login form:', error);
//     }
//   };

//   return (
//     <div className="App">
//     <div className="card">
//       <h2 className='signup'> Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='mb-3'>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={loginData.email}
//           onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//         />
//         </div>
//         {/* <br /> */}
//         <div className='mb-3'>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={loginData.password}
//           onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//         />
//         </div>
//         {/* <br /> */}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;
