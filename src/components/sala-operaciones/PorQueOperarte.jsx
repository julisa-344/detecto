import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { porQueOperarte } from './data'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=80'

export default function PorQueOperarte() {
  return (
    <section className="relative">
      <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div>
          <SectionEyebrow>¿Por qué operarte aquí?</SectionEyebrow>
          <SectionTitle className="mb-0">
            La tranquilidad de saber{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              que tu cirugía está bien respaldada.
            </em>
          </SectionTitle>
        </div>
        <p className="max-w-md text-[15px] font-light leading-7 text-slate-500 lg:border-l lg:border-[rgb(var(--brand-base)/0.25)] lg:pl-8">
          Tres pilares que respaldan cada procedimiento quirúrgico en Detecta
          Clínica.
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[420px] overflow-hidden rounded-4xl bg-slate-100 lg:min-h-full"
        >
          <img
            src={HERO_IMAGE}
            alt="Sala de operaciones Detecta"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          {porQueOperarte.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-5 rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[17px] font-medium leading-tight text-[rgb(var(--brand-dark))]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] font-light leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
