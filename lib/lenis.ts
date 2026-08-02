import type { LenisOptions } from 'lenis';

export const LENIS_OPTIONS = {
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  smoothWheel: true,
  syncTouch: false,
  autoRaf: true,
  anchors: true,
  stopInertiaOnNavigate: true,
} satisfies LenisOptions;
