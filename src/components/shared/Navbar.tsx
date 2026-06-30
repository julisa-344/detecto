import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ETHICS_LINKS, RESULTADOS_LINKS, MAIN_LINKS, type DropdownKey } from './navbar/navData'
import { useNavbarScroll } from './navbar/useNavbarScroll'
import NavLogo from './navbar/NavLogo'
import SimpleDropdown from './navbar/SimpleDropdown'
import PacientesMegaMenu from './navbar/PacientesMegaMenu'
import NavCTAButton from './navbar/NavCTAButton'
import MobileMenu from './navbar/MobileMenu'
import { Menu, X } from 'lucide-react'

/**
 * Header principal del sitio.
 *
 * Orquesta el estado del navbar y compone sub-componentes:
 * - `NavLogo`: logo con crossfade
 * - `SimpleDropdown`: Ética + Laboratorio
 * - `PacientesMegaMenu`: dropdown grande con categorías
 * - `NavCTAButton`: "AGENDAR CITA"
 * - `MobileMenu`: drawer móvil
 *
 * El scroll behavior está aislado en `useNavbarScroll`.
 */
export default function Navbar() {
  const { visible, scrolled } = useNavbarScroll()
  const [openMenu, setOpenMenu] = useState<DropdownKey | null>(null)
  const [activeCategory, setActiveCategory] = useState('preventivos')
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Cerrar dropdown al click-fuera o tecla Escape
  useEffect(() => {
    if (!openMenu) return
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [openMenu])

  const toggle = (key: DropdownKey) =>
    setOpenMenu((prev) => (prev === key ? null : key))
  const closeAll = () => setOpenMenu(null)

  // Helper de Tailwind classes — usado por pills y SimpleDropdown
  const pill = (active = false) =>
    `flex items-center gap-1 px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide ${
      scrolled
        ? active
          ? 'bg-slate-900/10 text-slate-900'
          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
        : active
          ? 'bg-white/15 text-white'
          : 'text-white/80 hover:text-white hover:bg-white/15'
    }`

  const pillPlain = (active = false) =>
    `px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide ${
      scrolled
        ? active
          ? 'bg-slate-900/10 text-slate-900'
          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
        : active
          ? 'bg-white/15 text-white'
          : 'text-white/80 hover:text-white hover:bg-white/15'
    }`

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(15,23,42,0.06)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 24px -12px rgba(15,23,42,0.12)' : 'none',
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-4 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <NavLogo
              scrolled={scrolled}
              onClick={() => {
                closeAll()
                setMobileOpen(false)
              }}
            />

            {/* Desktop pill nav */}
            <nav
              ref={navRef}
              className="hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 lg:flex"
              style={{
                background: scrolled
                  ? 'rgba(15,23,42,0.04)'
                  : 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: scrolled
                  ? '1px solid rgba(15,23,42,0.08)'
                  : '1px solid rgba(255,255,255,0.25)',
              }}
            >
              {/* Pacientes (mega menu) */}
              <div className="relative">
                <button
                  onClick={() => toggle('pacientes')}
                  className={pill(openMenu === 'pacientes')}
                >
                  Pacientes
                  <svg
                    className={`h-3 w-3 transition-transform ${
                      openMenu === 'pacientes' ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Enlaces planos */}
              {MAIN_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeAll}
                  className={pillPlain()}
                >
                  {item.label}
                </Link>
              ))}

              {/* Ética + Laboratorio dropdowns simples */}
              <SimpleDropdown
                label="Ética"
                open={openMenu === 'ethics'}
                onToggle={() => toggle('ethics')}
                items={ETHICS_LINKS}
                onItemClick={closeAll}
                pillClass={pill}
              />
              <SimpleDropdown
                label="Resultados"
                open={openMenu === 'laboratorio'}
                onToggle={() => toggle('laboratorio')}
                items={RESULTADOS_LINKS}
                onItemClick={closeAll}
                pillClass={pill}
                header="Portal de resultados"
              />

              {/* Mega menu de Pacientes (renderizado dentro del nav para
                  click-outside, pero posicionado fixed) */}
              {openMenu === 'pacientes' && (
                <PacientesMegaMenu
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  onClose={closeAll}
                />
              )}
            </nav>

            {/* CTA */}
            <div className="hidden items-center lg:flex">
              <NavCTAButton scrolled={scrolled} />
            </div>

            {/* Mobile burger */}
            <button
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="p-2 text-white/80 hover:text-white lg:hidden"
              onClick={() => {
                setMobileOpen(!mobileOpen)
                closeAll()
              }}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  )
}
