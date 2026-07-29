'use client';

import React from 'react';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-24 md:py-32 space-y-10 font-serif-display">
        <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.15em]">
          LEGAL &amp; PRIVACY
        </p>
        <h1 className="text-5xl md:text-6xl font-medium text-[#121212]">
          Privacy Policy
        </h1>
        <p className="text-sm font-mono-code text-[#988985]">
          Last updated: July 2026
        </p>
        <div className="space-y-8 text-lg md:text-xl text-[#121212]/80 leading-relaxed">
          <p>
            At Verite, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our store or purchase from us.
          </p>
          <h2 className="text-3xl font-medium text-[#121212] pt-6">Data We Collect</h2>
          <p>
            We collect basic contact information (such as your name, shipping address, and email address) necessary to fulfill orders, process payments, and communicate order updates.
          </p>
          <h2 className="text-3xl font-medium text-[#121212] pt-6">How We Use Your Data</h2>
          <p>
            Your information is used strictly to process transactions, maintain customer support, and, if opted in, send rare announcements regarding new releases.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
