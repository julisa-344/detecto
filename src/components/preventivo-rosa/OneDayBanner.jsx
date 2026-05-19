import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../specialty'

const WOMAN_IMG = `${import.meta.env.VITE_BASE_IMAGE_URL}preventivos/woman.png`

export default function OneDayBanner() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-4xl shadow-[0_30px_70px_-35px_rgba(194,24,91,0.35)]"
      style={{
        background:
          'linear-gradient(120deg, #F4A8C0 0%, #E5739A 55%, #D86592 100%)',
      }}
    >
      {/* Blobs decorativos suaves */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

      <div className="grid items-stretch lg:grid-cols-[1.25fr_1fr]">
        {/* Texto */}
        <div className="relative px-8 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <h2 className="text-3xl font-light uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Todo en un solo lugar,{' '}
            <span className="italic font-medium">en un solo día.</span>
          </h2>
          <p className="mt-6 text-[14.5px] font-light leading-relaxed text-white/90">
            Consulta + análisis + imágenes + resultados.
          </p>
          <p className="mt-1 text-[13.5px] font-light leading-relaxed text-white/75">
            Sin esperas. Sin vueltas. Sin excusas.
          </p>

          <button className="group mt-9 inline-flex items-center gap-0 active:scale-95">
            <span className="rounded-full bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C1436D] transition-all duration-500 group-hover:bg-[#C1436D] group-hover:text-white">
              Agenda tu cita ahora
            </span>
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white text-[#C1436D] transition-all duration-500 group-hover:bg-[#C1436D] group-hover:text-white">
              <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </button>
        </div>

        {/* Imagen */}
        <div className="relative min-h-80 overflow-hidden lg:min-h-full">
          <img
            src={WOMAN_IMG}
            alt="Preventivo Rosa"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#E5739A]/45 lg:to-[#E5739A]/30" />
        </div>
      </div>
    </motion.section>
  )
}
