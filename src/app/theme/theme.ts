'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#a1e4ed',
        },
        secondary: {
            main: '#5ec2a7',
        },
        // Warna latar
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        // Warna teks
        text: {
            primary: '#476167',
            secondary: '#88d1be',
            disabled: '#9e9e9e',
        },
        success: {
            main: '#4caf50',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#4481b6',
        },
    },

    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        body1: { fontSize: '1rem' },
    },
});

export default theme;
