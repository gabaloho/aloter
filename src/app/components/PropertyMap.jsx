// components/PropertyMap.jsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import react-leaflet components to ensure they're only rendered client-side
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function PropertyMap({ properties = [] }) {
  return (
    <MapContainer center={[6.5244, 3.3792]} zoom={12} className="h-96">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {properties.map(property => (
        <Marker 
          key={property._id} 
          position={[property.location.coordinates.lat, property.location.coordinates.lng]}
        >
          <Popup>
            <h3>{property.title}</h3>
            <p>Price: ₦{property.price.toLocaleString()}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}