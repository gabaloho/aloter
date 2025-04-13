// components/Hero.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      {/* Background Image - Replace with your actual hero image */}
      <div className="absolute inset-0 bg-gray-900/70">
        <Image
          src="/hero-bg.png" // Replace with your image path
          alt="Luxury Real Estate"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo/Slogan */}
          <div className="mb-8">
            <Image 
              src="/logo.svg" // White version of your logo
              alt="ALOTER REALTY LTD"
              width={200}
              height={80}
              className="mx-auto"
            />
            <p className="mt-4 text-xl font-light">
              Turning your realty fantasies into reality
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Dream Property <br className="hidden sm:block" /> Awaits in Nigeria
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you're looking for a home, investment property, or developer partnership, 
            we provide trusted real estate solutions tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/properties" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Browse Properties
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar (optional) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <p className="text-2xl font-bold">150+</p>
              <p className="text-sm">Properties Sold</p>
            </div>
            <div className="p-2">
              <p className="text-2xl font-bold">20+</p>
              <p className="text-sm">Developments</p>
            </div>
            <div className="p-2">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm">Client Satisfaction</p>
            </div>
            <div className="p-2">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-sm">Trusted Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}