import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'

export default function CustomSelect({ name, value, onChange, onBlur, options, placeholder, error, ariaLabel }) {
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(-1)
  const ref = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
        onBlur && onBlur()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open, onBlur])

  useEffect(() => {
    if (open && value) {
      const idx = options.indexOf(value)
      setHighlight(idx >= 0 ? idx : 0)
    } else if (open) {
      setHighlight(0)
    }
  }, [open, value, options])

  const select = (opt) => {
    onChange({ target: { value: opt } })
    setOpen(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!open) {
        setOpen(true)
      } else if (highlight >= 0) {
        select(options[highlight])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) setOpen(true)
      else setHighlight((h) => Math.min(options.length - 1, h + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) setOpen(true)
      else setHighlight((h) => Math.max(0, h - 1))
    } else if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'Tab') {
      setOpen(false)
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        name={name}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        aria-invalid={!!error}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleKey}
        onBlur={() => { if (!open) onBlur && onBlur() }}
        className={`group flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm font-light transition outline-none ${error
            ? 'border-rose-300 bg-rose-50/30 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/40'
            : open
              ? 'border-primary-medium ring-2 ring-primary-medium/15'
              : 'border-slate-200 hover:border-slate-300 focus:border-primary-medium focus:ring-2 focus:ring-primary-medium/15'
          } ${value ? 'text-slate-700' : 'text-slate-400'}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-primary-medium' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 z-50 mt-2 max-h-64 overflow-auto rounded-2xl border border-slate-100 bg-white p-1.5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.25)]"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {options.map((opt, i) => {
              const isSelected = opt === value
              const isHighlight = i === highlight
              return (
                <li key={opt}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={() => select(opt)}
                    className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] font-light transition-colors ${isSelected
                        ? 'bg-primary-medium/10 text-primary-dark font-medium'
                        : isHighlight
                          ? 'bg-slate-50 text-slate-800'
                          : 'text-slate-600'
                      }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <Check className="h-4 w-4 text-primary-medium" />}
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
