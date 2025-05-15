import React, { useState } from 'react';

import { Box, Toolbar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/nav-bar';
import Sidebar from './components/side-bar';
import ArrayDoc from './pages/documentations/array-doc';

const theme = createTheme();

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState('Array');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // This would be replaced with your actual documentation components
  const renderDocumentation = () => {
    switch (activeDoc) {
      case 'Array':
        return <ArrayDoc />;
      case 'Stack':
        return <div>Stack Documentation Content</div>;
      case 'Queue':
        return <div>Queue Documentation Content</div>;
      default:
        return <div>Select a topic from the sidebar</div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          setActiveDoc={setActiveDoc}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
          }}
        >
          <Toolbar /> {/* This pushes content below the app bar */}
          {renderDocumentation()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
