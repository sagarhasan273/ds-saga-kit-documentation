import React from 'react';

import { Code as CodeIcon } from '@mui/icons-material';
import {
  Box,
  List,
  Drawer,
  Toolbar,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

const sidebarItems = [
  'Array',
  'Stack',
  'Queue',
  'Linked List',
  'Tree',
  'Graph',
  'Hash Table',
  'Heap',
  'Sorting Algorithms',
  'Searching Algorithms',
];

const Sidebar = ({ mobileOpen, handleDrawerToggle, setActiveDoc }) => {
  const drawerWidth = 240;

  const handleItemClick = (item) => {
    setActiveDoc(item);
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => handleItemClick(item)}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="documentation topics"
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
