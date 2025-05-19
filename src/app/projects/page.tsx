'use client';
import {Typography, Container, CardMedia, Card, CardContent, CardActions, Button} from '@mui/material';
import {Grid} from "@mui/system";
import React from "react";
import {motion} from 'framer-motion';

export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects = [
    {
        title: 'Anime Search App',
        description: 'A React app to search and browse anime using Jikan API.',
        image: '/images/anime-app.png',
        link: 'https://github.com/yourusername/anime-search-app',
    },
    {
        title: 'Tour Booking Website',
        description: 'Landing page for a tour company with pricing cards and contact form.',
        image: '/images/tour-website.png',
        link: 'https://yourtourwebsite.com',
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio built with Next.js, TypeScript, and MUI.',
        image: '/images/portfolio.png',
        link: '/',
    },
];

export default function Page() {
    return (
        <Container sx={{ py: 10 }}>
            <Typography variant="h4" gutterBottom>
                My Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid key={index} sx={{xs:12, sm:6, md:4}}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={project.image}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
