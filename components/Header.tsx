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
    <header className="sticky top-0 z-40 w-full bg-[#e9eae2]/90 backdrop-blur-md transition-all border-b border-[#765439]/10">
      <div className="max-w-[1600px] mx-auto page-shell h-16 md:h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link 
          href="/" 
          id="nav-logo-link"
          className="text-2xl md:text-3xl font-serif-display font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          SAASTRA
        </Link>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] tracking-[0.14em] font-mono-code uppercase font-medium">
          <Link
            href="/shop"
            id="nav-link-shop"
            className={`transition-colors relative py-0.5 ${
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
            className={`transition-colors relative py-0.5 ${
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
            className={`transition-colors relative py-0.5 ${
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
        <div className="flex items-center space-x-3 md:space-x-5 text-xs md:text-[11px] font-mono-code">
          {/* Currency Selector */}
          <div className="relative">
            <button
              id="currency-selector-button"
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="flex items-center space-x-1 py-1 px-2.5 text-[#121212] hover:bg-[#121212]/5 rounded transition-colors text-[11px] md:text-xs"
            >
              <span className="text-sm">{selectedCurr.flag}</span>
              <span>{selectedCurr.code}</span>
              <ChevronDown className="w-3 h-3 text-[#765439]" />
            </button>

            {currencyOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#F9F8F2] border border-[#765439]/20 shadow-lg rounded-md py-1 z-50 text-[11px]">
                {CURRENCIES.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setCurrency(c.code);
                      setCurrencyOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#121212]/5 transition-colors ${
                      currency === c.code ? 'font-semibold text-[#121212]' : 'text-[#121212]/70'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </span>
                    <span className="text-[#765439] text-[10px]">{c.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Trigger Button */}
          <button
            id="header-cart-button"
            data-cursor="cta"
            onClick={() => setIsOpen(true)}
            className="py-1.5 px-3.5 border border-[#121212]/20 hover:border-[#121212] hover:bg-[#121212] hover:text-[#F9F8F2] transition-all rounded-full flex items-center space-x-1 font-medium text-[11px] md:text-xs tracking-wider"
          >
            <span>CART</span>
            <span>({totalCount})</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#121212]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F8F2] border-b border-[#765439]/20 page-shell py-5 space-y-4 font-mono-code text-sm">
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[#121212] font-medium border-b border-[#765439]/10"
          >
            SHOP
          </Link>
          <Link
            href="/stories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[#121212] font-medium border-b border-[#765439]/10"
          >
            STORIES
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-[#121212] font-medium border-b border-[#765439]/10"
          >
            ABOUT
          </Link>
        </div>
      )}
    </header>
  );
}
