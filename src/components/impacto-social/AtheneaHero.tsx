import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BRAND } from '../../lib/brand'
import { INTRO_SPLASH_EVENT, isIntroSplashDone } from '../../components/shared/PageTransition'
import bgSocial from "../../assets/responsabilidad/bg_social.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function AtheneaHero() {
  // Espera a que el splash blanco de entrada termine antes de animar: si no,
  // la animación corre y se asienta mientras el splash todavía la tapa.
  const [introReady, setIntroReady] = useState(isIntroSplashDone)

  useEffect(() => {
    if (introReady) return
    const handleDone = () => setIntroReady(true)
    window.addEventListener(INTRO_SPLASH_EVENT, handleDone)
    return () => window.removeEventListener(INTRO_SPLASH_EVENT, handleDone)
  }, [introReady])

  const heroAnimate = introReady ? 'visible' : 'hidden'

  return (
    <section className="relative flex h-screen min-h-screen flex-col overflow-hidden bg-slate-950">
      {/* Video de fondo */}
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={bgSocial} type="video/mp4" />
      </video>

      {/* Overlay mínimo: solo lo necesario para legibilidad en la base */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-slate-950/35" />

      {/* Bloque editorial inferior: kicker + titular + columna de lectura */}
      <div className="relative z-20 mx-auto mt-auto w-full max-w-[1400px] px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl lg:max-w-none">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={heroAnimate}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8" style={{ background: BRAND.base }} />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.35em]"
                style={{ color: BRAND.base }}
              >
                Proyecto Athenea Perú
              </span>
            </motion.div>

            <h1 className="text-[13vw] font-extralight leading-[0.98] tracking-tight text-white sm:text-[9vw] lg:text-[6.4vw]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 22, filter: 'blur(14px)' }}
                animate={
                  introReady
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 22, filter: 'blur(14px)' }
                }
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                El cáncer
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 22, filter: 'blur(14px)' }}
                animate={
                  introReady
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 22, filter: 'blur(14px)' }
                }
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                no espera.
              </motion.span>
            </h1>
          </div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="max-w-md border-l pl-6 lg:mb-2"
            style={{ borderColor: `${BRAND.base}55` }}
          >
            <p className="mb-4 text-2xl font-light leading-snug" style={{ color: BRAND.base }}>
              El acceso tampoco debería hacerlo.
            </p>
            <p className="text-base font-light leading-relaxed text-slate-300">
              En el Perú, miles de mujeres reciben un diagnóstico de cáncer de cuello uterino
              cuando la enfermedad ya está avanzada. Athenea trabaja para cerrar esa brecha de
              acceso a la detección oportuna.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
