import { motion } from 'framer-motion'
import { BookOpen, ShieldCheck } from 'lucide-react'
import { fadeUp, HeroMarquee } from '../specialty'
import { MARQUEE_ITEMS, HERO_BG } from './data'

export default function HeroLibro() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-950 pt-32 lg:pt-44">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/55 via-slate-950/25 to-slate-950/5" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-5"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Atención al cliente
          </p>

          <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Libro de{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              reclamaciones.
            </span>
          </h1>

          <p className="max-w-2xl text-[14.5px] font-light leading-relaxed text-slate-200 lg:text-[15.5px]">
            Tu opinión nos ayuda a mejorar. Registra aquí tu reclamo o queja y
            recibirás una respuesta formal dentro de los 30 días calendario,
            según lo dispuesto por la normativa vigente.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" />
              Decreto Supremo N.° 011-2011-PCM
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              Indecopi · Defensa del consumidor
            </span>
          </div>
        </motion.div>
      </div>

      <HeroMarquee items={MARQUEE_ITEMS} />
    </section>
  )
}
