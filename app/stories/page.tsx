'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STORIES } from '@/lib/data';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function StoriesPage() {
  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212]">
      
      {/* HERO BANNER WITH IMAGE BACKGROUND */}
      <section className="relative w-full h-[380px] md:h-[500px] bg-[#EAE7DC] overflow-hidden flex items-center justify-center">
        <Image
          src="https://framerusercontent.com/images/Mljk0zhRMk4EF3wQbC6TUlXMSs.png"
          alt="All Stories"
          fill
          priority
          className="object-cover object-top opacity-60"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif-display italic font-normal text-[#121212] tracking-tight">
            All Stories
          </h1>
        </div>
      </section>

      {/* EDITORIAL STORIES GRID */}
      <section className="max-w-[1600px] mx-auto page-shell py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {STORIES.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              id={`story-card-${story.slug}`}
              className="group block space-y-5"
            >
              <div className="relative aspect-16/10 w-full bg-[#EAE7DC] rounded-xs overflow-hidden shadow-xs">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3 max-w-2xl">
                <p className="text-sm font-mono-code text-[#492d22] uppercase tracking-wider">
                  {story.title}
                </p>
                <h2 className="text-2xl md:text-3xl font-serif-display font-medium text-[#121212] group-hover:underline underline-offset-4 decoration-1">
                  {story.excerpt}
                </h2>
                <p className="text-sm font-mono-code text-[#765439] pt-2">
                  {story.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SocialSection />
      <ContactSection />
      <Footer />

    </div>
  );
}
