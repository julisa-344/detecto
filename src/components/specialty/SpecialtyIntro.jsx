import { motion } from 'framer-motion'
import { AlertCircle, Activity, Heart, Microscope, Sparkles } from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'

const DEFAULT_ICONS = [AlertCircle, Activity, Heart, Microscope, Sparkles]

export default function SpecialtyIntro({
  eyebrow = 'Especialidad',
  titlePre,
  titleAccent,
  paragraph,
  listLabel = 'Señales para consultar',
  items = [],
  sideImage,
  sideAlt = '',
  icons = DEFAULT_ICONS,
  reverse = false,
}) {
  return (
    <section className="relative lg:pb-20">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <SectionTitle className="mb-4">
            {titlePre}{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              {titleAccent}
            </em>
          </SectionTitle>
          {paragraph && (
            <p className="max-w-2xl text-[15px] font-light leading-7 text-slate-500">
              {paragraph}
            </p>
          )}
        </div>
      </div>

      <SintomasBlock
        items={items}
        listLabel={listLabel}
        sideImage={sideImage}
        sideAlt={sideAlt}
        icons={icons}
        reverse={reverse}
      />
    </section>
  )
}

function SintomasBlock({ items, listLabel, sideImage, sideAlt, icons, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Imagen — 80% del ancho */}
      <div
        className={`relative aspect-4/3 w-full overflow-hidden rounded-4xl shadow-[0_25px_55px_-25px_rgb(0,112,165,0.35)] lg:aspect-auto lg:h-150 lg:w-[80%] ${
          reverse ? 'lg:ml-auto' : ''
        }`}
      >
        <img
          src={sideImage}
          alt={sideAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Card glass con bullets — overlap */}
      <div
        className={`relative z-10 -mt-16 mx-4 sm:mx-8 lg:absolute lg:-bottom-16 lg:mt-0 lg:w-[60%] lg:max-w-xl lg:mx-0 ${
          reverse ? 'lg:left-0' : 'lg:right-0'
        }`}
      >
        <div className="relative overflow-hidden rounded-4xl bg-white/65 p-6 shadow-[0_30px_60px_-25px_rgb(0,112,165,0.28)] ring-1 ring-white/60 backdrop-blur-2xl lg:p-8">
        <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[rgb(var(--brand-base)/0.18)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[rgb(var(--brand-med)/0.12)] blur-3xl" />
        <p className="relative mb-4 px-2 text-[16px] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--brand-dark))]">
          {listLabel}
        </p>
        <ul className="relative space-y-1.5">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-2xl py-2 text-slate-700"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-xl text-[rgb(var(--brand-dark))]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[14px] font-medium leading-tight text-[rgb(var(--brand-dark))]">
                    {item.title}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    </motion.div>
  )
}
