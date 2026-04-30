import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"
import detecto from "../assets/detecto.png"

export default function Hero({ slotRef }) {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24">

      {/* 🔥 FONDO BASE (NO tapa partículas) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5fbfd] to-[#e6f7fb] z-0" />

      {/* 🔥 PARTICULAS */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"

        options={{
          fullScreen: false,

          particles: {
            number: {
              value: 350,
              density: {
                enable: true,
                area: 800,
              },
            },

            color: {
              value: "#0070A5", // 👈 un solo color para efecto nube
            },

            shape: {
              type: "circle",
            },

            opacity: {
              value: 1, // 👈 clave para efecto degradé
              random: true,
            },

            size: {
              value: { min: 1, max: 2 }, // 👈 puntos pequeños
            },

            links: {
              enable: false, // 👈 QUITAMOS estilo constelación
            },

            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              random: true,
              outModes: {
                default: "out",
              },
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 180,
                size: 3,
                opacity: 0.3,
              },
            },
          },

          detectRetina: true,
        }}

      />

      {/* 🌫 Glow base (NO invade demasiado) */}
      <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] opacity-25 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900">
              Detectar a tiempo
              <span className="block text-primary font-semibold">
                cambia todo
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Tecnología avanzada para diagnóstico temprano, con la precisión
              que necesitas y la tranquilidad que buscas.
            </p>

            <div className="mt-10">
              <a
                href="#agendar"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-dark text-white font-medium overflow-hidden"
              >
                <span className="relative z-10">
                  Comenzar evaluación
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 transition-transform group-hover:translate-x-1">
                  →
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute w-[460px] h-[460px] bg-primary/20 rounded-full blur-3xl"></div>

            <img
              ref={slotRef}
              src={detecto}
              alt="Detecto IA"
              className="relative z-10 w-72 sm:w-80 lg:w-[420px] drop-shadow-2xl"
              style={{ visibility: 'hidden' }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}