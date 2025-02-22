import React from 'react'

// Materials
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import FamilyRestroomTwoToneIcon from '@mui/icons-material/FamilyRestroomTwoTone';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import ReportIcon from '@mui/icons-material/Report';

export const Drawer = () => {
  return (
    <>
      <Drawer variant="permanent" open={open}>
          <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
              {firstListItems.map((item) => (
                  <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                          selected={selectedItem === item.text} // Dynamically set selected state
                          onClick={() => setSelectedItem(item.text)} // Update selectedItem state on click
                          sx={[
                              { minHeight: 48, px: 2.5 },
                              open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
                          ]}
                      >
                          <ListItemIcon
                              sx={[
                                  { minWidth: 0, justifyContent: 'center' },
                                  open
                                      ? { mr: 3 }
                                      : { mr: 'auto' },
                              ]}
                          >
                              {item.icon}
                          </ListItemIcon>
                          <ListItemText
                              primary={
                                  <Link
                                      to={`/${item.text.toLowerCase()}`} // Keep your links if needed, adjust as per routing
                                      style={{ textDecoration: 'none', color: 'inherit' }}
                                  >
                                      {item.text}
                                  </Link>
                              }
                              sx={[
                                  open ? { opacity: 1 } : { opacity: 0 },
                              ]}
                          />
                      </ListItemButton>
                  </ListItem>
              ))}
          </List>
      </Drawer>
    </>
  )
}