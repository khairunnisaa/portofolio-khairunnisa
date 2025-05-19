'use client';

import Hero from "@/app/components/Hero";
import {Box, Card, CardContent, CardHeader, CardMedia, Container, Typography,} from "@mui/material";
import ProfileCard from "@/app/components/ProfileCard";
import {Grid} from "@mui/system";
import React from "react";

export default function Home() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Hero/>
        </Box>

    )
}
