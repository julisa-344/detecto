import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { SectionEyebrow, SectionTitle, fadeUp } from '../specialty'
import { preparacion, importante } from './data'

export default function ChecklistPreparacion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionEyebrow>Check list</SectionEyebrow>
      <SectionTitle className="mb-3">
        Prepárate antes{' '}
        <em className="not-italic font-medium text-[rgb(var(--brand-base))]">de tu preventivo</em>
      </SectionTitle>
      <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
        Sigue estas indicaciones para que tu despistaje sea preciso y cómodo.
      </p>

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-[rgb(var(--brand-base)/0.2)] bg-white p-8 shadow-[0_18px_50px_-20px_rgb(var(--brand-med)/0.2)]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgb(var(--brand-base)/0.15)] blur-2xl" />

          <p className="relative text-[11px] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--brand-med))]">
            Indicaciones
          </p>
          <ul className="relative mt-6 space-y-4">
            {preparacion.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--brand-base))] to-[rgb(var(--brand-med))] text-white shadow-sm shadow-[rgb(var(--brand-base)/0.3)]">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="pt-1 text-[14px] font-light leading-relaxed text-slate-600">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div
          className="relative overflow-hidden rounded-[28px] border border-white/30 p-8 text-white shadow-[0_22px_60px_-20px_rgb(var(--brand-med)/0.4)]"
          style={{
            background:
              'linear-gradient(140deg, rgb(var(--brand-med)) 0%, rgb(var(--brand-dark)) 100%)',
          }}
        >
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[rgb(var(--brand-base)/0.4)] blur-2xl" />

          <div className="relative">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
              <AlertCircle className="h-5 w-5" />
            </span>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
              Importante
            </p>
            <p className="mt-3 text-[15px] font-light leading-relaxed text-white/95">
              {importante}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
