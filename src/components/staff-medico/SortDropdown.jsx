import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownAZ, ArrowUpAZ, ChevronDown, Check } from 'lucide-react'

export const SORT_OPTIONS = [
  { value: 'az', label: 'A — Z', hint: 'Orden alfabético', Icon: ArrowDownAZ },
  { value: 'za', label: 'Z — A', hint: 'Orden inverso', Icon: ArrowUpAZ },
]

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = SORT_OPTIONS.find((o) => o.value === value) ?? SORT_OPTIONS[0]
  const CurrentIcon = current.Icon

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`group inline-flex items-center gap-2.5 rounded-full border bg-white pl-3.5 pr-3 py-2.5 text-[12px] font-medium text-slate-700 transition-all cursor-pointer shadow-sm ${
          open
            ? 'border-primary-dark ring-2 ring-primary-dark/15'
            : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <CurrentIcon className="h-4 w-4 text-slate-500" />
        <span className="text-[10px] tracking-[0.18em] uppercase text-slate-400 font-semibold">
          Ordenar
        </span>
        <span className="text-slate-900">{current.label}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)] p-1.5 z-30"
          >
            {SORT_OPTIONS.map((opt) => {
              const Icon = opt.Icon
              const selected = opt.value === value
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange(opt.value)
                      setOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                      selected ? 'bg-slate-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[13px] font-medium text-slate-900">
                        {opt.label}
                      </span>
                      <span className="block text-[11px] text-slate-500 font-light">
                        {opt.hint}
                      </span>
                    </span>
                    {selected && <Check className="h-4 w-4 text-primary-dark" />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
