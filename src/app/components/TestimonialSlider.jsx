// components/TestimonialSlider.jsx
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
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
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their ALOTER experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[350px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Client Image */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="rounded-full object-cover border-4 border-blue-100"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-lg italic text-gray-700 mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div>
                  <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              setDirection(-1);
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              resetTimer();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => {
              setDirection(1);
              setCurrentIndex((prev) => (prev + 1) % testimonials.length);
              resetTimer();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more success stories?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
            </svg>
            Watch Video Testimonials
          </button>
        </div>
      </div>
    </section>
  );
}