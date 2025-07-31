import React from 'react';

const RestaurantDetail = ({ restaurant, onBack }) => {
  const { name, distance, cost, rating, image, popularItems, description, feedback } = restaurant;

  return (
    <div style={{
      width: "35%",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      overflowY: "auto",
      height: "100%",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
    }}>
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          backgroundColor: '#510993',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#6C2BD9';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#510993';
        }}
      >
        ← Back to List
      </button>

      {/* Restaurant Image */}
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#f0f0f0',
        borderRadius: '15px',
        marginBottom: '20px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={image || "/restaurant_placeholder.jpg"} 
          alt={name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={{ 
          display: 'none', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%', 
          height: '100%', 
          backgroundColor: '#e0e0e0', 
          color: '#666', 
          fontSize: '16px' 
        }}>
          No Image Available
        </div>
      </div>

      {/* Restaurant Info */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ 
          margin: '0 0 10px', 
          fontSize: '28px', 
          color: '#510993',
          fontWeight: 'bold'
        }}>
          {name}
        </h1>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '10px',
          fontSize: '16px'
        }}>
          <span style={{ marginRight: '20px' }}>📍 {distance}</span>
          <span style={{ marginRight: '20px' }}>💰 {cost}</span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '15px' 
        }}>
          <span style={{ fontSize: '18px', marginRight: '10px' }}>
            {'⭐'.repeat(rating || 4)}
          </span>
          <span style={{ 
            backgroundColor: 'green', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '15px', 
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            OPEN
          </span>
        </div>
      </div>

      {/* Popular Items */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          color: '#510993', 
          fontSize: '20px', 
          marginBottom: '10px',
          borderBottom: '2px solid #510993',
          paddingBottom: '5px'
        }}>
          Popular Items
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {popularItems.map((item, index) => (
            <span
              key={index}
              style={{
                backgroundColor: '#8569E4',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          color: '#510993', 
          fontSize: '20px', 
          marginBottom: '10px',
          borderBottom: '2px solid #510993',
          paddingBottom: '5px'
        }}>
          About
        </h3>
        <p style={{ 
          fontSize: '14px', 
          lineHeight: '1.6', 
          color: '#333',
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          {description}
        </p>
      </div>

      {/* Customer Feedback */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          color: '#510993', 
          fontSize: '20px', 
          marginBottom: '10px',
          borderBottom: '2px solid #510993',
          paddingBottom: '5px'
        }}>
          Customer Reviews
        </h3>
        <p style={{ 
          fontSize: '14px', 
          lineHeight: '1.6', 
          color: '#333',
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          fontStyle: 'italic'
        }}>
          "{feedback}"
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
