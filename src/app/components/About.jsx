"use client";
// components/About.jsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';
import NatureIcon from '@mui/icons-material/Nature';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';

export default function About() {
  const fantasies = [
    {
      icon: <HomeIcon />,
      title: "Perfect Property & Location",
      description: "Finding the perfect property in the perfect location that matches your dreams and budget."
    },
    {
      icon: <HandshakeIcon />,
      title: "Trusted Partners",
      description: "Finding a trusted developer/agent to make your realty journey seamless, peaceful and exciting."
    },
    {
      icon: <TrendingUpIcon />,
      title: "Investment Opportunities",
      description: "Low income earner but want to key into real estate investment? We've created a system for you to tap into endless financial opportunities."
    },
    {
      icon: <PublicIcon />,
      title: "International Investment",
      description: "Stay abroad and wish to invest in Nigeria? Been scammed before? We are here for you - you can trust us."
    }
  ];

  const services = [
    { name: "Marketing", color: "primary" },
    { name: "Development", color: "secondary" },
    { name: "Management", color: "success" },
    { name: "Appraisal", color: "info" },
    { name: "Construction", color: "warning" },
    { name: "Consultancy", color: "error" }
  ];

  const values = [
    {
      icon: <SecurityIcon />,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and integrity in every transaction."
    },
    {
      icon: <NatureIcon />,
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and sustainable development for future generations."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            gutterBottom
            sx={{ color: 'primary.main' }}
          >
            About Us: It's Actually About You!
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: 'md', mx: 'auto', lineHeight: 1.6 }}
          >
            Our core of existence is centered on taking you by the hand, to walk you through the 
            process of turning your realty fantasies into a reality.
          </Typography>
        </Box>

        {/* Your Fantasies Section */}
        <Box mb={10}>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            textAlign="center" 
            gutterBottom
            sx={{ mb: 4 }}
          >
            Your Realty Fantasies Could Be...
          </Typography>
          <Grid container spacing={4}>
            {fantasies.map((fantasy, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <Box 
                      sx={{ 
                        backgroundColor: 'primary.main', 
                        color: 'white', 
                        p: 1.5, 
                        borderRadius: '50%',
                        minWidth: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {fantasy.icon}
                    </Box>
                    <Box flex={1}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {index + 1}. {fantasy.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {fantasy.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission & Vision Section */}
        <Grid container spacing={6} mb={8}>
          {/* Mission */}
          <Grid item xs={12} lg={6}>
            <Paper 
              elevation={4} 
              sx={{ 
                p: 4, 
                height: '100%',
                borderRadius: 3,
                backgroundColor: 'primary.main',
                color: 'white'
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <FlagIcon sx={{ fontSize: 40 }} />
                <Typography variant="h4" fontWeight="bold">
                  Mission
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                With the ever growing African Population, we at ALOTER understand that providing 
                shelter for the populace is crucial. Hence, we are committed to providing affordable 
                landed properties for individuals who want to own a home, and also helping real estate 
                investors make the best of their investments.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontStyle: 'italic' }}>
                With our expertise and trained personnel working round the clock to ensure we offer 
                top notch, tailored and client centric solutions, your ride with us is a sure smooth one.
              </Typography>
            </Paper>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} lg={6}>
            <Paper 
              elevation={4} 
              sx={{ 
                p: 4, 
                height: '100%',
                borderRadius: 3,
                backgroundColor: 'secondary.main',
                color: 'white'
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <VisibilityIcon sx={{ fontSize: 40 }} />
                <Typography variant="h4" fontWeight="bold">
                  Vision
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                To take the lead in providing sustainable real estate solutions. Helping address 
                housing deficit, rebuilding trust and maintaining global industry best practices.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Services Section */}
        <Box mb={8}>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            textAlign="center" 
            gutterBottom
            sx={{ mb: 4 }}
          >
            Our Services
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {services.map((service, index) => (
              <Chip
                key={index}
                label={service.name}
                color={service.color}
                variant="filled"
                sx={{
                  fontSize: '1.1rem',
                  py: 2,
                  px: 3,
                  height: 'auto',
                  borderRadius: '25px',
                  fontWeight: 600,
                  '& .MuiChip-label': {
                    px: 2,
                    py: 1
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Values Section */}
        <Box>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            textAlign="center" 
            gutterBottom
            sx={{ mb: 4 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    borderRadius: 3,
                    textAlign: 'center',
                    backgroundColor: 'grey.50'
                  }}
                >
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      p: 2, 
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box 
          textAlign="center" 
          sx={{ 
            mt: 8, 
            p: 6, 
            backgroundColor: 'primary.main', 
            color: 'white', 
            borderRadius: 3 
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Turn Your Realty Fantasy Into Reality?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of satisfied clients who trusted ALOTER with their real estate journey
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
          >
            <Box
              component="a"
              href="#properties"
              sx={{
                display: 'inline-block',
                px: 4,
                py: 2,
                backgroundColor: 'white',
                color: 'primary.main',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }
              }}
            >
              Explore Properties
            </Box>
            <Box
              component="a"
              href="#contact"
              sx={{
                display: 'inline-block',
                px: 4,
                py: 2,
                border: '2px solid white',
                color: 'white',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'primary.main',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Contact Us Today
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
