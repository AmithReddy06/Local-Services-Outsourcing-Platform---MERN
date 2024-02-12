// SearchComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Add this line


const SearchComponent = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    service: '',
    location: '',
  });
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault(); 
    console.log('Search Criteria:', searchCriteria);
    try {
      console.log("Searching...")
      const response = await axios.get('http://localhost:5000/api/serviceproviders', { params: searchCriteria });
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = async (id) => {
    try {
      console.log("inside selection hanlder");
      await axios.put(`http://localhost:5000/api/serviceproviders/${id}`);
      console.log('Service provider selected:', id);
      // navigate(`/serviceproviders/${id}`);
      window.location.href = `/serviceproviders/${id}`;
    } catch (error) {
      console.error('Error selecting service provider:', error);
    }
  };

  return (
    <div>
      <h2>Service Provider Search</h2>
      <form>
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
        <button type="button" onClick={handleSearch}>Search</button>
      </form>

      {results.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {results.map((result) => (
              <li key={result._id}>
                {result._id} - {result.service} - {result.location} - {result.cost}{' '}
                <button onClick={() => handleSelect(result._id)}>Select</button>
                <Link to={`/serviceproviders/${result._id}`}>View Details</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
