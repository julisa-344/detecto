import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"
import detecto from "../assets/detecto.png"
import { motion } from "framer-motion"

export default function Hero({ slotRef }) {
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
    <section className="relative min-h-screen flex items-center overflow-hidden">

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

            {/* VEIL PARA CONTRASTE */}
            <div className="absolute inset-0 bg-white/15" />
          </>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        {/* El contenedor principal DEBE ser un grid para que aparezca la imagen al lado del texto */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* COLUMNA IZQUIERDA: Texto y Botón (Ya optimizado) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Pre-title */}
            <span className="text-primary-dark font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
              DIAGNÓSTICO DE PRECISIÓN
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 leading-[1.1]">
              Cuidamos de ti, <br />
              <span className="block text-primary-dark">
                en cada etapa.
              </span>
            </h1>

            {/* Bajada */}
            <p className="mt-6 text-xl lg:text-2xl text-gray-600 max-w-xl leading-relaxed">
              Tecnología de vanguardia para diagnósticos rápidos, precisos y confiables.
            </p>

            {/* Botón */}
            <div className="mt-10 flex gap-4">
              <a
                href="#agendar"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary-dark text-white font-semibold text-lg overflow-hidden shadow-lg hover:bg-primary-dark/90 transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Evaluación ahora</span>

                {/* Icono SVG */}
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Tu imagen de Detecto (AÑADIDA AQUÍ) */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }} // Un poco más lento para que sea el "gran final"
            className="flex justify-center items-center lg:justify-end"
          >
            <img
              ref={slotRef}
              src={detecto}
              alt="Detecto IA"
              className="relative z-10 w-72 sm:w-80 lg:w-[420px] drop-shadow-2xl"
              style={{ visibility: 'hidden' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}