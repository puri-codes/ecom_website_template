'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F9F8F2] text-[#121212]">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-[1600px] mx-auto page-shell pt-20 md:pt-28 pb-20 text-center space-y-8">
        <p className="text-sm font-mono-code text-[#492d22] uppercase tracking-[0.15em] font-medium">
          OUR STORY
        </p>
        <h1 className="text-7xl sm:text-9xl md:text-[140px] font-serif-display font-normal text-[#121212] tracking-tight leading-none">
          verite
        </h1>
        <p className="text-2xl sm:text-3xl font-serif-display italic text-[#121212]/80 max-w-3xl mx-auto pt-3">
          A quiet house of things made slowly, for people who keep them for a long time.
        </p>

        {/* HERO ATELIER IMAGE */}
        <div className="relative aspect-16/9 w-full bg-[#EAE7DC] rounded-xs overflow-hidden shadow-sm mt-16">
          <Image
            src="https://framerusercontent.com/images/A9jJzv962WzIHpHRfmCsSMx70k.png"
            alt="Linen weaving atelier bathed in natural light"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* SECTION 2: FOUNDING STATEMENT */}
      <section className="max-w-[1200px] mx-auto page-shell py-20 text-center space-y-6 border-t border-[#765439]/15">
        <p className="text-sm font-mono-code text-[#492d22] uppercase tracking-[0.15em] font-medium">
          1997 — THE BEGINNING
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[#121212] leading-relaxed tracking-tight">
          Verite began in a small workshop above a linen mill, where two hands and one loom made everything we sold. We had no ambition to grow fast. Only to make one honest piece, and then another, and to let the work itself decide what came next.
        </h2>
      </section>

      {/* SECTION 3: TIMELINE (A SLOW HISTORY) */}
      <section className="max-w-[1600px] mx-auto page-shell py-24 border-t border-[#765439]/15 space-y-14">
        <div className="flex justify-between items-baseline border-b border-[#765439]/20 pb-5">
          <h2 className="text-4xl md:text-5xl font-serif-display text-[#121212]">
            A slow history
          </h2>
          <p className="text-sm font-mono-code text-[#765439] uppercase tracking-wider">
            04 CHAPTERS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Chapter 1 */}
          <div className="p-10 border border-[#765439]/20 bg-[#F5F3ED] rounded-xs space-y-4">
            <p className="text-sm font-mono-code text-[#492d22]">1997</p>
            <h3 className="text-3xl font-serif-display font-medium text-[#121212]">
              The first loom
            </h3>
            <p className="text-base font-serif-display text-[#121212]/80 leading-relaxed">
              A single workshop above a linen mill, one loom, and a promise to make things that would outlast us.
            </p>
          </div>

          {/* Chapter 2 */}
          <div className="p-10 border border-[#765439]/20 bg-[#F5F3ED] rounded-xs space-y-4">
            <p className="text-sm font-mono-code text-[#492d22]">2004</p>
            <h3 className="text-3xl font-serif-display font-medium text-[#121212]">
              Sourcing our own flax
            </h3>
            <p className="text-base font-serif-display text-[#121212]/80 leading-relaxed">
              We began working directly with a small farming cooperative, tracing every fibre back to a single field.
            </p>
          </div>

          {/* Chapter 3 */}
          <div className="p-10 border border-[#765439]/20 bg-[#F5F3ED] rounded-xs space-y-4">
            <p className="text-sm font-mono-code text-[#492d22]">2015</p>
            <h3 className="text-3xl font-serif-display font-medium text-[#121212]">
              A second workshop
            </h3>
            <p className="text-base font-serif-display text-[#121212]/80 leading-relaxed">
              Demand outgrew our small room. We opened a second atelier, keeping every seam finished by hand.
            </p>
          </div>

          {/* Chapter 4 */}
          <div className="p-10 border border-[#765439]/20 bg-[#F5F3ED] rounded-xs space-y-4">
            <p className="text-sm font-mono-code text-[#492d22]">Today</p>
            <h3 className="text-3xl font-serif-display font-medium text-[#121212]">
              Still small, on purpose
            </h3>
            <p className="text-base font-serif-display text-[#121212]/80 leading-relaxed">
              We could make more, faster, cheaper. We choose not to. Every piece still passes through the same hands.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE MATERIALS */}
      <section className="max-w-[1600px] mx-auto page-shell py-24 border-t border-[#765439]/15 space-y-20">
        <p className="text-sm font-mono-code text-[#492d22] uppercase tracking-[0.15em] font-medium">
          THE MATERIALS
        </p>

        {/* Feature 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-4/3 w-full bg-[#EAE7DC] rounded-xs overflow-hidden shadow-xs">
            <Image
              src="https://framerusercontent.com/images/bH7lrLwZ75K67A0rsbVZxnmnByc.png"
              alt="Raw linen fabric texture close up"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-serif-display text-[#121212]">
              Linen, before it is linen
            </h2>
            <p className="text-lg font-serif-display text-[#121212]/80 leading-relaxed">
              Every bolt starts as raw flax from fields we have visited ourselves. It is retted, spun, and woven slower than industrial linen, so the fibre keeps its irregular, living texture instead of being pressed into uniformity.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <div className="space-y-5 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif-display text-[#121212]">
              Cut and finished by hand
            </h2>
            <p className="text-lg font-serif-display text-[#121212]/80 leading-relaxed">
              No two seams are exactly alike, because no two hands are. Our pattern cutters and finishers train for years before touching a piece meant for sale, and it shows in the small imperfections we choose to keep.
            </p>
          </div>
          <div className="relative aspect-4/3 w-full bg-[#EAE7DC] rounded-xs overflow-hidden shadow-xs order-1 md:order-2">
            <Image
              src="https://framerusercontent.com/images/hKlyeYMuTZqKYcHydcVNLnww.png"
              alt="Hands hand-stitching embroidery detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PEOPLE / ATELIER GALLERY */}
      <section className="max-w-[1600px] mx-auto page-shell py-24 border-t border-[#765439]/15 space-y-10">
        <div>
          <p className="text-sm font-mono-code text-[#492d22] uppercase tracking-[0.15em] font-medium mb-3">
            THE PEOPLE
          </p>
          <h2 className="text-4xl md:text-5xl font-serif-display text-[#121212]">
            The atelier
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="relative aspect-3/4 bg-[#EAE7DC] rounded-xs overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/XUdZloSMawWnbNPvT5YReudUSQ.png"
              alt="Portrait of a maker at work in the atelier"
              fill
              className="object-cover"
              sizes="33vw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative aspect-3/4 bg-[#EAE7DC] rounded-xs overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/ThNYV2JQDRNgNX0Axm14lcR5mE.png"
              alt="Hands cutting fabric with scissors"
              fill
              className="object-cover"
              sizes="33vw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative aspect-3/4 bg-[#EAE7DC] rounded-xs overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/wkO2Q0PCfkDTqtsiUIcMp6Bc.png"
              alt="Atelier window detail"
              fill
              className="object-cover"
              sizes="33vw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative aspect-3/4 bg-[#EAE7DC] rounded-xs overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/0b7vV4ycwvcivGrkkBzlbPUg.png"
              alt="Tailor pausing at cutting table"
              fill
              className="object-cover"
              sizes="33vw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative aspect-3/4 bg-[#EAE7DC] rounded-xs overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/PdV7rxiYuheZdXq60sp3Uxei4qI.png"
              alt="Stone courtyard entrance"
              fill
              className="object-cover"
              sizes="33vw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative aspect-3/4 bg-[#EAE7DC] rounded-xs overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/dckU0spB2MfhOl8goquv1ur9iE.png"
              alt="Finished linen garment detail"
              fill
              className="object-cover"
              sizes="33vw"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING STATEMENT & CTA */}
      <section className="w-full py-28 bg-[#F5F3ED] border-t border-b border-[#765439]/15 text-center space-y-10 page-shell">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display italic text-[#121212] max-w-3xl mx-auto leading-relaxed">
          &ldquo;We don&apos;t know how big Verite will become. We only know we won&apos;t rush the making to find out.&rdquo;
        </h2>
        <div>
          <Link
            href="/shop"
            className="inline-block px-10 py-5 bg-[#492d22] text-[#e9eae2] font-mono-code text-sm uppercase tracking-widest hover:bg-[#cec3b1]/85 hover:text-[#492d22] transition-colors rounded-xs"
          >
            Shop the collection
          </Link>
        </div>
      </section>

      <SocialSection />
      <ContactSection />
      <Footer />

    </div>
  );
}
