import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import splashVideo from '../../assets/detectosplash.mp4'

export default function SplashV3({ onComplete }) {
  const [phase, setPhase]       = useState('loading')
  const [ready, setReady]       = useState(false)
  const videoRef                = useRef(null)
  const timersRef               = useRef([])

  // Arranca el timeline solo cuando el video está listo
  const startTimeline = () => {
    if (ready) return          // ya arrancó
    setReady(true)
    setPhase('scan')

    const t1 = setTimeout(() => setPhase('shimmer'), 1100)
    const t2 = setTimeout(() => setPhase('zoomout'), 2200)
    const t3 = setTimeout(() => onComplete?.(),      2800)
    timersRef.current = [t1, t2, t3]
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Si el navegador ya tiene datos suficientes, arranca de inmediato
    if (video.readyState >= 3) {
      startTimeline()
      return
    }

    video.addEventListener('canplay', startTimeline, { once: true })

    // Fallback: si no carga en 800ms, arrancar igual
    const fallback = setTimeout(startTimeline, 800)

    return () => {
      video.removeEventListener('canplay', startTimeline)
      clearTimeout(fallback)
      timersRef.current.forEach(clearTimeout)
    }
  }, [])                       // eslint-disable-line react-hooks/exhaustive-deps

  const isExiting = phase === 'zoomout'

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#fff' }}
      animate={isExiting ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={isExiting ? { duration: 0.6, ease: [0.2, 0, 0.4, 1] } : { duration: 0 }}
    >
      <div className="flex flex-col items-center z-30">

        {/* Video — se monta inmediatamente para que empiece a cargar */}
        <motion.div
          className="relative w-64 h-64 overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: ready ? 1 : 0, scale: ready ? 1 : 0.9 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover bg-white"
          >
            <source src={splashVideo} type="video/mp4" />
          </video>

          {/* Shimmer */}
          {phase === 'shimmer' && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%)',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          )}
        </motion.div>

        {/* Texto */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-medium text-primary">Detecta Clínica</h2>
        </motion.div>
      </div>
    </motion.div>
  )
}
