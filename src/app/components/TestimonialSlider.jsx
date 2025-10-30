// components/TestimonialSlider.jsx
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const timerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Obinna Okeke",
      role: "Property Investor",
      location: "Lagos, Nigeria",
      content: "GUE REALTY LIMITED helped me acquire two prime properties in Lekki without any legal issues. Their documentation process is thorough and their team guided me through every step. My property value increased by 40% in just 18 months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      investment: "₦85M Portfolio"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      role: "Diaspora Investor",
      location: "Toronto, Canada",
      content: "Living in Canada, I was skeptical about investing in Nigerian real estate. GUE REALTY LIMITED's virtual tour system and regular progress videos convinced me. They delivered exactly as promised, and I now own 3 properties generating steady rental income.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face",
      investment: "3 Properties, $200K+"
    },
    {
      id: 3,
      name: "Engineer Chukwuemeka Eze",
      role: "First-time Buyer",
      location: "Port Harcourt, Nigeria",
      content: "As a young engineer, I thought property ownership was beyond my reach. GUE REALTY LIMITED's flexible payment plan and ₦100K starter investment changed my life. I now own land in two states and plan to build my family home next year.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      investment: "2 Land Plots"
    },
    {
      id: 4,
      name: "Mrs. Folake Adeleke",
      role: "Commercial Developer",
      location: "Abuja, Nigeria",
      content: "GUE REALTY LIMITED managed our ₦500M shopping complex project from start to finish. Their project management exceeded our expectations - completed 3 weeks early and 8% under budget. We're now planning our second joint venture.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      investment: "₦500M Development"
    },
    {
      id: 5,
      name: "Mr. James Mitchell",
      role: "Retired Executive",
      location: "London, UK",
      content: "After being scammed by another company, I was hesitant to invest again. GUE REALTY LIMITED's insurance coverage and escrow payment system gave me confidence. My apartment in VI Lagos generates 12% annual rental yield - better than UK property!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      investment: "12% Annual Returns"
    },
    {
      id: 6,
      name: "Hajiya Fatima Abdullahi",
      role: "Business Owner",
      location: "Kano, Nigeria",
      content: "GUE REALTY LIMITED helped me diversify my business income through real estate. Their market analysis was spot-on, and my commercial property in Abuja is fully occupied with blue-chip tenants. ROI has been consistently above 15%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
      investment: "15%+ ROI"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timerRef.current);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Prevent hydration mismatch by not running animations until client-side
  if (!isClient) {
    return (
      <Box py={8} bgcolor="blue.50">
        <Box maxWidth="lg" mx="auto" px={2}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Client Success Stories
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" maxWidth="md" mx="auto">
              Hear from our satisfied clients about their GUE REALTY LIMITED experience
            </Typography>
          </Box>
          <Box position="relative" maxWidth="md" mx="auto" minHeight={350}>
            {/* Show first testimonial without animation during server render */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center">
                <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}>
                  {testimonials[0].name.charAt(0)}
                </Avatar>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {testimonials[0].name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {testimonials[0].role} • {testimonials[0].location}
                </Typography>
                <Rating value={testimonials[0].rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                  "{testimonials[0].content}"
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box py={8} bgcolor="blue.50">
      <Box maxWidth="lg" mx="auto" px={2}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Client Success Stories
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" maxWidth="md" mx="auto">
            Hear from our satisfied clients about their GUE REALTY LIMITED experience
          </Typography>
        </Box>
        <Box position="relative" maxWidth="md" mx="auto" minHeight={350}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                <Avatar
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  sx={{ width: 100, height: 100, mr: { md: 4 }, mb: { xs: 2, md: 0 } }}
                />
                <Box flex={1}>
                  <Stack direction="row" alignItems="center" mb={2}>
                    <Rating value={testimonials[currentIndex].rating} readOnly />
                  </Stack>
                  <Typography variant="h6" fontStyle="italic" color="text.primary" mb={2}>
                    "{testimonials[currentIndex].content}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonials[currentIndex].name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight="bold">
                    Investment: {testimonials[currentIndex].investment}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Dots */}
          <Stack direction="row" spacing={1} justifyContent="center" position="absolute" bottom={16} left={0} right={0}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  border: index === currentIndex ? '2px solid #0064d7' : 'none',
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </Stack>
          {/* Navigation Arrows */}
          <Button
            onClick={() => {
              setDirection(-1);
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              resetTimer();
            }}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              minWidth: 0,
              p: 1,
              bgcolor: 'white',
              borderRadius: '50%',
              boxShadow: 2,
              '&:hover': { bgcolor: 'blue.50' },
            }}
            aria-label="Previous testimonial"
          >
            <span style={{ fontSize: 24, color: '#0064d7' }}>{'‹'}</span>
          </Button>
          <Button
            onClick={() => {
              setDirection(1);
              setCurrentIndex((prev) => (prev + 1) % testimonials.length);
              resetTimer();
            }}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              minWidth: 0,
              p: 1,
              bgcolor: 'white',
              borderRadius: '50%',
              boxShadow: 2,
              '&:hover': { bgcolor: 'blue.50' },
            }}
            aria-label="Next testimonial"
          >
            <span style={{ fontSize: 24, color: '#0064d7' }}>{'›'}</span>
          </Button>
        </Box>
        {/* Video Testimonials CTA */}
        <Box textAlign="center" mt={8}>
          <Typography color="text.secondary" mb={2}>
            Want to see more success stories?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              </svg>
            }
          >
            Watch Video Testimonials
          </Button>
        </Box>
      </Box>
    </Box>
  );
}