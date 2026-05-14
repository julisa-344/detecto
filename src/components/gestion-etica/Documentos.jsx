import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { documentos } from './data'

export default function Documentos() {
  return (
    <section id="documentos" className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Biblioteca</SectionEyebrow>
        <SectionTitle className="mb-3">
          Documentos y{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            lineamientos institucionales
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Repositorio público de políticas y formatos. Descarga los archivos
          oficiales en cualquier momento.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {documentos.map((d, i) => {
          const Icon = d.icon
          return (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-4xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_18px_40px_-15px_rgb(var(--brand-base)/0.22)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-(--brand-bg-ultra) px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-base))]">
                  PDF
                </span>
              </div>

              <div className="mt-6 flex-1">
                <h3 className="text-[16px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                  {d.title}
                </h3>
                <p className="mt-2 text-[12.5px] font-light leading-relaxed text-slate-500">
                  {d.desc}
                </p>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-(--brand-bg-ultra) px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-base))] transition hover:bg-[rgb(var(--brand-base))] hover:text-white"
              >
                <Download className="h-3.5 w-3.5" />
                Descargar PDF
              </button>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
