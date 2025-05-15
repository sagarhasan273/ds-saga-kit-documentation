import React from 'react';

import { Box } from '@mui/material';

function DocContainer({ children }) {
  return (
    <Box
      sx={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        color: '#333',
        lineHeight: 1.6,
      }}
    >
      {children}
    </Box>
  );
}

export default DocContainer;
