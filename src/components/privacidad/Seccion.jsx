import { motion } from 'framer-motion'

function renderBlock(block, key) {
  if (typeof block === 'string') {
    return (
      <p key={key} className="text-[14.5px] font-light leading-7 text-slate-600">
        {block}
      </p>
    )
  }

  if (block.h) {
    return (
      <h4
        key={key}
        className="mt-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[rgb(var(--brand-dark))]"
      >
        {block.h}
      </h4>
    )
  }

  if (block.ul) {
    return (
      <ul key={key} className="space-y-2 pl-1">
        {block.ul.map((item, i) => (
          <li
            key={i}
            className="relative pl-5 text-[14.5px] font-light leading-7 text-slate-600 before:absolute before:left-0 before:top-[14px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--brand-base))]"
          >
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.dl) {
    return (
      <dl key={key} className="space-y-3">
        {block.dl.map((entry, i) => (
          <div
            key={i}
            className="grid gap-1 rounded-2xl border border-[rgb(var(--brand-med)/0.15)] bg-(--brand-bg-ultra)/40 p-4 sm:grid-cols-[180px_1fr] sm:gap-5"
          >
            <dt className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[rgb(var(--brand-dark))]">
              {entry.term}
            </dt>
            <dd className="text-[14.5px] font-light leading-7 text-slate-600">
              {entry.def}
            </dd>
          </div>
        ))}
      </dl>
    )
  }

  return null
}

export default function Seccion({ item, index }) {
  return (
    <motion.article
      id={item.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
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
          {item.body.map((b, i) => renderBlock(b, i))}
        </div>
      </div>
    </motion.article>
  )
}
