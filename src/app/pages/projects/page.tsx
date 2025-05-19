'use client';
import { Typography, Container, CardMedia, Card, CardContent, CardActions, Button, Box, Stack } from '@mui/material';
import React from "react";

export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Anime Search App',
        description: 'A React app to search and browse anime using Jikan API.',
        image: 'https://picsum.photos/200/300',
        link: 'https://github.com/yourusername/anime-search-app',
    },
    {
        title: 'Tour Booking Website',
        description: 'Landing pages for a tour company with pricing cards and contact form.',
        image: 'https://picsum.photos/200/300',
        link: 'https://yourtourwebsite.com',
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio built with Next.js, TypeScript, and MUI.',
        image: 'https://picsum.photos/200/300',
        link: '/',
    },
];

export default function Page() {
    return (
        <Container sx={{ py: 10 }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
                My Projects
            </Typography>
            <Stack spacing={4}>
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                md: index % 2 === 1 ? 'row-reverse' : 'row', // Zig-zag effect
                            },
                            alignItems: 'center',
                            minHeight: 220,
                            boxShadow: 3,
                            borderRadius: 3,
                            overflow: 'hidden',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: 6,
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{
                                width: { xs: '100%', md: 280 },
                                height: { xs: 180, md: 220 },
                                objectFit: 'cover',
                                flexShrink: 0,
                                filter: 'brightness(0.92)',
                                transition: 'filter 0.3s',
                                '&:hover': {
                                    filter: 'brightness(1)',
                                },
                            }}
                        />
                        <Box
                            sx={{
                                flex: 1,
                                p: { xs: 2, md: 3 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                bgcolor: { xs: 'background.paper', md: 'transparent' },
                            }}
                        >
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ borderRadius: 2, px: 3 }}
                                >
                                    View Project
                                </Button>
                            </CardActions>
                        </Box>
                    </Card>
                ))}
            </Stack>
        </Container>
    );
}
