'use client';
import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import theme from '@/app/theme/theme';
import Link from 'next/link';

// Helper buat ambil asset dari public (pakai env variable kalau mau)
const getAssetPath = (path: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL || ''}${path}`;
};

const roles = ['Full-Stack Developer', 'Backend Developer', 'Software Developer'];

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Setting delay
    const typingDelay = 80;
    const deletingDelay = 40;
    const stayDelay = 900;  // Setelah selesai ketik, tahan sebentar sebelum hapus
    const switchDelay = 400; // Setelah hapus semua, tahan sebentar sebelum lanjut ke role berikutnya

    useEffect(() => {
        const currentRole = roles[roleIndex % roles.length];
        let timeoutId: NodeJS.Timeout;

        if (!isDeleting && charIndex < currentRole.length) {
            // Ngetik karakter baru
            timeoutId = setTimeout(() => setCharIndex(charIndex + 1), typingDelay);
        } else if (isDeleting && charIndex > 0) {
            // Menghapus karakter
            timeoutId = setTimeout(() => setCharIndex(charIndex - 1), deletingDelay);
        } else if (!isDeleting && charIndex === currentRole.length) {
            // Sudah selesai ketik, tahan sebelum mulai hapus
            timeoutId = setTimeout(() => setIsDeleting(true), stayDelay);
        } else if (isDeleting && charIndex === 0) {
            // Sudah hapus semua, lanjut ke role berikutnya
            timeoutId = setTimeout(() => {
                setIsDeleting(false);
                setRoleIndex((prev) => prev + 1);
            }, switchDelay);
        }

        setDisplayedText(currentRole.substring(0, charIndex));
        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, roleIndex]);

    // Blinking cursor style
    const cursorStyle: React.CSSProperties = {
        color: '#90caf9',
        marginLeft: '2px',
        fontWeight: 600,
        animation: 'blink 1s steps(1) infinite'
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${getAssetPath('/hero-bg.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.text.secondary,
                overflow: 'hidden',
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.7,
                    background: "#0a1427",
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                >
                    Hello, I’m <span style={{ color: '#90caf9' }}>Khairunnisa</span>
                </Typography>

                <Typography variant="h5" sx={{ minHeight: 50 }} gutterBottom>
                    <span style={{ color: '#90caf9' }}>{displayedText || '\u00A0'}</span>
                    <span style={cursorStyle}>|</span>
                </Typography>

                <Box mt={3} display="flex" flexWrap="wrap" gap={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        href="/pages/projects"
                        sx={{ fontWeight: 600 }}
                    >
                        View Projects
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        component={Link}
                        href="/pages/contact"
                        sx={{ fontWeight: 600 }}
                    >
                        Contact Me
                    </Button>
                </Box>
            </Container>

            {/* Blinking Cursor Keyframes */}
            <style>
                {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
            </style>
        </Box>
    );
};

export default Hero;
