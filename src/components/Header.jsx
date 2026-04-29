import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ethicsOpen, setEthicsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false)
      } else if (currentScroll < lastScroll) {
        setVisible(true)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/40">
          <div className="flex items-center justify-between h-16 lg:h-18 px-5 lg:px-6">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" className="w-8 h-8 text-primary-medium">
                <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.3" />
                <circle cx="16" cy="16" r="3" fill="currentColor" />
                <path d="M16 2v6M16 24v6M2 16h6M24 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                DETECTA
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              <a href="#pacientes" className="nav-link">
                Pacientes
              </a>
              <a href="#staff" className="nav-link">
                Select Staff
              </a>
              <a href="#medico" className="nav-link">
                Médico
              </a>
              <a href="#sobre-detecta" className="nav-link">
                Sobre Detecta
              </a>
              <a href="#investigacion" className="nav-link">
                Investigación
              </a>

              {/* Ethics Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setEthicsOpen(!ethicsOpen)}
                  className="nav-link flex items-center gap-1"
                >
                  Ética
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${ethicsOpen ? 'rotate-180' : ''}`}
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
                    <div className="absolute top-full left-0 mt-2 w-52 rounded-xl bg-white/90 backdrop-blur-xl shadow-xl shadow-black/10 border border-white/50 overflow-hidden z-50">
                      <a href="#comite-etica" className="dropdown-item">
                        Comité de ética
                      </a>
                      <a href="#gestion-etica" className="dropdown-item">
                        Gestión ética
                      </a>
                    </div>
                  </>
                )}
              </div>
            </nav>

            {/* Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+51999999999" className="text-sm font-medium text-gray-500 hover:text-primary-medium transition-colors">
                +51 999 999 999
              </a>
              <a
                href="#agendar"
                className="inline-flex items-center px-5 py-2.5 bg-primary-dark text-white text-sm font-semibold rounded-full hover:bg-primary-medium transition-all duration-300 shadow-md shadow-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/30"
              >
                Agendar cita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
            <nav className="border-t border-gray-200/50 pt-4 px-5">
              <div className="flex flex-col gap-1">
                <a href="#pacientes" className="mobile-nav-link">Pacientes</a>
                <a href="#staff" className="mobile-nav-link">Select Staff</a>
                <a href="#medico" className="mobile-nav-link">Médico</a>
                <a href="#sobre-detecta" className="mobile-nav-link">Sobre Detecta</a>
                <a href="#investigacion" className="mobile-nav-link">Investigación</a>

                {/* Mobile Ethics */}
                <button
                  onClick={() => setEthicsOpen(!ethicsOpen)}
                  className="mobile-nav-link flex items-center justify-between"
                >
                  Ética
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${ethicsOpen ? 'rotate-180' : ''}`}
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
                  <div className="pl-4 flex flex-col gap-1">
                    <a href="#comite-etica" className="mobile-nav-link text-sm">Comité de ética</a>
                    <a href="#gestion-etica" className="mobile-nav-link text-sm">Gestión ética</a>
                  </div>
                )}

                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200/50">
                  <a href="tel:+51999999999" className="text-sm font-medium text-gray-500">
                    +51 999 999 999
                  </a>
                  <a href="#agendar" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-dark text-white text-sm font-semibold rounded-full shadow-md">
                    Agendar cita
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link {
          @apply px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-medium transition-colors rounded-lg hover:bg-white/40;
        }
        .dropdown-item {
          @apply block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-medium hover:bg-primary-lighter/50 transition-colors;
        }
        .mobile-nav-link {
          @apply px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-medium transition-colors rounded-lg hover:bg-white/50;
        }
      `}</style>
    </header>
  )
}
