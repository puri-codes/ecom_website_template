import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/cart-context';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'Verite — Premium Fashion & Natural Fibre',
  description: 'A quiet house of things made slowly, for people who keep them for a long time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#F9F8F2] text-[#121212] min-h-screen flex flex-col selection:bg-[#121212] selection:text-[#F9F8F2]">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
