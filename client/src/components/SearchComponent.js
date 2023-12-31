// client/src/components/SearchComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchComponent = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    service: '',
    location: '',
  });
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      const response = await axios.get('/api/serviceproviders', { params: searchCriteria });
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = async (id) => {
    try {
      await axios.put(`/api/serviceproviders/${id}`);
      // After a successful update, you can update the UI accordingly
      console.log('Service provider selected:', id);
    } catch (error) {
      console.error('Error selecting service provider:', error);
    }
  };

  return (
    <div>
      <h2>Service Provider Search</h2>
      <form onSubmit={handleSearch}>
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          id="service"
          value={searchCriteria.service}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, service: e.target.value })}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={searchCriteria.location}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, location: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>

      {results.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {results.map((result) => (
              <li key={result._id}>
                {result.service} - {result.location} - {result.cost}{' '}
                <button onClick={() => handleSelect(result._id)}>Select</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default SearchComponent;
