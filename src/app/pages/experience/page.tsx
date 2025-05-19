'use client';

import {
    Container,
    Typography,
    Paper, Box, Chip,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import {motion} from 'framer-motion';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Stack} from "@mui/system";
import * as React from "react";


const experiences = [
    {
        title: 'Backend Engineer -  Java Spring Boot',
        company: 'Mandrill Tech Sdn, Bhd - Kuala Lumpur, Malaysia | Project MoneyX | Remote',
        year: 'Jun 2024 - Jan 2025',
        description: [
            'Developed backend modules for a Lead Management System handling ~10K+ monthly submissions across 3 sectors.',
            'Created real-time Admin Dashboard APIs, increasing operational data accuracy by 35%',
            'Helped streamline approval workflows, reducing decision cycle time from 3 days to under 24 hours.',
            'Optimized PostgreSQL queries using JPA, improving database read speed by 28%'
        ],
        tool: ['Java Spring Boot', 'PostgresSQL', 'Kafka', 'Docker', 'RESTFul APIs','Docker'],
        icon: <WorkIcon />,
        color: 'primary',
    },

    {
        title: 'Software Developer -  Java Spring Boot',
        company: 'AMK Technology Sdn, Bhd - Kuala Lumpur, Malaysia | Project Maybank | Onsite',
        year: 'Jun 2023 - Dec 2023',
        description: [
            'Developed highly concurrent services for Remittance Portal supporting 1,200 TPM with sub-150ms P95 latency.',
            'Configured Kafka consumers with back-pressure handling and idempotent message delivery',
            'Reduced message processing delay by 50ms via Kafka tuning and prefetching',
            'Achieved 99.97% system uptime through circuit breaker integration using Resilience4j and fallback caching via Redis.'
        ],
        tool: ['Java Spring Boot','Node.js', 'Typescript', 'PostgresSQL', 'Kafka', 'Apache', 'Java Swing','RESTFul APIs'],
        icon: <WorkIcon />,
        color: 'primary',
    },

    {
        title: 'Backend Engineer -  Java Spring Boot',
        company: 'PT. Infosys Solusi Terpadu - Jakarta, Indonesia | Project Bank CIMB Niaga Octo Mobile | Remote',
        year: 'Jun 2022 - Jun 2023',
        description: [
            'Reduced average API latency by 15% for CIMB Niaga\'s product services used by over 200K app users.',
            'Built Octo Mobile\'s dashboard config platform, increasing settings-related feature usage by 18%.',
            'Delivered loan calculator features for BTN\'s mobile app, boosting application form completion by 25%'
        ],
        tool: ['Java Spring Boot','Oracle', 'Kafka', 'Apache', 'Docker', 'RESTFul APIs'],
        icon: <WorkIcon />,
        color: 'primary',
    },

    {
        title: 'Software Engineer II - Java Spring Boot',
        company: 'PT. Infosys Solusi Terpadu - Jakarta, Indonesia | Project Bank CIMB Niaga Octo Mobile | Remote',
        year: 'Jun 2022 - Jun 2023',
        description: [
            'Reduced average API latency by 15% for CIMB Niaga\'s product services used by over 200K app users.',
            'Built Octo Mobile\'s dashboard config platform, increasing settings-related feature usage by 18%.',
            'Delivered loan calculator features for BTN\'s mobile app, boosting application form completion by 25%'
        ],
        icon: <WorkIcon />,
        tool: ['Java Spring Boot','Oracle', 'Kafka', 'Apache', 'Docker', 'RESTFul APIs'],
        color: 'primary',
    },

    {
        title: 'Software Engineer II - Node.Js',
        company: 'PT. Moladin Digital Indonesia - Jakarta, Indonesia | Project Dashboard Admin Moladin Web App  | Remote',
        year: 'Oct 2022 - Mar 2023',
        description: [
            'Built a performance-based incentive engine, increasing active salesperson engagement by 22%.' +
            'Developed monitoring tools that decreased sales KPI reporting lab by 40%',
            'Optimized internal services, cutting API response time from 500ms to 360ms on average.'
        ],
        tool: ['Node.js','Typescript', 'PostgresSQL','Oracle', 'Kafka', 'Docker', 'RESTFul APIs'],
        icon: <WorkIcon />,
        color: 'primary',
    },

    {
        title: 'Fullstack Engineer',
        company: 'Bank BTPN - Jakarta, Indonesia | Project JOFIS and Jenius Mobile App | On-site',
        year: 'Jan 2019 - Dec 2021',
        description: [
            'Developed SLIK Credit Checking API, reducing credit evaluation time by 60%.' +
            'Automated financial report generation for 500+ SME clients improving report turnaround time by 70%',
            'Improved PDF/Excel reporting engine by batching DB calls leading to 3x faster generation.',
            'Led backend overhaul of seller dashboard of Jenius, boosting active user rate by 17%'
        ],
        tool: ['Node.js','Typescript', 'MongoDB', 'Kafka', 'React Native', 'Java Spring Boot', 'Oracle'],
        icon: <WorkIcon />,
        color: 'primary',
    },

    {
        title: 'Software Engineer',
        company: 'PT. Mitra Integrasi Informatika - Jakarta, Indonesia | Project Bank Negara Indonesia | On-site',
        year: 'Jan 2017 - Dec 2018',
        description: [
            'Developed approval workflow engine with multistep verification using Spring State Machine.' ,
            'Optimized SQL batch operations from 12 minutes to under 5 minutes via query tuning and indexing.',
            'Implemented GCP-deployed services with autoscaling based o load metrics.',
            'Developed sensor triggered alert service for mining safety platform using REST + WebSocket',
            'Improved system uptime from 92% to 96.5% via retry strategies and resilient error handling.'
        ],
        tool: ['Node.js','Typescript', 'MongoDB', 'Kafka', 'Docker', 'RESTFul APIs', 'Java Spring Boot', 'Oracle'],
        icon: <WorkIcon />,
        color: 'primary',
    },
];

export default function ExperiencePage() {
    return (
        <Container sx={{ py: 10 }}>
            <Typography variant="h4" gutterBottom>
                Experience
            </Typography>

            <Timeline position="right">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent color="text.secondary" sx={{ flex: 0.2 }}>
                            <Typography variant="body2">{exp.year}</Typography>
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineDot color={exp.color as any}>
                                {exp.icon}
                            </TimelineDot>
                            {index < experiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>

                        <TimelineContent>
                            <Paper elevation={3} sx={{ p: 3 }}>
                                <Typography variant="h6" fontWeight={600}>
                                    {exp.title}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    {exp.company}
                                </Typography>
                                {exp.description.map((des,index)=> (
                                    <Stack direction={'row'}  alignContent={'center'} key={index}>
                                        <FiberManualRecordIcon sx={{fontSize: 7, marginX: 1, marginTop: 1}}/>
                                        <Typography variant="body2">{des}</Typography>
                                    </Stack>
                                ))}
                                <Stack direction={'row'}  alignContent={'center'} key={index}>
                                    <Typography variant="body2">Tool :</Typography>
                                {exp.tool.map((tool,index)=> (
                                        <Chip size={'small'} label={tool} key={index} sx={{marginX: 1}}/>
                                ))}
                                </Stack>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Container>
    );
}
