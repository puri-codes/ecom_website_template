'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#F9F8F2] border-t border-[#988985]/20 pt-20 md:pt-28 pb-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20">
        
        {/* Column 1: Quick Links */}
        <div className="lg:col-span-3 space-y-5">
          <h2 className="text-2xl md:text-3xl font-serif-display text-[#121212]">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm font-mono-code text-[#121212]">
            <li>
              <Link href="/" id="footer-link-home" className="hover:text-[#988985] transition-colors inline-flex items-center gap-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" id="footer-link-collections" className="hover:text-[#988985] transition-colors inline-flex items-center gap-1">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/stories" id="footer-link-stories" className="hover:text-[#988985] transition-colors inline-flex items-center gap-1">
                Stories
              </Link>
            </li>
            <li>
              <Link href="/about" id="footer-link-about" className="hover:text-[#988985] transition-colors inline-flex items-center gap-1">
                About
              </Link>
            </li>
            <li>
              <Link href="/404" id="footer-link-404" className="hover:text-[#988985] transition-colors inline-flex items-center gap-1">
                404
              </Link>
            </li>
            <li>
              <a
                href="https://www.framer.com/community/marketplace/templates/verite/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-link-buy-template"
                className="hover:text-[#988985] transition-colors inline-flex items-center gap-1"
              >
                Buy Template <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Collections */}
        <div className="lg:col-span-3 space-y-5">
          <h2 className="text-2xl md:text-3xl font-serif-display text-[#121212]">
            Collections
          </h2>
          <ul className="space-y-3 text-sm font-mono-code text-[#121212]">
            <li>
              <Link href="/shop" className="hover:text-[#988985] transition-colors">
                Streetwear
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#988985] transition-colors">
                Linen & Natural Fibre
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Handles */}
        <div className="lg:col-span-3 space-y-5">
          <h2 className="text-2xl md:text-3xl font-serif-display text-[#121212]">
            Social Handles
          </h2>
          <ul className="space-y-3 text-sm font-mono-code text-[#121212]">
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#988985] transition-colors inline-flex items-center gap-1"
              >
                X / Twitter <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#988985] transition-colors inline-flex items-center gap-1"
              >
                Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </li>
            <li>
              <a
                href="https://www.framer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#988985] transition-colors inline-flex items-center gap-1"
              >
                Framer <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="lg:col-span-3 space-y-5">
          <h2 className="text-2xl md:text-3xl font-serif-display text-[#121212]">
            Newsletter
          </h2>
          <p className="text-sm font-mono-code text-[#988985]">
            Considered pieces, sent rarely.
          </p>

          {subscribed ? (
            <div className="p-4 bg-[#F5F3ED] border border-[#988985]/20 text-sm font-mono-code text-[#121212]">
              Thank you for subscribing.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 bg-[#FAF8F5] border border-[#988985]/30 focus:border-[#121212] focus:outline-none text-sm font-mono-code w-full rounded-xs text-[#121212]"
              />
              <button
                type="submit"
                id="newsletter-submit"
                className="px-6 py-3 bg-[#121212] text-[#F9F8F2] text-sm font-mono-code uppercase font-medium hover:bg-[#121212]/90 transition-colors rounded-xs flex-shrink-0"
              >
                Submit
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Massive Full-Width Verite Wordmark */}
      <div className="w-full overflow-hidden my-10 select-none">
        <h1 className="text-[20vw] font-serif-display font-normal text-[#121212] leading-none text-center tracking-tight -mb-6 md:-mb-12">
          verite
        </h1>
      </div>

      {/* Bottom Bar: Copyright & Privacy */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8 border-t border-[#988985]/15 flex flex-col sm:flex-row justify-between items-center text-sm font-mono-code text-[#988985] gap-6">
        <p>© 2026 Verite. All rights reserved.</p>
        <div className="flex space-x-8">
          <Link href="/privacy" className="hover:text-[#121212] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[#121212] transition-colors">
            Terms
          </Link>
        </div>
      </div>

      {/* Floating Badges in bottom right corner */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-1.5 pointer-events-auto">
        <a
          href="https://www.framer.com/community/marketplace/templates/verite/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#121212] text-[11px] font-mono-code px-3 py-1 rounded-md shadow-md border border-black/10 hover:shadow-lg transition-shadow flex items-center gap-1.5"
        >
          <span>Buy template</span>
        </a>
      </div>
    </footer>
  );
}
