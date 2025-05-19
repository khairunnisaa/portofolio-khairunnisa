'use client';
import {Container, Typography, Box, Stack, Button, Link as MuiLink, Card, CardContent, Divider} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {motion} from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

export default function Page() {
    return (
        <Container sx={{ py: 10 }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
            <Typography variant="h4" gutterBottom>
                Contact Me
            </Typography>

            <Typography variant="body1" paragraph>
                Have a project in mind, a collaboration opportunity, or just want to say hi? I'd love to hear from you!
            </Typography>
            </motion.div>



            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
            <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 4, p: 2 }}>
                <CardContent>
                    <Stack spacing={1}>
                        <Typography variant="h6" color="primary" fontWeight="bold">
                            Khairunnisa
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Software Engineering
                        </Typography>

                        <Divider sx={{ my: 1 }} />

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <BusinessIcon fontSize="small" />
                            <Typography variant="body2">
                                Persiaran Sepang, Cyberjaya, Selangor
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <LocationOnIcon fontSize="small" />
                            <Typography variant="body2">
                               Mutiara Ville Tower J Unit 29-06
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <PhoneIcon fontSize="small" />
                            <Typography variant="body2">(+60) 19 904 2749</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <EmailIcon fontSize="small" />
                            <Typography variant="body2">
                                <MuiLink color={'info'} href="mailto:you@example.com" underline="hover">
                                    nissa.khairunnisaaa@gmail.com
                                </MuiLink>
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <GitHubIcon fontSize="small" />
                            <Typography variant="body2">
                                <MuiLink color={'info'} href=" https://www.github.com/khairunnisaa" target="_blank" underline="hover">
                                    https://www.github.com/khairunnisaa
                                </MuiLink>
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <LinkedInIcon fontSize="small" />
                            <Typography variant="body2">
                                <MuiLink color={'info'} href="https://www.linkedin.com/in/khairunnisa-83022861/" target="_blank" underline="hover">
                                    https://www.linkedin.com/in/khairunnisa-83022861/
                                </MuiLink>
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
            </motion.div>
        </Container>
    );
}
