import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const Navbar = ({ handleDrawerToggle }) => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - 240px)` },
      ml: { sm: `240px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Data Structures Documentation
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
