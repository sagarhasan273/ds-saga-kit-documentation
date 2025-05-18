import React, { useState } from 'react';

import { Box, Toolbar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/nav-bar';
import Sidebar from './components/side-bar';
import ArrayDoc from './pages/documentations/array-doc';

const theme = createTheme();

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState('array');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // This would be replaced with your actual documentation components
  const renderDocumentation = () => {
    switch (activeDoc) {
      case 'array':
        return <ArrayDoc />;
      case 'stack':
        return <div>Stack Documentation Content</div>;
      case 'queue':
        return <div>Queue Documentation Content</div>;
      case 'deque':
        return <div>Deque Doccumentation Content</div>;
      case 'singly-linked-list':
        return <div>Single Doccumentation Content</div>;
      case 'doubly-linked-list':
        return <div>Doubly Doccumentation Content</div>;
      case 'hash-table':
        return <div>hash Table Doccumentation Content</div>;
      case 'binary-search-tree':
        return <div>Binary search Tree</div>;
      case 'heap':
        return <div>Heap Doccumentation Content</div>;
      case 'binary-search':
        return <div>Binary Search Doccumentation Content</div>;
      case 'linear-search':
        return <div>Linear search</div>;
      case 'lower-bound':
        return <div>Lower Bound Doccumentation Content</div>;
      case 'upper-bound':
        return <div>Upper Bound Doccumentation Content</div>;
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
          activeDoc={activeDoc}
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
