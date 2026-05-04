import { Link } from 'react-router-dom'

/**
 * Widget flotante en la esquina inferior izquierda
 * Aparece en V1, V2, V3 para poder volver al picker durante la presentación
 */
export default function VersionNavWidget({ current }) {
  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-2">
      {/* Etiqueta de versión actual */}
      <div className="bg-gray-950/80 backdrop-blur-sm text-white/60 text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm">
        {current}
      </div>
      {/* Botón volver */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-gray-950/80 backdrop-blur-sm text-white/70 hover:text-white text-[11px] font-medium tracking-wide px-3 py-2 rounded-sm transition-colors duration-200 group"
      >
        <svg className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Selector de versiones
      </Link>
    </div>
  )
}
