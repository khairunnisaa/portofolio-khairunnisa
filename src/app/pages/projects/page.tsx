'use client';

import React from 'react';
import {
    Typography,
    Container,
    Card,
    CardContent,
    Avatar,
    CardHeader,
    CardMedia,
    Stack,
    Chip,
    Grid,
    Drawer,
    Box,
    IconButton, ImageList, ImageListItem, ImageListItemBar, Modal,
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import data from '../../data/khairunisa-resume.json';
import theme from "@/app/theme/theme";
interface Project {
    title: string;
    description: string;
    image: string;
    images: { image: string, name: string }[];
    logo: string;
    date: string;
    tools: {
        frontend: string[];
        backend?: string[];
        database?: string[];
        architecture?: string[];
    };
}
// Helper buat ambil asset dari public (pakai env variable kalau mau)

const getAssetPath = (path: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL || ''}${path}`;
};

const TechStackSection = ({
                              title,
                              stack = [],
                          }: {
    title: string;
    stack?: string[];
}) => {
    if (!stack?.length) return null;

    return (
        <Stack direction="column" sx={{ mt: 1 }}>
            <Typography variant="body2">{title}:</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
                {stack.map((tool, index) => (
                    <Chip key={index} label={tool} color="info" size="small" />
                ))}
            </Stack>
        </Stack>
    );
};

const ProjectDetailDrawer = ({project, open, onClose}: {
    project: Project | null;
    open: boolean;
    onClose: () => void;
}) => {
    if (!project) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    const handleImageClick = (imgUrl: string) => {
        setSelectedImage(imgUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <Drawer anchor="right"
                open={open}
                onClose={onClose}
                PaperProps={{sx: {zIndex: (theme) => theme.zIndex.modal + 10},
        }}>
            <Box sx={{ width: { xs: '100vw', sm: 500, md:700 }, p:2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{project.title}</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Stack>

                <Typography variant="subtitle2" color="text.secondary" mb={2}>
                    {project.date}
                </Typography>

                <ImageList sx={{ width: '100%', height: 400 }} gap={8}>
                    {project.images.map((img, i) => (
                        <ImageListItem key={i}>
                            <Image
                                src={getAssetPath(img.image)}
                                alt={img.image}
                                loading="lazy"
                                onClick={() => handleImageClick(img.image)}
                            />
                            <ImageListItemBar
                                title={img.name}
                                subtitle={<span>by: {img.name}</span>}
                                position="bottom"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <Typography variant={'body2'} textAlign={'justify'} sx={{ mt: 2 }}>{project.description}</Typography>
                <TechStackSection title="Frontend Technology" stack={project.tools.frontend} />
                <TechStackSection title="Backend Technology" stack={project.tools.backend} />
                <TechStackSection title="Database Technology" stack={project.tools.database} />
                <TechStackSection title="Architecture" stack={project.tools.architecture} />
            </Box>

            <Modal open={!!selectedImage} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'background.paper',
                        boxShadow: 24,
                        p: 2,
                        outline: 'none',
                        maxHeight: '90vh',
                        maxWidth: '90vw',
                        overflow: 'auto',
                    }}
                >
                    {selectedImage && (
                        <Image
                            src={getAssetPath(selectedImage)}
                            alt="logo"
                            width={'100'}
                            height={'80'}
                        />

                    )}
                </Box>
            </Modal>

        </Drawer>
    );
};

const ProjectCard = ({
                         project,
                         onSeeMore,
                     }: {
    project: Project;
    onSeeMore: (project: Project) => void;
}) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        src={project.logo}
                        alt={project.title}
                        sx={{ width: 56, height: 56, mr: 2 }}
                    />
                }
                title={project.title}
                subheader={project.date}
            />
            <CardMedia
                sx={{ height: 200 }}
                image={project.image}
                title={project.title}
            />
            <CardContent sx={{
                cursor: 'pointer',
                "&:hover": {
                    color: theme.palette.text.secondary,
                    backgroundColor: 'rgba(37,36,36,0.8)',
                },
            }}>
                <Typography variant="body2">Description :</Typography>
                <Typography
                    variant={'body2'}
                    onClick={() => onSeeMore(project)}
                >
                    {project.description.substring(0, 100)}...
                </Typography>
            </CardContent>
        </Card>
    );
};

export default function Page() {
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleOpenDrawer = (project: Project) => {
        setSelectedProject(project);
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setSelectedProject(null);
    };

    return (
        <Container sx={{ py: 10 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                My Projects
            </Typography>

            <Grid container spacing={2}>
                {data.projects.map((project: Project, index: number) => (
                    <Grid size={{xs:12, md:4}}  key={index}>
                        <ProjectCard project={project} onSeeMore={handleOpenDrawer} />
                    </Grid>
                ))}
            </Grid>

            <ProjectDetailDrawer
                project={selectedProject}
                open={drawerOpen}
                onClose={handleCloseDrawer}
            />
        </Container>
    );
}
