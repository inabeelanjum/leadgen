"use client";

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 w-full h-full bg-[#f1f1f1]">
        {/* Darker overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Video tag will fallback to nothing if source isn't available */}
        </video>
      </div>
      
      {/* Hero Content with Background Panel */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-xl shadow-lg max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-black)] mb-6">
            Generate High-Quality <span className="text-[var(--color-primary)]">Leads</span> for Your Business
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
            LeadGenPro helps businesses attract, convert, and close more deals with our innovative lead generation strategies and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-started" 
              className="btn btn-primary text-center px-8 py-3 text-lg"
            >
              Get Started
            </Link>
            <Link 
              href="/services" 
              className="btn border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-white transition-colors text-center px-8 py-3 text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 