import { useEffect, useRef, useState } from 'react'
import mockHome from '../../assets/home.webp'
import mockTipocita from '../../assets/tipocita.webp'
import mockDoctores from '../../assets/doctores.webp'

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

export default function AppDetecta() {
  const sectionRef = useRef(null)
  const btnsRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [btnsVisible, setBtnsVisible] = useState(false)

  // Resetea cuando sale del viewport, se activa cuando vuelve a entrar
  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(entry.isIntersecting),
      { threshold: 0.2 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Botones — también se resetean
  useEffect(() => {
    if (!btnsRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => setBtnsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    obs.observe(btnsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── IZQUIERDA: texto ── */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-5">
              Aplicativo móvil
            </p>
            <h2 className="text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.05]">
              Tu salud,
              <span className="block text-primary mt-1">en tu bolsillo</span>
            </h2>
            <p className="mt-7 text-lg text-gray-500 leading-relaxed max-w-md">
              Agenda citas, consulta tus resultados y habla con tu médico desde la app de Detecta. Disponible para iOS y Android.
            </p>

            {/* Botones de descarga */}
            <div ref={btnsRef} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gray-900 text-white
                           hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  opacity: btnsVisible ? 1 : 0,
                  transform: btnsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 600ms ease 100ms, transform 600ms ease 100ms, background-color 200ms, box-shadow 200ms',
                }}
              >
                <AppleIcon />
                <div className="text-left">
                  <p className="text-[10px] text-white/60 leading-none mb-0.5">Disponible en</p>
                  <p className="text-sm font-semibold leading-none">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gray-900 text-white
                           hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  opacity: btnsVisible ? 1 : 0,
                  transform: btnsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 600ms ease 280ms, transform 600ms ease 280ms, background-color 200ms, box-shadow 200ms',
                }}
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <p className="text-[10px] text-white/60 leading-none mb-0.5">Disponible en</p>
                  <p className="text-sm font-semibold leading-none">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* ── DERECHA: mockups ── */}
          <div className="relative flex justify-center items-end" style={{ height: 620 }}>

            {/* Mockup IZQUIERDO */}
            <div
              className="absolute will-change-transform"
              style={{
                bottom: 0,
                left: '50%',
                marginLeft: -260,
                transform: scrolled ? 'translateY(0px)' : 'translateY(140px)',
                opacity: scrolled ? 1 : 0,
                transition: 'transform 750ms cubic-bezier(0.34,1.4,0.64,1) 120ms, opacity 500ms ease 120ms',
                zIndex: 1,
              }}
            >
              <img
                src={mockTipocita}
                alt="App Detecta — Tipo de cita"
                className="w-[240px]"
              />
            </div>

            {/* Mockup CENTRAL */}
            <div
              className="absolute will-change-transform"
              style={{
                bottom: 0,
                left: '50%',
                marginLeft: -130,
                transform: scrolled ? 'translateY(0px)' : 'translateY(140px)',
                opacity: scrolled ? 1 : 0,
                transition: 'transform 750ms cubic-bezier(0.34,1.4,0.64,1) 0ms, opacity 500ms ease 0ms',
                zIndex: 3,
              }}
            >
              <img
                src={mockHome}
                alt="App Detecta — Home"
                className="w-[260px] "
              />
            </div>

            {/* Mockup DERECHO */}
            <div
              className="absolute will-change-transform"
              style={{
                bottom: 0,
                left: '50%',
                marginLeft: 20,
                transform: scrolled ? 'translateY(0px)' : 'translateY(140px)',
                opacity: scrolled ? 1 : 0,
                transition: 'transform 750ms cubic-bezier(0.34,1.4,0.64,1) 240ms, opacity 500ms ease 240ms',
                zIndex: 2,
              }}
            >
              <img
                src={mockDoctores}
                alt="App Detecta — Doctores"
                className="w-[240px] "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
