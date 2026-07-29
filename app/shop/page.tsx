'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const CATEGORIES = ['All', 'Caps', 'Tops', 'Hoodies', 'Outerwear', 'Dresses', 'Bottom'];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212]">
      
      {/* HERO BANNER WITH IMAGE BACKGROUND */}
      <section className="relative w-full h-[380px] md:h-[500px] bg-[#EAE7DC] overflow-hidden flex items-center justify-center">
        <Image
          src="https://framerusercontent.com/images/foiBXBcOA5FBtoIuawDj0aVE5Ac.png"
          alt="All Collections"
          fill
          priority
          className="object-cover object-top opacity-60"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif-display italic font-normal text-[#121212] tracking-tight drop-shadow-sm">
            All Collections
          </h1>
        </div>
      </section>

      {/* CATEGORY TABS & PRODUCT GRID */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-20">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-20 border-b border-[#988985]/20 pb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-2xl sm:text-3xl md:text-4xl font-serif-display transition-all ${
                selectedCategory === cat
                  ? 'text-[#121212] font-medium underline underline-offset-8 decoration-1'
                  : 'text-[#988985] hover:text-[#121212]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Count Indicator */}
        <div className="flex justify-between items-center text-sm font-mono-code text-[#988985] mb-10">
          <span>SHOWING {filteredProducts.length} PIECES</span>
          <span>CURRENCY: USD ($)</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

      <SocialSection />
      <ContactSection />
      <Footer />

    </div>
  );
}
