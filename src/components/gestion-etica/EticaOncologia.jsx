import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import bgImg from '../../assets/bannerOncologia.jpg'
import { compromisosOncologia } from './data'

export default function EticaOncologia() {
  return (
    <section className="relative -mx-6 overflow-hidden rounded-4xl bg-slate-950 lg:-mx-12">
      {/* Imagen de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={bgImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-[rgb(var(--brand-dark)/0.7)] to-[rgb(var(--brand-dark)/0.3)]" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 grid gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-14 lg:py-24">
        {/* Texto emocional */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[rgb(var(--brand-base))]">
            Ética aplicada
          </p>
          <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Oncología, prevención y{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              decisiones sensibles
            </span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] font-light leading-7 text-white/85">
            En una clínica con enfoque preventivo y oncológico, la ética debe
            reflejarse de forma especialmente rigurosa. Esto significa
            acompañar, informar con claridad, evitar sesgos comerciales y
            sostener decisiones clínicas responsables en contextos de alta
            sensibilidad emocional.
          </p>

          {/* Bloque destacado */}
          <div className="mt-8 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-base))]">
              Lo que esto significa para el paciente
            </p>
            <p className="mt-2 text-[14px] font-light leading-relaxed text-white/90">
              Significa recibir información clara, criterio médico profesional,
              un trato digno y decisiones orientadas a su salud real.
            </p>
          </div>
        </motion.div>

        {/* Cards compromisos */}
        <div className="flex flex-col gap-3">
          {compromisosOncologia.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.text}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all hover:border-[rgb(var(--brand-base)/0.5)] hover:bg-white/15"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors group-hover:border-[rgb(var(--brand-base))] group-hover:bg-[rgb(var(--brand-base))]">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-[14px] font-light leading-snug text-white">
                  {c.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
