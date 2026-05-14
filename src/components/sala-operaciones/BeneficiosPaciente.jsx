import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { beneficios } from './data'

export default function BeneficiosPaciente() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Beneficios para el paciente</SectionEyebrow>
        <SectionTitle className="mb-3">
          Una propuesta pensada para{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            convertir confianza en decisión.
          </em>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {beneficios.map((b, i) => {
          const Icon = b.icon
          const id = String(i + 1).padStart(2, '0')
          return (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl bg-[rgb(var(--brand-dark))] p-8 transition-all duration-500 hover:shadow-[0_25px_50px_-20px_rgba(15,23,42,0.5)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[rgb(var(--brand-base)/0.25)] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] font-medium tracking-widest text-white/40">
                    {id}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-medium leading-snug text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-[13.5px] font-light leading-relaxed text-white/70">
                  {b.desc}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
