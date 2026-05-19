import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle, fadeUp } from '../specialty'
import { perfilPaciente } from './data'

const quienesImg = `${import.meta.env.VITE_BASE_IMAGE_URL}preventivos/pulmoscan.gif`

export default function PorQueHacerlo() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div>
          <SectionEyebrow>Despistaje neumológico integral</SectionEyebrow>
          <SectionTitle className="mb-0">
            ¿Por qué hacerte{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              tu PulmoScan?
            </em>
          </SectionTitle>
        </div>
        <p className="max-w-md text-[15px] font-light leading-7 text-slate-500 lg:border-l lg:border-[rgb(var(--brand-base)/0.3)] lg:pl-8">
          Detección temprana de EPOC, cáncer de pulmón y otras patologías
          respiratorias, en una sola visita.
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative lg:sticky lg:top-28"
        >
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] bg-linear-to-br from-[rgb(var(--brand-base)/0.25)] via-[rgb(var(--brand-med)/0.12)] to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl min-h-[520px] lg:min-h-[620px] flex items-center justify-center bg-linear-to-br from-[rgb(var(--brand-base)/0.12)] to-[rgb(var(--brand-med)/0.08)]">
            <img
              src={quienesImg}
              alt="Despistaje PulmoScan"
              className="w-full h-full object-contain scale-150 lg:scale-[1.7]"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div>
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-dark))]">
            Esta evaluación es para ti si
          </p>
          <ul className="space-y-3">
            {perfilPaciente.map((item, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative flex items-start gap-5 rounded-3xl border border-[rgb(var(--brand-base)/0.18)] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-med)/0.5)] hover:shadow-[0_18px_40px_-18px_rgb(var(--brand-med)/0.3)] lg:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[rgb(var(--brand-base)/0.15)] to-[rgb(var(--brand-med)/0.1)] font-mono text-[13px] font-semibold tracking-wider text-[rgb(var(--brand-med))] transition-all group-hover:bg-linear-to-br group-hover:from-[rgb(var(--brand-base))] group-hover:to-[rgb(var(--brand-med))] group-hover:text-white">
                    {num}
                  </span>
                  <p className="pt-2.5 text-[14.5px] font-light leading-relaxed text-slate-600 transition-colors group-hover:text-[rgb(var(--brand-dark))]">
                    {item}
                  </p>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
