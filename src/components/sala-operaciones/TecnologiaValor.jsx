import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { tecnologias } from './data'

const TECH_IMAGE = `${import.meta.env.VITE_BASE_IMAGE_URL}servicios/sala.webp`

export default function TecnologiaValor() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Tecnología que suma valor</SectionEyebrow>
        <SectionTitle className="mb-3">
          Equipamiento que respalda{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            cirugías más precisas.
          </em>
        </SectionTitle>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[420px] overflow-hidden rounded-4xl bg-slate-100 lg:sticky lg:top-28 lg:min-h-[520px]"
        >
          <img
            src={TECH_IMAGE}
            alt="Tecnología quirúrgica"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[rgb(var(--brand-dark)/0.6)] via-transparent to-transparent" />
        </motion.div>

        <ul className="space-y-3">
          {tecnologias.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-5 rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[16px] font-medium leading-tight text-[rgb(var(--brand-dark))]">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] font-light leading-relaxed text-slate-500">
                    {t.desc}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
