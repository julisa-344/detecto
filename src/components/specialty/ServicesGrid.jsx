import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'

export default function ServicesGrid({
  eyebrow = 'Nuestros servicios',
  titlePre,
  titleAccent,
  paragraph,
  services = [],
  columns = 2,
}) {
  const gridCols =
    columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionTitle className="mb-3">
          {titlePre}{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            {titleAccent}
          </em>
        </SectionTitle>
        {paragraph && (
          <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
            {paragraph}
          </p>
        )}
      </div>

      <div className={`grid grid-cols-1 gap-5 ${gridCols}`}>
        {services.map((s, i) => {
          const Icon = s.icon
          const num = String(i + 1).padStart(2, '0')
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-4xl bg-white p-7 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-[0_25px_55px_-25px_rgb(0,112,165,0.35)]"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[rgb(var(--brand-base)/0.10)] blur-3xl" />

              <div className="relative flex items-start justify-between">
                {Icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                )}
                <span className="font-mono text-[10px] font-semibold tracking-[0.28em] text-slate-300">
                  / {num}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-2xl">
                {s.title}
              </h3>

              <div className="relative my-5 h-px w-full bg-linear-to-r from-[rgb(var(--brand-base)/0.4)] via-slate-200 to-transparent" />

              <ul className="relative space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-[13.5px] font-light leading-relaxed text-slate-600">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
