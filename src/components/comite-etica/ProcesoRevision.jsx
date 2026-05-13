import { motion } from 'framer-motion'
import { ArrowUpRight, FileText, BookOpen } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { etapas } from './data'

export default function ProcesoRevision() {
  return (
    <section className="relative">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionEyebrow>Proceso</SectionEyebrow>
          <SectionTitle className="mb-3">
            Proceso de revisión{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              ética
            </em>
          </SectionTitle>
          <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
            Flujo estructurado para evaluación, dictamen y seguimiento de
            protocolos de investigación.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-(--brand-bg-ultra) px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-dark))] transition hover:bg-[rgb(var(--brand-base))] hover:text-white"
          >
            <FileText className="h-4 w-4" />
            Manual de procedimientos
          </a>
          <a
            href="#"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:border-[rgb(var(--brand-base))] hover:text-[rgb(var(--brand-base))]"
          >
            <BookOpen className="h-4 w-4" />
            Reglamento
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {etapas.map((e, i) => {
          const Icon = e.icon
          return (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-4xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_20px_40px_-15px_rgb(var(--brand-base)/0.25)]"
            >
              {/* Línea conector entre cards (desktop) */}
              {i < etapas.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-12 hidden h-px w-4 -translate-y-1/2 translate-x-full bg-[rgb(var(--brand-base)/0.3)] lg:block"
                />
              )}

              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-3xl font-extralight tracking-tighter text-[rgb(var(--brand-base)/0.3)]">
                  {e.id}
                </span>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-base))]">
                {e.tag}
              </p>
              <h3 className="mt-1 text-xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))]">
                {e.title}
              </h3>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-slate-500">
                {e.desc}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
