import { motion } from 'framer-motion'
import { fadeUp } from '../specialty'
import { heroStats } from './data'
import heroVideo from '../../assets/herobg.mp4'

export default function ComiteEticaHero() {
  return (
    <section className="relative">
      <div className="relative flex min-h-[70vh] items-end overflow-hidden bg-slate-900 pb-32 pt-24 lg:items-center lg:pb-40 lg:pt-20">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-950/50 to-slate-950/20" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--brand-base))] opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-base))]" />
              </span>
              CIEI Detecta
            </span>

            <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ética en investigación con{' '}
              <span className="italic font-medium text-[rgb(var(--brand-base))]">
                enfoque humano.
              </span>
            </h1>

            <p className="max-w-2xl text-base font-light leading-relaxed text-slate-200 lg:text-[17px]">
              El Comité Institucional de Ética en Investigación evalúa y
              supervisa estudios con seres humanos para garantizar seguridad,
              dignidad y cumplimiento ético.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats band — overlapping bottom */}
      <div className="relative z-30 mx-auto -mt-24 max-w-7xl px-6 lg:-mt-28 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-3 rounded-4xl border border-slate-100 bg-white p-4 shadow-[0_30px_60px_-20px_rgb(15,23,42/0.25)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 lg:p-6"
        >
          {heroStats.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.eyebrow}
                className="flex items-start gap-4 rounded-3xl p-4 transition-colors hover:bg-(--brand-bg-ultra)"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {s.eyebrow}
                  </p>
                  <p className="mt-1 truncate text-[14px] font-medium text-[rgb(var(--brand-dark))]">
                    {s.value}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
