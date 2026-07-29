'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="w-full py-24 md:py-32 border-t border-[#988985]/15 bg-[#F9F8F2]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column: Heading & Copy */}
        <div className="lg:col-span-5 space-y-5">
          <p className="text-sm font-mono-code text-[#786E5F] uppercase tracking-[0.15em] font-medium">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display text-[#121212] tracking-tight leading-[1.05]">
            Let&apos;s start a conversation.
          </h2>
          <p className="text-base md:text-lg font-serif-display text-[#121212]/70 leading-relaxed max-w-lg pt-3">
            Whether you want to share your thoughts on our collection or need assistance curating your wardrobe, we&apos;d love to hear from you.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="p-10 bg-[#F5F3ED] border border-[#988985]/20 rounded-xs text-center space-y-4">
              <h3 className="text-2xl font-serif-display text-[#121212]">
                Thank you for your message.
              </h3>
              <p className="text-sm font-mono-code text-[#988985]">
                We have received your enquiry and will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 font-serif-display">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* First Name */}
                <div className="space-y-1 border-b border-[#121212]/30 focus-within:border-[#121212] pb-3 transition-colors">
                  <label htmlFor="contact-first-name" className="block text-sm font-mono-code text-[#988985]">
                    First Name
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    required
                    placeholder="Bruce"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-transparent text-xl md:text-2xl text-[#121212] placeholder-[#121212]/30 focus:outline-none"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-1 border-b border-[#121212]/30 focus-within:border-[#121212] pb-3 transition-colors">
                  <label htmlFor="contact-last-name" className="block text-sm font-mono-code text-[#988985]">
                    Last Name
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    required
                    placeholder="Wayne"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-transparent text-xl md:text-2xl text-[#121212] placeholder-[#121212]/30 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1 border-b border-[#121212]/30 focus-within:border-[#121212] pb-3 transition-colors">
                <label htmlFor="contact-email" className="block text-sm font-mono-code text-[#988985]">
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="bruce@wayne.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent text-xl md:text-2xl text-[#121212] placeholder-[#121212]/30 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="space-y-1 border-b border-[#121212]/30 focus-within:border-[#121212] pb-3 transition-colors">
                <label htmlFor="contact-message" className="block text-sm font-mono-code text-[#988985]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={3}
                  placeholder="Leave a message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-xl md:text-2xl text-[#121212] placeholder-[#121212]/30 focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-submit-button"
                className="w-full py-5 bg-[#121212] text-[#F9F8F2] font-mono-code text-sm uppercase tracking-widest hover:bg-[#121212]/90 transition-colors rounded-xs font-medium text-center"
              >
                Submit
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
