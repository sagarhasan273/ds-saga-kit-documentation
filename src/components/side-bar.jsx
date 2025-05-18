import React from 'react';

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

import { Iconify } from './iconify';

const sidebarItems = [
  { label: 'Array', value: 'array', icon: 'lets-icons:array' },
  { label: 'Sorted Array', value: 'sorted-array', icon: 'bx:sort-a-z' },
  { label: 'Stack', value: 'stack', icon: 'ri:stack-fill' },
  { label: 'Queue', value: 'queue', icon: 'hugeicons:queue-02' },
  { label: 'Deque', value: 'deque', icon: 'ic:round-view-array' },
  {
    label: 'Singly Linked List',
    value: 'singly-linked-list',
    icon: 'material-symbols:linked-services-outline',
  },
  {
    label: 'Doubly Linked List',
    value: 'doubly-linked-list',
    icon: 'material-symbols:linked-services-outline',
  },
  {
    label: 'Hash Table',
    value: 'hash-table',
    icon: 'ph:hash-fill',
  },
  { label: 'Binary Search Tree', value: 'binary-search-tree', icon: 'tabler:binary-tree' },
  { label: 'Heap (Min/Max)', value: 'heap', icon: 'material-symbols:heap-snapshot-large-outline' },
  { label: 'Binary Search', value: 'binary-search', icon: 'tabler:binary' },
  { label: 'Linear Search', value: 'linear-search', icon: 'solar:card-search-linear' },
  { label: 'Lower Bound', value: 'lower-bound', icon: 'ix:lower-limit' },
  { label: 'Upper Bound', value: 'upper-bound', icon: 'ix:upper-limit' },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle, activeDoc, setActiveDoc }) => {
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
          <ListItem
            key={item.value}
            disablePadding
            sx={{
              ...(activeDoc === item.value ? { backgroundColor: '#1976D2', color: 'white' } : {}),
            }}
          >
            <ListItemButton onClick={() => handleItemClick(item.value)}>
              <ListItemIcon>
                <Iconify
                  icon={item.icon}
                  sx={{
                    ...(activeDoc === item.value ? { color: 'white' } : {}),
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={item.label} />
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
