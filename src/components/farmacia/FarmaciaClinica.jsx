import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { areas } from './data'

function ProgressiveBlur({ side = 'left', intensity = 10 }) {
  const mask =
    side === 'left'
      ? 'linear-gradient(to right, black 0%, black 35%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.1) 75%, transparent 85%)'
      : 'linear-gradient(to left, black 0%, black 35%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.1) 75%, transparent 85%)'

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backdropFilter: `blur(${intensity}px)`,
        WebkitBackdropFilter: `blur(${intensity}px)`,
        mask,
        WebkitMask: mask,
      }}
    />
  )
}

export default function FarmaciaClinica() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Farmacia clínica y oncológica</SectionEyebrow>
        <SectionTitle className="mb-3">
          Acompañamiento{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            seguro y profesional.
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Acceso seguro a medicamentos, acompañamiento profesional y soluciones
          prácticas para que continúes tu tratamiento con confianza.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {areas.map((a, i) => {
          const Icon = a.icon
          const isRight = i % 2 === 1
          return (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl shadow-[0_25px_60px_-25px_rgba(15,23,42,0.4)]"
            >
              <div className="relative min-h-[460px] w-full lg:min-h-[440px]">
                {/* Imagen a todo el ancho */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Progressive blur lateral */}
                <ProgressiveBlur side={isRight ? 'right' : 'left'} intensity={14} />

                {/* Tinte oscuro sobre el blur para legibilidad */}
                <div
                  className={`pointer-events-none absolute inset-0 ${
                    isRight
                      ? 'bg-linear-to-l from-slate-950/55 from-30% via-slate-950/25 via-50% to-transparent to-70%'
                      : 'bg-linear-to-r from-slate-950/55 from-30% via-slate-950/25 via-50% to-transparent to-70%'
                  }`}
                />

                {/* Contenido */}
                <div
                  className={`absolute inset-0 flex items-center px-8 py-10 lg:px-14 ${
                    isRight ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className={`max-w-sm text-white ${isRight ? 'text-right' : 'text-left'}`}>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-md ${isRight ? 'ml-auto' : ''}`}>
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="mt-5 inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                      / 0{i + 1}
                    </span>
                    <h3 className="mt-2 text-2xl font-light leading-tight tracking-tight lg:text-3xl">
                      {a.title}
                    </h3>

                    <ul className="mt-5 space-y-2.5">
                      {a.bullets.map((b) => (
                        <li
                          key={b}
                          className={`flex items-start gap-3 ${isRight ? 'flex-row-reverse' : ''}`}
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--brand-base))] text-white">
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          <span className="text-[13px] font-light leading-relaxed text-white/90">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
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
