'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, STORIES } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  'https://framerusercontent.com/images/fn2M24SSM4GBmvfVfD92XDW8ofA.png',
  'https://framerusercontent.com/images/c8c9Eza4tTmQx5kDPiGFglynGM.png',
  'https://framerusercontent.com/images/Mljk0zhRMk4EF3wQbC6TUlXMSs.png',
  'https://framerusercontent.com/images/bdcFiLOofz67ARyZ8ajVsVvkzU.png',
  'https://framerusercontent.com/images/VQpDqJSIAGISTEGABckybdyrK0.png',
];

const CATEGORIES = [
  { name: 'All', slug: 'all', img: 'https://framerusercontent.com/images/QR2CDXsuoGCsCmzwZguqqXlJEk.png' },
  { name: 'Caps', slug: 'caps', img: 'https://framerusercontent.com/images/L0rd6Y311Wsashr9GBHK9di5Kic.png' },
  { name: 'Tops', slug: 'tops', img: 'https://framerusercontent.com/images/nFWEgrrS9m2lK716T2yYeKPwt8.png' },
  { name: 'Hoodies', slug: 'hoodies', img: 'https://framerusercontent.com/images/SpsjspuGohAjocSyIRBa27e9Kw.png' },
  { name: 'Outerwear', slug: 'outerwear', img: 'https://framerusercontent.com/images/OkdzQ1IDGrG1VOfY64bznuPoTs.png' },
  { name: 'Dresses', slug: 'dresses', img: 'https://framerusercontent.com/images/wkO2Q0PCfkDTqtsiUIcMp6Bc.png' },
  { name: 'Bottom', slug: 'bottom', img: 'https://framerusercontent.com/images/PdV7rxiYuheZdXq60sp3Uxei4qI.png' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const linenProducts = PRODUCTS.filter((p) => p.isLinenCollection).slice(0, 4);
  const streetwearProducts = PRODUCTS.filter((p) => p.isStreetwear).slice(0, 4);
  const featuredStories = STORIES.slice(0, 4);

  return (
    <div className="w-full bg-[#e9eae2] text-[#121212]">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="max-w-[1600px] mx-auto page-shell pt-10 md:pt-16 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10">
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-50xl md:text-8xl lg:text-[100px] font-serif-display italic font-normal tracking-tight leading-none text-[#121212]">
              Linen &amp; Natural Fibre
            </h1>
            <p className="text-lg sm:text-2xl font-serif-display text-[#121212]/80 pt-1">
              Made slowly, Worn for years
            </p>
          </div>

          <Link
            href="/shop"
            id="hero-shop-all-button"
            className="px-20 py-4 bg-[#492d22] text-[#e9eae2] font-mono-code text-sm uppercase tracking-widest hover:bg-[#cec3b1]/85 hover:text-[#492d22] transition-all rounded-xs font-medium"
          >
            Shop all
          </Link>
        </div>

        {/* HERO CAROUSEL BANNER */}
       <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-[#EAE7DC] overflow-hidden group">
          {HERO_SLIDES.map((slideUrl, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slideUrl}
                alt={`Verite editorial showcase ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover object-top"
                sizes="100vw"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}

          {/* Carousel Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Progress Circle Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-black/20 backdrop-blur-xs px-3 py-1.5 rounded-full">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR MISSION */}
      <section className="w-full py-24 md:py-32 border-t border-[#988985]/15 bg-[#e9eae2]">
        <div className="max-w-[1400px] mx-auto page-shell text-left space-y-6">
          <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.15em] font-medium">
            Our Mission
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display text-[#121212] leading-[1.15] tracking-tight">
            We don&apos;t follow seasons. We don&apos;t chase trends. We make a small number of things, very well, from materials that were here long before us and will be here long after.
          </h2>
        </div>
      </section>

      {/* SECTION 3: LINEN & NATURAL FIBRE COLLECTION */}
      <section className="max-w-[1600px] mx-auto page-shell py-20 md:py-28 border-t border-[#988985]/15">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-3xl md:text-[40px] font-serif-display text-[#121212]">
            Linen &amp; Natural Fibre Collection
          </h2>
          <Link
            href="/shop"
            className="text-sm font-mono-code text-[#121212] hover:text-[#988985] transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {linenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 4: STREETWEAR */}
      <section className="max-w-[1600px] mx-auto page-shell py-20 md:py-28 border-t border-[#988985]/15">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-3xl md:text-[40px] font-serif-display text-[#121212]">
            Streetwear
          </h2>
          <Link
            href="/shop"
            className="text-sm font-mono-code text-[#121212] hover:text-[#988985] transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {streetwearProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 5: EXPLORE THE COLLECTION */}
      <section className="w-full py-24 bg-[#cec3b1] border-t border-b border-[#988985]/15">
        <div className="max-w-[1600px] mx-auto page-shell space-y-5">
          <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.15em] font-medium">
            EXPLORE THE COLLECTION
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif-display text-[#121212] tracking-tight">
            Dressed for the life you live.
          </h2>
          <p className="text-base md:text-lg font-serif-display text-[#121212]/70 max-w-2xl">
            Natural fibres, heavyweight streetwear, and everything in between.
          </p>
          <div className="pt-6">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-sm font-mono-code uppercase tracking-wider px-8 py-4 bg-[#492d22] text-[#e9eae2] hover:bg-[#cec3b1]/85 hover:text-[#492d22] transition-colors rounded-xs"
            >
              <span>Shop All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: CATEGORIES & DUAL BANNERS */}
      <section className="max-w-[1600px] mx-auto page-shell py-24 border-b border-[#988985]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Categories Typography List */}
          <div className="lg:col-span-6 space-y-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.slug} className="group">
                <Link
                  href={`/shop/categories/${cat.slug}`}
                  onMouseEnter={() => setHoveredCategory(cat.img)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="block text-5xl sm:text-6xl md:text-7xl font-serif-display text-[#121212]/40 hover:text-[#121212] transition-colors py-2 hover:italic"
                >
                  {cat.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Dynamic Image Preview Box */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-4/3 bg-[#EAE7DC] rounded-xs overflow-hidden shadow-lg border border-[#988985]/20">
              <Image
                src={hoveredCategory || 'https://framerusercontent.com/images/QR2CDXsuoGCsCmzwZguqqXlJEk.png'}
                alt="Category preview"
                fill
                className="object-cover transition-all duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* Dual Split Collection Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <Link href="/shop" className="group relative h-[400px] md:h-[500px] rounded-xs overflow-hidden block">
            <Image
              src="https://framerusercontent.com/images/hShtWmL1bel3LzypM2rXseM4cE.png"
              alt="Linen & Natural Fiber"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-end p-10">
              <span className="w-full bg-[#F9F8F2] py-5 text-center font-serif-display text-2xl md:text-3xl text-[#121212]">
                Linen &amp; Natural Fiber
              </span>
            </div>
          </Link>

          <Link href="/shop" className="group relative h-[400px] md:h-[500px] rounded-xs overflow-hidden block">
            <Image
              src="https://framerusercontent.com/images/qrLIzchzQWX8BY8tyyK3HqzmyY.png"
              alt="Streetwear"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-end p-10">
              <span className="w-full bg-[#F9F8F2] py-5 text-center font-serif-display text-2xl md:text-3xl text-[#121212]">
                Streetwear
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 7: STORIES */}
      <section className="max-w-[1600px] mx-auto page-shell py-24">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-3xl md:text-[40px] font-serif-display text-[#121212]">
            Stories
          </h2>
          <Link
            href="/stories"
            className="text-sm font-mono-code text-[#121212] hover:text-[#988985] transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            <span>Read All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredStories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="group space-y-4 block"
            >
              <div className="relative aspect-square w-full bg-[#EAE7DC] rounded-xs overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-serif-display font-medium text-[#121212] group-hover:underline underline-offset-4">
                  {story.title}
                </h3>
                <p className="text-sm font-serif-display text-[#121212]/70 line-clamp-2">
                  {story.excerpt}
                </p>
                <p className="text-xs font-mono-code text-[#988985] pt-1">
                  {story.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* REUSABLE SECTIONS */}
      <TestimonialsSection />
      <SocialSection />
      <ContactSection />
      <Footer />

    </div>
  );
}
