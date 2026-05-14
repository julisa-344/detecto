import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { alcance } from './data'

export default function Alcance() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Alcance</SectionEyebrow>
        <SectionTitle className="mb-3">
          Sistema de{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            gestión ética
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Aplica a todas las personas que integran o se relacionan con Detecta
          Clínica, sin excepciones.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {alcance.map((a, i) => {
          const Icon = a.icon
          return (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_22px_45px_-15px_rgb(var(--brand-base)/0.25)]"
            >
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[rgb(var(--brand-base)/0.1)] blur-2xl transition-all duration-700 group-hover:bg-[rgb(var(--brand-base)/0.2)]" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                  0{i + 1}
                </span>
              </div>

              <h3 className="relative mt-8 text-xl font-medium leading-tight tracking-tight text-[rgb(var(--brand-dark))]">
                {a.title}
              </h3>
              <p className="relative mt-3 text-[13px] font-light leading-relaxed text-slate-500">
                {a.desc}
              </p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
