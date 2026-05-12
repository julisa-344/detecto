import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { MISION, VISION } from './data'

const DOT_PATTERN_STYLE = {
  backgroundImage:
    'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
  backgroundSize: '24px 24px',
}

function MisionCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[36px] p-8 lg:p-12 bg-linear-to-br from-primary-dark to-[#0A2A3F] text-white shadow-[0_30px_60px_-20px_rgba(0,42,63,0.45)]"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={DOT_PATTERN_STYLE}
      />
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 mb-6">
          <Target className="h-5 w-5" />
        </span>
        <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/70 mb-3">
          {MISION.eyebrow}
        </p>
        <h3 className="text-3xl lg:text-4xl font-light tracking-tight leading-[1.1] mb-6">
          {MISION.titlePre}{' '}
          <span className="italic">{MISION.titleAccent}</span>
        </h3>
        <p className="text-base font-light text-white/85 leading-relaxed max-w-lg">
          {MISION.body}
        </p>
      </div>
    </motion.article>
  )
}

function VisionCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[36px] p-8 lg:p-12 bg-linear-to-br from-[#EEFBFF] to-[#BFE4F1] border border-white text-slate-900 shadow-[0_30px_60px_-20px_rgba(0,112,165,0.25)]"
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-medium/20 blur-3xl pointer-events-none" />
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-dark shadow-md mb-6">
          <Eye className="h-5 w-5" />
        </span>
        <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary-medium mb-3">
          {VISION.eyebrow}
        </p>
        <h3 className="text-3xl lg:text-4xl font-light tracking-tight leading-[1.1] mb-6">
          {VISION.titlePre}{' '}
          <span className="italic text-primary-dark">{VISION.titleAccent}</span>
        </h3>
        <p className="text-base font-light text-slate-700 leading-relaxed max-w-lg">
          {VISION.body}
        </p>
      </div>
    </motion.article>
  )
}

export default function MisionVisionSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <MisionCard />
          <VisionCard />
        </div>
      </div>
    </section>
  )
}
