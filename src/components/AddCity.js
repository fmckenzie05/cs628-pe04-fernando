// src/components/AddCity.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd save this data to an API or global state
    console.log('New City:', { name, country, population });

    // Redirect back to the main Cities List after submission
    navigate('/');
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Name:</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Seattle"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="country" style={{ display: 'block', fontWeight: 'bold' }}>Country:</label>
          <input
            id="country"
            type="text"
            placeholder="e.g. USA"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="population" style={{ display: 'block', fontWeight: 'bold' }}>Population:</label>
          <input
            id="population"
            type="number"
            placeholder="e.g. 733919"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: 'blue',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add City
        </button>
      </form>
    </div>
  );
}

export default AddCity;
