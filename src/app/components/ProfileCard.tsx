// components/ProfileCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

type ProfileCardProps = {
    imageSrc: string;
    name: string;
    bio: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, name, bio }) => {
    return (
        <Card sx={{display: 'flex', flexDirection: 'row'}}>
            <CardMedia
                sx={{width:'30%', height:'20%', objectFit: 'cover'}}
                component="img"
                image={imageSrc}
                alt={`${name} Profile Picture`}
            />
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {bio}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;
