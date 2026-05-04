import { motion } from 'framer-motion'
import heroVideo from '../../assets/v2hero.mp4'

export default function HeroV2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay oscuro clásico */}
      <div className="absolute inset-0 bg-gray-950/65" />

      {/* Gradiente sutil desde abajo para transición suave con la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/10 to-transparent" />

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight leading-[1.05]"
        >
          Tecnología que{' '}
          <span className="font-light italic text-primary">
            transforma
          </span>
          <br />
          la medicina.
        </motion.h1>

        {/* CTA — sharp, 1 botón */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#agendar"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary-dark text-white text-base font-medium tracking-wide rounded-sm hover:bg-[#005a84] transition-colors duration-200 group"
          >
            Iniciar evaluación
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-light">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
