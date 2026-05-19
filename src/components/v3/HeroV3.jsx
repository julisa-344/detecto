import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from "lucide-react"

// Importa tus videos aquí. Asegúrate de tener al menos 3.
import video1 from '../../assets/herobg.mp4'
import video2 from '../../assets/herobg2.mp4' // Reemplazar por videos reales
import video3 from '../../assets/herobg3.mp4' // Reemplazar por videos reales

const slides = [video1, video2, video3]

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
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // Ajusta el tiempo de cambio entre videos
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      
      {/* Carrusel de Videos */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
        <motion.video
          key={currentIndex}
          src={slides[currentIndex]}
          initial={{ opacity: 0, filter: "brightness(0) sepia(1) hue-rotate(90deg)" }}
          animate={{ opacity: 1, filter: "brightness(1) sepia(0) hue-rotate(0deg)" }}
          exit={{ opacity: 0, filter: "brightness(0) sepia(1) hue-rotate(90deg)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-1 bg-linear-to-br from-gray-950/40 via-gray-950/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-96 z-1 bg-gradient-to-t from-gray-950/60 to-transparent" />

      {/* Contenido principal (Subido para no pegar con el cintillo) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-40 w-full">
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
            className="text-base lg:text-lg font-light text-white/95 max-w-md leading-relaxed mb-10"
          >
            Descubre cómo estamos redefiniendo el diagnóstico médico con inteligencia artificial e innovación de vanguardia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden lg:flex items-center"
          >
            <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
              <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-white/10 group-hover:bg-white group-hover:text-slate-900 backdrop-blur-md border border-white/20">
                AGENDAR CITA
              </span>
              <div className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-white/20 text-white group-hover:bg-white group-hover:text-slate-900 backdrop-blur-md border border-white/30">
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Indicadores (Discretos y alineados) */}
      <div className="absolute bottom-40 right-32 z-20 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="flex items-center justify-center w-8 h-8 text-white cursor-pointer transition-all duration-300"
          >
            {currentIndex === index ? (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-sm"
              >
                0{index + 1}
              </motion.span>
            ) : (
              <div className="w-2.5 h-2.5 rounded-full border border-white/50" />
            )}
          </button>
        ))}
      </div>

      {/* Slider Automático Infinito (Marquee) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-md"
      >
        <div className="flex overflow-hidden select-none group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...medicalTags, ...medicalTags].map((tag, i) => (
              <span key={i} className="px-12 py-6 text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}