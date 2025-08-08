// src/app/page.jsx
// Updated for comprehensive website improvements
import Hero from './components/Hero';
import About from './components/About';
import PropertySearch from './components/PropertySearch';
import InvestmentPlans from './components/InvestmentPlans';
import MortgageCalculator from './components/MortgageCalculator';
import StatsCounter from './components/StatsCounter';
import TeamProfiles from './components/TeamProfiles';
import CompanyCredentials from './components/CompanyCredentials';
import TestimonialSlider from './components/TestimonialSlider';
import DiasporaAssurance from './components/DiasporaAssurance';
import PropertyGrid from './components/PropertyGrid';
import PropertyMap from './components/PropertyMap';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import NewsletterSignup from './components/NewsletterSignup';
import Navigation from './components/Navigation';
import NoSSR from './components/NoSSR';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './globals.css';

export default function Home() {
  return (
    <>
      {/* Modern Navigation Bar */}
      <Navigation />

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

        {/* Company Credentials Section - Build Trust Early */}
        <section id="credentials">
          <CompanyCredentials />
        </section>

        {/* Property Search Section */}
        <section id="property-search">
          <Container maxWidth="xl" sx={{ py: 8 }}>
            <PropertySearch />
          </Container>
        </section>

        {/* Property Grid Section */}
        <section id="properties">
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <PropertyGrid />
          </Container>
        </section>

        {/* Mortgage Calculator Section */}
        <section id="mortgage-calculator">
          <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
            <Container maxWidth="xl">
              <MortgageCalculator />
            </Container>
          </Box>
        </section>

        {/* Investment Plans Section */}
        <section id="investment-plans">
          <Container maxWidth="lg" sx={{ py: 8 }}>
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
        </section>

        {/* Stats Counter Section */}
        <NoSSR>
          <StatsCounter />
        </NoSSR>

        {/* Team Profiles Section - Build Trust with Faces */}
        <section id="team">
          <TeamProfiles />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <NoSSR>
            <TestimonialSlider />
          </NoSSR>
        </section>

        {/* Diaspora Assurance Section */}
        <NoSSR>
          <DiasporaAssurance />
        </NoSSR>

        {/* FAQ Section - Address Common Concerns */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Property Map Section */}
        <section id="property-map">
          <NoSSR>
            <PropertyMap />
          </NoSSR>
        </section>

        {/* Newsletter Signup Section */}
        <section id="newsletter">
          <NewsletterSignup />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <NoSSR>
            <Contact />
          </NoSSR>
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
                RC Number: 8371222 | Licensed Real Estate Company | Insured & Bonded
              </Box>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
}