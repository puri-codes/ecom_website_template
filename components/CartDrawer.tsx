'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalCount, subtotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsOpen(false)}
        id="cart-backdrop"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-16">
        <div className="w-screen max-w-lg bg-[#F9F8F2] shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="px-8 py-6 border-b border-[#988985]/20 flex items-center justify-between">
            <h2 className="text-base font-mono-code font-semibold tracking-wider text-[#121212] uppercase">
              YOUR CART ({totalCount})
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              id="close-cart-button"
              className="p-1.5 text-[#121212] hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-6">
                <p className="text-lg font-serif-display text-[#121212]/70 italic">
                  Your cart is currently empty.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  id="empty-cart-shop-link"
                  className="inline-flex items-center space-x-2 text-sm font-mono-code uppercase px-6 py-3 bg-[#121212] text-[#F9F8F2] hover:bg-[#121212]/80 transition-colors rounded-sm"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              items.map((item, idx) => (
                <div key={`${item.product.id}-${item.size}-${item.color}-${idx}`} className="flex space-x-5 border-b border-[#988985]/15 pb-8">
                  <div className="relative w-24 h-28 bg-[#EAE7DC] flex-shrink-0 rounded-xs overflow-hidden">
                    <Image
                      src={item.product.displayImage}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-base font-serif-display font-medium text-[#121212] leading-tight">
                          {item.product.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="text-[#988985] hover:text-[#121212] transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs font-mono-code text-[#988985] mt-1.5">
                        Size: {item.size} · Color: {item.color}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-[#988985]/30 rounded-xs">
                        <button
                          onClick={() => updateQuantity(idx, item.quantity - 1)}
                          className="px-3 py-1 text-[#121212] hover:bg-[#121212]/5"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm font-mono-code">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(idx, item.quantity + 1)}
                          className="px-3 py-1 text-[#121212] hover:bg-[#121212]/5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-mono-code font-medium text-[#121212]">
                        ${(item.product.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="px-8 py-8 border-t border-[#988985]/20 bg-[#F5F3ED] space-y-5">
              <div className="space-y-2 text-sm font-mono-code">
                <div className="flex justify-between text-[#121212]">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <p className="text-xs text-[#988985]">
                  {subtotal >= 15000 
                    ? 'Eligible for complimentary global shipping.' 
                    : 'Taxes and shipping calculated at checkout.'}
                </p>
              </div>

              <button
                id="checkout-button"
                onClick={() => {
                  alert('Thank you for choosing Verite. Proceeding to secure checkout...');
                }}
                className="w-full py-4 bg-[#121212] text-[#F9F8F2] text-sm font-mono-code uppercase tracking-widest hover:bg-[#121212]/90 transition-colors rounded-xs font-medium text-center block"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs font-mono-code text-[#988985] hover:text-[#121212] transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
