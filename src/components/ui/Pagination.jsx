import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

function getPageItems(page, totalPages) {
  const items = []
  const add = (v) => items.push(v)

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) add(i)
    return items
  }

  add(1)
  if (page > 2) add('ellipsis-l')

  if (page !== 1 && page !== totalPages) add(page)

  if (page < totalPages - 1) add('ellipsis-r')
  add(totalPages)

  return items
}

function NavButton({ children, disabled, onClick, ariaLabel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="inline-flex h-9 sm:h-10 shrink-0 items-center gap-1.5 rounded-full px-3 sm:px-4 text-xs sm:text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
    >
      {children}
    </button>
  )
}

function PageButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
        active
          ? 'bg-primary-dark text-white shadow-sm hover:bg-primary-dark/90'
          : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-300'
      }`}
    >
      {children}
    </button>
  )
}

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null
  const items = getPageItems(page, totalPages)

  return (
    <nav
      role="navigation"
      aria-label="Paginación"
      className="mt-14 mx-auto flex w-full justify-center"
    >
      <ul
        className="flex flex-row flex-nowrap items-center justify-center gap-1 max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        <li>
          <NavButton
            onClick={() => onChange(Math.max(1, page - 1))}
            disabled={page === 1}
            ariaLabel="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Anterior</span>
          </NavButton>
        </li>

        {items.map((it) =>
          typeof it === 'number' ? (
            <li key={it}>
              <PageButton active={it === page} onClick={() => onChange(it)}>
                {it}
              </PageButton>
            </li>
          ) : (
            <li key={it} aria-hidden>
              <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-slate-400">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Más páginas</span>
              </span>
            </li>
          )
        )}

        <li>
          <NavButton
            onClick={() => onChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            ariaLabel="Página siguiente"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="h-4 w-4" />
          </NavButton>
        </li>
      </ul>
    </nav>
  )
}
