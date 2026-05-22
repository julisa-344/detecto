import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"
import detecto from "../../assets/detecto.png"
import { motion } from "framer-motion"

export default function Hero({ slotRef, splashDone }) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ fontFamily: 'Lexend, sans-serif' }}>

      {/* 🔥 FONDO MESH */}
      <div className="absolute inset-0 -z-10">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={[
                "#0199C6",  // Azul Principal
                "#5CC8E6",  // Celeste claro
                "#0B6E8E",  // Azul profundo
                "#7AC8F5",  // Celeste claro
                "#00367e",  // Azul oscuro
              ]}
              distortion={0.6}
              swirl={0.5}
              speed={0.9}
              offsetX={0.1}
            />
            {/* VEIL PARA CONTRASTE GENERAL */}
            <div className="absolute inset-0 bg-white/10" />
          </>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* COLUMNA IZQUIERDA: Contenedor Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={splashDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative p-8 md:p-12 rounded-[48px] bg-white/25 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-blue-900/10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={splashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.0] uppercase"
            >
              Cuidamos de ti, <br />
              <span className="block italic text-[#0070A5]">
                en cada etapa.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={splashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="mt-8 text-lg lg:text-xl font-light text-slate-700 max-w-xl leading-relaxed"
            >
              Innovación Tecnológica para diagnósticos rápidos, precisos y confiables respaldados por expertos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={splashDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              className="mt-12 flex gap-4"
            >
              <a
                href="https://appointments.detecta.pe/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#0070A5] text-white font-semibold text-sm tracking-widest transition-all hover:bg-[#0199C6] hover:scale-105 active:scale-95 shadow-lg shadow-[#0070A5]/20"
              >
                <span className="relative z-10 uppercase">Agendar cita</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: Imagen Detecto (Limpia, fuera del glass) */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={splashDone ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 60, scale: 0.9 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center lg:justify-end"
          >
            <img
              ref={slotRef}
              src={detecto}
              alt="Detecto IA"
              className="relative z-10 w-72 sm:w-80 lg:w-[480px] drop-shadow-[0_20px_50px_rgba(0,112,165,0.3)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}