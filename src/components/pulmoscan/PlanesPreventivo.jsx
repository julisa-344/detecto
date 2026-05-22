import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
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
      <SectionEyebrow>Plan disponible</SectionEyebrow>
      <SectionTitle className="mb-3">
        Tu plan{' '}
        <em className="not-italic font-medium text-[rgb(var(--brand-base))]">PulmoScan</em>
      </SectionTitle>
      <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
        Promoción especial válida hasta el 31 de julio de 2025.
      </p>

      <div className="flex flex-col gap-6">
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
              className={`relative w-full overflow-hidden rounded-[28px] border p-8 transition-all duration-500 hover:-translate-y-1 lg:p-10 ${
                featured
                  ? 'border-transparent text-white shadow-[0_25px_60px_-15px_rgb(var(--brand-med)/0.45)]'
                  : 'border-[rgb(var(--brand-base)/0.25)] bg-white shadow-[0_18px_50px_-20px_rgb(var(--brand-med)/0.25)] hover:border-[rgb(var(--brand-base)/0.6)]'
              }`}
              style={
                featured
                  ? {
                      background:
                        'linear-gradient(160deg, #34D399 0%, #047857 100%)',
                    }
                  : undefined
              }
            >
              {featured && (
                <>
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                  <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[rgb(var(--brand-base)/0.4)] blur-3xl" />
                </>
              )}

              <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-12 lg:items-stretch">
                {/* Columna izquierda: badge + precio + CTA */}
                <div className="flex flex-col">
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${
                      featured ? 'text-white/80' : 'text-[rgb(var(--brand-med))]'
                    }`}
                  >
                    {plan.badge}
                  </p>

                  <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span
                      className={`whitespace-nowrap text-5xl font-extralight tracking-tight lg:text-[56px] ${
                        featured ? 'text-white' : 'text-[rgb(var(--brand-dark))]'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`whitespace-nowrap text-[11px] font-light ${
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

                  <div className="mt-8 lg:mt-auto lg:pt-8">
                    <CTAButton label="AGENDA HOY" variant={featured ? 'white' : 'brand'} />
                  </div>
                </div>

                {/* Columna derecha: lista de exámenes */}
                <div className="lg:border-l lg:pl-12 lg:flex lg:flex-col"
                  style={featured ? { borderColor: 'rgba(255,255,255,0.2)' } : { borderColor: 'rgb(241 245 249)' }}
                >
                  <p
                    className={`mb-4 text-[10px] font-bold uppercase tracking-[0.32em] ${
                      featured ? 'text-white/70' : 'text-[rgb(var(--brand-med))]'
                    }`}
                  >
                    Incluye
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
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
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
