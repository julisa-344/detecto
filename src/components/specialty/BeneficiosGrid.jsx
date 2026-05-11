import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { fadeUp } from './theme'

export default function BeneficiosGrid({
  eyebrow,
  titlePre,
  titleAccent,
  paragraph,
  items = [],
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle className="mb-3">
        {titlePre}{' '}
        {titleAccent && (
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">{titleAccent}</em>
        )}
      </SectionTitle>
      {paragraph && (
        <p className="mb-10 max-w-2xl text-[15px] font-light leading-7 text-slate-500">
          {paragraph}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-3">
        {items.map((h, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group rounded-[22px] border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--brand-med)/0.2)] hover:shadow-lg hover:shadow-blue-900/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgb(var(--brand-base)/0.12)] text-[rgb(var(--brand-med))]">
              <h.icon className="h-[18px] w-[18px]" />
            </div>
            <h4 className="mb-2 text-[14px] font-semibold text-[rgb(var(--brand-dark))]">{h.title}</h4>
            <p className="text-[13px] font-light leading-relaxed text-slate-500">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
