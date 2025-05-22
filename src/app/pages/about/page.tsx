'use client';
import * as React from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import CircleIcon from '@mui/icons-material/Circle';
import data from '../../data/khairunisa-resume.json';

const getAssetPath = (path: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
};

export default function About() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container sx={{ py: 10 }}>
            <Card
                sx={{
                    backgroundImage: 'url(/images/background/bg-2.jpg)',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: { xs: 4, md: '100px 0 0 100px' },
                }}
            >
                <CardContent>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={3}
                        sx={{
                            backgroundImage: 'url(/images/background/bg-3.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            borderRadius: { xs: 4, md: '100px 0 0 100px' },
                            p: 3,
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            src={data.photo}
                            alt={data.photo}
                            sx={{
                                width: 150,
                                height: 150,
                                backgroundSize: 'cover',
                            }}
                        />
                        <Box textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography variant="h4" color="white" gutterBottom>
                                Hello! I'm <strong>{data.name}</strong>,
                            </Typography>
                            <Typography variant="h6" color="white" gutterBottom>
                                <strong>“{data.quete}”</strong>
                            </Typography>
                        </Box>
                    </Stack>

                    <Box mt={4} sx={{ pl: {md:70} }}>
                        <Typography variant="body1" gutterBottom>
                            Summary
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {data.summary}
                        </Typography>

                        <Typography variant="body1" mt={3} gutterBottom>
                            Tech Stack
                        </Typography>
                        {data.skills.map((skill, i) => (
                            <Stack direction={{xs: 'column', md:'row'}} key={i} spacing={1}>
                                <Typography variant="body2" fontWeight="bold">
                                    <CircleIcon sx={{ fontSize: 6, mr: 1 }} />
                                    {skill.title}:
                                </Typography>
                                {skill.tools.map((tool, j) => (
                                    <Chip size="small" key={j} label={tool}  color={'info'}/>
                                ))}
                            </Stack>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
