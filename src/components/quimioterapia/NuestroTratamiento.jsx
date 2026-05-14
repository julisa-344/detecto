import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { tratamiento } from './data'

export default function NuestroTratamiento() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Nuestro Tratamiento</SectionEyebrow>
        <SectionTitle className="mb-3">
          Estándares internacionales{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            de seguridad y precisión.
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Administramos medicamentos con sistemas de precisión y estándares
          internacionales de seguridad.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {tratamiento.map((t, i) => {
          const Icon = t.icon
          return (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl border border-slate-100 bg-white p-7 transition-all hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_18px_40px_-15px_rgb(var(--brand-base)/0.22)]"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[rgb(var(--brand-base)/0.08)] blur-2xl transition-all duration-700 group-hover:bg-[rgb(var(--brand-base)/0.18)]" />

              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-6 text-[17px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                {t.title}
              </h3>
              <p className="relative mt-2 text-[13.5px] font-light leading-relaxed text-slate-500">
                {t.desc}
              </p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
