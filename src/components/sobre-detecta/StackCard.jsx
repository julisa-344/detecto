import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function StackCard({ diff, index, total }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -180])
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])

  const Icon = diff.icon
  const numLabel = String(index + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')

  return (
    <section ref={ref} className="relative h-screen">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.article
          style={{ y, opacity, scale }}
          className="relative w-full max-w-3xl overflow-hidden rounded-[36px] bg-white shadow-[0_40px_80px_-30px_rgba(10,42,63,0.55)]"
        >
          {/* Encabezado: número + meta */}
          <header className="relative px-8 lg:px-12 pt-8 lg:pt-10 flex items-start justify-between gap-6">
            <span className="text-[80px] lg:text-[110px] font-light leading-none text-slate-200 select-none tracking-tighter">
              {numLabel}
            </span>
            <div className="text-right pt-3">
              <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-slate-700">
                {diff.eyebrow}
              </p>
              <p className="mt-1.5 text-[10px] font-mono tracking-[0.22em] uppercase text-slate-400">
                {numLabel} / {totalLabel}
              </p>
            </div>
          </header>

          <div className="mx-8 lg:mx-12 h-px bg-slate-200" />

          {/* Cuerpo */}
          <div className="px-8 lg:px-12 py-8 lg:py-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-dark text-white">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-primary-medium">
                {diff.category}
              </span>
            </div>

            <h3 className="text-3xl lg:text-5xl font-light text-slate-900 tracking-tighter leading-[1.05]">
              {diff.title}
            </h3>
            <p className="mt-5 text-base lg:text-lg font-light text-slate-600 leading-relaxed max-w-2xl">
              {diff.desc}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {diff.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50/80 px-4 py-1.5 text-[11px] font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
