"use client";

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Link 
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: 'grey.900', color: 'common.white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 3
            }}>
              <Box sx={{ 
                width: 60, 
                height: 60, 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
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
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  ALOTER REALTY LTD
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Turning your realty fantasies into reality
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#home" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Home
              </Link>
              <Link href="#about" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                About
              </Link>
              <Link href="#properties" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Properties
              </Link>
              <Link href="#investment" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Investment Plans
              </Link>
              <Link href="#diaspora" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Diaspora Assurance
              </Link>
              <Link href="#contact" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Media & Contact */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Link 
                href="https://facebook.com/aloterrealty" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'inherit', 
                  '&:hover': { color: '#1877F2' },
                  transition: 'color 0.2s ease'
                }}
              >
                <Facebook />
              </Link>
              <Link 
                href="https://twitter.com/aloterrealty" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'inherit', 
                  '&:hover': { color: '#1DA1F2' },
                  transition: 'color 0.2s ease'
                }}
              >
                <Twitter />
              </Link>
              <Link 
                href="https://instagram.com/aloterrealty" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'inherit', 
                  '&:hover': { color: '#E4405F' },
                  transition: 'color 0.2s ease'
                }}
              >
                <Instagram />
              </Link>
              <Link 
                href="https://linkedin.com/company/aloterrealty" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'inherit', 
                  '&:hover': { color: '#0A66C2' },
                  transition: 'color 0.2s ease'
                }}
              >
                <LinkedIn />
              </Link>
              <Link 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: 'inherit', 
                  '&:hover': { color: '#25D366' },
                  transition: 'color 0.2s ease'
                }}
              >
                <WhatsApp />
              </Link>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              Email: info@aloterrealty.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Phone: +234 XXX XXX XXXX
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
            © 2025 ALOTER REALTY LTD. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            RC Number: 8371222 | Licensed Real Estate Company | Insured & Bonded
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}