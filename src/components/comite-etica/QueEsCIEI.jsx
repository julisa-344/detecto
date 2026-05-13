import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { pilaresFuncionamiento } from './data'

export default function QueEsCIEI() {
  return (
    <section className="relative">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow>El comité</SectionEyebrow>
          <SectionTitle className="mb-4">
            ¿Qué es el{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              CIEI?
            </em>
          </SectionTitle>
          <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
            Es un órgano independiente encargado de evaluar protocolos de
            investigación en seres humanos, asegurando cumplimiento ético,
            científico y normativo.
          </p>
        </motion.div>

        <div>
          <SectionEyebrow>¿Cómo funciona?</SectionEyebrow>
          <h3 className="mt-3 mb-8 text-2xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-3xl">
            Cuatro pilares fundamentales para garantizar la integridad de la
            investigación
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pilaresFuncionamiento.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-3xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                      0{p.num}
                    </span>
                  </div>
                  <h4 className="mt-5 text-[15px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                    {p.title}
                  </h4>
                  <p className="mt-1.5 text-[12px] font-light leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
