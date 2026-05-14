import { motion } from 'framer-motion'
import { CalendarDays, Receipt, Mail, Phone } from 'lucide-react'
import { fadeUp } from '../specialty'
import heroVideo from '../../assets/etica.mp4'

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
      <div className="absolute inset-0 bg-linear-to-tr from-slate-950/75 via-slate-950/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />

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

      {/* Stats — cards separadas */}
      <div className="relative z-20 mx-auto mt-16 w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.5)] hover:bg-white/15 lg:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition-colors group-hover:border-[rgb(var(--brand-base))] group-hover:bg-[rgb(var(--brand-base))]">
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
