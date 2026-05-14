import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../specialty'
import heroVideo from '../../assets/etico.mp4'
import { heroMicrocards } from './data'

export default function GestionEticaHero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-slate-900 pt-28 pb-12 lg:pt-32">
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

      {/* Contenido principal */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6 pt-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--brand-base))] opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-base))]" />
            </span>
            Gestión de Ética
          </span>

          <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Gestión institucional basada en{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              integridad y responsabilidad.
            </span>
          </h1>

          <p className="max-w-2xl text-base font-light leading-relaxed text-slate-200 lg:text-[17px]">
            En Detecta Clínica, la ética guía cada decisión clínica,
            administrativa y humana. Construimos confianza con acciones
            coherentes que protegen al paciente, al colaborador y a la
            reputación institucional.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#documentos"
              className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
            >
              <span className="rounded-full bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                Ver documentos y políticas
              </span>
              <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </a>

            <a
              href="#compromiso"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white hover:text-[rgb(var(--brand-dark))]"
            >
              Conocer nuestro compromiso
            </a>
          </div>
        </motion.div>
      </div>

      {/* Microcards glass */}
      <div className="relative z-20 mx-auto mt-12 w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroMicrocards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.5)] hover:bg-white/15"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors group-hover:border-[rgb(var(--brand-base))] group-hover:bg-[rgb(var(--brand-base))]">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60">
                    {c.label}
                  </p>
                  <p className="mt-1 text-[13px] font-light leading-tight text-white">
                    {c.value}
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
