// src/app/page.jsx
// Updated for comprehensive website improvements
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
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
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import './globals.css';

export default function Home() {
  return (
    <Box>
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

        {/* Services Section */}
        <section id="services">
          <Services />
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
      </main>

      {/* Footer */}
      <Footer />
    </Box>
  );
}