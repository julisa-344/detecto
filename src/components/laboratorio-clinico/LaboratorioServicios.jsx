import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { servicios } from './data'

export default function LaboratorioServicios() {
  return (
    <section className="relative pb-32 lg:pb-44">
      <div className="mb-16 max-w-2xl">
        <SectionEyebrow>Nuestros servicios</SectionEyebrow>
        <SectionTitle className="mb-3">
          Todo lo que tu salud necesita,{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            en un solo laboratorio.
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Análisis confiables y oportunos respaldados por Tecnología de Alta Precisión y
          un equipo médico especializado en diagnóstico.
        </p>
      </div>

      <div className="flex flex-col gap-32 lg:gap-48">
        {servicios.map((s, i) => {
          const Icon = s.icon
          const reverse = i % 2 === 1
          const num = String(i + 1).padStart(2, '0')

          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -top-14 select-none font-mono text-[clamp(7rem,16vw,14rem)] font-extralight leading-none tracking-tighter text-[rgb(var(--brand-base)/0.08)] ${
                  reverse ? 'right-2 text-right' : 'left-2'
                }`}
              >
                {num}
              </span>

              <div className="relative">
                <div
                  className={`relative aspect-4/3 w-full overflow-hidden rounded-4xl shadow-[0_25px_55px_-25px_rgb(0,112,165,0.35)] lg:aspect-auto lg:h-150 lg:w-[80%] ${
                    reverse ? 'lg:ml-auto' : ''
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))] shadow-md backdrop-blur-md">
                    <span className="font-mono text-[rgb(var(--brand-base))]">
                      {num}
                    </span>
                    Servicio
                  </span>
                </div>

                <div
                  className={`relative z-10 -mt-12 mx-4 sm:mx-8 lg:absolute lg:-bottom-24 lg:mt-0 lg:w-[62%] ${
                    reverse ? 'lg:left-0' : 'lg:right-0'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-4xl bg-white/55 p-7 shadow-[0_30px_60px_-25px_rgb(0,112,165,0.28)] ring-1 ring-white/60 backdrop-blur-2xl lg:p-9">
                    <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[rgb(var(--brand-base)/0.18)] blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[rgb(var(--brand-med)/0.12)] blur-3xl" />

                    <div className="relative">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                        <Icon className="h-5 w-5" />
                      </span>

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--brand-base))]">
                        Servicio {num}
                      </p>
                      <h3 className="mt-2 text-2xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-[2rem]">
                        {s.title}
                      </h3>

                      <div className="my-5 h-px w-full bg-linear-to-r from-[rgb(var(--brand-base)/0.4)] via-slate-200 to-transparent" />

                      <ul className="space-y-2.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                              <Check className="h-3 w-3" strokeWidth={2.5} />
                            </span>
                            <span className="text-[13.5px] font-light text-slate-700">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
