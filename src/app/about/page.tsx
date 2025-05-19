'use client';
import * as React from "react";
import {Card, CardContent, CardMedia, Chip, Container, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import {motion} from "framer-motion";

const getAssetPath = (path: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
};

const techStack = [
    {
        title: 'Frontend Technology',
        stack: ['Angular.JS','Vue.js','Next.js', 'React.js','Nuxt.js'],
    },
    {
        title: 'Backend Technology',
        stack: ['Node.JS','Java Spring Boot','Java 8', 'Laravel'],
    },
    {
        title: 'Css Framework',
        stack: ['Boostrap','MUI','Tailwind'],
    },
    {
        title: 'Development Tools',
        stack: ['Git','Docker', 'Kafka', 'Nginx', 'OpenShift'],
    },
    {
        title: 'Cloud Platform',
        stack: ['AWS',' Google Cloud Platform'],
    },
    {
        title: 'Database',
        stack: ['Oracle', 'MySQL Server', 'MongoDB', 'PostgreSQL'],
    },
];
export default function About() {

    return (
        <Container sx={{ py: 10 }}>
            {/* FOTO PROFIL + INTRO */}
                <Card sx={{height: '80vh', display: 'flex', flexDirection: 'row', border:'none'}}>
                    <CardMedia
                        sx={{objectFit: 'cover'}}
                        component="img"
                        image={getAssetPath('/nisa.jpeg')}
                        alt={'nisa.jpeg'}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Hello! I&#39;m <strong>Khairunnisa</strong>,
                        </Typography>
                        <Typography variant="body2">
                            <strong>About me</strong> I,am a experienced Software Engineer with a
                            strong background in backend and full-
                            stack development. Over a decade of
                            expertise in fintech, e-commerce, and
                            banking industries. Skilled in Java
                            Spring Boot, PostgreSQL, and Node.js
                            to drive system scalability and
                            enhance user experience. Proven
                            ability to lead cross-functional teams in
                            delivering innovative solutions and
                            solving complex projects within tight
                            deadlines. Committed to continuous
                            learning to stay ahead in the ever-
                            evolving tech landscape.
                        </Typography>

                        <Typography variant="h5" mt={2} component={'div'} gutterBottom>
                            Tech Stack
                        </Typography>
                        {techStack.map((stack, i) => (
                            <Stack key={i} mt={1}>
                                <Typography variant={'body2'}>
                                    {stack.title}
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {stack.stack.map((s, a) => (
                                        <Chip key={a} label={s} sx={{ mb: 1 }} />
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </CardContent>
                </Card>
        </Container>
    );
}
