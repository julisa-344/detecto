import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ServicesStrip({ items }) {
  const [paused, setPaused] = useState(false)
  const loop = [...items, ...items]

  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

        <motion.div
          className="flex w-max items-center py-4 sm:py-5"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        >
          {loop.map((s, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 border-r border-slate-200 px-6 py-1"
            >
              <s.icon className="h-3.5 w-3.5 shrink-0 text-[rgb(var(--brand-med))]" />
              <span className="whitespace-nowrap text-[11px] font-medium text-slate-600">{s.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
