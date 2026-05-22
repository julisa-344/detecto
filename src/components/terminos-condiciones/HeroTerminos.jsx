import { motion } from 'framer-motion'
import { ShieldCheck, ScrollText } from 'lucide-react'
import { fadeUp } from '../specialty'
import { HERO_BG } from './data'

export default function HeroTerminos() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[rgb(var(--brand-dark)/0.92)] via-[rgb(var(--brand-dark)/0.78)] to-[rgb(var(--brand-dark)/0.45)]" />
      <div className="absolute inset-0 bg-linear-to-t from-[rgb(var(--brand-dark)/0.6)] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em]">
            <span className="h-px w-10 bg-[rgb(var(--brand-base))]" />
            <span className="text-[rgb(var(--brand-base))]">Marco legal</span>
          </div>

          <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Términos, condiciones y{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              protección de datos.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/85 lg:text-[17px]">
            Conoce las condiciones que rigen el uso de nuestro sitio y los
            servicios de Detecta Clínica, así como el tratamiento responsable
            que damos a tus datos personales.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">
            <span className="inline-flex items-center gap-2">
              <ScrollText className="h-3.5 w-3.5" />
              Última actualización · Mayo 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              Ley N.° 29733
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
