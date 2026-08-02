'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      id={`product-card-${product.slug}`}
      className="group block w-full space-y-4"
    >
      <div data-cursor="image" className="relative aspect-4/5 w-full bg-[#EAE7DC] overflow-hidden rounded-xs">
        {/* Main Display Image */}
        <Image
          src={product.displayImage}
          alt={product.title}
          fill
          className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          referrerPolicy="no-referrer"
        />

        {/* Hover Secondary Image */}
        <Image
          src={product.hoverImage}
          alt={`${product.title} hover preview`}
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Category Tag Overlay */}
        <div className="absolute bottom-4 left-4 bg-[#F9F8F2]/80 backdrop-blur-xs px-3 py-1 text-xs font-mono-code text-[#121212]/80 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
          {product.category}
        </div>
      </div>

      <div className="space-y-1.5">
        <h3 className="text-base md:text-lg font-serif-display font-medium text-[#121212] group-hover:underline underline-offset-4 decoration-[#121212]/30 transition-all">
          {product.title}
        </h3>
        <p className="text-sm font-mono-code text-[#765439]">
          {product.formattedPrice}
        </p>
      </div>
    </Link>
  );
}
