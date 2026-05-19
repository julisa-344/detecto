import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import logoWhite from '../../assets/LogoDetectaHorizontalblanco.png'
import logoDark from '../../assets/logo.png'

const pacientesCategories = [
  {
    id: 'preventivos',
    title: 'Programas Preventivos',
    items: [
      { label: 'Preventivo Rosa', to: '/v4/preventivo-rosa' },
      { label: 'Preventivo Azul', to: '/v4/preventivo-azul' },
      { label: 'Pulmo Scan', to: '#' },
    ],
  },
  {
    id: 'servicios',
    title: 'Servicios',
    items: [
      { label: 'Diagnóstico por Imágenes', to: '/v4/diagnostico-imagenes' },
      { label: 'Farmacia', to: '/v4/farmacia' },
      { label: 'Hospitalización', to: '/v4/hospitalizacion' },
      { label: 'Laboratorio Clínico', to: '/v4/laboratorio-clinico' },
      { label: 'Resultados de Anatomía Patológica', to: '/v4/resultados-anatomia-patologica' },
      { label: 'Quimioterapia', to: '/v4/quimioterapia' },
      { label: 'Sala de Operaciones', to: '/v4/sala-operaciones' },
      { label: 'Resultados de Laboratorio Clínico', to: '/v4/resultados-laboratorio-patologico' },
      { label: 'Resultados de Laboratorio Patológico', to: '/v4/resultados-laboratorio-patologico' },
    ],
  },
  {
    id: 'oncologia',
    title: 'Oncología',
    items: [
      { label: 'Oncología Médica', to: '/v4/oncologia-medica' },
      { label: 'Oncología Pediátrica', to: '/v4/oncologia-pediatrica' },
      { label: 'Oncología de Cabeza y Cuello', to: '/v4/oncologia-cabeza-cuello' },
      { label: 'Ginecología Oncológica', to: '/v4/ginecologia-oncologica' },
      { label: 'Mastología y Ginecología Oncológica', to: '/v4/mastologia-ginecologia' },
      { label: 'Urología Oncológica', to: '/v4/urologia-oncologica' },
      { label: 'Psicooncología', to: '/v4/psicooncologia' },
    ],
  },
  {
    id: 'medicas',
    title: 'Especialidades Médicas',
    items: [
      { label: 'Dermatología', to: '/v4/dermatologia' },
      { label: 'Endocrinología', to: '#' },
      { label: 'Enfermedades Infecciosas', to: '/v4/enfermedades-infecciosas' },
      { label: 'Gastroenterología', to: '#' },
      { label: 'Geriatría', to: '/v4/geriatria' },
      { label: 'Hematología', to: '#' },
      { label: 'Infectología', to: '#' },
      { label: 'Medicina General', to: '#' },
      { label: 'Medicina Interna', to: '/v4/medicina-interna' },
      { label: 'Nefrología', to: '#' },
    ],
  },
  {
    id: 'quirurgicas',
    title: 'Especialidades Quirúrgicas',
    items: [
      { label: 'Cirugía Plástica', to: '#' },
      { label: 'Coloproctología', to: '#' },
      { label: 'Ginecología y Obstetricia', to: '#' },
      { label: 'Neurocirugía', to: '#' },
      { label: 'Odontología', to: '#' },
      { label: 'Otorrinolaringología', to: '#' },
      { label: 'Traumatología', to: '#' },
      { label: 'Urología', to: '#' },
    ],
  },
  {
    id: 'otras',
    title: 'Otras Especialidades',
    items: [
      { label: 'Medicina Física y Rehabilitación', to: '#' },
      { label: 'Oftalmología', to: '#' },
      { label: 'Pediatría', to: '#' },
      { label: 'Psicología', to: '#' },
      { label: 'Psiquiatría', to: '#' },
      { label: 'Radiología Intervencionista', to: '#' },
    ],
  },
]

