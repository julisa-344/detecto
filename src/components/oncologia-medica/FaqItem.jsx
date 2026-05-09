import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? 'border-[#0199C6]/25 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`text-[14px] font-medium leading-snug transition-colors duration-200 ${open ? 'text-[#0070A5]' : 'text-slate-700'}`}>{q}</span>
        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? 'bg-[#0070A5] text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[13px] font-light leading-relaxed text-slate-500">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
