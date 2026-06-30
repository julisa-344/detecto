import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeUp } from '../../lib/animations'
import { BRAND } from '../../lib/brand'
import SectionEyebrow from '../../components/shared/SectionEyebrow'
import SectionTitle from '../../components/shared/SectionTitle'
import StatSlide from './StatSlide'
import { CHALLENGE_STATS } from './data'

const SCROLL_SPEED = 48
const FOCUS_SCROLL_DURATION = 720
const FOCUS_HOLD_MS = 900

export default function ChallengeStats() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const pointerInsideRef = useRef(false)
  const resumeTimerRef = useRef<number | null>(null)
  const manualScrollRafRef = useRef<number | null>(null)
  const isManualFocusRef = useRef(false)

  const [focusedCard, setFocusedCard] = useState<number | null>(null)

  const getCards = () =>
    Array.from(
      trackRef.current?.querySelectorAll<HTMLElement>('[data-stat-card]') ?? [],
    )

  // Ancho de un set completo de estadísticas.
  const getLoopWidth = () => {
    const cards = getCards()
    const firstCard = cards[0]
    const secondSetFirstCard = cards[CHALLENGE_STATS.length]

    if (!firstCard || !secondSetFirstCard) return 0

    return secondSetFirstCard.offsetLeft - firstCard.offsetLeft
  }

  const getCenteredCard = () => {
    const track = trackRef.current
    const cards = getCards()

    if (!track || cards.length === 0) return null

    const viewportCenter = track.scrollLeft + track.clientWidth / 2

    let closestCard = cards[0]
    let closestIndex = 0
    let closestDistance = Infinity

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - viewportCenter)

      if (distance < closestDistance) {
        closestCard = card
        closestIndex = index
        closestDistance = distance
      }
    })

    return {
      card: closestCard,
      physicalIndex: closestIndex,
    }
  }

  const easeOutCubic = (progress: number) =>
    1 - Math.pow(1 - progress, 3)

  const animateScrollTo = (targetLeft: number) =>
    new Promise<void>((resolve) => {
      const track = trackRef.current

      if (!track) {
        resolve()
        return
      }

      if (manualScrollRafRef.current !== null) {
        cancelAnimationFrame(manualScrollRafRef.current)
      }

      const startLeft = track.scrollLeft
      const distance = targetLeft - startLeft
      const startTime = performance.now()

      const animate = (time: number) => {
        const elapsed = time - startTime
        const progress = Math.min(elapsed / FOCUS_SCROLL_DURATION, 1)
        const easedProgress = easeOutCubic(progress)

        track.scrollLeft = startLeft + distance * easedProgress

        if (progress < 1) {
          manualScrollRafRef.current = requestAnimationFrame(animate)
          return
        }

        manualScrollRafRef.current = null
        resolve()
      }

      manualScrollRafRef.current = requestAnimationFrame(animate)
    })

  const focusCard = async (direction: 1 | -1) => {
    if (isManualFocusRef.current) return

    const track = trackRef.current
    const current = getCenteredCard()
    const cards = getCards()

    if (!track || !current || cards.length === 0) return

    const targetIndex = current.physicalIndex + direction
    const targetCard = cards[targetIndex]

    if (!targetCard) return

    isManualFocusRef.current = true
    pausedRef.current = true

    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current)
    }

    setFocusedCard(targetIndex)

    const targetLeft =
      targetCard.offsetLeft - (track.clientWidth - targetCard.offsetWidth) / 2

    await animateScrollTo(Math.max(0, targetLeft))

    resumeTimerRef.current = window.setTimeout(() => {
      setFocusedCard(null)
      isManualFocusRef.current = false
      resumeTimerRef.current = null

      if (!pointerInsideRef.current) {
        pausedRef.current = false
      }
    }, FOCUS_HOLD_MS)
  }

  const pause = () => {
    pointerInsideRef.current = true
    pausedRef.current = true
  }

  const resume = () => {
    pointerInsideRef.current = false

    if (!isManualFocusRef.current) {
      pausedRef.current = false
    }
  }

  useEffect(() => {
    const initialPositionFrame = requestAnimationFrame(() => {
      const track = trackRef.current
      const loopWidth = getLoopWidth()

      // Inicia en el set central para que anterior y siguiente tengan espacio.
      if (track && loopWidth > 0) {
        track.scrollLeft = loopWidth
      }
    })

    return () => cancelAnimationFrame(initialPositionFrame)
  }, [])

  useEffect(() => {
    let rafId: number
    let lastTime: number | null = null

    const tick = (time: number) => {
      const track = trackRef.current

      if (track && !pausedRef.current && lastTime !== null) {
        const dt = Math.min(time - lastTime, 100) / 1000
        track.scrollLeft += SCROLL_SPEED * dt

        const loopWidth = getLoopWidth()

        // Mantiene el carrusel dentro del set central sin que se note el reinicio.
        if (loopWidth > 0 && track.scrollLeft >= loopWidth * 2) {
          track.scrollLeft -= loopWidth
        }
      }

      lastTime = time
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)

      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current)
      }

      if (manualScrollRafRef.current !== null) {
        cancelAnimationFrame(manualScrollRafRef.current)
      }
    }
  }, [])

  const statsLoop = [
    ...CHALLENGE_STATS,
    ...CHALLENGE_STATS,
    ...CHALLENGE_STATS,
  ]

  return (
    <section className="flex h-screen flex-col overflow-hidden pt-24 pb-10 lg:pt-32 lg:pb-14">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionEyebrow color={BRAND.med}>El reto</SectionEyebrow>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle color={BRAND.dark} className="mb-5">
                El reto no puede esperar.
              </SectionTitle>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-xl text-base font-light leading-7 text-slate-500"
            >
              En el Perú, miles de mujeres reciben un diagnóstico de cáncer de
              cuello uterino cuando la enfermedad ya está avanzada.
            </motion.p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Mostrar tarjeta anterior"
              onClick={() => focusCard(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-800"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="Mostrar siguiente tarjeta"
              onClick={() => focusCard(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-800"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 min-h-0 w-full max-w-[1400px] flex-1 overflow-hidden px-6 sm:px-8 lg:mt-10 lg:px-10">
        <div
          ref={trackRef}
          onPointerEnter={pause}
          onPointerLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
          className="flex h-full gap-6 overflow-x-auto overflow-y-hidden pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
{statsLoop.map((stat, i) => {
  const isFocused = focusedCard === i
  const hasFocusedCard = focusedCard !== null

  return (
    <motion.div
      key={`${stat.title}-${i}`}
      data-stat-card
      className="shrink-0 py-2"
      animate={{
        scale: isFocused ? 1.025 : hasFocusedCard ? 0.975 : 1,
        opacity: isFocused ? 1 : hasFocusedCard ? 0.58 : 1,
        filter: isFocused
          ? 'grayscale(0%) brightness(1)'
          : hasFocusedCard
            ? 'grayscale(82%) brightness(0.72)'
            : 'grayscale(0%) brightness(1)',
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformOrigin: 'center center',
        zIndex: isFocused ? 10 : 1,
      }}
    >
      <StatSlide
        stat={stat}
        index={i % CHALLENGE_STATS.length}
      />
    </motion.div>
  )
})}
        </div>
      </div>
    </section>
  )
}
