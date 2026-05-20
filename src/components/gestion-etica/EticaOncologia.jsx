import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import bgImg from '../../assets/bannerOncologia.jpg'
import { compromisosOncologia } from './data'

export default function EticaOncologia() {
  return (
    <section className="relative">
      {/* Banner editorial superior */}
      <div className="relative h-[46vh] min-h-[360px] overflow-hidden rounded-4xl lg:h-[58vh] lg:rounded-[2.5rem]">
        <img
          src={bgImg}
          alt="Ética aplicada en oncología"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/35 via-slate-950/45 to-slate-950/90" />

        {/* Eyebrow + título sobre el banner */}
        <div className="relative z-10 flex h-full items-center px-8 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[rgb(var(--brand-base))]">
              Ética aplicada
            </p>
            <h2 className="mt-4 text-3xl font-extralight leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Oncología, prevención y{' '}
              <span className="italic font-medium text-[rgb(var(--brand-base))]">
                decisiones sensibles.
              </span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Panel inferior con lista editorial + pull quote */}
      <div className="relative mt-8 mx-4 rounded-4xl border border-slate-100 bg-white p-8 shadow-[0_30px_60px_-25px_rgb(0,112,165,0.18)] lg:mt-10 lg:mx-14 lg:p-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* Compromisos como lista tipográfica */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--brand-base))]">
              Compromisos específicos
            </p>
            <p className="mt-3 max-w-md text-[15px] font-light leading-7 text-slate-500">
              En contextos de alta sensibilidad emocional, sostenemos
              decisiones clínicas responsables con claridad, evidencia y
              acompañamiento humano.
            </p>

            <ol className="mt-8 divide-y divide-slate-100">
              {compromisosOncologia.map((c, i) => (
                <motion.li
                  key={c.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-5 py-4 transition-colors first:pt-0"
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-base))] tabular-nums">
                    0{i + 1}
                  </span>
                  <p className="flex-1 text-[15px] font-light leading-snug text-slate-700 transition-colors group-hover:text-[rgb(var(--brand-dark))] lg:text-[16px]">
                    {c.text}
                  </p>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--brand-base)/0.3)] transition-all duration-500 group-hover:w-6 group-hover:bg-[rgb(var(--brand-base))]" />
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Pull quote — "Lo que significa para el paciente" */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-br from-[rgb(var(--brand-dark))] to-[rgb(var(--brand-base))] p-8 text-white lg:p-10"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                backgroundSize: '22px 22px',
              }}
            />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/15 blur-3xl" />

            <Quote className="relative h-8 w-8 text-white/40" />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Lo que significa para el paciente
              </p>
              <p className="mt-4 text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
                Información clara, criterio profesional, un trato{' '}
                <span className="italic font-medium">digno</span> y decisiones
                orientadas a su{' '}
                <span className="italic font-medium">salud real</span>.
              </p>
            </div>

            <div className="relative mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-white/40" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Detecta · Compromiso ético
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
