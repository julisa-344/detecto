import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { queTratamos, dermaImages } from './data'

// Layout mosaic: definimos clases por índice (orden importa)
const MOSAIC_LAYOUT = [
  // 0: wide con foto
  {
    span: 'sm:col-span-3 sm:row-span-2',
    variant: 'photo',
    image: dermaImages.consultation,
  },
  // 1: square
  { span: 'sm:col-span-3', variant: 'card' },
  // 2: square
  { span: 'sm:col-span-3', variant: 'card' },
  // 3: tall con gradient
  { span: 'sm:col-span-2 sm:row-span-2', variant: 'gradient' },
  // 4: wide con foto
  {
    span: 'sm:col-span-4',
    variant: 'photo',
    image: dermaImages.laser,
  },
  // 5: square
  { span: 'sm:col-span-2', variant: 'card' },
]

function MosaicCard({ item, layout, index, total }) {
  const Icon = item.icon
  const num = String(index + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')

  // Variante con imagen de fondo
  if (layout.variant === 'photo') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative overflow-hidden rounded-4xl ${layout.span} min-h-60 cursor-pointer`}
      >
        <img
          src={layout.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/35 to-transparent" />

        <div className="relative h-full flex flex-col justify-between p-6 lg:p-7 text-white">
          <div className="flex items-start justify-between">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md border border-white/30">
              <Icon className="h-4.5 w-4.5" />
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-[0.22em] uppercase text-white/70">
              {num} / {totalLabel}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-light tracking-tight leading-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-[13px] font-light text-white/85 max-w-sm leading-relaxed">
              {item.desc}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.22em] uppercase opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Conoce más <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  // Variante gradient brand
  if (layout.variant === 'gradient') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative overflow-hidden rounded-4xl ${layout.span} bg-linear-to-br from-[rgb(var(--brand-dark))] via-[rgb(var(--brand-base))] to-[rgb(var(--brand-med))] text-white p-6 lg:p-7 min-h-60 cursor-pointer`}
      >
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
        />

        <div className="relative h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/25">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-[0.22em] uppercase text-white/70">
              {num} / {totalLabel}
            </span>
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-light tracking-tight leading-tight">
              {item.title}
            </h3>
            <p className="mt-3 text-[13px] font-light text-white/85 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </motion.article>
    )
  }

  // Variante card simple
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-4xl border border-slate-100 bg-white p-6 ${layout.span} transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)] cursor-pointer flex flex-col justify-between min-h-50`}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-med))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <span className="text-[10px] font-mono font-semibold tracking-[0.22em] uppercase text-slate-300">
          {num}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-[17px] font-medium text-[rgb(var(--brand-dark))] leading-snug">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[13px] font-light text-slate-500 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.article>
  )
}

export default function QueTratamos() {
  return (
    <section className="relative">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end mb-10">
        <div>
          <SectionEyebrow>Patologías</SectionEyebrow>
          <SectionTitle className="mb-4">
            ¿Qué{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              tratamos?
            </em>
          </SectionTitle>
          <p className="max-w-2xl text-[15px] font-light leading-7 text-slate-500">
            Atendemos un amplio rango de condiciones dermatológicas con
            protocolos personalizados y tecnología de vanguardia.
          </p>
        </div>

        <a
          href="#"
          className="hidden lg:inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand-dark))] hover:text-[rgb(var(--brand-base))] transition-colors"
        >
          Ver todas las áreas
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Mosaic asimétrico: 6 cols, varios tamaños */}
      <div className="grid grid-cols-1 sm:grid-cols-6 auto-rows-[180px] gap-4">
        {queTratamos.map((item, i) => (
          <MosaicCard
            key={item.title}
            item={item}
            layout={MOSAIC_LAYOUT[i]}
            index={i}
            total={queTratamos.length}
          />
        ))}
      </div>
    </section>
  )
}
