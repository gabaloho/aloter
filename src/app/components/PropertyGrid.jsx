// components/PropertyGrid.jsx
'use client';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Link from 'next/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

export default function PropertyGrid({ properties = [], limit = null }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issue by setting proper limit after client mount
  useEffect(() => {
    setIsClient(true);
    if (limit !== null) {
      setVisibleCount(limit);
    }
  }, [limit]);

  // Sample featured properties with placeholder data
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa in Lekki",
      type: "residential",
      status: "available",
      price: 85000000,
      location: "Lekki Phase 1, Lagos",
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"],
      features: ["5 Bedrooms", "Swimming Pool", "24/7 Security"],
      slug: "luxury-villa-lekki"
    },
    {
      id: 2,
      title: "Modern Apartment in VI",
      type: "residential",
      status: "available",
      price: 45000000,
      location: "Victoria Island, Lagos",
      images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"],
      features: ["3 Bedrooms", "Ocean View", "Gym Access"],
      slug: "modern-apartment-vi"
    },
    {
      id: 3,
      title: "Commercial Plaza",
      type: "commercial",
      status: "available",
      price: 120000000,
      location: "Ikeja, Lagos",
      images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"],
      features: ["Office Spaces", "Parking Lot", "Prime Location"],
      slug: "commercial-plaza-ikeja"
    },
    {
      id: 4,
      title: "Land for Sale",
      type: "land",
      status: "available",
      price: 25000000,
      location: "Abuja, FCT",
      images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400"],
      features: ["2000sqm", "C of O", "Developed Area"],
      slug: "land-abuja-fct"
    },
    {
      id: 5,
      title: "Penthouse Suite",
      type: "residential",
      status: "ongoing",
      price: 150000000,
      location: "Banana Island, Lagos",
      images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"],
      features: ["Penthouse", "Private Elevator", "Luxury Finishes"],
      slug: "penthouse-banana-island"
    },
    {
      id: 6,
      title: "Shopping Complex",
      type: "commercial",
      status: "ongoing",
      price: 300000000,
      location: "Port Harcourt, Rivers",
      images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"],
      features: ["Mall Space", "Food Court", "Multi-level"],
      slug: "shopping-complex-ph"
    },
  ];

  const displayProperties = properties.length > 0 ? properties : featuredProperties;

  // Filter properties based on active filter
  const filteredProperties = activeFilter === 'all'
    ? displayProperties
    : displayProperties.filter(property => property.type === activeFilter);

  // Slice to show limited properties initially
  const displayedProperties = filteredProperties.slice(0, visibleCount);

  // Property types for filters
  const propertyTypes = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'land', label: 'Land' },
    { id: 'ongoing', label: 'Ongoing Projects' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'success';
      case 'sold': return 'error';
      case 'ongoing': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Box>
      {/* Section Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" color="text.primary" mb={2}>
          Featured Properties
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
          Discover our carefully curated selection of premium properties across Nigeria
        </Typography>
      </Box>

      {/* Filter Controls */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1} mb={4}>
        {propertyTypes.map((type) => (
          <Chip
            key={type.id}
            label={type.label}
            onClick={() => {
              setActiveFilter(type.id);
              setVisibleCount(limit || 6);
            }}
            variant={activeFilter === type.id ? 'filled' : 'outlined'}
            color={activeFilter === type.id ? 'primary' : 'default'}
            sx={{ 
              px: 2, 
              py: 0.5,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: activeFilter === type.id ? 'primary.dark' : 'action.hover'
              }
            }}
          />
        ))}
      </Box>

      {/* Property Grid */}
      <Grid container spacing={4}>
        {displayedProperties.map((property) => (
          <Grid item xs={12} sm={6} lg={4} key={property.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={property.images[0]}
                alt={property.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Status and Type */}
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Chip
                    label={property.status.toUpperCase()}
                    color={getStatusColor(property.status)}
                    size="small"
                  />
                  <Chip
                    icon={<HomeIcon />}
                    label={property.type}
                    variant="outlined"
                    size="small"
                  />
                </Box>

                {/* Title and Price */}
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {property.title}
                </Typography>
                <Typography 
                  variant="h5" 
                  color="primary.main" 
                  fontWeight="bold"
                  mb={1}
                >
                  ₦{property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Typography>

                {/* Location */}
                <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="action" sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {property.location}
                  </Typography>
                </Box>

                {/* Features */}
                <Box mb={3}>
                  <Box display="flex" flexWrap="wrap" gap={0.5}>
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <Chip 
                        key={idx} 
                        label={feature} 
                        size="small" 
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </Box>

                {/* Action Button */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  component={Link}
                  href={`/properties/${property.slug}`}
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {!limit && visibleCount < filteredProperties.length && (
        <Box textAlign="center" mt={6}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setVisibleCount(prev => prev + 6)}
            sx={{
              px: 4,
              py: 1.5,
              borderWidth: 2,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                borderWidth: 2,
              }
            }}
          >
            Load More Properties
          </Button>
        </Box>
      )}
    </Box>
  );
}