import { useState, useEffect, useRef } from 'react'
import logoWhite from '../assets/LogoDetectaHorizontalblanco.png' // Asegúrate de tener esta versión
import logoDark from '../assets/logo.png' 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ethicsOpen, setEthicsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setVisible(currentScroll < lastScroll.current || currentScroll < 80)
      setScrolled(currentScroll > 20)
      lastScroll.current = currentScroll
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Esta variable controla el color del texto y logo dinámicamente
  const themeClass = scrolled ? 'text-gray-800' : 'text-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className={`transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/40 backdrop-blur-lg border-black/5' // Vidrio sutil y elegante
          : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Logo Dinámico */}
            <a href="/" className="transition-transform hover:scale-105 duration-300">
              <img src={scrolled ? logoDark : logoWhite} alt="Detecta Clínica" className="h-10 w-auto transition-opacity" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Pacientes', 'Select Staff', 'Médico', 'Sobre Detecta', 'Investigación'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className={`nav-link ${themeClass}`}
                >
                  {/* Estilo especial para Select Staff si lo necesitas */}
                  {item === 'Select Staff' ? <span className="font-semibold tracking-wide uppercase text-[11px]">{item}</span> : item}
                </a>
              ))}
              
              {/* Ética Dropdown (Ajustado con themeClass) */}
              <div className="relative">
                <button onClick={() => setEthicsOpen(!ethicsOpen)} className={`nav-link flex items-center gap-1.5 ${themeClass}`}>
                  Ética
                  <svg className={`w-3 h-3 transition-transform ${ethicsOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 4.5l3 3 3-3"/></svg>
                </button>
                {ethicsOpen && (
                   <div className="absolute top-full left-0 mt-3 w-48 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden p-2">
                     <a href="#comite" className="dropdown-item">Comité de ética</a>
                     <a href="#gestion" className="dropdown-item">Gestión ética</a>
                   </div>
                )}
              </div>
            </nav>

            {/* CTA + Phone */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+51999999999" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-500 hover:text-primary' : 'text-white/80 hover:text-white'}`}>
                +51 999 999 999
              </a>
              <a href="#agendar" className="px-6 py-2.5 rounded-full bg-primary-dark text-white text-sm font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-primary/30">
                Agendar cita
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link { @apply text-sm font-medium transition-all duration-300; }
        .dropdown-item { @apply block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition-colors; }
      `}</style>
    </header>
  )
}