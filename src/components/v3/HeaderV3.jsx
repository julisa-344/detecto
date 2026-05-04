import { useState, useEffect, useRef } from 'react'
import logoDark from '../../assets/logo.png'
import logoWhite from '../../assets/LogoDetectaHorizontalblanco.png'

/**
 * HeaderV3 — Futurista / Disruptivo
 * Inspirado en la referencia: nav links dentro de una cápsula pill central,
 * botón CTA atípico (pill dividida: texto | ícono play) en la derecha.
 */
export default function HeaderV3() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [ethicsOpen, setEthicsOpen] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setVisible(currentScroll < lastScroll.current || currentScroll < 80)
      setScrolled(currentScroll > 40)
      lastScroll.current = currentScroll
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-5">
        <div className="flex items-center justify-between gap-4">

          {/* Logo — izquierda */}
          <a href="/v3" className="flex-shrink-0 transition-opacity hover:opacity-70 duration-300">
            <img
              src={logoWhite}
              alt="Detecta Clínica"
              className="h-9 w-auto"
            />
          </a>

          {/* Nav central — cápsula pill translúcida */}
          <nav
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500"
            style={{
              background: scrolled
                ? 'rgba(255,255,255,0.15)'
                : 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            {['Pacientes', 'Médico', 'Investigación', 'Sobre Detecta'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-1.5 text-[13px] font-light text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-all duration-200 tracking-wide"
              >
                {item}
              </a>
            ))}

            {/* Dropdown Ética */}
            <div className="relative">
              <button
                onClick={() => setEthicsOpen(!ethicsOpen)}
                className="px-4 py-1.5 text-[13px] font-light text-white/80 hover:text-white hover:bg-white/15 rounded-full transition-all duration-200 tracking-wide flex items-center gap-1"
              >
                Ética
                <svg className={`w-3 h-3 transition-transform ${ethicsOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 4.5l3 3 3-3" />
                </svg>
              </button>
              {ethicsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 py-2 rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(20,20,30,0.85)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <a href="#comite" className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    Comité de ética
                  </a>
                  <a href="#gestion" className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    Gestión ética
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* CTA derecha — botón atípico doble (pill dividida) */}
          {/* Estructura: [TEXTO_LABEL ——> DISCOVER ▶] */}
          <div className="hidden lg:flex items-center">
            <AtypicalButton label="AGENDAR CITA" />
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden p-2 text-white/80 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

/**
 * Botón atípico pill dividida:
 * [  LABEL  ——  ACTION  ▶ ]
 * El lado izquierdo es texto/etiqueta, el lado derecho es un círculo con ícono
 * Inspirado directamente en la referencia visual.
 */
export function AtypicalButton({ label = 'CONTACT US', action = 'Discover', light = false }) {
  return (
    <div
      className="group flex items-center rounded-full cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        background: light ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: light ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.30)',
        boxShadow: light ? '0 4px 20px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.20)',
      }}
    >
      {/* Label izquierdo */}
      <span
        className={`pl-5 pr-4 text-[11px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-300 ${
          light ? 'text-gray-800 group-hover:text-primary-dark' : 'text-white/90 group-hover:text-white'
        }`}
      >
        {label}
      </span>

      {/* Separador — línea curva */}
      <div
        className="w-px h-5 mx-1 flex-shrink-0"
        style={{
          background: light ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.25)',
        }}
      />

      {/* Action + círculo con ícono play */}
      <div className="flex items-center gap-2 pr-1.5 py-1.5 pl-3">
        <span
          className={`text-[11px] font-medium tracking-widest uppercase ${
            light ? 'text-gray-500' : 'text-white/60'
          }`}
        >
          {action}
        </span>
        {/* Círculo con icono */}
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
            light ? 'bg-primary-dark' : 'bg-white/20 group-hover:bg-white/35'
          }`}
        >
          <svg className={`w-3 h-3 translate-x-[1px] ${light ? 'text-white' : 'text-white'}`} viewBox="0 0 12 12" fill="currentColor">
            <path d="M3 2l7 4-7 4V2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
