'use client';
import * as React from "react";
import {Avatar, Box, Card, CardContent, CardMedia, Chip, Container, Grid, Icon, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import CircleIcon from '@mui/icons-material/Circle';
const getAssetPath = (path: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
};
import data from '../../data/khairunisa-resume.json';

export default function About() {

    return (
        <Container sx={{ py: 10 }}>
            {/* FOTO PROFIL + INTRO */}
                <Card sx={{
                    backgroundImage: 'url(/images/background/bg-2.jpg)' ,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'row',
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100}}>
                    <CardContent>
                        <Stack direction="row" spacing={1} sx={{

                            backgroundImage: 'url(/images/background/bg-3.png)' ,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            borderTopLeftRadius: 100,
                            borderBottomLeftRadius: 100}}>
                            <Box>
                                <Avatar
                                    src={data.photo}
                                    alt={data.photo}
                                    sx={{ width: 200,
                                        height: 200,
                                        backgroundSize: 'cover' }}
                                />
                            </Box>
                            <Box alignContent={'center'} justifyItems={'flex-end'}>
                                <Typography variant="h4" color={'white'} component="div" gutterBottom>
                                    Hello! I&#39;m <strong>{data.name}</strong>,
                                </Typography>
                                <Typography variant="h6" color={'white'} component="div" gutterBottom>
                                    <strong>&#34; {data.quete} &#34;</strong>
                                </Typography>
                            </Box>

                        </Stack>

                        <Box marginLeft={6} marginTop={3} pl={50}>
                            <Typography variant="body1" component="div" gutterBottom>
                                Summary
                            </Typography>
                            <Typography variant="body2" component="div" gutterBottom>
                                {data.summary}
                            </Typography>

                            <Typography variant="body1" mt={2} component={'div'} gutterBottom pl={7}>
                                Tech Stack
                            </Typography>
                            {data.skills.map((skill, i) => (
                                <Stack direction={'row'} key={i} mt={1} pl={7}>
                                    <Typography variant={'body2'} mr={4}>
                                        <CircleIcon sx={{fontSize: 6}}/> {skill.title} :
                                    </Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap">
                                        {skill.tools.map((tool, i) => (
                                            <Chip size={'small'} key={i} label={tool} sx={{ mb: 1 }} />
                                        ))}
                                    </Stack>
                                </Stack>
                            ))}

                        </Box>
                    </CardContent>
                </Card>


        </Container>
    );
}
