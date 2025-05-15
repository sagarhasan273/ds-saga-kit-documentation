import React from 'react';

function TextLighter({ children }) {
  return (
    <code
      style={{
        backgroundColor: '#f3f4f6',
        padding: '2px 6px',
        borderRadius: '4px',
        fontFamily:
          'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '0.9em',
      }}
    >
      {children}
    </code>
  );
}

export default TextLighter;
