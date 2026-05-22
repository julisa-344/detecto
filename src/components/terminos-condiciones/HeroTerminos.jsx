import { motion } from 'framer-motion'
import { ShieldCheck, ScrollText } from 'lucide-react'
import { fadeUp, HeroMarquee } from '../specialty'
import { HERO_BG, MARQUEE_ITEMS } from './data'

export default function HeroTerminos() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-950 pt-32 lg:pt-44">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
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
            Marco legal
          </p>

          <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Términos, condiciones y{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              protección de datos.
            </span>
          </h1>

          <p className="max-w-2xl text-[14.5px] font-light leading-relaxed text-slate-200 lg:text-[15.5px]">
            Conoce las condiciones que rigen el uso de nuestro sitio y los
            servicios de Detecta Clínica, así como el tratamiento responsable
            que damos a tus datos personales.
          </p>
        </motion.div>
      </div>

      <HeroMarquee items={MARQUEE_ITEMS} />
    </section>
  )
}
