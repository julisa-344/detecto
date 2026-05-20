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
      { label: 'Pulmo Scan', to: '/v4/pulmoscan' },
    ],
  },
  {
    id: 'servicios',
    title: 'Servicios',
    items: [
      { label: 'Diagnóstico por Imágenes', to: '/v4/diagnostico-imagenes' },
      { label: 'Farmacia', to: '/v4/farmacia' },
      { label: 'Hospitalización', to: '/v4/hospitalizacion' },
      { label: 'Resultados de Laboratorio', to: '/login' },
      { label: 'Quimioterapia', to: '/v4/quimioterapia' },

      // { label: 'Resultados de Laboratorio Clínico', to: '/v4/proximamente' },
      { label: 'Sala de Operaciones', to: '/v4/sala-operaciones' },
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
      { label: 'Endocrinología', to: '/v4/endocrinologia' },
      { label: 'Enfermedades Infecciosas', to: '/v4/enfermedades-infecciosas' },
      { label: 'Gastroenterología', to: '/v4/gastroenterologia' },
      { label: 'Geriatría', to: '/v4/geriatria' },
      { label: 'Hematología', to: '/v4/hematologia' },
      { label: 'Medicina General', to: '/v4/medicina-general' },
      { label: 'Medicina Interna', to: '/v4/medicina-interna' },
      { label: 'Nefrología', to: '/v4/nefrologia' },
      { label: 'Neumología', to: '/v4/neumologia' },
    ],
  },
  {
    id: 'quirurgicas',
    title: 'Especialidades Quirúrgicas',
    items: [
      { label: 'Cirugía Plástica', to: '/v4/cirugia-plastica' },
      { label: 'Coloproctología', to: '/v4/coloproctologia' },
      { label: 'Ginecología y Obstetricia', to: '/v4/ginecologia-obstetricia' },
      { label: 'Neurocirugía', to: '/v4/neurocirugia' },
      { label: 'Odontología', to: '/v4/odontologia' },
      { label: 'Otorrinolaringología', to: '/v4/otorrinolaringologia' },
      { label: 'Traumatología', to: '/v4/traumatologia' },
      { label: 'Urología', to: '/v4/urologia' },
    ],
  },
  {
    id: 'otras',
    title: 'Otras Especialidades',
    items: [
      { label: 'Medicina Física y Rehabilitación', to: '/v4/medicina-fisica' },
      { label: 'Oftalmología', to: '/v4/oftalmologia' },
      { label: 'Pediatría', to: '/v4/pediatria' },
      { label: 'Psicología', to: '/v4/psicologia' },
      { label: 'Psiquiatría', to: '/v4/psiquiatria' },
      { label: 'Radiología Intervencionista', to: '/v4/radiologia-intervencionista' },
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [mobileCategory, setMobileCategory] = useState(null)
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggle = (key) => setOpenMenu((prev) => (prev === key ? null : key))
  const activeCategoryData = pacientesCategories.find((c) => c.id === activeCategory)

  return (
    <>
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
                    className={`px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide flex items-center gap-1 ${scrolled
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
                  { label: 'Contacto', to: '/v4/contacto' },
                ].map((item) => {
                  const className = `px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide ${scrolled
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
                    className={`px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide flex items-center gap-1 ${scrolled
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
                    className={`px-4 py-1.5 text-[13px] font-light rounded-full transition-all duration-200 tracking-wide flex items-center gap-1 ${scrolled
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
                      <Link to="/v4/laboratorio-clinico" onClick={() => setOpenMenu(null)} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-dark hover:bg-slate-100/70 transition-colors">
                        Laboratorio Clínico
                      </Link>
                      <Link to="/v4/anatomia-patologica" onClick={() => setOpenMenu(null)} className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-dark hover:bg-slate-100/70 transition-colors">
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
                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm transition-all duration-200 ${activeCategory === cat.id
                                    ? 'bg-slate-100 text-primary-medium font-medium'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
                                  }`}
                              >
                                <span>{cat.title}</span>
                                <ChevronRight
                                  className={`w-4 h-4 transition-all ${activeCategory === cat.id ? 'text-primary-medium opacity-100' : 'text-slate-300 opacity-70'
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
                <a
                  href="https://appointments.detecta.pe/login"
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
              </div>

              {/* Burger Mobile */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Abrir menú"
                className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white/80 hover:text-white'
                  }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6l12 12M6 18L18 6" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Panel — full screen elegante (fuera del header para escapar al transform) */}
      <div
        className={`lg:hidden fixed inset-0 z-60 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{
          background: 'linear-gradient(160deg, #0A2A3F 0%, #0F172A 60%, #0A2A3F 100%)',
        }}
      >
        {/* Blobs decorativos */}
        <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-primary-medium/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-primary-dark/30 blur-3xl" />

        <div className="relative h-full flex flex-col pt-6 pb-8 px-7 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/40">
              Menú
            </p>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
              className="p-2 -mr-2 text-white/80 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col">
            {/* Pacientes */}
            <button
              onClick={() => setMobileSection((s) => (s === 'pacientes' ? null : 'pacientes'))}
              className="group flex items-center justify-between py-4 border-b border-white/10 text-left"
            >
              <span className="text-2xl font-light tracking-tight text-white">Pacientes</span>
              <ChevronRight className={`w-5 h-5 text-white/40 transition-all duration-300 ${mobileSection === 'pacientes' ? 'rotate-90 text-[rgb(var(--brand-base))]' : 'group-hover:translate-x-1'}`} />
            </button>
            <div className={`grid transition-all duration-500 ease-out ${mobileSection === 'pacientes' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="py-3 pl-3">
                  {pacientesCategories.map((cat) => {
                    const expanded = mobileCategory === cat.id
                    return (
                      <div key={cat.id} className="border-b border-white/5 last:border-b-0">
                        <button
                          onClick={() => setMobileCategory((c) => (c === cat.id ? null : cat.id))}
                          className="w-full flex items-center justify-between py-3 text-left"
                        >
                          <span className="text-sm font-medium text-white/90">{cat.title}</span>
                          <ChevronRight className={`w-4 h-4 text-white/40 transition-transform duration-300 ${expanded ? 'rotate-90 text-[rgb(var(--brand-base))]' : ''}`} />
                        </button>
                        <div className={`grid transition-all duration-400 ease-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <ul className="pb-3 pl-3 space-y-1">
                              {cat.items.map((it) => (
                                <li key={it.label}>
                                  <Link
                                    to={it.to}
                                    onClick={() => { setMobileOpen(false); setMobileSection(null); setMobileCategory(null) }}
                                    className="block py-1.5 text-sm font-light text-white/65 hover:text-white transition-colors"
                                  >
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Links directos */}
            {[
              { label: 'Staff Médico', to: '/v4/staff-medico' },
              { label: 'Investigación', to: '/v4/investigacion' },
              { label: 'Sobre Detecta', to: '/v4/sobre-detecta' },
              { label: 'Contacto', to: '/v4/contacto' },
            ].map((it) => (
              <Link
                key={it.label}
                to={it.to}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between py-4 border-b border-white/10"
              >
                <span className="text-2xl font-light tracking-tight text-white">{it.label}</span>
                <ArrowUpRight className="w-5 h-5 text-white/40 transition-all duration-300 group-hover:text-[rgb(var(--brand-base))] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}

            {/* Ética */}
            <button
              onClick={() => setMobileSection((s) => (s === 'ethics' ? null : 'ethics'))}
              className="group flex items-center justify-between py-4 border-b border-white/10 text-left"
            >
              <span className="text-2xl font-light tracking-tight text-white">Ética</span>
              <ChevronRight className={`w-5 h-5 text-white/40 transition-all duration-300 ${mobileSection === 'ethics' ? 'rotate-90 text-[rgb(var(--brand-base))]' : 'group-hover:translate-x-1'}`} />
            </button>
            <div className={`grid transition-all duration-500 ease-out ${mobileSection === 'ethics' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="py-3 pl-3 space-y-1.5">
                  <Link to="/v4/comite-etica" onClick={() => setMobileOpen(false)} className="block py-1 text-sm font-light text-white/70 hover:text-white">Comité de ética</Link>
                  <Link to="/v4/gestion-etica" onClick={() => setMobileOpen(false)} className="block py-1 text-sm font-light text-white/70 hover:text-white">Gestión ética</Link>
                </div>
              </div>
            </div>

            {/* Laboratorio */}
            <button
              onClick={() => setMobileSection((s) => (s === 'laboratorio' ? null : 'laboratorio'))}
              className="group flex items-center justify-between py-4 border-b border-white/10 text-left"
            >
              <span className="text-2xl font-light tracking-tight text-white">Laboratorio</span>
              <ChevronRight className={`w-5 h-5 text-white/40 transition-all duration-300 ${mobileSection === 'laboratorio' ? 'rotate-90 text-[rgb(var(--brand-base))]' : 'group-hover:translate-x-1'}`} />
            </button>
            <div className={`grid transition-all duration-500 ease-out ${mobileSection === 'laboratorio' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="py-3 pl-3 space-y-1.5">
                  <Link to="/v4/laboratorio-clinico" onClick={() => setMobileOpen(false)} className="block py-1 text-sm font-light text-white/70 hover:text-white">Laboratorio Clínico</Link>
                  <Link to="/v4/anatomia-patologica" onClick={() => setMobileOpen(false)} className="block py-1 text-sm font-light text-white/70 hover:text-white">Anatomía Patológica</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA + footer */}
          <div className="mt-8 space-y-5">
            <a
              href="https://appointments.detecta.pe/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="group w-full flex items-center justify-between rounded-full bg-white pl-7 pr-2 py-2 transition-all active:scale-[0.98]"
            >
              <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-900">AGENDAR CITA</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 text-center">
              Detecta Clínica
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
