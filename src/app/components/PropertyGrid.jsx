// components/PropertyGrid.jsx
'use client';
import { use, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function PropertyGrid({ properties = [], limit = null }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(limit || 6);


  // Filter properties based on active filter
  const filteredProperties = activeFilter === 'all'
    ? properties
    : properties.filter(property => property.type === activeFilter);

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

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa in Lekki",
      type: "residential",
      status: "available",
      price: 85000000,
      location: "Lekki Phase 1, Lagos",
      images: ["/property1.jpg"],
      features: ["5 Bedrooms", "Swimming Pool", "24/7 Security"],
      slug: "luxury-villa-lekki"
    },
    {
      id: 2,
      title: "Luxury Villa in Lekki",
      type: "residential",
      status: "available",
      price: 85000000,
      location: "Lekki Phase 1, Lagos",
      images: ["/property1.jpg"],
      features: ["5 Bedrooms", "Swimming Pool", "24/7 Security"],
      slug: "luxury-villa-lekki"
    },
    {
      id: 3,
      title: "Luxury Villa in Lekki",
      type: "residential",
      status: "available",
      price: 85000000,
      location: "Lekki Phase 1, Lagos",
      images: ["/property1.jpg"],
      features: ["5 Bedrooms", "Swimming Pool", "24/7 Security"],
      slug: "luxury-villa-lekki"
    },
  ];

  return (
    <Box py={8} bgcolor="grey.50">
      <Box maxWidth="lg" mx="auto" px={2}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium properties across Nigeria
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setActiveFilter(type.id);
                setVisibleCount(limit || 6);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <Grid container spacing={4}>
          {displayedProperties.map((property) => (
            <Grid item xs={12} md={4} key={property.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={property.images[0]}
                  alt={property.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {property.title}
                  </Typography>
                  <Typography color="primary" fontWeight="bold">
                    ₦{property.price.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {property.location}
                  </Typography>
                  <Box mb={2}>
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <Chip key={idx} label={feature} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={Link}
                    href={`/properties/${property.slug}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button (if applicable) */}
        {!limit && visibleCount < filteredProperties.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Load More Properties
            </button>
          </div>
        )}
      </Box>
    </Box>
  );
}