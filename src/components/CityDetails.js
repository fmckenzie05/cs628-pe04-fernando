// src/components/CityDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails() {
  // Grab the :cityId from the URL
  const { cityId } = useParams();

  // Mock data. In a real app, you might fetch this from an API or state.
  const cityData = {
    '1': { name: 'Seattle', country: 'USA', population: 733919 },
    '2': { name: 'London', country: 'UK', population: 8908081 },
    '3': { name: 'Tokyo', country: 'Japan', population: 13960000 },
  };

  const city = cityData[cityId];

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <div>
      <h2>{city.name} Details</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
    </div>
  );
}

export default CityDetails;
