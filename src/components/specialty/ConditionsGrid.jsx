import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'

function ConditionCard({ item, index }) {
  const Icon = item.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-[0_15px_35px_-20px_rgb(0,112,165,0.25)] ring-1 ring-white/60"
    >
      {Icon && (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] ring-1 ring-[rgb(var(--brand-base)/0.15)]">
          <Icon className="h-5 w-5" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-slate-300">
          {num}
        </p>
        <h3 className="mt-0.5 text-[15px] font-medium leading-tight tracking-tight text-[rgb(var(--brand-base))]">
          {item.title}
        </h3>
      </div>
    </motion.div>
  )
}

export default function ConditionsGrid({
  eyebrow = 'CONDICIONES TRATADAS',
  titlePre = '¿Qué',
  titleAccent = 'tratamos?',
  items = [],
}) {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[rgb(var(--brand-base)/0.18)] via-[rgb(var(--brand-base)/0.08)] to-[rgb(var(--brand-med)/0.15)] p-8 lg:p-14">
      <div className="flex flex-col gap-10 lg:gap-12">
        <div className="relative">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-extralight leading-[1.05] tracking-tight text-[rgb(var(--brand-dark))] lg:text-5xl">
            {titlePre}{' '}
            <span className="font-medium text-[rgb(var(--brand-base))]">
              {titleAccent}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ConditionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
