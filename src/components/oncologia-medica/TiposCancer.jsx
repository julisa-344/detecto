import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { CardClipDef, CARD_CLIP_ID } from '../staff-medico'
import { tiposCancer, oncoImages } from './data'

const CLIP_STYLE = {
  clipPath: `url(#${CARD_CLIP_ID})`,
  WebkitClipPath: `url(#${CARD_CLIP_ID})`,
}

const SLIDE_IMAGES = [
  oncoImages.procedure,
  oncoImages.consultation,
  oncoImages.research,
  oncoImages.care,
  oncoImages.hero,
]

const AUTOPLAY_MS = 5000

function TopCard({ item, index }) {
  const Icon = item.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative aspect-616/868 w-full">
        <div
          className="absolute inset-0 overflow-hidden bg-white transition-colors duration-500 group-hover:bg-[rgb(var(--brand-base))]"
          style={CLIP_STYLE}
        >
          <div className="relative flex h-full w-full flex-col justify-between p-7 lg:p-8">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-med))] transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300 transition-colors duration-500 group-hover:text-white/70">
                {num}
              </span>
            </div>

            <div className="pr-[18%]">
              <h3 className="text-2xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] transition-colors duration-500 group-hover:text-white lg:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/85">
                {item.desc}
              </p>
            </div>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-[2%] right-[2%] flex h-[11%] w-[16%] items-center justify-center rounded-full bg-[rgb(var(--brand-base))] transition-all duration-500 group-hover:scale-105 group-hover:bg-white"
        />
      </div>
    </motion.article>
  )
}

export default function TiposCancer() {
  const topItems = tiposCancer.slice(0, 3)
  const slideItems = tiposCancer.slice(3)
  const total = slideItems.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || total <= 1) return
    const id = setInterval(() => setActive((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, total])

  if (total === 0) return null

  const current = slideItems[active]
  const Icon = current.icon

  return (
    <section className="relative -mx-6 rounded-4xl bg-(--brand-bg-ultra) px-6 py-16 lg:-mx-12 lg:px-12 lg:py-20">
      <CardClipDef />

      <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionEyebrow>Tratamientos</SectionEyebrow>
          <SectionTitle className="mb-4">
            Tipos de cáncer{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              que tratamos
            </em>
          </SectionTitle>
          <p className="max-w-2xl text-[15px] font-light leading-7 text-slate-500">
            Abordamos un amplio espectro de patologías oncológicas con
            protocolos actualizados y equipos multidisciplinarios.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topItems.map((item, i) => (
          <TopCard key={item.title} item={item} index={i} />
        ))}
      </div>

      <div
        className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-slate-100 lg:aspect-auto lg:min-h-105">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={SLIDE_IMAGES[active % SLIDE_IMAGES.length]}
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </AnimatePresence>
        </div>

        <div className="relative flex min-h-80 flex-col justify-between rounded-4xl bg-white p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-(--brand-bg-ultra) px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))]">
                <Icon className="h-3.5 w-3.5 text-[rgb(var(--brand-base))]" />
                Tratamientos
              </span>

              <h3 className="mt-6 text-3xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-4xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-slate-600">
                {current.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between gap-6">
            <div className="flex flex-1 items-center gap-2">
              {slideItems.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ver tratamiento ${i + 1}`}
                  className={`relative h-1.5 cursor-pointer overflow-hidden rounded-full transition-all ${
                    i === active ? 'flex-1 bg-slate-200' : 'w-6 bg-slate-200 hover:bg-slate-300'
                  }`}
                >
                  {i === active && (
                    <span
                      key={`${active}-${paused ? 'p' : 'r'}`}
                      className="absolute inset-y-0 left-0 block bg-[rgb(var(--brand-base))]"
                      style={{
                        animation: `tiposCancerProgress ${AUTOPLAY_MS}ms linear forwards`,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActive((i) => (i + 1) % total)}
              aria-label="Siguiente tratamiento"
              className="group/next flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[rgb(var(--brand-base)/0.4)] bg-(--brand-bg-ultra) text-[rgb(var(--brand-dark))] transition-all hover:border-[rgb(var(--brand-base))] hover:bg-[rgb(var(--brand-base))] hover:text-white"
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover/next:translate-x-0.5" />
            </button>
          </div>

          <style>{`@keyframes tiposCancerProgress { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>
        </div>
      </div>
    </section>
  )
}
