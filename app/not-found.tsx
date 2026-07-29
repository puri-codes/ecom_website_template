'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212] min-h-screen flex flex-col justify-between">
      <div className="max-w-[1200px] mx-auto px-4 py-40 md:py-56 text-center space-y-8 flex-1 flex flex-col justify-center items-center">
        <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.2em]">
          ERROR 404
        </p>
        <h1 className="text-7xl sm:text-9xl font-serif-display font-normal text-[#121212] tracking-tight">
          Page Not Found
        </h1>
        <p className="text-lg font-serif-display italic text-[#121212]/70 max-w-lg">
          The page or piece you are looking for has moved or no longer exists.
        </p>
        <div className="pt-6 flex flex-wrap justify-center gap-6">
          <Link
            href="/"
            className="px-8 py-4 bg-[#121212] text-[#F9F8F2] font-mono-code text-sm uppercase tracking-wider hover:bg-[#121212]/85 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/shop"
            className="px-8 py-4 border border-[#121212] text-[#121212] font-mono-code text-sm uppercase tracking-wider hover:bg-[#121212] hover:text-[#F9F8F2] transition-colors"
          >
            Explore Shop
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
