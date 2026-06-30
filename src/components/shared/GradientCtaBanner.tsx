import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'

// ─── Types ────────────────────────────────────────────────────────────────────

interface GradientCtaBannerProps {
  /** Small uppercase label above the title */
  eyebrow:      string
  /** First line of the heading (light weight) */
  titlePre:     string
  /** Second line of the heading (medium italic) */
  titleAccent:  string
  /** Short descriptive paragraph (primary) */
  descPrimary:  string
  /** Short descriptive paragraph (secondary, muted) */
  descSecondary?: string
  /** CTA button label */
  ctaLabel?:    string
  /** URL the CTA button points to */
  ctaHref:      string
  /** Image shown on the right panel */
  image:        string
  /** Alt text for the image */
  imageAlt?:    string
  /**
   * How the right-side image is displayed.
   * - `'cutout'`  — positioned bottom-right, object-contain (floating figure style)
   * - `'cover'`   — fills the panel, object-cover
   */
  imageStyle?:  'cutout' | 'cover'
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function GradientCtaBanner({
  eyebrow,
  titlePre,
  titleAccent,
  descPrimary,
  descSecondary,
  ctaLabel    = 'Agenda tu cita ahora',
  ctaHref,
  image,
  imageAlt    = '',
  imageStyle  = 'cover',
}: GradientCtaBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_-35px_rgba(0,112,165,0.4)]"
      style={{
        background: 'linear-gradient(120deg, #7DD3E8 0%, #52C0E1 55%, #0199C6 100%)',
      }}
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

      <div className="grid items-stretch lg:grid-cols-[1.25fr_1fr]">

        {/* Left — text + CTA */}
        <div className="relative px-8 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-light uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {titlePre}{' '}
            <span className="font-medium italic">{titleAccent}</span>
          </h2>
          <p className="mt-6 text-[14.5px] font-light leading-relaxed text-white/90">
            {descPrimary}
          </p>
          {descSecondary && (
            <p className="mt-1 text-[13.5px] font-light leading-relaxed text-white/75">
              {descSecondary}
            </p>
          )}

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-0 active:scale-95"
          >
            <span
              className="rounded-full bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-500"
              style={{ color: BRAND.dark }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = BRAND.dark
                ;(e.currentTarget as HTMLElement).style.color = 'white'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'white'
                ;(e.currentTarget as HTMLElement).style.color = BRAND.dark
              }}
            >
              {ctaLabel}
            </span>
            <span
              className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-500"
              style={{ color: BRAND.dark }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = BRAND.dark
                ;(e.currentTarget as HTMLElement).style.color = 'white'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'white'
                ;(e.currentTarget as HTMLElement).style.color = BRAND.dark
              }}
            >
              <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </a>
        </div>

        {/* Right — image */}
        {imageStyle === 'cutout' ? (
          <div className="relative min-h-80 lg:min-h-full">
            <img
              src={image}
              alt={imageAlt}
              className="absolute bottom-0 right-0 z-20 h-[90%] w-auto max-w-none object-contain object-bottom"
              loading="lazy"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-transparent to-[rgba(82,192,225,0.45)] lg:to-[rgba(82,192,225,0.3)]" />
          </div>
        ) : (
          <div className="relative min-h-80 overflow-hidden lg:min-h-full">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[rgba(82,192,225,0.45)] lg:to-[rgba(82,192,225,0.3)]" />
          </div>
        )}

      </div>
    </motion.section>
  )
}
