import { motion } from 'framer-motion'

export default function Seccion({ item, index }) {
  return (
    <motion.article
      id={item.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group relative scroll-mt-28 grid grid-cols-1 gap-6 rounded-3xl border border-[rgb(var(--brand-med)/0.25)] bg-white p-6 transition-all hover:border-[rgb(var(--brand-med)/0.55)] hover:shadow-[0_20px_40px_-15px_rgb(var(--brand-med)/0.18)] sm:grid-cols-[68px_1fr] sm:p-8"
    >
      <span className="font-mono text-[26px] font-extralight tracking-tight text-[rgb(var(--brand-base))]">
        {item.num}
      </span>
      <div>
        <h3 className="text-xl font-normal leading-snug tracking-tight text-[rgb(var(--brand-dark))] sm:text-[22px]">
          {item.title}
        </h3>
        <div className="mt-4 space-y-3">
          {item.body.map((p, i) => (
            <p key={i} className="text-[14.5px] font-light leading-7 text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
