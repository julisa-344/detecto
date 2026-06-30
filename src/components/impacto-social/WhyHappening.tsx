import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { BRAND } from '../../lib/brand'
import ScrollRevealParagraph from './ScrollRevealParagraph'

import colcoscopioVideo from "../../assets/responsabilidad/colcoscopio.webm";
const STEPS = [
  '¿Por qué sigue ocurriendo? La prevención todavía no llega a todas. La cobertura de vacunación contra el VPH sigue siendo insuficiente, muchas mujeres no acceden a pruebas de detección a tiempo y los centros de salud no siempre cuentan con los equipos necesarios.',
  'En varios establecimientos públicos no hay colposcopios. En otros, un solo equipo debe atender a miles de mujeres. Sin acceso a una colposcopía, se limita la posibilidad de confirmar un diagnóstico a tiempo.',
]

/**
 * "¿Por qué sigue ocurriendo?": sección fija (sticky) durante el scroll,
 * con una barra de progreso superior y el texto pintándose palabra por
 * palabra según el usuario avanza — 2 "steps": el contexto general y el
 * obstáculo concreto (falta de colposcopios).
 */
export default function WhyHappening() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const step1Progress = useTransform(scrollYProgress, [0, 0.5], [0, 1], { clamp: true })
  const step2Progress = useTransform(scrollYProgress, [0.5, 1], [0, 1], { clamp: true })
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => setStep(v < 0.5 ? 0 : 1))

  return (
    <section ref={containerRef} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="flex-shrink-0 rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold tabular-nums text-slate-500">
              0{step + 1} / 02
            </span>
            <div className="h-px flex-1 bg-slate-100">
              <motion.div className="h-px" style={{ width: barWidth, background: BRAND.dark }} />
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-16">
            <div>
              <p
                className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em]"
                style={{ color: BRAND.med }}
              >
                El contexto
              </p>

              <div className="relative min-h-[16rem] lg:min-h-[14rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ScrollRevealParagraph
                      text={STEPS[step]}
                      progress={step === 0 ? step1Progress : step2Progress}
                      className="text-2xl font-light leading-snug tracking-tight sm:text-3xl lg:text-4xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="relative hidden justify-center self-end lg:flex">
              <video autoPlay loop muted playsInline className="relative z-10 w-full max-w-[460px]">
                <source src={colcoscopioVideo} type="video/webm" />
              </video>
              <div
                className="absolute bottom-2 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-full bg-slate-900/20 blur-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
