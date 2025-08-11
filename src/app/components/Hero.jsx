"use client";
// components/Hero.jsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box
      position="relative"
      minHeight="700px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `
          linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,100,215,0.8) 100%),
          url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80") center/cover
        `,
        color: 'common.white',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for better text readability */}
      <Box
        position="absolute"
        inset={0}
        sx={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,100,215,0.3) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" px={2}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              letterSpacing: '1px'
            }}
          >
            ALOTER REALTY LTD
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              fontStyle: 'italic',
              textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
            }}
          >
            Your trusted partner in Nigerian real estate
          </Typography>

          <Typography 
            variant="h1" 
            fontWeight="bold" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.1,
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
              background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))',
            }}
          >
            Your Dream Property <br /> Awaits in Nigeria
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              mb: 6, 
              opacity: 0.95, 
              maxWidth: '700px', 
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              backgroundColor: 'rgba(0,0,0,0.2)',
              padding: '16px 24px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            }}
          >
            Whether you're looking for a home, investment property, or developer partnership, 
            we provide trusted real estate solutions tailored to your needs across Nigeria and beyond.
          </Typography>

          {/* Services Highlight */}
          <Box
            sx={{
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: 'primary.main',
              padding: '20px 32px',
              borderRadius: '16px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                textAlign: 'center',
                mb: 1,
                fontSize: '1.3rem'
              }}
            >
              🏢 Complete Real Estate Solutions
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign: 'center',
                fontWeight: 500,
                lineHeight: 1.4,
                fontSize: '1.1rem'
              }}
            >
              From Development to Investment • Marketing to Management • Professional Appraisal Services
            </Typography>
          </Box>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 8 }}
          >
            <Button 
              variant="contained" 
              size="large" 
              href="#properties"
              sx={{
                backgroundColor: 'white !important',
                color: '#0064d7 !important',
                px: 5,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: '50px',
                minWidth: '200px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                textDecoration: 'none',
                border: 'none !important',
                background: 'white !important',
                backgroundImage: 'none !important',
                backgroundSize: 'auto !important',
                backgroundRepeat: 'no-repeat !important',
                backgroundPosition: '0% 0% !important',
                backgroundAttachment: 'scroll !important',
                backgroundOrigin: 'padding-box !important',
                backgroundClip: 'border-box !important',
                textShadow: 'none !important',
                // Override Material-UI's variant styles completely
                '--variant-containedBg': 'white !important',
                '--variant-containedColor': '#0064d7 !important',
                '&.MuiButton-contained': {
                  backgroundColor: 'white !important',
                  color: '#0064d7 !important',
                  backgroundImage: 'none !important',
                },
                '&:hover': {
                  backgroundColor: '#f8f9fa !important',
                  color: '#0052cc !important',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  backgroundImage: 'none !important',
                },
                '&:focus': {
                  backgroundColor: 'white !important',
                  color: '#0064d7 !important',
                  backgroundImage: 'none !important',
                }
              }}
            >
              Browse Properties
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              href="#contact"
              sx={{
                borderColor: 'white !important',
                borderWidth: '2px !important',
                color: 'white !important',
                px: 5,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: '50px',
                minWidth: '200px',
                backgroundColor: 'transparent !important',
                backdropFilter: 'blur(10px)',
                background: 'transparent !important',
                backgroundImage: 'none !important',
                backgroundSize: 'auto !important',
                backgroundRepeat: 'no-repeat !important',
                backgroundPosition: '0% 0% !important',
                backgroundAttachment: 'scroll !important',
                backgroundOrigin: 'padding-box !important',
                backgroundClip: 'border-box !important',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6) !important',
                // Override Material-UI's variant styles
                '--variant-outlinedColor': 'white !important',
                '--variant-outlinedBorder': 'white !important',
                '&.MuiButton-outlined': {
                  color: 'white !important',
                  borderColor: 'white !important',
                  backgroundColor: 'transparent !important',
                  backgroundImage: 'none !important',
                },
                '&:hover': {
                  borderColor: 'white !important',
                  borderWidth: '2px !important',
                  backgroundColor: 'rgba(255,255,255,0.15) !important',
                  color: 'white !important',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 32px rgba(255,255,255,0.2)',
                  backgroundImage: 'none !important',
                },
                '&:focus': {
                  backgroundColor: 'transparent !important',
                  color: 'white !important',
                  borderColor: 'white !important',
                  backgroundImage: 'none !important',
                }
              }}
            >
              Get Consultation
            </Button>
          </Stack>

          {/* Stats */}
          <Box 
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              p: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={4} 
              justifyContent="center"
              divider={
                <Box sx={{ 
                  width: { xs: '100px', md: '2px' }, 
                  height: { xs: '2px', md: '80px' },
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  mx: 'auto'
                }} />
              }
            >
              <Box textAlign="center">
                <Typography 
                  variant="h3" 
                  fontWeight="bold" 
                  sx={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #ffd700 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  500+
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 500, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  Properties Sold
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography 
                  variant="h3" 
                  fontWeight="bold"
                  sx={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #ffd700 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ₦5B+
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 500, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  Value Transacted
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography 
                  variant="h3" 
                  fontWeight="bold"
                  sx={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #ffd700 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  1000+
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 500, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  Happy Clients
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}