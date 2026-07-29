'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { STORIES } from '@/lib/data';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function StoryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="max-w-[1600px] mx-auto px-4 py-40 text-center space-y-6">
        <h1 className="text-5xl font-serif-display text-[#121212]">Story Not Found</h1>
        <p className="text-sm font-mono-code text-[#988985]">
          The article you requested could not be located.
        </p>
        <Link
          href="/stories"
          className="inline-block mt-6 px-8 py-4 bg-[#121212] text-[#F9F8F2] font-mono-code text-sm uppercase"
        >
          Return to Stories
        </Link>
      </div>
    );
  }

  const relatedStories = STORIES.filter((s) => s.id !== story.id).slice(0, 2);

  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212]">
      
      {/* ARTICLE HEADER */}
      <article className="max-w-[1200px] mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-20 space-y-10">
        
        <Link
          href="/stories"
          className="inline-flex items-center space-x-2 text-sm font-mono-code text-[#988985] hover:text-[#121212] transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Stories</span>
        </Link>

        <div className="space-y-5">
          <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.15em] font-medium">
            {story.date} · BY {story.author.toUpperCase()}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif-display font-medium text-[#121212] tracking-tight leading-[1.1]">
            {story.title}
          </h1>
          <p className="text-xl md:text-2xl font-serif-display italic text-[#121212]/80 leading-relaxed pt-3">
            {story.excerpt}
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="relative aspect-16/9 w-full bg-[#EAE7DC] rounded-xs overflow-hidden shadow-sm my-10">
          <Image
            src={story.image}
            alt={story.title}
            fill
            priority
            className="object-cover"
            sizes="1200px"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* BODY PARAGRAPHS */}
        <div className="space-y-8 text-lg md:text-xl font-serif-display text-[#121212]/90 leading-relaxed pt-6">
          {story.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* PULL QUOTE */}
        <div className="my-16 p-10 md:p-16 border-l-2 border-[#121212] bg-[#F5F3ED] space-y-3">
          <p className="text-2xl md:text-3xl font-serif-display italic text-[#121212]">
            &ldquo;Every seam, weave, and fold is designed to mature gracefully through years of continuous wear.&rdquo;
          </p>
          <p className="text-sm font-mono-code text-[#988985] uppercase tracking-wider">
            — Verite Philosophy
          </p>
        </div>

      </article>

      {/* RELATED STORIES */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-20 border-t border-[#988985]/15">
        <h2 className="text-3xl font-serif-display text-[#121212] mb-10">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {relatedStories.map((rel) => (
            <Link
              key={rel.id}
              href={`/stories/${rel.slug}`}
              className="group flex gap-6 items-center bg-[#F5F3ED] p-6 rounded-xs border border-[#988985]/15 hover:border-[#121212] transition-colors"
            >
              <div className="relative w-32 h-32 bg-[#EAE7DC] flex-shrink-0 rounded-xs overflow-hidden">
                <Image
                  src={rel.image}
                  alt={rel.title}
                  fill
                  className="object-cover"
                  sizes="128px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono-code text-[#988985]">{rel.date}</p>
                <h3 className="text-xl font-serif-display font-medium text-[#121212] group-hover:underline">
                  {rel.title}
                </h3>
                <p className="text-sm font-serif-display text-[#121212]/70 line-clamp-2">
                  {rel.excerpt}
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
