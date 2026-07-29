'use client';

import React from 'react';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-24 md:py-32 space-y-10 font-serif-display">
        <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.15em]">
          LEGAL &amp; TERMS
        </p>
        <h1 className="text-5xl md:text-6xl font-medium text-[#121212]">
          Terms of Service
        </h1>
        <p className="text-sm font-mono-code text-[#988985]">
          Last updated: July 2026
        </p>
        <div className="space-y-8 text-lg md:text-xl text-[#121212]/80 leading-relaxed">
          <p>
            Welcome to Verite. By accessing or using our website and purchasing our garments, you agree to be bound by the following terms and conditions.
          </p>
          <h2 className="text-3xl font-medium text-[#121212] pt-6">Orders &amp; Returns</h2>
          <p>
            All pieces are made in small batches with European natural linen and heavyweight organic cotton. We offer 30-day returns on unworn items in original packaging.
          </p>
          <h2 className="text-3xl font-medium text-[#121212] pt-6">Intellectual Property</h2>
          <p>
            All editorial photography, typography, branding, and content published on Verite belong exclusively to Verite.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
