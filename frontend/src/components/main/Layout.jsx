import * as React from 'react';
import { Link } from 'react-router';
import { styled, useTheme } from '@mui/material/styles';
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
// Components
import Dashboard from './Dashboard';
import Students from './Students';
import ParentsGuardians from './ParentsGuardians';
import QRCodes from './QRCodes';
import Requests from './Requests';
import Notifications from './Notifications';
import Reports from './Reports';

const drawerWidth = 250;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

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
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [selectedItem, setSelectedItem] = React.useState('Dashboard'); // State for selected item

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const firstListItems = [
        { text: 'Dashboard', icon: <DashboardTwoToneIcon />, component: <Dashboard /> },
        { text: 'Students', icon: <PersonOutlineTwoToneIcon />, component: <Students /> },
        { text: 'Parents & Guardians', icon: <FamilyRestroomTwoToneIcon />, component: <ParentsGuardians /> },
        { text: 'QR Codes', icon: <QrCode2TwoToneIcon />, component: <QRCodes /> },
        { text: 'Requests', icon: <AppRegistrationTwoToneIcon />, component: <Requests /> },
        { text: 'Notifications', icon: <NotificationsTwoToneIcon />, component: <Notifications /> },
        { text: 'Reports', icon: <ReportIcon />, component: <Reports /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='success'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            { marginRight: 5 },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
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
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {firstListItems.find(item => item.text === selectedItem)?.component || <Dashboard />}
            </Box>
        </Box>
    );
}