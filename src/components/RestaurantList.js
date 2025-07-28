import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantsData from '../data/restaurants';

const RestaurantList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);

  useEffect(() => {
    const filtered = restaurantsData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Restaurants or Cafes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '90%',
          padding: '10px',
          margin: '20px auto',
          display: 'block',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <div>
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
