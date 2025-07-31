import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantsData from '../data/restaurants';

const RestaurantList = ({ onRestaurantHover, onRestaurantLeave, onRestaurantClick }) => {
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
      <div style={{ 
        position: 'relative', 
        margin: '20px auto',
        width: '90%'
      }}>
        <input
          type="text"
          placeholder="Search for Restaurants or Cafes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 45px 12px 15px',
            borderRadius: '25px',
            border: '2px solid #e0e0e0',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.3s ease',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = '#510993'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
        <div style={{
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#666',
          fontSize: '16px',
          pointerEvents: 'none'
        }}>
          🔍
        </div>
      </div>
      <div>
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard 
            key={index} 
            restaurant={restaurant} 
            onHover={() => onRestaurantHover && onRestaurantHover(restaurant.name)}
            onLeave={() => onRestaurantLeave && onRestaurantLeave()}
            onClick={() => onRestaurantClick && onRestaurantClick(restaurant)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
