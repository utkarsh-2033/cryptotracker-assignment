import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
  Stack
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialLinks = [
    { icon: <TwitterIcon />, label: 'Twitter', url: '#' },
    { icon: <GitHubIcon />, label: 'GitHub', url: '#' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', url: '#' }
  ];

  const quickLinks = [
    { text: 'Home', url: '/' },
    { text: 'Markets', url: '/markets' },
    { text: 'Portfolio', url: '/portfolio' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, sm: 6 },
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.grey[50],
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Crypto Tracker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Real-time cryptocurrency price tracking and market data.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.url}
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Connect With Us
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    color="inherit"
                    aria-label={social.label}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Box 
          sx={{ 
            mt: 5, 
            textAlign: 'center',
            pt: 3,
            borderTop: `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Crypto Tracker. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 