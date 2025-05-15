import React from 'react';

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
