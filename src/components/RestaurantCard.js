import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  const { name, distance, cost, rating } = restaurant;

  return (
    <div style={{ display: 'flex', marginBottom: '10px', backgroundColor: '#fff', borderRadius: '10px', padding: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      {/* You can remove the image line if not using it */}
      {/* <img src={image} alt={name} style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} /> */}
      <div style={{ marginLeft: '15px', flex: 1 }}>
        <h3 style={{ margin: '0 0 5px' }}>{name}</h3>
        <p style={{ margin: '2px 0' }}>Distance: {distance}</p>
        <p style={{ margin: '2px 0' }}>Est. Cost: ₹{cost}</p>
        <p style={{ margin: '2px 0', color: 'green', fontWeight: 'bold' }}>OPEN</p>
        <p style={{ margin: '2px 0' }}>{'⭐'.repeat(rating || 4)}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;