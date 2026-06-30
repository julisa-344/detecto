import { Link } from 'react-router-dom'
import type { NavLink } from './navData'

interface SimpleDropdownProps {
  label: string
  open: boolean
  onToggle: () => void
  items: NavLink[]
  onItemClick: () => void
  /** Helper de Tailwind classes que renderiza el pill (scrolled/active). */
  pillClass: (active?: boolean) => string
  /** Encabezado opcional dentro del dropdown (ej. "Portal de resultados"). */
  header?: string
}

/**
 * Dropdown pequeño usado para "Ética" y "Laboratorio".
 * Comparten estructura idéntica — antes había duplicación inline en Navbar.
 */
export default function SimpleDropdown({
  label,
  open,
  onToggle,
  items,
  onItemClick,
  pillClass,
  header,
}: SimpleDropdownProps) {
  return (
    <div className="relative">
      <button onClick={onToggle} className={pillClass(open)}>
        {label}
        <svg
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-1/2 top-full mt-3 w-48 -translate-x-1/2 overflow-hidden rounded-2xl py-2 shadow-2xl"
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(15,23,42,0.08)',
          }}
        >
          {header && (
            <p className="px-4 pb-2 pt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-slate-400">
              {header}
            </p>
          )}
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onItemClick}
              className="block px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-100/70 hover:text-[#0070A5]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
