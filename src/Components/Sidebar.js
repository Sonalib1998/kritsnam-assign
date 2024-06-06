import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    marginTop: theme.spacing(8), // Adjusts for app bar height
    position: 'fixed',
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: '#000080',
  color: 'white',
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: 'white',
}));

const Sidebar = () => {
  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ overflow: 'auto' }}>
        <StyledList>
          <ListItem button>
            <StyledListItemIcon>
              <DashboardIcon />
            </StyledListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </StyledList>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
