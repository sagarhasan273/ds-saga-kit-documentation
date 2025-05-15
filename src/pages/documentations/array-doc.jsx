import React from 'react';

import { Box, Paper, Typography } from '@mui/material';

const ArrayDoc = () => (
  <Box sx={{ p: 2 }}>
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Array Documentation
      </Typography>
      <Typography variant="body1" paragraph>
        This is where your array documentation will go.
      </Typography>
      {/* Add more content as needed */}
    </Paper>
  </Box>
);

export default ArrayDoc;
