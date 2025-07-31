const RestaurantCard = ({ restaurant, onHover, onLeave, onClick }) => {
  const { name, distance, cost, rating, image} = restaurant;

  return (
    <div 
      style={{ 
        display: 'flex', 
        marginBottom: '10px', 
        backgroundColor: '#fff', 
        borderRadius: '10px', 
        padding: '10px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.backgroundColor = '#f8f9fa';
        if (onHover) onHover();
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.backgroundColor = '#fff';
        if (onLeave) onLeave();
      }}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {/* Restaurant Image */}
      <div style={{ 
        width: '80px', 
        height: '80px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: '15px',
        overflow: 'hidden'
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
          fontSize: '12px' 
        }}>
          No Image
        </div>
      </div>
      
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 5px', fontSize: '16px' }}>{name}</h3>
        <p style={{ margin: '2px 0', fontSize: '14px' }}>Distance: {distance}</p>
        <p style={{ margin: '2px 0', fontSize: '14px' }}>Est. Cost: {cost}</p>
        <p style={{ margin: '2px 0', color: 'green', fontWeight: 'bold', fontSize: '12px' }}>OPEN</p>
        <p style={{ margin: '2px 0', fontSize: '14px' }}>{'⭐'.repeat(rating || 4)}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
