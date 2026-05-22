import { motion } from 'framer-motion'
import { fadeUp } from './theme'
import CTAButton from './CTAButton'

const DEFAULT_MARQUEE = [
  'Detección Temprana',
  'Innovación Tecnológica',
  'Equipo Especializado',
  'Atención Integral',
  'Resultados Confiables',
  'Cuidado Humano',
]

export default function Hero({ video, titlePre, titleAccent, subtitle, marqueeItems }) {
  const items = marqueeItems && marqueeItems.length ? marqueeItems : DEFAULT_MARQUEE
  const loop = [...items, ...items, ...items]

  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-950 pt-24 lg:pt-20">
      <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover opacity-90">
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/45 via-slate-950/20 to-slate-950/5" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950/60 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {titlePre}{' '}
            <br />
            <span className="font-light text-[rgb(var(--brand-base))]">{titleAccent}</span>
          </h1>

          <p className="max-w-lg text-base font-light leading-relaxed text-slate-300 sm:text-lg">
            {subtitle}
          </p>

          <div className="pt-2">
            <CTAButton />
          </div>
        </motion.div>
      </div>

      {/* Cintillo marquee inferior */}
      <div className="relative z-20 w-full border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex overflow-hidden select-none py-4 lg:py-5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {loop.map((tag, i) => (
              <div key={i} className="flex items-center">
                <span className="px-6 lg:px-10 text-[10px] lg:text-[11px] font-bold tracking-[0.3em] uppercase text-white/45 hover:text-[rgb(var(--brand-base))] transition-colors duration-300 cursor-default">
                  {tag}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--brand-base)/0.5)] mx-1.5" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
