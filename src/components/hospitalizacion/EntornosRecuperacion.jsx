import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { habitaciones } from './data'

function ProgressiveBlur({ side = 'left', intensity = 10 }) {
  const mask =
    side === 'left'
      ? 'linear-gradient(to right, black 0%, black 20%, rgba(0,0,0,0.5) 32%, rgba(0,0,0,0.15) 40%, transparent 48%)'
      : 'linear-gradient(to left, black 0%, black 20%, rgba(0,0,0,0.5) 32%, rgba(0,0,0,0.15) 40%, transparent 48%)'

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

export default function EntornosRecuperacion() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Entornos</SectionEyebrow>
        <SectionTitle className="mb-3">
          Entornos de{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            recuperación
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Espacios diseñados para tu recuperación y descanso.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {habitaciones.map((h, i) => {
          const Icon = h.icon
          const isRight = i % 2 === 1
          const gradient = isRight
            ? 'bg-linear-to-l from-[rgb(var(--brand-dark))] from-20% via-[rgb(var(--brand-dark)/0.75)] via-35% to-transparent to-52%'
            : 'bg-linear-to-r from-[rgb(var(--brand-dark))] from-20% via-[rgb(var(--brand-dark)/0.75)] via-35% to-transparent to-52%'

          return (
            <motion.article
              key={h.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl shadow-[0_25px_60px_-25px_rgba(15,23,42,0.45)]"
            >
              {/* Imagen de fondo a todo el ancho */}
              <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[560px]">
                <img
                  src={h.image}
                  alt={h.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Progressive blur lateral */}
                <ProgressiveBlur side={isRight ? 'right' : 'left'} intensity={8} />

                {/* Degradé sólido sobre el blur */}
                <div className={`absolute inset-0 ${gradient}`} />

                {/* Contenido */}
                <div
                  className={`absolute inset-0 flex items-center px-10 py-8 lg:px-16 lg:py-12 ${
                    isRight ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className={`max-w-sm text-white ${isRight ? 'text-right' : 'text-left'}`}>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md ${isRight ? 'ml-auto' : ''}`}>
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-5 text-3xl font-light leading-tight tracking-tight lg:text-4xl">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] font-light leading-relaxed text-white/80">
                      {h.desc}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {h.bullets.map((b) => (
                        <li key={b} className={`flex items-start gap-3 ${isRight ? 'flex-row-reverse' : ''}`}>
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--brand-base))] text-white">
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          <span className="text-[13px] font-light text-white/85">{b}</span>
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
