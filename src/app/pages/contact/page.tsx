'use client';
import {Container, Typography, Stack, Link as MuiLink, Card, CardContent, Divider} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import * as React from "react";

const contact = [
    {   name: 'Khairunnisa',
        position: 'Software Engineering | Full Stack Developer | Backend Developer',
        location: { icon: <LocationOnIcon />, name: 'Persiaran Sepang, Cyberjaya, Selangor'},
        address: { icon: <BusinessIcon />, name: 'Mutiara Ville Tower J Unit 29-06'},
        phone: { icon: <PhoneIcon />, name: '(+60) 19 904 2749'},
        email:  { icon: <EmailIcon />, name: ' nissa.khairunnisaaa@gmail.com'},
        github:  { icon: <GitHubIcon />, name: ' https://www.github.com/khairunnisaa'},
        linked:  { icon: <LinkedInIcon />, name: 'https://linkedin.com/in/khairunnisa-khairunnisa-83022861'},
    },
];

export default function Page() {
    return (
        <Container sx={{ py: 10 }}>
            <Typography variant="h4" gutterBottom>
                Contact Me
            </Typography>

            <Typography variant="body1" paragraph>
                Have a project in mind, a collaboration opportunity, or just want to say hi? I&#39;d love to hear from you!
            </Typography>

            <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 4, p: 2, bgcolor: 'tan' }}>
                <CardContent>
                    {contact.map((contact, index) => (
                        <Stack spacing={1} key={index}>
                            <Typography variant="h5" color="" fontWeight="bold">
                                {contact.name}
                            </Typography>
                            <Typography variant="subtitle1" color="">
                                {contact.position}
                            </Typography>

                            <Divider sx={{ my: 1 }}  color='primary'/>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                {contact.location.icon}
                                <Typography variant="body2">
                                    {contact.location.name}
                                </Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                {contact.address.icon}
                                <Typography variant="body2">
                                    {contact.address.name}
                                </Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                {contact.phone.icon}
                                <Typography variant="body2"> {contact.phone.name}</Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                {contact.email.icon}
                                <Typography variant="body2">
                                    <MuiLink color={'info'} href="mailto:you@example.com" underline="hover">
                                        {contact.email.name}
                                    </MuiLink>
                                </Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                {contact.github.icon}
                                <Typography variant="body2">
                                    <MuiLink color={'info'} href={contact.github.name} target="_blank" underline="hover">
                                        {contact.github.name}
                                    </MuiLink>
                                </Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                {contact.linked.icon}
                                <Typography variant="body2">
                                    <MuiLink color={'info'} href={contact.linked.name} target="_blank" underline="hover">
                                        {contact.linked.name}
                                    </MuiLink>
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}

                </CardContent>
            </Card>
        </Container>
    );
}
