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
  const timerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Obinna Okeke",
      role: "Property Investor",
      location: "Lagos, Nigeria",
      content: "ALOTER helped me acquire two prime properties in Abuja without any hassle. Their team handled everything from documentation to handing over. Truly professional!",
      rating: 5,
      image: "/testimonials/obinna.jpg",
    },
    {
      id: 2,
      name: "Amina Yusuf",
      role: "Diaspora Client",
      location: "London, UK",
      content: "As someone living abroad, I was nervous about investing in Nigeria. ALOTER's transparent process and regular video updates gave me peace of mind.",
      rating: 5,
      image: "/testimonials/amina.jpg",
    },
    {
      id: 3,
      name: "Chukwuemeka Eze",
      role: "First-time Buyer",
      location: "Port Harcourt",
      content: "Their low-income investment plan made it possible for me to own land in Lagos. Within 2 years, the value had tripled! Life-changing opportunity.",
      rating: 4,
      image: "/testimonials/chukwuemeka.jpg",
    },
    {
      id: 4,
      name: "Folake Adeleke",
      role: "Commercial Investor",
      location: "Ibadan, Nigeria",
      content: "We partnered with ALOTER to develop a shopping complex. Their project management was exceptional - delivered 3 weeks ahead of schedule!",
      rating: 5,
      image: "/testimonials/folake.jpg",
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
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

  return (
    <Box py={8} bgcolor="blue.50">
      <Box maxWidth="lg" mx="auto" px={2}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Client Success Stories
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" maxWidth="md" mx="auto">
            Hear from our satisfied clients about their ALOTER experience
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
                  <Typography variant="body2" color="text.secondary">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
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