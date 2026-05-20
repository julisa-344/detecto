import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoDark from '../../assets/logo.png'
import logoWhite from '../../assets/LogoDetectaHorizontalblanco.png'

export default function HeaderV2() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ethicsOpen, setEthicsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setVisible(currentScroll < lastScroll.current || currentScroll < 80)
      setScrolled(currentScroll > 60)
      lastScroll.current = currentScroll
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className={`transition-all duration-400 ${
          scrolled
            ? 'bg-white border-b border-gray-100 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">

            {/* Logo */}
            <a href="/v2" className="transition-opacity hover:opacity-80 duration-300">
              <img
                src={scrolled ? logoDark : logoWhite}
                alt="Detecta Clínica"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Pacientes', 'Médico', 'Sobre Detecta', 'Investigación'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}

              {/* Ética dropdown */}
              <div className="relative">
                <button
                  onClick={() => setEthicsOpen(!ethicsOpen)}
                  className={`text-sm font-light tracking-wide flex items-center gap-1.5 transition-colors duration-300 ${
                    scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Ética
                  <svg
                    className={`w-3 h-3 transition-transform ${ethicsOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  >
                    <path d="M3 4.5l3 3 3-3" />
                  </svg>
                </button>
                {ethicsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-sm overflow-hidden py-1">
                    <a href="#comite" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                      Comité de ética
                    </a>
                    <a href="#gestion" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                      Gestión ética
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA + Phone */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+51999999999"
                className={`text-sm font-light transition-colors duration-300 ${
                  scrolled ? 'text-gray-400 hover:text-gray-700' : 'text-white/60 hover:text-white'
                }`}
              >
                +51 999 999 999
              </a>
              {/* Botón sharp V2 */}
              <a
                href="https://appointments.detecta.pe/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary-dark text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[#005a84] transition-colors duration-200"
              >
                Agendar cita
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className={`lg:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {['Pacientes', 'Médico', 'Sobre Detecta', 'Investigación', 'Ética'].map((item) => (
              <a key={item} href="#" className="text-sm text-gray-600 hover:text-gray-900 py-2 border-b border-gray-50">
                {item}
              </a>
            ))}
            <a href="https://appointments.detecta.pe/login" target="_blank" rel="noopener noreferrer" className="mt-2 px-6 py-3 bg-primary-dark text-white text-sm font-medium text-center rounded-sm">
              Agendar cita
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
