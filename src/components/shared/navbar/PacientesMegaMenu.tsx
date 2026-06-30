import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PACIENTES_CATEGORIES } from './navData'

interface PacientesMegaMenuProps {
  activeCategory: string
  onCategoryChange: (id: string) => void
  onClose: () => void
}

/**
 * Mega-menú "Pacientes" — card flotante con sidebar de categorías
 * y grid de enlaces de la categoría activa.
 */
export default function PacientesMegaMenu({
  activeCategory,
  onCategoryChange,
  onClose,
}: PacientesMegaMenuProps) {
  const activeCategoryData = PACIENTES_CATEGORIES.find((c) => c.id === activeCategory)

  return (
    <div
      className="fixed left-1/2 top-20 w-[min(1240px,calc(100vw-48px))] -translate-x-1/2 overflow-hidden rounded-3xl shadow-2xl"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(15,23,42,0.08)',
      }}
    >
      <div className="grid grid-cols-[300px_1fr]">
        {/* Sidebar de categorías */}
        <div className="border-r border-slate-200/70 p-6">
          <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
            Categorías
          </p>
          <ul className="space-y-0.5">
            {PACIENTES_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onMouseEnter={() => onCategoryChange(cat.id)}
                  onFocus={() => onCategoryChange(cat.id)}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-slate-100 font-medium text-[#0070A5]'
                      : 'text-slate-500 hover:bg-slate-100/70 hover:text-slate-800'
                  }`}
                >
                  <span>{cat.title}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-all ${
                      activeCategory === cat.id
                        ? 'opacity-100 text-[#0199C6]'
                        : 'opacity-70 text-slate-300'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Items de la categoría activa */}
        <div className="p-8">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0199C6]">
            {activeCategoryData?.title}
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {activeCategoryData?.items.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={onClose}
                className="group flex items-center gap-3 text-sm text-slate-600 transition-colors duration-200 hover:text-[#0070A5]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-[#0199C6]" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
