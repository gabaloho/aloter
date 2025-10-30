"use client";
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#properties' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix hydration issues by ensuring component only renders after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    // Smooth scroll to section
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'grey.900',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{
            px: { xs: 1, sm: 2 },
            py: { xs: 0.5, sm: 1 },
            minHeight: { xs: 64, sm: 72 }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BrandLogo />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: 1,
              alignItems: 'center'
            }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '1rem',
                    px: 3,
                    py: 1.5,
                    textTransform: 'none',
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderColor: 'white',
                  color: 'white',
                }}
              >
                Call Now
              </Button>
              <Button
                variant="contained"
                sx={{
                  ml: 1,
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
                }}
              >
                Contact Us
              </Button>
            </Box>
            <IconButton
              sx={{
                display: { xs: 'flex', lg: 'none' },
                ml: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Mobile Header */}
      <Box sx={{
        p: 3,
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <BrandLogo variant="mobile" />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Mobile Navigation Items */}
      <List sx={{ flex: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            sx={{
              cursor: 'pointer',
              mx: 2,
              borderRadius: 2,
              mb: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateX(8px)',
              }
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: '1.1rem',
                textAlign: 'left'
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Mobile Contact Button */}
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => handleNavClick('#contact')}
          sx={{
            backgroundColor: 'white',
            color: 'primary.main',
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 700,
            borderRadius: 3,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              transform: 'translateY(-2px)',
            }
          }}
        >
          Contact Us
        </Button>

        {/* Mobile Call Button */}
        <Button
          fullWidth
          variant="outlined"
          href="tel:+2341234567890"
          sx={{
            mt: 2,
            borderColor: 'white',
            color: 'white',
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: 3,
            textTransform: 'none',
            borderWidth: 2,
            '&:hover': {
              backgroundColor: 'white',
              color: 'primary.main',
              borderColor: 'white',
            }
          }}
        >
          Call Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 8 : 0}
        sx={{
          backgroundColor: 'grey.900',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.2)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{
            px: { xs: 1, sm: 2 },
            py: { xs: 0.5, sm: 1 },
            minHeight: { xs: 64, sm: 72 }
          }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BrandLogo />
            </Box>

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            <Box sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: 1,
              alignItems: 'center'
            }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '1rem',
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: 'none',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      transform: 'translateY(-1px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: '3px',
                      backgroundColor: '#42a5f5',
                      borderRadius: '3px',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '80%',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* Call Now Button (Desktop) */}
              <Button
                href="tel:+2341234567890"
                variant="outlined"
                sx={{
                  ml: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  textTransform: 'none',
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'grey.900',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 16px rgba(255,255,255,0.3)',
                  }
                }}
              >
                Call Now
              </Button>

              {/* Contact Button */}
              <Button
                onClick={() => handleNavClick('#contact')}
                variant="contained"
                sx={{
                  ml: 1,
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: 3,
                  textTransform: 'none',
                  background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
                  boxShadow: '0 4px 16px rgba(0,100,215,0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #004ba8 0%, #0064d7 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0,100,215,0.4)',
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'flex', lg: 'none' },
                ml: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  transform: 'scale(1.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
