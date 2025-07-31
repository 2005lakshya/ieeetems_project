import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#510993',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000,
      flexShrink: 0,
      padding: '0 20px'
    }}>
      {/* Left side - VIT FOODFINDER */}
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        VIT FOODFINDER
      </div>
      
      {/* Right side - Home button */}
      <button
        style={{
          backgroundColor: '#8569E4',
          border: '2px solid #8569E4',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '20px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#8569E4';
          e.target.style.borderColor = '#8569E4';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#8569E4';
          e.target.style.color = 'white';
          e.target.style.borderColor = '#8569E4';
        }}
        onClick={() => {
          // Add home navigation logic here if needed
          console.log('Home button clicked');
        }}
      >
        Home
      </button>
    </header>
  );
};

export default Header;
