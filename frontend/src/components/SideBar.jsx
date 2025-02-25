import * as React from 'react'

// Customizing
import {
  styled,
  useTheme
} from '@mui/material/styles'

// Materials
import {
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Box
} from '@mui/material';

// Icons
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  DashboardTwoTone as DashboardTwoToneIcon,
  PersonOutlineTwoTone as PersonOutlineTwoToneIcon,
  FamilyRestroomTwoTone as FamilyRestroomTwoToneIcon,
  QrCode2TwoTone as QrCode2TwoToneIcon,
  AppRegistrationTwoTone as AppRegistrationTwoToneIcon,
  NotificationsTwoTone as NotificationsTwoToneIcon,
  Report as ReportIcon
} from '@mui/icons-material';

// Routing
import {
  NavLink,
  useLocation
} from 'react-router-dom'

// Side Bar width
const drawerWidth = 240

// Customs
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

// Items in Side Bar
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
  {
    text: 'QR Codes',
    icon: <QrCode2TwoToneIcon />,
    path: '/qr-codes'
  },
  {
    text: 'Requests',
    icon: <AppRegistrationTwoToneIcon />,
    path: '/requests'
  },
  {
    text: 'Notifications',
    icon: <NotificationsTwoToneIcon />,
    path: '/notifications'
  },
  {
    text: 'Reports',
    icon: <ReportIcon />,
    path: '/reports'
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
        <Toolbar sx={{ display: 'flex' }}>
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
          <Box sx={{ marginLeft: 'auto'}}>
            <Button variant='contained'>Profile</Button>
          </Box>
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
            <ListItem key={list.text} disablePadding sx={{ display: 'block' }} title={list.text}>
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