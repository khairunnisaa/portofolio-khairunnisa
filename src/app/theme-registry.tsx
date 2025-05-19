'use client';

import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import { ReactNode } from 'react';
import theme from '../app/theme/theme';
import Header from '../app/components/Header';
export default function ThemeRegistry({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
        </ThemeProvider>
    );
}
