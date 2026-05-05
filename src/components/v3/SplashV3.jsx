import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import splashVideo from '../../assets/detectosplash.mp4'

export default function SplashV3({ onComplete }) {
  const [phase, setPhase] = useState('scan')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('shimmer'), 1100)
    const t2 = setTimeout(() => setPhase('zoomout'), 2200)
    const t3 = setTimeout(() => onComplete?.(), 2800)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [onComplete])

  const isExiting = phase === 'zoomout'

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#fff' }}
      animate={isExiting ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={isExiting ? { duration: 0.6, ease: [0.2, 0, 0.4, 1] } : { duration: 0 }}
    >


      <div className="flex flex-col items-center z-30">
        {/* Contenedor del video con overflow-hidden */}
        <div className="relative w-64 h-64 overflow-hidden rounded-xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            // CAMBIO: object-cover llena todo el contenedor y evita bandas negras
            className="w-full h-full object-cover bg-white"
          >
            <source src={splashVideo} type="video/mp4" />
          </video>

          {/* Shimmer Effect */}
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
        </div>

        {/* Texto */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.50 }}
        >
          <h2 className="text-2xl font-medium text-primary">Detecta Clínica</h2>
        </motion.div>
      </div>
    </motion.div>
  )
}