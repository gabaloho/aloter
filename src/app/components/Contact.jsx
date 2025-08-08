"use client";
// components/Contact.jsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // The form will be submitted to Formspree
    // You'll need to replace 'YOUR_FORM_ID' with your actual Formspree form ID
    const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            gutterBottom
            sx={{ color: 'primary.main' }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 'md', mx: 'auto' }}
          >
            Ready to find your dream property or start investing? Get in touch with our expert team today.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Get In Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Our team of real estate experts is here to help you every step of the way. 
                Whether you're buying, selling, or investing, we're committed to turning your 
                realty fantasies into reality.
              </Typography>
            </Box>

            <Stack spacing={3}>
              {/* Address */}
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      p: 1, 
                      borderRadius: '50%',
                      minWidth: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Registered Address
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      NO 18, MEGA BOND ESTATE, 3RD AVENUE<br />
                      GWARIMPA, ABUJA, FCT, NIGERIA
                    </Typography>
                    <Typography variant="body2" color="primary.main" sx={{ mt: 1, fontWeight: 600 }}>
                      RC Number: 8371222
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Phone */}
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      p: 1, 
                      borderRadius: '50%',
                      minWidth: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Phone
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      +234 (0) 123 456 7890
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Email */}
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      p: 1, 
                      borderRadius: '50%',
                      minWidth: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Email
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      info@aloterrealty.com
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Business Hours */}
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      p: 1, 
                      borderRadius: '50%',
                      minWidth: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <AccessTimeIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Business Hours
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Send Us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </Typography>

              <Box 
                component="form" 
                onSubmit={handleSubmit}
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      placeholder="Tell us about your property needs, investment goals, or any questions you have..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 2,
                        textTransform: 'none',
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box 
          textAlign="center" 
          sx={{ 
            mt: 8, 
            p: 4, 
            backgroundColor: 'primary.main', 
            color: 'white', 
            borderRadius: 3 
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Ready to Start Your Real Estate Journey?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Our expert team is standing by to help you find the perfect property or investment opportunity.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="contained"
              size="large"
              href="#properties"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                }
              }}
            >
              Browse Properties
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
