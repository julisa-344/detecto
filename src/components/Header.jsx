import { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ethicsOpen, setEthicsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setVisible(false)
      } else if (currentScroll < lastScroll.current) {
        setVisible(true)
      }

      setScrolled(currentScroll > 20)
      lastScroll.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-gray-100'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={logo} alt="Detecta Clínica" className="h-9 w-auto" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#pacientes" className="nav-link">Pacientes</a>
              <a href="#staff" className="nav-link">Select Staff</a>
              <a href="#medico" className="nav-link">Médico</a>
              <a href="#sobre-detecta" className="nav-link">Sobre Detecta</a>
              <a href="#investigacion" className="nav-link">Investigación</a>

              {/* Ethics Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setEthicsOpen(!ethicsOpen)}
                  className="nav-link flex items-center gap-1"
                >
                  Ética
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${ethicsOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M3 4.5l3 3 3-3" />
                  </svg>
                </button>

                {ethicsOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setEthicsOpen(false)} />
                    <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-100 shadow-lg shadow-black/5 overflow-hidden z-50 rounded-xl">
                      <a href="#comite-etica" className="dropdown-item">Comité de ética</a>
                      <a href="#gestion-etica" className="dropdown-item">Gestión ética</a>
                    </div>
                  </>
                )}
              </div>
            </nav>

            {/* Phone + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+51999999999" className="text-xs font-medium text-gray-400 hover:text-primary tracking-wider transition-colors">
                +51 999 999 999
              </a>
              <a
                href="#agendar"
                className="text-xs font-semibold tracking-wider text-white bg-primary px-5 py-2.5 rounded-full hover:bg-primary-medium transition-colors shadow-sm shadow-primary/20"
              >
                Agendar cita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-0.5">
              <a href="#pacientes" className="mobile-nav-link">Pacientes</a>
              <a href="#staff" className="mobile-nav-link">Select Staff</a>
              <a href="#medico" className="mobile-nav-link">Médico</a>
              <a href="#sobre-detecta" className="mobile-nav-link">Sobre Detecta</a>
              <a href="#investigacion" className="mobile-nav-link">Investigación</a>

              <button
                onClick={() => setEthicsOpen(!ethicsOpen)}
                className="mobile-nav-link flex items-center justify-between"
              >
                Ética
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${ethicsOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M3 4.5l3 3 3-3" />
                </svg>
              </button>
              {ethicsOpen && (
                <div className="pl-4 flex flex-col gap-0.5">
                  <a href="#comite-etica" className="mobile-nav-link text-sm text-gray-500">Comité de ética</a>
                  <a href="#gestion-etica" className="mobile-nav-link text-sm text-gray-500">Gestión ética</a>
                </div>
              )}

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <a href="tel:+51999999999" className="text-xs font-medium text-gray-400 tracking-wider">
                  +51 999 999 999
                </a>
                <a href="#agendar" className="inline-flex items-center justify-center text-xs font-semibold text-white bg-primary px-5 py-3 rounded-full hover:bg-primary-medium transition-colors">
                  Agendar cita
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        .nav-link {
          @apply text-sm font-medium text-gray-600 hover:text-primary transition-colors;
        }
        .dropdown-item {
          @apply block px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary-lighter/60 transition-colors;
        }
        .mobile-nav-link {
          @apply px-2 py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors;
        }
      `}</style>
    </header>
  )
}
