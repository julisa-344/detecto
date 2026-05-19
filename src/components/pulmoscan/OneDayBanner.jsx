import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../specialty'

const HERO_IMG = `${import.meta.env.VITE_BASE_IMAGE_URL}preventivos/pulmoscan.png`

export default function OneDayBanner() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-4xl shadow-[0_30px_70px_-35px_rgba(0,112,165,0.4)]"
      style={{
        background:
          'linear-gradient(120deg, #7DD3E8 0%, #52C0E1 55%, #0199C6 100%)',
      }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

      <div className="grid items-stretch lg:grid-cols-[1.25fr_1fr]">
        <div className="relative px-8 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
            Promoción hasta el 31 de julio 2025
          </p>
          <h2 className="mt-4 text-4xl font-light uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Tu PulmoScan{' '}
            <span className="italic font-medium">por solo S/ 400.</span>
          </h2>
          <p className="mt-6 text-[14.5px] font-light leading-relaxed text-white/90">
            Consulta neumológica + espirometría + radiografía + lectura.
          </p>
          <p className="mt-1 text-[13.5px] font-light leading-relaxed text-white/75">
            Precio regular S/ 571.71. Sin esperas. Sin vueltas.
          </p>

          <button className="group mt-9 inline-flex items-center gap-0 active:scale-95">
            <span className="rounded-full bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-dark))] transition-all duration-500 group-hover:bg-[rgb(var(--brand-dark))] group-hover:text-white">
              Agenda tu cita ahora
            </span>
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 group-hover:bg-[rgb(var(--brand-dark))] group-hover:text-white">
              <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </button>
        </div>

        <div className="relative min-h-80 overflow-hidden lg:min-h-full">
          <img
            src={HERO_IMG}
            alt="PulmoScan"
            className="absolute inset-0 h-full w-[80%] object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#52C0E1]/45 lg:to-[#52C0E1]/30" />
        </div>
      </div>
    </motion.section>
  )
}