export default function HeaderV3({ forceLight = false }) {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolledState] = useState(forceLight)
  const setScrolled = (v) => setScrolledState(forceLight ? true : v)
  const [openMenu, setOpenMenu] = useState(null) // 'pacientes' | 'ethics' | null
  const [activeCategory, setActiveCategory] = useState('preventivos')
  const [ctaHover, setCtaHover] = useState(false)
  const lastScroll = useRef(0)
  const navRef = useRef(null)

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

  // Cerrar al click fuera
  useEffect(() => {
    if (!openMenu) return
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [openMenu])

  const toggle = (key) => setOpenMenu((prev) => (prev === key ? null : key))
  const activeCategoryData = pacientesCategories.find((c) => c.id === activeCategory)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15,23,42,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 24px -12px rgba(15,23,42,0.12)' : 'none',
        }}
      >
        <div className="max-w-350 mx-auto px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/v4" className="relative shrink-0 h-9 w-37.5 transition-opacity hover:opacity-70 duration-300">
            <img
              src={logoWhite}
              alt="Detecta Clínica"
              className="absolute inset-0 h-9 w-auto transition-opacity duration-500"
              style={{ opacity: scrolled ? 0 : 1 }}
            />
            <img
              src={logoDark}
              alt="Detecta Clínica"
              className="absolute inset-0 h-9 w-auto transition-opacity duration-500"
              style={{ opacity: scrolled ? 1 : 0 }}
            />
          </a>

          {/* Nav central — cápsula pill translúcida */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500"
            style={{
              background: scrolled ? 'rgba(15,23,42,0.04)' : 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: scrolled
                ? '1px solid rgba(15,23,42,0.08)'
                : '1px solid rgba(255,255,255,0.25)',
            }}
          >
            {/* Pacientes con mega-menu */}
            <div className="relative">
              <button
                onClick={() => toggle('pacientes')}
                className={`px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide flex items-center gap-1 ${
                  scrolled
                    ? openMenu === 'pacientes'
                      ? 'bg-slate-900/10 text-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
                    : openMenu === 'pacientes'
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                Pacientes
                <svg
                  className={`w-3 h-3 transition-transform ${openMenu === 'pacientes' ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {[
              { label: 'Staff Médico', to: '/v4/staff-medico' },
              { label: 'Investigación', to: '/v4/investigacion' },
              { label: 'Sobre Detecta', to: '/v4/sobre-detecta' },
            ].map((item) => {
              const className = `px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide ${
                scrolled
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
                  : 'text-white/80 hover:text-white hover:bg-white/15'
              }`
              return item.to.startsWith('/') ? (
                <Link key={item.label} to={item.to} className={className}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.to} className={className}>
                  {item.label}
                </a>
              )
            })}

            {/* Dropdown Ética */}
            <div className="relative">
              <button
                onClick={() => toggle('ethics')}
                className={`px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide flex items-center gap-1 ${
                  scrolled
                    ? openMenu === 'ethics'
                      ? 'bg-slate-900/10 text-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
                    : openMenu === 'ethics'
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                Ética
                <svg
                  className={`w-3 h-3 transition-transform ${openMenu === 'ethics' ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === 'ethics' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 py-2 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(15,23,42,0.08)',
                  }}
                >
                  <Link to="/v4/comite-etica" onClick={() => setOpenMenu(null)} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-dark hover:bg-slate-100/70 transition-colors">
                    Comité de ética
                  </Link>
                  <Link to="/v4/gestion-etica" onClick={() => setOpenMenu(null)} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-dark hover:bg-slate-100/70 transition-colors">
                    Gestión ética
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Laboratorio */}
            <div className="relative">
              <button
                onClick={() => toggle('laboratorio')}
                className={`px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide flex items-center gap-1 ${
                  scrolled
                    ? openMenu === 'laboratorio'
                      ? 'bg-slate-900/10 text-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
                    : openMenu === 'laboratorio'
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                Laboratorio
                <svg
                  className={`w-3 h-3 transition-transform ${openMenu === 'laboratorio' ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === 'laboratorio' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 py-2 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(15,23,42,0.08)',
                  }}
                >
                  <Link to="/login" onClick={() => setOpenMenu(null)} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-dark hover:bg-slate-100/70 transition-colors">
                    Laboratorio Clínico
                  </Link>
                  <Link to="/login" onClick={() => setOpenMenu(null)} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-dark hover:bg-slate-100/70 transition-colors">
                    Anatomía Patológica
                  </Link>
                </div>
              )}
            </div>

            {/* Mega-menu Pacientes — light glass consistente con Ética */}
            {openMenu === 'pacientes' && (
              <div
                className="fixed left-1/2 -translate-x-1/2 top-20 w-[min(1240px,calc(100vw-48px))] rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(15,23,42,0.08)',
                }}
              >
                <div className="grid grid-cols-[300px_1fr]">
                  {/* Sidebar de categorías */}
                  <div className="p-6 border-r border-slate-200/70">
                    <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-slate-400 mb-4 px-3">
                      Categorías
                    </p>
                    <ul className="space-y-0.5">
                      {pacientesCategories.map((cat) => (
                        <li key={cat.id}>
                          <button
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            onFocus={() => setActiveCategory(cat.id)}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm transition-all duration-200 ${
                              activeCategory === cat.id
                                ? 'bg-slate-100 text-primary-medium font-medium'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
                            }`}
                          >
                            <span>{cat.title}</span>
                            <ChevronRight
                              className={`w-4 h-4 transition-all ${
                                activeCategory === cat.id ? 'text-primary-medium opacity-100' : 'text-slate-300 opacity-70'
                              }`}
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Items de la categoría activa */}
                  <div className="p-8">
                    <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-medium mb-5">
                      {activeCategoryData?.title}
                    </p>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                      {activeCategoryData?.items.map((item) => {
                        const cls =
                          'group flex items-center gap-3 text-sm text-slate-600 hover:text-primary-dark transition-colors duration-200'
                        const inner = (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary-medium transition-colors" />
                            {item.label}
                          </>
                        )
                        return item.to && item.to.startsWith('/') ? (
                          <Link
                            key={item.label}
                            to={item.to}
                            className={cls}
                            onClick={() => setOpenMenu(null)}
                          >
                            {inner}
                          </Link>
                        ) : (
                          <a
                            key={item.label}
                            href={item.to || '#'}
                            className={cls}
                            onClick={() => setOpenMenu(null)}
                          >
                            {inner}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Botón CTA con efecto 21st dev + Glass */}
          <div className="hidden lg:flex items-center">
            <button
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
            >
              <span
                className="rounded-full px-6 py-3 text-[11px] font-semibold tracking-[0.18em] transition-all duration-500 ease-in-out"
                style={{
                  background: ctaHover
                    ? '#0F172A'
                    : scrolled
                      ? 'rgba(15,23,42,0.04)'
                      : 'rgba(255,255,255,0.15)',
                  color: ctaHover ? '#ffffff' : scrolled ? '#0F172A' : '#ffffff',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: scrolled
                    ? '1px solid rgba(15,23,42,0.1)'
                    : '1px solid rgba(255,255,255,0.3)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                AGENDAR CITA
              </span>
              <div
                className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out"
                style={{
                  background: ctaHover
                    ? '#0F172A'
                    : scrolled
                      ? 'rgba(15,23,42,0.08)'
                      : 'rgba(255,255,255,0.25)',
                  color: ctaHover ? '#ffffff' : scrolled ? '#0F172A' : '#ffffff',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: scrolled
                    ? '1px solid rgba(15,23,42,0.1)'
                    : '1px solid rgba(255,255,255,0.4)',
                  zIndex: 2,
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
      </div>
    </header>
  )
}
