// components/PropertyMap.jsx
'use client';

import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Dynamically import react-leaflet components to ensure they're only rendered client-side
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function PropertyMap({ properties = [] }) {
  return (
    <Box my={8} maxWidth="lg" mx="auto" px={2}>
      <Typography variant="h4" fontWeight="bold" align="center" mb={4}>
        Property Locations Map
      </Typography>
      <Box sx={{ height: { xs: 350, md: 500 }, borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
        <MapContainer center={[6.5244, 3.3792]} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {properties.map(property => (
            <Marker 
              key={property._id} 
              position={[property.location.coordinates.lat, property.location.coordinates.lng]}
            >
              <Popup>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {property.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₦{property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
}