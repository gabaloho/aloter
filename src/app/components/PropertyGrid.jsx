// components/PropertyGrid.jsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { use, useState } from 'react';


export default function PropertyGrid({ properties = [], limit = null }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(limit || 6);
  

  // ...

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Property Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {property.status === 'sold' ? 'Sold' : 'Available'}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                  <p className="text-lg font-bold text-blue-600">₦{property.price.toLocaleString()}</p>
                </div>

                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {property.location}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/properties/${property.slug}`}
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
}