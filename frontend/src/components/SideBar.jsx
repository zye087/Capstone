import * as React from 'react'

import { styled, useTheme } from '@mui/material/styles'

// Materials
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

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

import { NavLink, useLocation } from 'react-router-dom'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

// Exported
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
)

const drawerList = [
  {
    text: 'Dashboard',
    icon: <DashboardTwoToneIcon />,
    path: '/dashboard'
  },
  {
    text: 'Students',
    icon: <PersonOutlineTwoToneIcon />,
    path: '/students'
  },
  {
    text: 'Parents & Guardians',
    icon: <FamilyRestroomTwoToneIcon />,
    path: '/parents-guardians'
  },
]

// Main Component
const SideBar = () => {
  const theme = useTheme()
  const location = useLocation()

  const [open, setOpen] = React.useState(() => {
    const storedState = localStorage.getItem('drawerOpen');
    return storedState === 'true' ? true : false;
  });

  const initialPath = window.location.pathname;

  const initialActive = drawerList.find(list => list.path === initialPath)?.text || 'Dashboard';
  const [isActive, setIsActive] = React.useState(initialActive);

  React.useEffect(() => {
    localStorage.setItem('drawerOpen', open);
  }, [open]);

  React.useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = drawerList.find(list => list.path === currentPath)?.text || 'Dashboard';
    setIsActive(activeItem);
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color='success' open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            FORMATIVE SCHOOL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{
          p: 0
        }}
        >
          {drawerList.map((list) => (
            <ListItem key={list.text} disablePadding sx={{ display: 'block' }}>
              <NavLink to={list.path} style={{ textDecoration: 'none', color: 'inherit'}}>
                <ListItemButton
                  selected={location.pathname === list.path}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                    {
                      '&.Mui-selected': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '& .MuiListItemIcon-root': {
                          color: 'white',
                        }
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: 'primary.light',
                        '& .MuiListItemIcon-root': {
                          color: 'white',
                        }
                      },
                      '&:hover': {
                        backgroundColor: 'primary.light',
                        color: 'white',
                        '& .MuiListItemIcon-root': {
                          color: 'white',
                        }
                      }
                    }
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: 'auto',
                          },
                    ]}
                  >
                    {list.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={list.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                            color: 'inherit'
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default SideBar