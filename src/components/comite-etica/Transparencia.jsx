import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { transparencia } from './data'
import eticaImg from '../../assets/transparencia.jpg'

export default function Transparencia() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="relative">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
        {/* Lado izquierdo — imagen con título overlay */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-4xl bg-slate-950 min-h-175 lg:min-h-full"
        >
          <img
            src={eticaImg}
            alt="Transparencia y buenas prácticas"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-slate-950/75 via-slate-950/35 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[rgb(var(--brand-base))]">
              Buenas prácticas
            </p>

            <div>
              <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-white lg:text-6xl">
                Transparencia y{' '}
                <span className="italic font-medium text-[rgb(var(--brand-base))]">
                  buenas prácticas
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] font-light leading-7 text-white/80">
                Principios que garantizan integridad, confianza y cumplimiento
                normativo en cada estudio que evaluamos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lado derecho — grid 2x2 estilo EspecialidadesV4 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-h-175">
          {transparencia.map((t, index) => {
            const Icon = t.icon
            const id = String(index + 1).padStart(2, '0')
            const isActive = activeIdx === index

            return (
              <motion.div
                key={t.title}
                onMouseEnter={() => setActiveIdx(index)}
                onFocus={() => setActiveIdx(index)}
                tabIndex={0}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[20px] border bg-white p-7 transition-all duration-500 ${
                  isActive
                    ? 'border-[rgb(var(--brand-med)/0.6)] shadow-[0_20px_40px_-15px_rgb(var(--brand-med)/0.25)]'
                    : 'border-[rgb(var(--brand-med)/0.25)] hover:border-[rgb(var(--brand-med)/0.5)]'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-br from-[rgb(var(--brand-med)/0)] via-[rgb(var(--brand-med)/0.15)] to-[rgb(var(--brand-med)/0)] transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className={`font-mono text-[10px] font-medium transition-colors ${
                      isActive ? 'text-[rgb(var(--brand-base))]' : 'text-[rgb(var(--brand-base)/0.4)]'
                    }`}
                  >
                    {id}
                  </span>
                  <div
                    className={`rounded-2xl p-3 transition-all duration-500 ${
                      isActive
                        ? 'bg-[rgb(var(--brand-med))] text-white shadow-lg shadow-[rgb(var(--brand-med)/0.3)]'
                        : 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3
                    className={`text-base font-normal uppercase tracking-wide leading-snug transition-colors ${
                      isActive ? 'text-[rgb(var(--brand-base))]' : 'text-[rgb(var(--brand-dark))]'
                    }`}
                  >
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[13px] font-light leading-relaxed text-slate-500">
                    {t.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {/* Card destacada: Canal de consultas */}
          <motion.a
            href="mailto:comitedeetica@detecta.pe"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[20px] bg-linear-to-br from-[rgb(var(--brand-dark))] to-[rgb(var(--brand-base))] p-7 text-white transition-all hover:shadow-[0_20px_40px_-15px_rgb(var(--brand-base)/0.5)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="pointer-events-none absolute -bottom-14 -right-14 h-44 w-44 rounded-full bg-white/15 blur-3xl" />

            <div className="relative z-10 flex items-start justify-between">
              <span className="font-mono text-[10px] font-medium text-white/60">04</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/15 backdrop-blur-md">
                <Mail className="h-5 w-5" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Canal de consultas
              </p>
              <p className="mt-2 text-base font-medium uppercase tracking-wide leading-tight break-all">
                comitedeetica
                <br />
                @detecta.pe
              </p>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">
                Escribir
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
