'use client';

import { useEffect, useRef, useState } from 'react';
import { CURSOR, CURSOR_INTERACTIVE_SELECTOR } from '@/lib/cursor';

type CursorMode = 'none' | 'interactive' | 'strong';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotPosRef = useRef<HTMLDivElement>(null);
  const dotInnerRef = useRef<HTMLDivElement>(null);
  const ringPosRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<CursorMode>('none');
  const downRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateEnabled = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };
    updateEnabled();
    finePointer.addEventListener('change', updateEnabled);
    reducedMotion.addEventListener('change', updateEnabled);
    return () => {
      finePointer.removeEventListener('change', updateEnabled);
      reducedMotion.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dotPos = dotPosRef.current;
    const dotInner = dotInnerRef.current;
    const ringPos = ringPosRef.current;
    const ringInner = ringInnerRef.current;
    if (!dotPos || !dotInner || !ringPos || !ringInner) return;

    document.body.classList.add('custom-cursor-enabled');

    const applyDot = () => {
      dotInner.style.transform = `scale(${downRef.current ? CURSOR.dotScaleDown : 1})`;
    };

    const applyRing = () => {
      const base =
        modeRef.current === 'strong'
          ? CURSOR.ringStrongScale
          : modeRef.current === 'interactive'
            ? CURSOR.ringInteractiveScale
            : CURSOR.ringHiddenScale;
      const factor = downRef.current ? CURSOR.ringScaleDown : 1;
      ringInner.style.transform = `scale(${base * factor})`;
      ringInner.style.opacity = modeRef.current === 'none' ? '0' : '1';
    };

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let shown = false;
    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        shown = true;
        rx = x;
        ry = y;
        dotPos.style.opacity = '1';
        ringPos.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      downRef.current = true;
      applyDot();
      applyRing();
    };

    const onMouseUp = () => {
      downRef.current = false;
      applyDot();
      applyRing();
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(CURSOR_INTERACTIVE_SELECTOR);
      if (!el) return;
      const isStrong =
        el.hasAttribute('data-cursor') &&
        (el.dataset.cursor === 'cta' || el.dataset.cursor === 'image');
      modeRef.current = isStrong ? 'strong' : 'interactive';
      applyRing();
    };

    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      if (!related) {
        shown = false;
        dotPos.style.opacity = '0';
        ringPos.style.opacity = '0';
      } else if (!related.closest(CURSOR_INTERACTIVE_SELECTOR)) {
        modeRef.current = 'none';
        applyRing();
      }
    };

    const loop = () => {
      dotPos.style.transform = `translate3d(${x - CURSOR.dotSize / 2}px, ${y - CURSOR.dotSize / 2}px, 0)`;
      rx += (x - rx) * CURSOR.lerp;
      ry += (y - ry) * CURSOR.lerp;
      ringPos.style.transform = `translate3d(${rx - CURSOR.ringSize / 2}px, ${ry - CURSOR.ringSize / 2}px, 0)`;
      raf = window.requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    raf = window.requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotPosRef} className="cursor-dot" aria-hidden="true">
        <div ref={dotInnerRef} className="cursor-dot-inner" />
      </div>
      <div ref={ringPosRef} className="cursor-ring" aria-hidden="true">
        <div ref={ringInnerRef} className="cursor-ring-inner" />
      </div>
    </>
  );
}
