// // client/src/components/SearchComponent.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchComponent = () => {
//   const [service, setService] = useState('');
//   const [location, setLocation] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`/api/serviceProviders/search`, {
//         params: { service, location },
//       });
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error during search:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Search for Service Providers</h2>
//       <div>
//         <label>Service:</label>
//         <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
//       </div>
//       <div>
//         <label>Location:</label>
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//       </div>
//       <button onClick={handleSearch}>Search</button>

//       {results.length > 0 && (
//         <div>
//           <h3>Search Results:</h3>
//           <ul>
//             {results.map((result) => (
//               <li key={result._id}>
//                 {result.service} - {result.location} - Cost: {result.cost}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchComponent;
