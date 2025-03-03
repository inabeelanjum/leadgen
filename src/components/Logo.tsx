"use client";

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <span className="text-xl font-bold">
        Lead<span className="text-[var(--color-primary)]">Gen</span>Pro
      </span>
    </Link>
  );
};

export default Logo; 