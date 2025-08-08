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
      description: "Verified property titles and escrow payment options for maximum security",
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Virtual Tours",
      description: "360° property views and live video calls before making any commitment",
      icon: <VideocamIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: "Legal Support",
      description: "Complete documentation assistance and government approval guidance",
      icon: <GavelIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    }
  ];

  return (
    <Box sx={{ backgroundColor: 'grey.100', py: 8 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" color="text.primary" mb={2}>
            Diaspora Investment Solutions
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
            Specially designed services for our overseas investors to invest with confidence
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 3,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Box mb={3}>
                  {item.icon}
                </Box>
                <Typography variant="h5" fontWeight="bold" mb={2} color="text.primary">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box textAlign="center" mt={8}>
          <Typography variant="h5" fontWeight="bold" mb={2} color="text.primary">
            Ready to Invest from Abroad?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Join thousands of diaspora investors who trust ALOTER with their real estate investments
          </Typography>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="center">
            <Box
              component="a"
              href="#contact"
              sx={{
                display: 'inline-block',
                backgroundColor: 'primary.main',
                color: 'white',
                px: 4,
                py: 2,
                borderRadius: 2,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0,100,215,0.3)',
                }
              }}
            >
              Schedule Consultation
            </Box>
            <Box
              component="a"
              href="#properties"
              sx={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: 'primary.main',
                border: '2px solid',
                borderColor: 'primary.main',
                px: 4,
                py: 2,
                borderRadius: 2,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Browse Properties
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}