import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import mockHome from '../../assets/home.webp'
import mockTipocita from '../../assets/tipocita.webp'
import mockDoctores from '../../assets/doctores.webp'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3.18 23.76c.3.17.65.19.98.07l11.65-6.73-2.51-2.52-10.12 9.18zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.51 1.56l.08.08 10.13-10.13v-.24L.58 1.32.5 1.4zM20.49 10.34l-2.88-1.66-2.83 2.83 2.83 2.83 2.9-1.67c.83-.48.83-1.26-.02-1.33zM3.18.24L13.3 9.42l-2.51 2.52L3.18.24z" />
    </svg>
  )
}

const mockups = [
  { id: 0, img: mockTipocita },
  { id: 1, img: mockHome },
  { id: 2, img: mockDoctores },
]

export default function AppDetectaV3() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockups.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getVariant = (index) => {
    if (index === activeIndex) return "center"
    if ((activeIndex + 1) % mockups.length === index) return "right"
    return "left"
  }

  const variants = {
    center: { x: 0, scale: 1, zIndex: 10, opacity: 1 },
    left: { x: -180, scale: 0.82, zIndex: 5, opacity: 0.35 },
    right: { x: 180, scale: 0.82, zIndex: 5, opacity: 0.35 },
  }

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── IZQUIERDA: Texto y Botones Originales ── */}
          <div>
            <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0199C6] mb-5">
              Aplicativo móvil
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.05]">
              Tu salud,
              <span className="block text-[#0199C6] mt-1 italic font-light">en tu bolsillo</span>
            </motion.h2>
            <motion.p {...fadeUp(0.16)} className="mt-7 text-lg text-gray-500 leading-relaxed max-w-md">
              Agenda citas, consulta tus resultados y habla con tu médico desde la app de Detecta. Disponible para iOS y Android.
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#"
                {...fadeUp(0.24)}
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gray-900 text-white
                           hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <AppleIcon />
                <div className="text-left">
                  <p className="text-[10px] text-white/60 leading-none mb-0.5">Disponible en</p>
                  <p className="text-sm font-semibold leading-none">App Store</p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                {...fadeUp(0.32)}
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gray-900 text-white
                           hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <p className="text-[10px] text-white/60 leading-none mb-0.5">Disponible en</p>
                  <p className="text-sm font-semibold leading-none">Google Play</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* ── DERECHA: Mockups con Foco por Clic ── */}
          <div 
            className="relative flex justify-center items-center h-[580px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {mockups.map((mock, index) => (
              <motion.div
                key={mock.id}
                variants={variants}
                animate={getVariant(index)}
                initial={false}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onClick={() => setActiveIndex(index)}
                className="absolute cursor-pointer will-change-transform"
                style={{ width: '260px' }}
              >
                <div className={`relative transition-all duration-500 ${activeIndex === index ? 'drop-shadow-2xl' : 'drop-shadow-md'}`}>
                  <img 
                    src={mock.img} 
                    alt="App Detecta" 
                    className="w-full h-auto rounded-[2.5rem]" 
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}