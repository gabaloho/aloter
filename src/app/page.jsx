// src/app/page.jsx
import Hero from './components/Hero';
import InvestmentPlans from './components/InvestmentPlans';
import StatsCounter from './components/StatsCounter';
import TestimonialSlider from './components/TestimonialSlider';
import DiasporaAssurance from './components/DiasporaAssurance';
import PropertyGrid from './components/PropertyGrid';
import PropertyMap from './components/PropertyMap';
import BrandLogo from './components/BrandLogo';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './globals.css';



export default function Home() {

  
  return (
    <main>
      {/* Material UI Navbar */}
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          <BrandLogo />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#about">About Us</Button>
            <Button color="inherit" href="#services">Services</Button>
            <Button color="inherit" href="#properties">Properties</Button>
            <Button color="inherit" href="#investment-plans">Investment Plans</Button>
            <Button color="inherit" href="#testimonials">Testimonials</Button>
            <Button color="inherit" href="#contact">Contact Us</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Hero />
      <PropertyGrid />
      <InvestmentPlans />
      <StatsCounter />
      <TestimonialSlider />
      <DiasporaAssurance />
      
      <PropertyMap />
    </main>
  );
}