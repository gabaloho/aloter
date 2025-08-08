"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function BrandLogo({ variant = 'desktop' }) {
  const isMobile = variant === 'mobile';
  
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
      onClick={() => {
        const element = document.querySelector('#home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      <Box
        sx={{ 
          width: isMobile ? 40 : 48, 
          height: isMobile ? 40 : 48, 
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: isMobile ? 'rgba(255,255,255,0.2)' : 'linear-gradient(135deg, rgba(0,100,215,0.1) 0%, rgba(0,75,168,0.1) 100%)',
          padding: 1,
        }}
      >
        <Image
          src="/logo.svg"
          alt="ALOTER REALTY LTD"
          width={isMobile ? 32 : 40}
          height={isMobile ? 32 : 40}
          style={{ 
            objectFit: 'contain',
            filter: isMobile ? 'brightness(0) invert(1)' : 'none',
          }}
        />
      </Box>
      <Box>
        <Typography 
          variant={isMobile ? "h6" : "h6"} 
          fontWeight="bold" 
          sx={{ 
            color: isMobile ? 'white' : 'primary.main',
            lineHeight: 1,
            letterSpacing: '-0.5px',
            fontSize: isMobile ? '1.1rem' : '1.25rem'
          }}
        >
          ALOTER REALTY
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            color: isMobile ? 'rgba(255,255,255,0.8)' : 'text.secondary',
            fontSize: isMobile ? '0.7rem' : '0.75rem',
            lineHeight: 1,
            fontWeight: isMobile ? 500 : 400
          }}
        >
          Realty Made Real
        </Typography>
      </Box>
    </Box>
  );
}