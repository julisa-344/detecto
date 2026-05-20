import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'

export default function SearchFilters({
  query,
  onQueryChange,
  chips,
  activeChip,
  onChipChange,
}) {
  const scrollRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateArrows()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [chips, expanded])

  const scrollBy = (delta) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  // Auto-scroll para asegurar visibilidad del chip activo
  useEffect(() => {
    if (expanded) return
    const el = scrollRef.current
    if (!el) return
    const activeEl = el.querySelector('[data-chip-active="true"]')
    if (activeEl && typeof activeEl.scrollIntoView === 'function') {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activeChip, expanded])

  return (
    <section className="relative -mt-20 sm:-mt-24 lg:-mt-32 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-5 lg:p-7 shadow-[0_20px_60px_-15px_rgba(0,112,165,0.25)]"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar nombre, especialidad o CMP..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-5 text-sm font-light text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary-dark/15"
            />
          </div>

          <div className="relative">
            {/* Fade izquierdo */}
            {!expanded && canLeft && (
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-linear-to-r from-white via-white/85 to-transparent" />
            )}
            {/* Fade derecho */}
            {!expanded && canRight && (
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-linear-to-l from-white via-white/85 to-transparent" />
            )}

            {/* Flecha izquierda */}
            {!expanded && canLeft && (
              <button
                type="button"
                onClick={() => scrollBy(-220)}
                aria-label="Anterior"
                className="absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm transition hover:bg-primary-dark hover:text-white hover:border-primary-dark"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            {/* Flecha derecha */}
            {!expanded && canRight && (
              <button
                type="button"
                onClick={() => scrollBy(220)}
                aria-label="Siguiente"
                className="absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm transition hover:bg-primary-dark hover:text-white hover:border-primary-dark"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}

            <div
              ref={scrollRef}
              className={
                expanded
                  ? 'flex flex-wrap gap-2 pt-1'
                  : 'overflow-x-auto pt-1 px-8 [&::-webkit-scrollbar]:hidden'
              }
              style={
                expanded
                  ? undefined
                  : { scrollbarWidth: 'none', msOverflowStyle: 'none' }
              }
            >
              <div
                className={
                  expanded
                    ? 'contents'
                    : 'flex flex-nowrap gap-2 w-max'
                }
              >
                {chips.map((chip) => {
                  const active = chip === activeChip
                  return (
                    <button
                      key={chip}
                      data-chip-active={active}
                      onClick={() => onChipChange(chip)}
                      className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                        active
                          ? 'bg-primary-dark text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-primary-dark'
                      }`}
                    >
                      {chip}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Toggle ver todas */}
            {chips.length > 6 && (
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary-dark hover:text-slate-900 transition-colors"
                >
                  {expanded ? 'Mostrar menos' : 'Ver todas'}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
