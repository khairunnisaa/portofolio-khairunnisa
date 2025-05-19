// components/Footer.tsx
import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.background.paper,
                textAlign: 'center',
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} Your Name. All rights reserved.
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                    Built with{' '}
                    <Link href="https://nextjs.org" target="_blank" rel="noopener" underline="hover">
                        Next.js
                    </Link>{' '}
                    &amp;{' '}
                    <Link href="https://mui.com" target="_blank" rel="noopener" underline="hover">
                        MUI
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
