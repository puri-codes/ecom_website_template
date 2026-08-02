'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';
import { LENIS_OPTIONS } from '@/lib/lenis';

function ScrollManager() {
  const lenis = useLenis();
  const pathname = usePathname();
  const firstPathname = useRef(pathname);
  const isPopState = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isPopState.current = true;
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (firstPathname.current === pathname) {
      return;
    }
    firstPathname.current = pathname;

    if (isPopState.current) {
      isPopState.current = false;
      return;
    }

    const hash = window.location.hash;

    if (hash && hash.length > 1) {
      const id = window.requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          if (lenis) {
            lenis.scrollTo(hash, { offset: 0, duration: 0.9 });
          } else {
            target.scrollIntoView();
          }
        }
      });
      return () => window.cancelAnimationFrame(id);
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const content = (
    <>
      <ScrollManager />
      {children}
    </>
  );

  if (reducedMotion) {
    return content;
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {content}
    </ReactLenis>
  );
}
