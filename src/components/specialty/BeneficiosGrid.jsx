import { useState, useRef, useEffect } from 'react'
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
  activeBg = 'linear-gradient(160deg, #E5739A 0%, #C1436D 100%)',
  idleBg = 'linear-gradient(160deg, #F9E2E9 0%, #F0A0B9 100%)',
  collapsedTextColor = '#C1436D',
}) {
  const [active, setActive] = useState(0)
  const itemRefs = useRef([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 640px)')
    if (mq.matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index)
            if (!Number.isNaN(idx)) setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [items.length])

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

      <div className="flex flex-col gap-4 sm:h-110 sm:flex-row">
        {items.map((h, i) => {
          const isActive = active === i
          return (
            <motion.div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              data-index={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className={[
                'group relative cursor-pointer overflow-hidden rounded-[28px] outline-none',
                'transition-[flex-grow,box-shadow,transform] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]',
                'sm:min-w-0',
                isActive
                  ? 'sm:flex-3 shadow-[0_30px_70px_-25px_rgb(var(--brand-med)/0.35)]'
                  : 'sm:flex-1 shadow-[0_18px_40px_-25px_rgb(var(--brand-med)/0.12)]',
              ].join(' ')}
              style={{ background: isActive ? activeBg : idleBg }}
            >
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
              <div className="pointer-events-none absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-white/15 blur-3xl" />

              {/* Collapsed state: rotated title */}
              <div
                className={[
                  'absolute inset-0 hidden items-center justify-center sm:flex',
                  'transition-opacity duration-300',
                  isActive ? 'pointer-events-none opacity-0' : 'opacity-100 delay-200',
                ].join(' ')}
              >
                <span
                  className="rotate-180 text-[15px] font-medium uppercase tracking-[0.35em] [writing-mode:vertical-rl]"
                  style={{ color: collapsedTextColor }}
                >
                  {h.title}
                </span>
              </div>

              {/* Expanded state: full content */}
              <div
                className={[
                  'relative z-10 flex h-full min-h-90 flex-col justify-between p-7 sm:p-9',
                  'transition-opacity duration-300',
                  isActive ? 'opacity-100 delay-200 sm:opacity-100' : 'sm:pointer-events-none sm:opacity-0',
                ].join(' ')}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/20">
                  <h.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <div className="mt-auto">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                    0{i + 1}
                  </p>
                  <h4 className="mb-3 text-[26px] font-light leading-tight text-white sm:text-[30px]">
                    {h.title}
                  </h4>
                  <p className="max-w-sm text-[14px] font-light leading-relaxed text-white/85">
                    {h.text}
                  </p>
                  <span className="mt-5 inline-block h-px w-12 bg-white/60" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}