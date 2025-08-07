// components/Hero.jsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box
      position="relative"
      minHeight="500px"
      height={{ xs: '80vh', md: '80vh' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: 'grey.900',
        color: 'common.white',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box position="absolute" inset={0} zIndex={0}>
        <Image
          src="/hero-bg.png"
          alt="Luxury Real Estate"
          fill
          style={{ objectFit: 'cover', opacity: 0.7 }}
          priority
        />
      </Box>
      {/* Content */}
      <Box position="relative" zIndex={1} textAlign="center" px={2}>
        <Image
          src="/logo.svg"
          alt="ALOTER REALTY LTD"
          width={200}
          height={80}
          style={{ margin: '0 auto' }}
        />
        <Typography variant="subtitle1" mt={2} mb={4}>
          Turning your realty fantasies into reality
        </Typography>
        <Typography variant="h2" fontWeight="bold" mb={3}>
          Your Dream Property <br /> Awaits in Nigeria
        </Typography>
        <Typography variant="h6" mb={5}>
          Whether you're looking for a home, investment property, or developer partnership, we provide trusted real estate solutions tailored to your needs.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" size="large" href="/properties">
            Browse Properties
          </Button>
          <Button variant="outlined" color="inherit" size="large" href="/contact">
            Get Consultation
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}