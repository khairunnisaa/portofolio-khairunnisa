'use client';

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import theme from '@/app/theme/theme';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/pages/about' },
    { label: 'Experience', path: '/pages/experience' },
    { label: 'Projects', path: '/pages/projects' },
    { label: 'Contact', path: '/pages/contact' },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleDrawer = () => setMobileOpen(!mobileOpen);

    // if (!mounted) return <Toolbar />; // Hindari layout shift

    return (
        <>
            <AppBar
                position="fixed"
                elevation={4}
                sx={{
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(7,20,62,0.6)',
                    backdropFilter: 'blur(6px)',
                    zIndex: (theme) => theme.zIndex.drawer - 1,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Khairunnisa Portofolio
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.path} color="inherit" component={Link} href={item.path}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton color="inherit" onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250 }} onClick={toggleDrawer}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.path} disablePadding>
                                <ListItemButton component={Link} href={item.path}>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
