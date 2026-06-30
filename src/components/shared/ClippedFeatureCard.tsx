import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import CardClipDef, { CARD_CLIP_ID } from '@/components/staff-medico/CardClipDef'
import { BRAND } from '@/lib/brand'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ClippedFeatureItem {
  title: string
  desc:  string
  icon:  LucideIcon
  image: string
}

// ─── Shared clip style ────────────────────────────────────────────────────────

const CLIP_STYLE: React.CSSProperties = {
  clipPath:       `url(#${CARD_CLIP_ID})`,
  WebkitClipPath: `url(#${CARD_CLIP_ID})`,
}

// ─── Card ─────────────────────────────────────────────────────────────────────

interface ClippedFeatureCardProps {
  item:  ClippedFeatureItem
  index: number
}

export default function ClippedFeatureCard({ item, index }: ClippedFeatureCardProps) {
  const Icon = item.icon
  const num  = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative"
    >
      <div className="relative aspect-[616/868] w-full">

        {/* Clipped image container */}
        <div
          className="absolute inset-0 overflow-hidden bg-slate-900"
          style={CLIP_STYLE}
        >
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-slate-950/15" />

          <div className="relative flex h-full w-full flex-col justify-between p-7 lg:p-8">

            {/* Top: icon + number */}
            <div className="flex items-start justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-md">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                {num}
              </span>
            </div>

            {/* Bottom: title + hover-expand description */}
            <div className="pr-[18%]">
              <h3 className="text-2xl font-light leading-tight tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-1 lg:text-3xl">
                {item.title}
              </h3>
              <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr]">
                <p className="overflow-hidden text-[13px] font-light leading-relaxed text-white/0 transition-colors duration-500 group-hover:text-white/85">
                  {item.desc}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Brand dot — outside clip, bottom-right */}
        <span
          aria-hidden="true"
          className="absolute bottom-[2%] right-[2%] flex h-[11%] w-[16%] items-center justify-center rounded-full transition-all duration-500 group-hover:scale-105"
          style={{ background: BRAND.base }}
        />
      </div>
    </motion.article>
  )
}

// ─── Re-export SVG def so callers only need one import ────────────────────────
export { CardClipDef }
