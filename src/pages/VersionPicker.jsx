import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const versions = [
  {
    id: 'v1',
    path: '/v1',
    label: 'Versión 01',
    name: 'Glass Premium',
    description: 'Diseño premium con glassmorphism, gradientes mesh animados y el asistente Detecto como protagonista.',
    tags: ['Glassmorphism', 'Animación scroll', 'Mascot IA'],
    accent: '#0070A5',
    gradient: 'linear-gradient(135deg, #0199C6 0%, #00367e 100%)',
    textLight: true,
  },
  {
    id: 'v2',
    path: '/v2',
    label: 'Versión 02',
    name: 'Clinical Futurista',
    description: 'Hero con video de fondo, tipografía elegante, paleta blanca limpia. Innovación médica de alto impacto.',
    tags: ['Video hero', 'Sharp buttons', 'Futurista'],
    accent: '#52C0E1',
    gradient: 'linear-gradient(135deg, #f8fafc 0%, #e0f4fb 100%)',
    textLight: false,
  },
  {
    id: 'v3',
    path: '/v3',
    label: 'Versión 03',
    name: 'Futurista Disruptiva',
    description: 'Imagen de fondo macro médica, nav en cápsula pill, botón atípico pill doble. Disruptivo y de alto impacto.',
    tags: ['Pill buttons', 'Imagen hero', 'Disruptivo'],
    accent: '#CAD507',
    gradient: 'linear-gradient(135deg, #0a0c12 0%, #1a1f2e 100%)',
    textLight: true,
  },
  {
    id: 'v4',
    path: '/v4',
    label: 'Versión 04',
    name: 'Disruptiva + Clinical',
    description: 'Mezcla de la 03 con la 02: hero disruptivo en oscuro y secciones clínicas limpias para balance editorial.',
    tags: ['Mix V3 + V2', 'Dark + Clean', 'Editorial'],
    accent: '#52C0E1',
    gradient: 'linear-gradient(135deg, #0a0c12 0%, #52C0E1 100%)',
    textLight: true,
  },
  {
    id: 'v5',
    path: '/v5',
    label: 'Versión 05',
    name: 'Glass + Clinical',
    description: 'Mezcla de la 01 con la 02: mascot animado y mesh gradient con secciones clínicas en blanco para legibilidad.',
    tags: ['Mix V1 + V2', 'Mascot + Clean', 'Híbrido'],
    accent: '#0070A5',
    gradient: 'linear-gradient(135deg, #0199C6 0%, #f8fafc 100%)',
    textLight: true,
  },
]

export default function VersionPicker() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">

      {/* Header de la presentación */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/5">
        <img src={logo} alt="Detecta Clínica" className="h-10 w-auto brightness-0 invert" />
        <div className="text-right">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/30">Presentación de diseño</p>
          <p className="text-[11px] text-white/20 mt-0.5">Rediseño Home — 5 Propuestas</p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">

        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-primary mb-4">
            Selecciona una propuesta
          </p>
          <h1 className="text-5xl lg:text-6xl font-extralight text-white tracking-tight leading-tight">
            Rediseño del <span className="font-light italic text-primary">Home</span>
          </h1>
          <p className="mt-4 text-base text-white/30 font-light">
            Cinco direcciones de diseño para Detecta Clínica
          </p>
        </div>

        {/* Cards de versiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {versions.map((v) => (
            <VersionCard key={v.id} version={v} />
          ))}
        </div>

        {/* Instrucción */}
        <p className="mt-12 text-[11px] text-white/20 tracking-[0.2em] uppercase">
          Haz clic en una versión para verla completa
        </p>
      </main>
    </div>
  )
}

function VersionCard({ version: v }) {
  const CardWrapper = v.comingSoon ? 'div' : Link

  return (
    <CardWrapper
      to={v.comingSoon ? undefined : v.path}
      className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 ${
        v.comingSoon
          ? 'border-white/5 opacity-50 cursor-not-allowed'
          : 'border-white/10 hover:border-white/25 hover:scale-[1.02] hover:shadow-2xl cursor-pointer'
      }`}
      style={{ textDecoration: 'none' }}
    >
      {/* Preview del gradiente */}
      <div
        className="w-full h-48 relative overflow-hidden"
        style={{ background: v.gradient }}
      >
        {/* Decoración interior del preview */}
        <div className="absolute inset-0 flex items-center justify-center">
          {v.id === 'v1' && (
            <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/60" />
              </div>
            </div>
          )}
          {v.id === 'v2' && (
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-1 rounded-full" style={{ background: v.accent }} />
              <div className="w-16 h-1 rounded-full bg-gray-300" />
              <div className="w-20 h-1 rounded-full bg-gray-200" />
            </div>
          )}
          {v.id === 'v3' && (
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: v.accent + '33', border: `2px solid ${v.accent}55` }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke={v.accent} strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          )}
          {v.id === 'v4' && (
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.2)' }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke={v.accent} strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="text-white/60 text-xl font-extralight">+</div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-16 h-1 rounded-full" style={{ background: v.accent }} />
                <div className="w-12 h-1 rounded-full bg-white/40" />
                <div className="w-14 h-1 rounded-full bg-white/30" />
              </div>
            </div>
          )}
          {v.id === 'v5' && (
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/70" />
                </div>
              </div>
              <div className="text-white/60 text-xl font-extralight">+</div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-16 h-1 rounded-full" style={{ background: v.accent }} />
                <div className="w-12 h-1 rounded-full bg-white/40" />
                <div className="w-14 h-1 rounded-full bg-white/30" />
              </div>
            </div>
          )}
        </div>

        {/* Badge de versión */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full"
            style={{
              background: v.textLight ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
              color: v.textLight ? 'rgba(255,255,255,0.8)' : v.accent,
              border: `1px solid ${v.textLight ? 'rgba(255,255,255,0.2)' : v.accent + '44'}`,
            }}
          >
            {v.label}
          </span>
        </div>

        {v.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/50">En desarrollo</span>
          </div>
        )}

        {/* Flecha de navegación */}
        {!v.comingSoon && (
          <div
            className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2"
            style={{ background: v.accent }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        )}
      </div>

      {/* Contenido de la card */}
      <div className="p-6 bg-gray-900">
        <h2 className="text-lg font-semibold text-white mb-1">{v.name}</h2>
        <p className="text-sm text-white/40 font-light leading-relaxed mb-4">{v.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {v.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full"
              style={{
                background: v.accent + '18',
                color: v.accent,
                border: `1px solid ${v.accent}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  )
}
