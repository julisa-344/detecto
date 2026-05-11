import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import detecto from '../../assets/detecto.png'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { servicios } from './data'

const SERVICIO_Y_OFFSETS = ['-22vh', '12vh', '-8vh', '18vh', '-18vh', '6vh', '-12vh']

function ServiceProgressDot({ idx, total, progress }) {
  const start = idx / total
  const end = (idx + 1) / total
  const peak = (start + end) / 2
  const before = Math.max(0, start - 0.02)
  const after = Math.min(1, end + 0.02)

  const opacity = useTransform(progress, [before, peak, after], [0.3, 1, 0.3])
  const scale = useTransform(progress, [before, peak, after], [0.8, 1.4, 0.8])

  return (
    <motion.span
      style={{ opacity, scale }}
      className="h-1.5 flex-1 rounded-full bg-[rgb(var(--brand-med))]"
    />
  )
}

export default function ServiciosCarruselScroll() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const total = servicios.length
  const SLOT_VW = 37
  const trackVW = total * SLOT_VW
  const x = useTransform(scrollYProgress, [0, 1], ['100vw', `-${trackVW}vw`])

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Servicios</SectionEyebrow>
        <SectionTitle className="mb-3">Lo que ofrecemos</SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-400">
          Un ecosistema completo de atención oncológica bajo un mismo techo.
        </p>
      </div>

      <div ref={containerRef} className="relative" style={{ height: '220vh' }}>
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <motion.img
            src={detecto}
            alt="Detecto"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-20 h-[60vh] w-auto max-w-[60vw] object-contain"
          />

          <motion.div
            style={{ x }}
            className="pointer-events-none absolute inset-y-0 left-0 z-40 flex items-center gap-[3vw] px-[2vw] will-change-transform"
          >
            {servicios.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={i}
                  style={{ transform: `translateY(${SERVICIO_Y_OFFSETS[i]})` }}
                  className="flex w-[34vw] shrink-0 items-center gap-4 rounded-2xl border border-white/60 bg-white/85 px-6 py-5 shadow-[0_18px_40px_-18px_rgb(var(--brand-med)/0.3)] backdrop-blur-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--brand-med))] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--brand-med))]">
                      Servicio {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-lg font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] sm:text-xl">
                      {s.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-10 z-[60] mx-auto flex max-w-md items-center gap-2 px-6">
            {servicios.map((_, i) => (
              <ServiceProgressDot key={i} idx={i} total={total} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
