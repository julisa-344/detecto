import { motion } from 'framer-motion'
import heroVideo from '../../assets/v2hero.mp4'

const medicalTags = [
  'Detección Temprana',
  'Oncología Clínica',
  'Investigación',
  'Medicina Preventiva',
  'Quimioterapia',
  'Cirugía de Precisión',
  'Radioterapia',
]

export default function HeroV2() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gray-950" style={{ fontFamily: 'Lexend, sans-serif' }}>
      
      {/* 1. Video de fondo */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gray-950/45" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-950/10 to-transparent" />

      {/* 2. Contenido centrado (Animación Acelerada) */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Entrada instantánea y ágil
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight leading-[1.05]"
          >
            Tecnología que {' '}
            <span className="font-light text-primary">
              transforma
            </span>
            <br />
            la medicina.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-12"
          >
            {/* BOTÓN ORIGINAL (Respetando el diseño original) */}
            <a
              href="#agendar"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#0070A5] text-white text-base font-medium tracking-wide rounded-sm hover:bg-[#005a84] transition-colors duration-200 group"
            >
              Agendar cita
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
        </div>
      </div>

      {/* 3. Slider Automático Infinito (Marquee) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-md"
      >
        <div className="flex overflow-hidden select-none group py-5 lg:py-7">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...medicalTags, ...medicalTags].map((tag, i) => (
              <div key={i} className="flex items-center">
                <span className="px-8 lg:px-12 text-[10px] lg:text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                  {tag}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 mx-2" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}