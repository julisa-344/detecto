import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

function getPageItems(page, totalPages) {
  const items = []
  const add = (v) => items.push(v)

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) add(i)
    return items
  }

  add(1)
  if (page > 3) add('ellipsis-l')

  const start = Math.max(2, page - 1)
  const end = Math.min(totalPages - 1, page + 1)
  for (let i = start; i <= end; i++) add(i)

  if (page < totalPages - 2) add('ellipsis-r')
  add(totalPages)

  return items
}

function PageButton({ active, children, ...props }) {
  return (
    <button
      type="button"
      aria-current={active ? 'page' : undefined}
      className={`h-9 min-w-9 sm:h-10 sm:min-w-10 shrink-0 px-2 sm:px-3 inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
        active
          ? 'bg-primary-dark text-white shadow-sm hover:bg-primary-dark/90'
          : 'text-slate-700 hover:bg-slate-100'
      }`}
      {...props}
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
      <ul className="flex flex-row flex-nowrap items-center justify-center gap-0.5 sm:gap-1 max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
        <li>
          <button
            type="button"
            onClick={() => onChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="h-9 sm:h-10 shrink-0 inline-flex items-center gap-1.5 rounded-full px-2 sm:px-4 text-xs sm:text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>
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
          <button
            type="button"
            onClick={() => onChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="h-9 sm:h-10 shrink-0 inline-flex items-center gap-1.5 rounded-full px-2 sm:px-4 text-xs sm:text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
