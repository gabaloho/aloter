"use client";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SecurityIcon from '@mui/icons-material/Security';
import VideocamIcon from '@mui/icons-material/Videocam';
import GavelIcon from '@mui/icons-material/Gavel';

export default function DiasporaAssurance() {
  const items = [
    {
      title: "Anti-Scam Protection",
      description: "Verified property titles, legal documentation checks, and secure escrow payment options for maximum security in your investment journey.",
      icon: <SecurityIcon sx={{ fontSize: 48, color: 'white' }} />
    },
    {
      title: "Virtual Tours & Inspection",
      description: "360° property views, live video calls with agents, and detailed virtual walkthroughs before making any financial commitment.",
      icon: <VideocamIcon sx={{ fontSize: 48, color: 'white' }} />
    },
    {
      title: "Legal & Documentation Support",
      description: "Complete documentation assistance, government approval guidance, and legal support throughout your property acquisition process.",
      icon: <GavelIcon sx={{ fontSize: 48, color: 'white' }} />
    }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 50%, #0064d7 100%)',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&q=80") center/cover',
          opacity: 0.1,
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: 'white',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            🌍 Global ESG Infrastructure Investment
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Comprehensive ESG-compliant infrastructure finance and development solutions for international investors seeking sustainable returns
          </Typography>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {items.map((item, index) => (
            <Grid item xs={12} lg={4} key={item.title}>
              <Paper
                elevation={8}
                sx={{
                  p: 5,
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 4,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, 
                      ${index === 0 ? '#ff6b6b' : index === 1 ? '#4ecdc4' : '#45b7d1'} 0%, 
                      ${index === 0 ? '#ee5a52' : index === 1 ? '#44a08d' : '#2196f3'} 100%
                    )`,
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                  }
                }}
              >
                {/* Icon Section */}
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, 
                      ${index === 0 ? '#ff6b6b' : index === 1 ? '#4ecdc4' : '#45b7d1'} 0%, 
                      ${index === 0 ? '#ee5a52' : index === 1 ? '#44a08d' : '#2196f3'} 100%
                    )`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(10deg) scale(1.1)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  {item.icon}
                </Box>

                {/* Content */}
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    mb: 3,
                    color: '#1a1a1a',
                    fontSize: { xs: '1.5rem', md: '1.75rem' }
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Enhanced CTA Section */}
        <Box
          textAlign="center"
          sx={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            p: 6,
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 2,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Ready to Invest from Abroad? 🚀
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 5,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Join global investors who trust GUE REALTY LIMITED with their ESG-compliant infrastructure and development finance needs.
            Start your sustainable investment journey today with a comprehensive consultation.
          </Typography>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap={3}
            justifyContent="center"
          >
            <Box
              component="a"
              href="#contact"
              sx={{
                display: 'inline-block',
                backgroundColor: 'white !important',
                color: '#0064d7 !important',
                px: 6,
                py: 3,
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.2rem',
                minWidth: '200px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                background: 'white !important',
                backgroundImage: 'none !important',
                textShadow: 'none',
                '&:hover': {
                  backgroundColor: '#f0f8ff !important',
                  color: '#0052cc !important',
                  transform: 'translateY(-3px) scale(1.05)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                  backgroundImage: 'none !important',
                }
              }}
            >
              📞 Schedule Free Consultation
            </Box>
            <Box
              component="a"
              href="#properties"
              sx={{
                display: 'inline-block',
                backgroundColor: 'transparent !important',
                color: 'white !important',
                border: '2px solid white',
                px: 6,
                py: 3,
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.2rem',
                minWidth: '200px',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                background: 'transparent !important',
                backgroundImage: 'none !important',
                textShadow: '0 0 8px rgba(0,0,0,0.8)',
                '&:hover': {
                  backgroundColor: 'white !important',
                  color: '#0064d7 !important',
                  transform: 'translateY(-3px) scale(1.05)',
                  boxShadow: '0 12px 32px rgba(255,255,255,0.3)',
                  backgroundImage: 'none !important',
                  textShadow: 'none',
                }
              }}
            >
              🏘️ Browse Properties
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}