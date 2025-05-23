'use client';

import {
    Container,
    Typography,
    Paper,
    Box,
    Chip,
    Avatar,
    useMediaQuery,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
    TimelineOppositeContent,
    TimelineConnector,
} from '@mui/lab';
import data from '../../data/khairunisa-resume.json';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/system';
import * as React from 'react';
import theme from '@/app/theme/theme';
import { useTheme } from '@mui/material/styles';

const getAssetPath = (path: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL || ''}${path}`;
};

export default function ExperiencePage() {
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down('sm'));

    return (
        <Container sx={{ my: 10 }}>
            <Typography variant="h5" fontWeight="bold" mb={4}>
                Experience
            </Typography>

            <Box
                sx={{
                    backgroundImage: `url(${getAssetPath('/images/background/bg-2.jpg')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    color: theme.palette.text.primary,
                    overflow: 'hidden',
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[5],
                    px: { xs: 1, sm: 3 },
                    py: { xs: 3, sm: 6 },
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                    }}
                />

                <Timeline position={isMobile ? 'right' : 'alternate'} sx={{ zIndex: 2 }}>
                    {data.experience.map((exp, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent sx={{ flex: 0.2 }}>
                                    <Typography variant="body2" color="text.primary">
                                        {exp.year}
                                    </Typography>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <Avatar
                                        src={getAssetPath(exp.icon)}
                                        alt={exp.title}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent>
                                        <Paper elevation={3} sx={{ p: 2 }}>
                                            <Typography variant="h6" fontWeight={600}>
                                                {exp.title}
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                {exp.company}
                                            </Typography>

                                            {exp.description.map((des, i) => (
                                                <Stack direction="row" key={i} alignItems="flex-start">
                                                    <FiberManualRecordIcon
                                                        sx={{ fontSize: 8, mt: '6px', mr: 1 }}
                                                    />
                                                    <Typography variant="body2">{des}</Typography>
                                                </Stack>
                                            ))}

                                            <Box mt={2}>
                                                <Typography variant="body2" fontWeight="bold">
                                                    Tools:
                                                </Typography>
                                                <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                                                    {exp.tool.map((tool, i) => (
                                                        <Chip
                                                            size="small"
                                                            label={tool}
                                                            key={i}
                                                            sx={{ bgcolor: 'primary.light' }}
                                                        />
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </Box>
        </Container>
    );
}
