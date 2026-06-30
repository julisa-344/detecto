import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeUp } from '../../lib/animations'
import { BRAND } from '../../lib/brand'
import SectionEyebrow from '../../components/shared/SectionEyebrow'
import SectionTitle from '../../components/shared/SectionTitle'
import { ATHENEA_STEPS } from './data'

const AUTO_ADVANCE_INTERVAL = 4000
const CARD_HEIGHT = 370
const CARD_GAP = 18

function getImageSrc(image: unknown): string | undefined {
  if (typeof image === 'string') return image

  if (
    image &&
    typeof image === 'object' &&
    'src' in image &&
    typeof (image as { src?: unknown }).src === 'string'
  ) {
    return (image as { src: string }).src
  }

  return undefined
}

export default function OrbitalSteps() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const elapsedRef = useRef(0)
  const total = ATHENEA_STEPS.length

  const resetProgress = () => {
    elapsedRef.current = 0
    setProgress(0)
  }

  const selectStep = (index: number) => {
    resetProgress()
    setActive(index)
  }

  const go = (direction: 1 | -1) => {
    resetProgress()

    setActive((current) => {
      return (current + direction + total) % total
    })
  }

  useEffect(() => {
    if (total <= 1) return

    let frameId = 0
    let previousTime = performance.now()

    const tick = (currentTime: number) => {
      const delta = currentTime - previousTime
      previousTime = currentTime

      if (!paused) {
        const nextElapsed = elapsedRef.current + delta

        if (nextElapsed >= AUTO_ADVANCE_INTERVAL) {
          elapsedRef.current = 0
          setProgress(0)
          setActive((current) => (current + 1) % total)
        } else {
          elapsedRef.current = nextElapsed
          setProgress((nextElapsed / AUTO_ADVANCE_INTERVAL) * 100)
        }
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [paused, total])

  const railOffset = active * (CARD_HEIGHT + CARD_GAP)

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div
        className="overflow-hidden rounded-[32px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        style={{
          background: `linear-gradient(135deg, ${BRAND.dark} 0%, ${BRAND.base} 100%)`,
        }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
          {/* Columna izquierda */}
          <div className="max-w-xl">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionEyebrow color="rgba(255,255,255,0.8)">
                Cómo actuamos
              </SectionEyebrow>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle light className="mb-4 max-w-md">
                Así actúa Proyecto Athenea Perú.
              </SectionTitle>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-7 max-w-md text-sm font-light leading-relaxed text-white sm:text-base"
            >
              Prevenimos, intervenimos y generamos evidencia para proteger la
              salud de más mujeres.
            </motion.p>

            {/* Progress bar */}
            <div className="mb-8 h-[3px] w-full max-w-[280px] overflow-hidden rounded-full bg-white/25">
              <motion.div
                className="h-full rounded-full bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.08, ease: 'linear' }}
              />
            </div>

            {/* Flechas */}
            <div className="mb-9 flex items-center gap-3">
              <button
                type="button"
                aria-label="Paso anterior"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Siguiente paso"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <span className="ml-2 text-xs font-medium tracking-[0.16em] text-white/75">
                {String(active + 1).padStart(2, '0')} /{' '}
                {String(total).padStart(2, '0')}
              </span>
            </div>

            {/* Lista de pasos */}
            <div className="space-y-4">
              {ATHENEA_STEPS.map((step, index) => {
                const isActive = index === active

                return (
                  <button
                    key={step.title}
                    type="button"
                    aria-current={isActive ? 'step' : undefined}
                    onClick={() => selectStep(index)}
                    className="group flex w-full items-center gap-4 text-left"
                  >
                    <span
                      className="text-xs font-medium tracking-[0.16em]"
                      style={{
                        color: isActive
                          ? '#FFFFFF'
                          : 'rgba(255,255,255,0.52)',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      className="text-sm font-medium transition-colors sm:text-base"
                      style={{
                        color: isActive
                          ? '#FFFFFF'
                          : 'rgba(255,255,255,0.72)',
                      }}
                    >
                      {step.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Columna derecha / rail de cards */}
          <div
            className="relative"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <div className="relative h-[390px] overflow-hidden sm:h-[430px] lg:h-[500px]">
              <motion.div
                className="flex flex-col"
                animate={{ y: -railOffset }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  gap: CARD_GAP,
                  paddingTop: 18,
                  paddingBottom: 110,
                }}
              >
                {ATHENEA_STEPS.map((step, index) => {
                  const isActive = index === active
                  const imageSrc = getImageSrc(step.image)

                  return (
                    <motion.button
                      key={step.title}
                      type="button"
                      aria-label={`Ver paso ${index + 1}: ${step.title}`}
                      onClick={() => selectStep(index)}
                      className="group relative w-full overflow-hidden rounded-[28px] border border-white/15 bg-slate-900 text-left"
                      style={{
                        height: CARD_HEIGHT,
                        boxShadow: 'none',
                      }}
                      animate={{
                        scale: isActive ? 1 : 0.96,
                        opacity: isActive ? 1 : 0.46,
                      }}
                      transition={{ duration: 0.45 }}
                    >
                      {/* Imagen full width */}
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={step.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${BRAND.base}, ${BRAND.dark})`,
                          }}
                        />
                      )}

                      {/* Oscurece únicamente la base de la imagen */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      {/* Número de paso */}
                      <span className="absolute left-6 top-6 z-10 inline-flex rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-white backdrop-blur-md">
                        PASO {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Título */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                        <h3 className="max-w-md text-2xl font-medium leading-tight text-white sm:text-3xl">
                          {step.title}
                        </h3>
                      </div>
                    </motion.button>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}