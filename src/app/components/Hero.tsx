'use client'
import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import theme from "@/app/theme/theme";
import {motion} from "framer-motion";

const Hero = () => {
    const [text, setText] = useState('');
    const [loopIndex, setLoopIndex] = useState(0);
    const [typingIndex, setTypingIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const typingText = ["Full-Stack Developer", "Backend Developer", "Software Developer"];

    useEffect(() => {
        const current = typingText[loopIndex % typingText.length];
        const delay = deleting ? 40 : 80;

        const timer = setTimeout(() => {
            setText(current.substring(0, typingIndex));
            if (!deleting && typingIndex < current.length) {
                setTypingIndex((prev) => prev + 1);
            } else if (deleting && typingIndex > 0) {
                setTypingIndex((prev) => prev - 1);
            } else {
                setDeleting(!deleting);
                if (!deleting) setLoopIndex((prev) => prev + 1);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [typingIndex, deleting, loopIndex]);

    return (
        <Box
            sx={{
                height: 'calc(100vh)',  // height dikurangi tinggi navbar// padding top supaya konten tidak tertutup navbar
                backgroundImage: 'url(/hero-bg-2.jpg)',
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
                    opacity: 0.5,
                    background: "#476167",
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                        Hello, I’m <span style={{ color: '#90caf9' }}>Khairunnisa</span>
                    </Typography>

                    <Typography variant="h5" sx={{ minHeight: 40 }} gutterBottom>
                        {text}
                        <span style={{ color: '#90caf9' }}>|</span>
                    </Typography>

                    <Box mt={3} display="flex" flexWrap="wrap" gap={2}>
                        <Button variant="contained" color="primary" href="/projects">
                            View Projects
                        </Button>
                        <Button variant="outlined" color="inherit" href="/contact">
                            Contact Me
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    )
}

export default Hero;
