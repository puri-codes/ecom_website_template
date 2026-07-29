'use client';

import React from 'react';
import Image from 'next/image';

const SOCIAL_IMAGES = [
  'https://framerusercontent.com/images/dckU0spB2MfhOl8goquv1ur9iE.png',
  'https://framerusercontent.com/images/XUdZloSMawWnbNPvT5YReudUSQ.png',
  'https://framerusercontent.com/images/M8FwH3qmMYIjPGsM33QY7JYgaQ.png',
  'https://framerusercontent.com/images/zyxjeo3w3p0uQg2nw0QanWu4.png',
  'https://framerusercontent.com/images/PdV7rxiYuheZdXq60sp3Uxei4qI.png',
];

export default function SocialSection() {
  return (
    <section className="w-full py-24 bg-[#F9F8F2] overflow-hidden border-t border-[#988985]/15">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-4xl md:text-5xl font-serif-display text-[#121212] tracking-tight">
          Follow us on Social Media
        </h2>
        <a
          href="https://www.instagram.com/get_verite"
          target="_blank"
          rel="noopener noreferrer"
          id="social-handle-link"
          className="inline-block text-sm font-mono-code text-[#988985] hover:text-[#121212] transition-colors"
        >
          @get_verite
        </a>
      </div>

      {/* Infinite Horizontal Image Ticker */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-ticker flex space-x-8 px-4">
          {[...SOCIAL_IMAGES, ...SOCIAL_IMAGES, ...SOCIAL_IMAGES].map((imgUrl, i) => (
            <div
              key={i}
              className="relative w-64 md:w-80 h-72 md:h-96 flex-shrink-0 bg-[#EAE7DC] rounded-xs overflow-hidden shadow-xs hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={imgUrl}
                alt={`Verite social media editorial ${i + 1}`}
                fill
                className="object-cover"
                sizes="320px"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
