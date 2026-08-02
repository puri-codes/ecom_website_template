export const CURSOR = {
  color: '#492D22',
  dotSize: 16,
  ringSize: 36,
  ringBorder: 1.5,
  dotScaleDown: 0.8,
  ringScaleDown: 0.85,
  ringHiddenScale: 0.5,
  ringInteractiveScale: 1,
  ringStrongScale: 1.3,
  lerp: 0.16,
  transitionMs: 220,
  zIndex: 99999,
} as const;

export const CURSOR_INTERACTIVE_SELECTOR = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  'label',
  '[role="button"]',
  '[data-cursor]',
].join(',');
