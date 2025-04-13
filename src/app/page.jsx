// src/app/page.jsx
import Hero from './components/Hero';
import InvestmentPlans from './components/InvestmentPlans';
import StatsCounter from './components/StatsCounter';
import TestimonialSlider from './components/TestimonialSlider';
import DiasporaAssurance from './components/DiasporaAssurance';
import PropertyGrid from './components/PropertyGrid';
import PropertyMap from './components/PropertyMap';
import BrandLogo from './components/BrandLogo';
import './globals.css';



export default function Home() {

  
  return (
    <main>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <BrandLogo />
        <div className="space-x-4 h-auto drop-shadow-amber-500">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About Us</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#properties" className="hover:text-blue-500">Properties</a>
          <a href="#investment-plans" className="hover:text-blue-500">Investment Plans</a>
          <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
          <a href="#contact" className="hover:text-blue-500">Contact Us</a>
        </div>
      </nav>
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