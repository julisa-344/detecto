// ─── Brand colour tokens ─────────────────────────────────────────────────────
// Single source of truth for Detecta's primary palette.
// Usage: import { BRAND } from '@/lib/brand'

export const BRAND = {
  /** Celeste principal */
  base: '#52C0E1',
  /** Celeste medio */
  med:  '#0199C6',
  /** Azul oscuro */
  dark: '#0070A5',
} as const

export type BrandKey = keyof typeof BRAND
