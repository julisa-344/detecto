import { motion } from 'framer-motion'
import { CalendarDays, Receipt, Mail, Phone } from 'lucide-react'
import { fadeUp } from '../specialty'
import heroVideo from '../../assets/herobg.mp4'

const stats = [
  { label: 'Sesiones', value: 'Todos los miércoles', icon: CalendarDays },
  { label: 'Tarifario', value: 'Costos de evaluación', icon: Receipt },
  { label: 'Correo', value: 'comitedeetica@detecta.pe', icon: Mail },
  { label: 'Anexo', value: '(01) 217 5100 - 420', icon: Phone },
]

export default function ComiteEticaHero() {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-between overflow-hidden bg-slate-900 pt-28 pb-10 lg:pt-32">
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-950/50 to-slate-950/10" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

      {/* Contenido */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6"
        >

          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white pt-20 sm:text-6xl lg:text-7xl">
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

      {/* Stats band — glass dentro del hero */}
      <div className="relative z-20 mx-auto mt-16 w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 divide-y divide-white/15 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/15"
        >
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className={`group flex items-start gap-4 p-6 lg:p-7 ${
                  i % 2 === 1 ? 'sm:border-l sm:border-white/15 lg:border-l-0' : ''
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors group-hover:border-[rgb(var(--brand-base))] group-hover:bg-[rgb(var(--brand-base))]">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    {s.label}
                  </p>
                  <p className="mt-1.5 truncate text-[14px] font-light text-white lg:text-[15px]">
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
