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
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'Home', href: '#home', icon: <HomeIcon /> },
  { label: 'About', href: '#about', icon: <InfoIcon /> },
  { label: 'Search', href: '#property-search', icon: <BusinessIcon /> },
  { label: 'Properties', href: '#properties', icon: <BusinessIcon /> },
  { label: 'Calculator', href: '#mortgage-calculator', icon: <TrendingUpIcon /> },
  { label: 'Investment', href: '#investment-plans', icon: <TrendingUpIcon /> },
  { label: 'Team', href: '#team', icon: <StarIcon /> },
  { label: 'FAQ', href: '#faq', icon: <InfoIcon /> },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
              mx: 1,
              borderRadius: 2,
              mb: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateX(8px)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: '1.1rem'
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
          startIcon={<ContactMailIcon />}
          sx={{
            backgroundColor: 'white',
            color: 'primary.main',
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 700,
            borderRadius: 3,
            '&:hover': {
              backgroundColor: '#f5f5f5',
              transform: 'translateY(-2px)',
            }
          }}
        >
          Contact Us
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
          backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? 'none' : '1px solid rgba(0,100,215,0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,100,215,0.15)' : '0 1px 3px rgba(0,0,0,0.05)',
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
              gap: 0.5,
              alignItems: 'center'
            }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  startIcon={item.icon}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    px: 2.5,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: 'none',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: 'rgba(0,100,215,0.08)',
                      color: 'primary.main',
                      transform: 'translateY(-1px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: '3px',
                      backgroundColor: 'primary.main',
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
              
              {/* Contact Button */}
              <Button
                onClick={() => handleNavClick('#contact')}
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  ml: 2,
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

              {/* Call Now Button (Desktop) */}
              <Button
                href="tel:+2341234567890"
                variant="outlined"
                startIcon={<PhoneIcon />}
                sx={{
                  ml: 1,
                  px: 3,
                  py: 1.5,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  textTransform: 'none',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  borderWidth: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 16px rgba(0,100,215,0.3)',
                  }
                }}
              >
                Call Now
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'flex', lg: 'none' },
                ml: 1,
                backgroundColor: 'rgba(0,100,215,0.1)',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
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
