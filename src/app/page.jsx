// src/app/page.jsx
// Updated for hydration fix
import Hero from './components/Hero';
import About from './components/About';
import InvestmentPlans from './components/InvestmentPlans';
import StatsCounter from './components/StatsCounter';
import TestimonialSlider from './components/TestimonialSlider';
import DiasporaAssurance from './components/DiasporaAssurance';
import PropertyGrid from './components/PropertyGrid';
import PropertyMap from './components/PropertyMap';
import Contact from './components/Contact';
import BrandLogo from './components/BrandLogo';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './globals.css';

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="sticky" elevation={1} sx={{ backgroundColor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 } }}>
            <BrandLogo />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button color="primary" href="#home" sx={{ color: 'text.primary' }}>Home</Button>
              <Button color="primary" href="#about" sx={{ color: 'text.primary' }}>About</Button>
              <Button color="primary" href="#properties" sx={{ color: 'text.primary' }}>Properties</Button>
              <Button color="primary" href="#investment-plans" sx={{ color: 'text.primary' }}>Investment Plans</Button>
              <Button color="primary" href="#testimonials" sx={{ color: 'text.primary' }}>Testimonials</Button>
              <Button variant="contained" color="primary" href="#contact">Contact Us</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Property Grid Section */}
        <section id="properties">
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <PropertyGrid />
          </Container>
        </section>

        {/* Investment Plans Section */}
        <section id="investment-plans">
          <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
            <Container maxWidth="lg">
              <Box textAlign="center" mb={6}>
                <Box component="h2" sx={{ typography: 'h3', fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
                  Investment Plans
                </Box>
                <Box component="p" sx={{ typography: 'h6', color: 'text.secondary', maxWidth: 'md', mx: 'auto' }}>
                  Choose the perfect investment plan that suits your budget and goals
                </Box>
              </Box>
              <InvestmentPlans />
            </Container>
          </Box>
        </section>

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialSlider />
        </section>

        {/* Diaspora Assurance Section */}
        <DiasporaAssurance />

        {/* Property Map Section */}
        <PropertyMap />

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer */}
        <Box component="footer" sx={{ backgroundColor: 'grey.900', color: 'common.white', py: 6 }}>
          <Container maxWidth="lg">
            <Box textAlign="center">
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mb: 3
              }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  p: 1
                }}>
                  <Box
                    component="img"
                    src="/logo.svg"
                    alt="ALOTER REALTY LTD"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <Box textAlign="left">
                  <Typography variant="h5" fontWeight="bold">
                    ALOTER REALTY LTD
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Turning your realty fantasies into reality
                  </Typography>
                </Box>
              </Box>
              <Box component="p" sx={{ typography: 'body2', mt: 2, opacity: 0.8 }}>
                © 2025 ALOTER REALTY LTD. All rights reserved.
              </Box>
              <Box component="p" sx={{ typography: 'body2', mt: 1, opacity: 0.8 }}>
                RC Number: 8371222 | Real Estate Development, Investment, Marketing, Appraisal and Management
              </Box>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
}