import { motion } from 'framer-motion'
import { ArrowUpRight } from "lucide-react"
import bgImage from '../../assets/opcion2.png'

const medicalTags = [
  'Detección Temprana',
  'Oncología Clínica',
  'Investigación',
  'Medicina Preventiva',
  'Quimioterapia',
  'Cirugía de Precisión',
  'Radioterapia',
]

export default function HeroV3() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/50 via-gray-950/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-950/80 to-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-10 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white tracking-tight leading-[1.0] mb-6"
          >
            Transformando <span className="italic font-light text-cyan-400">el futuro</span>
            <br />
            de la medicina.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base lg:text-lg font-light text-white/55 max-w-md leading-relaxed mb-10"
          >
            Descubre cómo estamos redefiniendo el diagnóstico médico con inteligencia artificial e innovación de vanguardia.
          </motion.p>

          {/* Botón con animación de entrada y Hover de 21st dev */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden lg:flex items-center"
          >
            <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
              <span 
                className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-white/10 group-hover:bg-white group-hover:text-slate-900"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                AGENDAR CITA
              </span>
              
              <div 
                className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-white/20 text-white group-hover:bg-white group-hover:text-slate-900"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  zIndex: 2
                }}
              >
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider Automático Infinito (Marquee) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-md"
      >
        <div className="flex overflow-hidden select-none group">
          {/* Animamos este contenedor para que se desplace infinitamente */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity 
            }}
            className="flex whitespace-nowrap"
          >
            {/* Duplicamos los tags para crear el efecto infinito sin saltos */}
            {[...medicalTags, ...medicalTags].map((tag, i) => (
              <div key={i} className="flex items-center">
                <span className="px-12 py-6 text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                  {tag}
                </span>
                <div className="w-2 h-2 rounded-full bg-cyan-500/30 mx-2" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CSS para ocultar scrollbar en caso de emergencia */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}