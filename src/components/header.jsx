import React from 'react';

function Header({ title }) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h1
        style={{
          fontSize: '28px',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#222',
        }}
      >
        {title}
      </h1>
      <div
        style={{
          height: '4px',
          background: 'linear-gradient(90deg,rgb(57, 135, 252) 0%,rgb(37, 155, 252) 100%)',
          borderRadius: '2px',
          marginBottom: '20px',
        }}
      />
    </div>
  );
}

export default Header;
