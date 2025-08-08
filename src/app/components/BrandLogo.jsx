"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function BrandLogo() {
  return (
    <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
      <Box
        sx={{ 
          width: 48, 
          height: 48, 
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/logo.svg"
          alt="ALOTER REALTY LTD"
          width={48}
          height={48}
          style={{ 
            objectFit: 'contain',
          }}
        />
      </Box>
      <Box>
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          sx={{ 
            color: 'primary.main',
            lineHeight: 1,
            letterSpacing: '-0.5px'
          }}
        >
          ALOTER REALTY
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.75rem',
            lineHeight: 1
          }}
        >
          Realty Made Real
        </Typography>
      </Box>
    </Box>
  );
}