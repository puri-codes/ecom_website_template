'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/context/cart-context';
import ProductCard from '@/components/ProductCard';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = (params.slug as string) || '';

  const product = PRODUCTS.find((p) => p.slug === slug);

  // Call hooks unconditionally
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0]?.name || 'White');
  const [quantity, setQuantity] = useState<number>(1);

  // Accordion toggle states
  const [materialOpen, setMaterialOpen] = useState(true);
  const [careOpen, setCareOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-4 py-40 text-center space-y-6">
        <h1 className="text-5xl font-serif-display text-[#121212]">Product Not Found</h1>
        <p className="text-sm font-mono-code text-[#988985]">
          The item you are searching for does not exist in our current collection.
        </p>
        <Link
          href="/shop"
          className="inline-block mt-6 px-8 py-4 bg-[#121212] text-[#F9F8F2] font-mono-code text-sm uppercase"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212]">
      
      {/* MAIN PDP GRID */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: TITLE, CATEGORY, PRICE */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 space-y-5">
            <p className="text-sm font-mono-code text-[#988985]">
              {product.isLinenCollection ? 'Linen & Natural Fibre' : product.category}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-medium text-[#121212] tracking-tight leading-[1.05]">
              {product.title}
            </h1>
            <p className="text-base font-mono-code text-[#121212] pt-3">
              {product.formattedPrice}
            </p>
          </div>

          {/* CENTER COLUMN: VERTICAL IMAGE GALLERY */}
          <div className="lg:col-span-6 space-y-8">
            {product.gallery.map((imgUrl, i) => (
              <div
                key={i}
                className="relative aspect-3/4 w-full bg-[#EAE7DC] rounded-xs overflow-hidden shadow-xs"
              >
                <Image
                  src={imgUrl}
                  alt={`${product.title} view ${i + 1}`}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: CONTROLS & ACCORDIONS */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 space-y-10">
            
            {/* Quantity Selector */}
            <div className="flex items-center justify-between border border-[#988985]/30 bg-[#FAF8F5] p-3 rounded-xs">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-1.5 hover:bg-[#121212]/5 text-[#121212]"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-mono-code text-sm font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-1.5 hover:bg-[#121212]/5 text-[#121212]"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Size Selector */}
            {product.sizes.length > 0 && (
              <div className="space-y-3">
                <label className="text-xs font-mono-code text-[#988985] uppercase">
                  Size: <span className="text-[#121212]">{selectedSize}</span>
                </label>
                <div className="grid grid-cols-4 gap-3 font-mono-code text-sm">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 border text-center transition-all ${
                        selectedSize === sz
                          ? 'bg-[#121212] text-[#F9F8F2] border-[#121212]'
                          : 'bg-transparent text-[#121212] border-[#988985]/30 hover:border-[#121212]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div className="space-y-3">
                <label className="text-xs font-mono-code text-[#988985] uppercase">
                  Color: <span className="text-[#121212]">{selectedColor}</span>
                </label>
                <div className="flex space-x-3 font-mono-code text-sm">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-5 py-3 border transition-all ${
                        selectedColor === c.name
                          ? 'bg-[#121212] text-[#F9F8F2] border-[#121212]'
                          : 'bg-transparent text-[#121212] border-[#988985]/30 hover:border-[#121212]'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
              id="add-to-cart-button"
              className="w-full py-5 bg-[#121212] text-[#F9F8F2] font-mono-code text-sm uppercase tracking-widest hover:bg-[#121212]/90 transition-all rounded-xs font-medium"
            >
              Add to Cart
            </button>

            {/* Shipping & Return Note */}
            <p className="text-center text-xs font-mono-code text-[#988985] pt-3">
              Free shipping over $150 · 30-day returns
            </p>

            {/* ACCORDION SECTIONS */}
            <div className="border-t border-[#988985]/20 pt-6 space-y-5 font-mono-code text-sm">
              
              {/* Material & Composition */}
              <div className="border-b border-[#988985]/15 pb-4">
                <button
                  onClick={() => setMaterialOpen(!materialOpen)}
                  className="w-full flex justify-between items-center py-1.5 text-left font-medium text-[#121212]"
                >
                  <span>Material &amp; Composition</span>
                  {materialOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {materialOpen && (
                  <p className="mt-3 text-xs text-[#988985] leading-relaxed font-serif-display">
                    {product.material}
                  </p>
                )}
              </div>

              {/* Care Instructions */}
              <div className="border-b border-[#988985]/15 pb-4">
                <button
                  onClick={() => setCareOpen(!careOpen)}
                  className="w-full flex justify-between items-center py-1.5 text-left font-medium text-[#121212]"
                >
                  <span>Care Instructions</span>
                  {careOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {careOpen && (
                  <p className="mt-3 text-xs text-[#988985] leading-relaxed font-serif-display">
                    {product.care}
                  </p>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-[#988985]/15 pb-4">
                <button
                  onClick={() => setShippingOpen(!shippingOpen)}
                  className="w-full flex justify-between items-center py-1.5 text-left font-medium text-[#121212]"
                >
                  <span>Shipping &amp; Returns</span>
                  {shippingOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {shippingOpen && (
                  <p className="mt-3 text-xs text-[#988985] leading-relaxed font-serif-display">
                    {product.shipping}
                  </p>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* FEATURED MATERIAL BANNER SECTION */}
      <section className="relative w-full min-h-[450px] bg-[#EAE7DC] my-20 overflow-hidden flex items-center justify-center p-8">
        <Image
          src="https://framerusercontent.com/images/bH7lrLwZ75K67A0rsbVZxnmnByc.png"
          alt="The Material texture macro"
          fill
          className="object-cover opacity-80"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-3xl bg-[#F9F8F2]/90 backdrop-blur-md p-10 md:p-16 rounded-xs border border-[#988985]/20 text-left space-y-4">
          <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.15em]">
            The Material
          </p>
          <h3 className="text-2xl md:text-3xl font-serif-display text-[#121212]">
            Premium Natural Fabric
          </h3>
          <p className="text-sm md:text-base font-serif-display text-[#121212]/80 leading-relaxed">
            {product.description}
          </p>
          <p className="text-xs font-mono-code text-[#988985] pt-3">
            100% European linen · Relaxed fit · Mother-of-pearl buttons · Chest patch pocket
          </p>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-20">
        <div className="flex justify-between items-baseline mb-10">
          <h2 className="text-3xl md:text-4xl font-serif-display text-[#121212]">
            You may also like
          </h2>
          <Link
            href="/shop"
            className="text-sm font-mono-code text-[#121212] hover:text-[#988985] uppercase tracking-wider"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <SocialSection />
      <ContactSection />
      <Footer />

    </div>
  );
}
