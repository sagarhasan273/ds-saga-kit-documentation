import React from 'react';

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '30px' }}>
      <h2
        style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#222',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
