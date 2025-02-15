// src/components/CitiesList.js
import React from 'react';
import { Link } from 'react-router-dom';

function CitiesList() {
  // Static example data
  const cities = [
    { id: 1, name: 'Seattle' },
    { id: 2, name: 'London' },
    { id: 3, name: 'Tokyo' },
  ];

  return (
    <div>
      <h2>Cities List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {/* Each city name links to its detail page: /city/1, /city/2, etc. */}
            <Link to={`/city/${city.id}`} style={{ color: 'blue' }}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesList;
