import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, Package } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { requisitosTabs } from './data'

export default function RequisitosFormatos() {
  const [activeKey, setActiveKey] = useState(requisitosTabs[0].key)
  const active = requisitosTabs.find((t) => t.key === activeKey) ?? requisitosTabs[0]

  return (
    <section id="requisitos-formatos" className="relative scroll-mt-24">
      <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionEyebrow>Documentación requerida</SectionEyebrow>
          <SectionTitle className="mb-3">
            Requisitos y{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              formatos
            </em>
          </SectionTitle>
          <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
            Selecciona el tipo de estudio y descarga los documentos necesarios
            para presentar ante el CIEI.
          </p>
        </div>

        <button className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[rgb(var(--brand-base))] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[rgb(var(--brand-dark))]">
          <Package className="h-4 w-4" />
          Descargar todo el paquete
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {requisitosTabs.map((tab) => {
          const isActive = tab.key === activeKey
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all ${
                isActive
                  ? 'bg-[rgb(var(--brand-base))] text-white shadow-[0_10px_25px_-12px_rgb(var(--brand-base)/0.5)]'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-[rgb(var(--brand-base)/0.4)]'
              }`}
            >
              {tab.label}
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]'
                }`}
              >
                {tab.items.length}
              </span>
            </button>
          )
        })}
      </div>

      {/* Lista */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {active.items.map((item) => (
            <div
              key={item.title}
              className="group flex items-start justify-between gap-4 rounded-3xl border border-slate-100 bg-white p-5 transition-all hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.2)]"
            >
              <div className="flex flex-1 items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                  <FileText className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[14px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                    {item.title}
                  </p>
                  {item.desc && (
                    <p className="mt-1 text-[12px] font-light leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>

              {item.modules ? (
                <div className="flex shrink-0 flex-col gap-1.5">
                  {item.modules.map((m) => (
                    <button
                      key={m}
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-(--brand-bg-ultra) px-3 py-1.5 text-[11px] font-semibold text-[rgb(var(--brand-base))] transition hover:bg-[rgb(var(--brand-base))] hover:text-white"
                    >
                      <Download className="h-3 w-3" />
                      {m}
                    </button>
                  ))}
                </div>
              ) : item.download ? (
                <button
                  type="button"
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-(--brand-bg-ultra) px-3 py-1.5 text-[11px] font-semibold text-[rgb(var(--brand-base))] transition hover:bg-[rgb(var(--brand-base))] hover:text-white"
                >
                  <Download className="h-3 w-3" />
                  Descargar
                </button>
              ) : null}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Footer info */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-100 bg-white px-6 py-4">
        <p className="text-[13px] font-light text-slate-600">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-base))] align-middle" />
          <span className="font-semibold text-[rgb(var(--brand-dark))]">
            {active.items.length}
          </span>{' '}
          documentos requeridos para{' '}
          <span className="font-semibold text-[rgb(var(--brand-dark))]">
            {active.label}
          </span>
        </p>
        <button className="inline-flex cursor-pointer items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-base))] hover:text-[rgb(var(--brand-dark))]">
          <Download className="h-4 w-4" />
          Descargar paquete completo
        </button>
      </div>
    </section>
  )
}
