import { useEffect, useRef, useState } from 'react'
import detecto from '../assets/detecto.png'

export default function PorQueNosotros() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const total = rect.height - windowHeight
      const current = -rect.top

      const p = Math.min(Math.max(current / total, 0), 1)
      setProgress(p)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🔥 easing (movimiento más natural)
  const easeOut = (t) => 1 - Math.pow(1 - t, 3)
  const eased = easeOut(progress)

  // 🔥 Movimiento detecto
  const x = (1 - eased) * 200   // derecha → izquierda
  const y = eased * 350         // leve movimiento vertical (NO desaparece)

  const isSecondPhase = progress > 0.5

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-gradient-to-b from-white to-[#eef9ff] overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center">

        <div className="relative w-full max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LEFT */}
          <div className="w-1/2 relative z-10">
            <div
              className={`transition-all duration-700 ${
                !isSecondPhase
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-10'
              }`}
            >
              <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
                Tecnología que detecta
                <span className="block text-primary">
                  lo que otros no ven
                </span>
              </h2>

              <p className="mt-6 text-gray-600 max-w-md">
                Utilizamos inteligencia artificial avanzada para lograr diagnósticos más tempranos, precisos y confiables.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-1/2 flex justify-center relative z-10">
            <div
              className={`transition-all duration-700 ${
                isSecondPhase
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="space-y-10 text-gray-900">

                <div>
                  <h3 className="text-5xl font-semibold">+25,000</h3>
                  <p className="text-gray-500 text-sm">
                    Pacientes evaluados
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-semibold">98%</h3>
                  <p className="text-gray-500 text-sm">
                    Precisión diagnóstica
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-semibold">+120</h3>
                  <p className="text-gray-500 text-sm">
                    Especialistas
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* 🔥 DETECTO ÚNICO */}
          <div
            className="absolute left-1/2 top-1/2 z-20 will-change-transform"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
            }}
          >
            <img
              src={detecto}
              alt="Detecto"
              className="w-[320px] select-none pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  )
}