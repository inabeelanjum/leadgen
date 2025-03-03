"use client";

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  // Determine if we should use white text based on the className prop
  const isWhiteText = className.includes('text-white');
  
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold">
        <span className={isWhiteText ? "text-white" : "text-[var(--color-primary)]"}>Prime</span>
        <span>Midin</span>
      </span>
    </Link>
  );
};

export default Logo; 