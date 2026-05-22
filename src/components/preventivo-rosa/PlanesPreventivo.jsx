import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { SectionEyebrow, SectionTitle, CTAButton, fadeUp } from '../specialty'
import { planes } from './data'

export default function PlanesPreventivo() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionEyebrow>Planes disponibles</SectionEyebrow>
      <SectionTitle className="mb-3">
        Elige el plan{' '}
        <em className="not-italic font-medium text-[rgb(var(--brand-base))]">para ti</em>
      </SectionTitle>
      <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
        Diseñados según tu grupo etario para evaluar lo que realmente importa en cada etapa.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {planes.map((plan, i) => {
          const featured = plan.highlighted
          return (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative flex flex-col overflow-hidden rounded-[28px] border p-8 transition-all duration-500 hover:-translate-y-1 ${
                featured
                  ? 'border-transparent text-white shadow-[0_25px_60px_-15px_rgb(var(--brand-med)/0.45)]'
                  : 'border-[rgb(var(--brand-base)/0.25)] bg-white shadow-[0_18px_50px_-20px_rgb(var(--brand-med)/0.25)] hover:border-[rgb(var(--brand-base)/0.6)]'
              }`}
              style={
                featured
                  ? {
                      background:
                        'linear-gradient(160deg, #E5739A 0%, #C1436D 100%)',
                    }
                  : undefined
              }
            >
              {featured && (
                <>
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                  <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[rgb(var(--brand-base)/0.4)] blur-3xl" />
                </>
              )}

              <div className="relative z-10 flex flex-1 flex-col">
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${
                    featured ? 'text-white/80' : 'text-[rgb(var(--brand-med))]'
                  }`}
                >
                  {plan.badge}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-extralight tracking-tight ${
                      featured ? 'text-white' : 'text-[rgb(var(--brand-dark))]'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-[11px] font-light ${
                      featured ? 'text-white/70' : 'text-slate-400'
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                </div>

                {plan.priceRegular && (
                  <p
                    className={`mt-2 text-[12px] font-light ${
                      featured ? 'text-white/70' : 'text-slate-400'
                    }`}
                  >
                    Precio regular{' '}
                    <span className="line-through">{plan.priceRegular}</span>
                  </p>
                )}

                <div
                  className={`my-6 h-px w-full ${
                    featured ? 'bg-white/20' : 'bg-slate-100'
                  }`}
                />

                <ul className="flex-1 space-y-3">
                  {plan.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          featured
                            ? 'bg-white/20 text-white'
                            : 'bg-[rgb(var(--brand-base)/0.15)] text-[rgb(var(--brand-med))]'
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={`text-[13.5px] font-light leading-snug ${
                          featured ? 'text-white/95' : 'text-slate-600'
                        }`}
                      >
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-2">
                  <CTAButton label="AGENDA HOY" variant={featured ? 'white' : 'brand'} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
