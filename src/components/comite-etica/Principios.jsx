import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { principios } from './data'

export default function Principios() {
  return (
    <section className="relative -mx-6 rounded-4xl bg-(--brand-bg-ultra) px-6 py-16 lg:-mx-12 lg:px-12 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <SectionEyebrow>Marco ético</SectionEyebrow>
        <SectionTitle className="mb-3">
          Principios Éticos{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            Fundamentales
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Basados en el Informe Belmont y normativas internacionales.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principios.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgb(var(--brand-med)/0.25)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-[16px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] font-light leading-relaxed text-slate-500">
                {p.desc}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
