import { motion } from 'framer-motion'
import { CheckCircle2, Info } from 'lucide-react'
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
      <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div>
          <SectionEyebrow>Check list</SectionEyebrow>
          <SectionTitle className="mb-0">
            Prepárate antes{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              de tu PulmoScan
            </em>
          </SectionTitle>
        </div>
        <p className="max-w-md text-[15px] font-light leading-7 text-slate-500 lg:border-l lg:border-[rgb(var(--brand-base)/0.3)] lg:pl-8">
          Sigue estas indicaciones para que tu despistaje sea preciso y cómodo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {preparacion.map((item, i) => {
          const num = String(i + 1).padStart(2, '0')
          return (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-[rgb(var(--brand-base)/0.18)] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.5)] hover:shadow-[0_18px_40px_-18px_rgb(var(--brand-med)/0.3)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold tracking-widest text-[rgb(var(--brand-base)/0.5)]">
                  {num}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[rgb(var(--brand-base)/0.15)] to-[rgb(var(--brand-med)/0.1)] text-[rgb(var(--brand-med))] transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-[rgb(var(--brand-base))] group-hover:to-[rgb(var(--brand-med))] group-hover:text-white">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>

              <p className="mt-6 text-[13.5px] font-light leading-relaxed text-slate-600">
                {item}
              </p>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 flex items-start gap-4 rounded-3xl bg-[rgb(var(--brand-base)/0.08)] p-5 ring-1 ring-[rgb(var(--brand-base)/0.18)]">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgb(var(--brand-base))] text-white">
          <Info className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-med))]">
            Importante
          </p>
          <p className="mt-1 text-[13.5px] font-light leading-relaxed text-slate-600">
            {importante}
          </p>
        </div>
      </div>
    </motion.section>
  )
}
