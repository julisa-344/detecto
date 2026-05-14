import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { SectionEyebrow } from '../specialty'
import { ensayos } from './data'

export default function EnsayosClinicos() {
  return (
    <section className="relative -mx-6 overflow-hidden rounded-4xl bg-linear-to-br from-(--brand-bg-ultra) via-[rgb(var(--brand-base)/0.18)] to-(--brand-bg-ultra) px-6 py-20 ring-1 ring-[rgb(var(--brand-base)/0.15)] lg:-mx-12 lg:px-12 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* ── IZQUIERDA: TÍTULO ── */}
        <div>
          <SectionEyebrow>Ensayos Clínicos</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-extralight leading-[1.05] tracking-tight text-[rgb(var(--brand-dark))] lg:text-5xl">
            Acceso a innovación terapéutica con{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              respaldo médico.
            </em>
          </h2>
          <p className="mt-6 max-w-md text-[14.5px] font-light leading-relaxed text-slate-500">
            Participación bajo supervisión médica y comités de ética, con
            seguridad y seguimiento continuo.
          </p>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[rgb(var(--brand-base))] px-5 py-2.5 shadow-[0_10px_25px_-10px_rgb(var(--brand-base)/0.5)]">
            <ShieldCheck className="h-4 w-4 text-white" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              Supervisión ética
            </span>
          </div>
        </div>

        {/* ── DERECHA: CARDS EN ZIGZAG ── */}
        <div className="relative space-y-5">
          {ensayos.map((e, i) => {
            const Icon = e.icon
            const id = String(i + 1).padStart(2, '0')
            const offsetClass = i === 0 ? 'lg:ml-12' : i === 1 ? 'lg:ml-0' : 'lg:ml-16'
            return (
              <motion.article
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex items-center gap-5 rounded-3xl border border-white bg-white/80 p-5 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.15)] backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_15px_35px_-15px_rgb(var(--brand-base)/0.3)] ${offsetClass}`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[rgb(var(--brand-base))] ring-1 ring-[rgb(var(--brand-base)/0.15)] transition-all group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white group-hover:ring-[rgb(var(--brand-base))]">
                  <Icon className="h-5 w-5" />
                </span>

                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] font-semibold tracking-widest text-[rgb(var(--brand-base)/0.5)]">
                    {id}
                  </span>
                  <h3 className="mt-1 text-[16px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] font-light leading-relaxed text-slate-500">
                    {e.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
