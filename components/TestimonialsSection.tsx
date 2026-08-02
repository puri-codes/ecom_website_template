'use client';

import React from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#e9eae2] border-t border-[#765439]/15 overflow-hidden">
      <div className="max-w-[1600px] mx-auto page-shell mb-14">
        <p className="text-sm font-mono-code text-[#492d22] uppercase tracking-[0.15em] font-medium mb-4">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl md:text-6xl font-serif-display text-[#121212] tracking-tight leading-tight">
          Words from you.
        </h2>
        <p className="text-base md:text-lg font-serif-display text-[#121212]/70 mt-3 max-w-xl">
          Honest feedback from the people who live in our clothing every day.
        </p>
      </div>

      {/* Infinite Horizontal Testimonial Cards Ticker */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-ticker flex space-x-8 page-shell">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
            className="w-[380px] md:w-[480px] flex-shrink-0 bg-[#F9F8F2] border border-[#765439]/30 p-10 rounded-xs flex flex-col justify-between space-y-8 shadow-xs"
            >
              <div className="space-y-5">
                <div className="flex justify-between items-start">
                  <p className="text-base md:text-lg font-serif-display text-[#121212] leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <Quote className="w-8 h-8 text-[#765439]/40 flex-shrink-0 rotate-180" />
                </div>
              </div>

              <div className="border-t border-[#765439]/20 pt-5">
                <h4 className="text-base font-serif-display font-medium text-[#121212]">
                  {item.name}
                </h4>
                <p className="text-xs font-mono-code text-[#765439]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
