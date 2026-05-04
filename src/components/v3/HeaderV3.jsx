import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from "lucide-react" // Asegúrate de tener lucide-react instalado
import logoWhite from '../../assets/LogoDetectaHorizontalblanco.png'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-5">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/v3" className="flex-shrink-0 transition-opacity hover:opacity-70 duration-300">
            <img src={logoWhite} alt="Detecta Clínica" className="h-9 w-auto" />
          </a>

          {/* Nav central — cápsula pill translúcida */}
          <nav
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500"
            style={{
              background: scrolled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.12)',
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
                <svg className={`w-3 h-3 transition-transform ${ethicsOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {ethicsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 py-2 rounded-2xl overflow-hidden shadow-2xl"
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

          {/* Botón CTA con efecto 21st dev + Glass */}
          <div className="hidden lg:flex items-center">
            <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">

              {/* Lado del Texto (Pill izquierda) */}
              <span
                className="rounded-full px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-white/15 group-hover:bg-white group-hover:text-slate-900"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                AGENDAR CITA
              </span>

              {/* Lado del Icono (Círculo derecha) */}
              <div
                className="relative flex h-[44px] w-[44px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-white/25 text-white group-hover:bg-white group-hover:text-slate-900"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  zIndex: 2
                }}
              >
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>
          </div>

          {/* Burger Mobile */}
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