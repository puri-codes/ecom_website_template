'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/cart-context';
import { ChevronDown, Menu, X } from 'lucide-react';

const CURRENCIES = [
  { code: 'US (USD)', name: 'United States', flag: '🇺🇸' },
  { code: 'Germany (INR)', name: 'Germany', flag: '🇩🇪' },
  { code: 'Spain (INR)', name: 'Spain', flag: '🇪🇸' },
  { code: 'France (INR)', name: 'France', flag: '🇫🇷' },
  { code: 'UK (GBP)', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'India (INR)', name: 'India', flag: '🇮🇳' },
  { code: 'Italy (INR)', name: 'Italy', flag: '🇮🇹' },
  { code: 'Netherlands (INR)', name: 'Netherlands', flag: '🇳🇱' },
];

export default function Header() {
  const pathname = usePathname();
  const { totalCount, setIsOpen, currency, setCurrency } = useCart();
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const selectedCurr = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F9F8F2]/90 backdrop-blur-md transition-all border-b border-[#988985]/10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link 
          href="/" 
          id="nav-logo-link"
          className="text-3xl md:text-4xl font-serif-display font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          verite
        </Link>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex items-center space-x-12 text-sm tracking-[0.15em] font-mono-code uppercase font-medium">
          <Link
            href="/shop"
            id="nav-link-shop"
            className={`transition-colors relative py-1 ${
              pathname.startsWith('/shop') ? 'text-[#121212] font-semibold' : 'text-[#121212]/70 hover:text-[#121212]'
            }`}
          >
            SHOP
            {pathname.startsWith('/shop') && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#121212]" />
            )}
          </Link>
          <Link
            href="/stories"
            id="nav-link-stories"
            className={`transition-colors relative py-1 ${
              pathname.startsWith('/stories') ? 'text-[#121212] font-semibold' : 'text-[#121212]/70 hover:text-[#121212]'
            }`}
          >
            STORIES
            {pathname.startsWith('/stories') && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#121212]" />
            )}
          </Link>
          <Link
            href="/about"
            id="nav-link-about"
            className={`transition-colors relative py-1 ${
              pathname === '/about' ? 'text-[#121212] font-semibold' : 'text-[#121212]/70 hover:text-[#121212]'
            }`}
          >
            ABOUT
            {pathname === '/about' && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#121212]" />
            )}
          </Link>
        </nav>

        {/* Right Controls: Country Dropdown + Cart */}
        <div className="flex items-center space-x-5 md:space-x-8 text-sm font-mono-code">
          {/* Currency Selector */}
          <div className="relative">
            <button
              id="currency-selector-button"
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="flex items-center space-x-1.5 py-1.5 px-3 text-[#121212] hover:bg-[#121212]/5 rounded transition-colors text-xs md:text-sm"
            >
              <span className="text-base">{selectedCurr.flag}</span>
              <span>{selectedCurr.code}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#988985]" />
            </button>

            {currencyOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#F9F8F2] border border-[#988985]/20 shadow-lg rounded-md py-1.5 z-50 text-xs">
                {CURRENCIES.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setCurrency(c.code);
                      setCurrencyOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center justify-between hover:bg-[#121212]/5 transition-colors ${
                      currency === c.code ? 'font-semibold text-[#121212]' : 'text-[#121212]/70'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </span>
                    <span className="text-[#988985] text-[11px]">{c.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Trigger Button */}
          <button
            id="header-cart-button"
            onClick={() => setIsOpen(true)}
            className="py-2 px-4 border border-[#121212]/20 hover:border-[#121212] hover:bg-[#121212] hover:text-[#F9F8F2] transition-all rounded-full flex items-center space-x-1.5 font-medium text-xs md:text-sm tracking-wider"
          >
            <span>CART</span>
            <span>({totalCount})</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#121212]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F8F2] border-b border-[#988985]/20 px-6 py-8 space-y-5 font-mono-code text-base">
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[#121212] font-medium border-b border-[#988985]/10"
          >
            SHOP
          </Link>
          <Link
            href="/stories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[#121212] font-medium border-b border-[#988985]/10"
          >
            STORIES
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[#121212] font-medium border-b border-[#988985]/10"
          >
            ABOUT
          </Link>
        </div>
      )}
    </header>
  );
}
