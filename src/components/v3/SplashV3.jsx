import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logoDark from '../../assets/detecto.png'

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
      // CAMBIO 1: flex-col para apilar verticalmente
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#ffffff' }}
      animate={isExiting ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={isExiting ? { duration: 0.6, ease: [0.2, 0, 0.4, 1] } : { duration: 0 }}
    >
      {/* Sombra suave que deja la línea al pasar */}
      <motion.div
        className="absolute left-0 right-0 top-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(1,153,198,0.04) 0%, transparent 100%)',
        }}
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.85, ease: 'linear', delay: 0.2 }}
      />

      {/* Contenedor que agrupa logo y texto para que se muevan juntos */}
      <div className="flex flex-col items-center z-30">
        {/* Logo */}
        <div className="relative overflow-hidden">
          <motion.img
            src={logoDark}
            alt="Detecto"
            className="h-64 w-auto object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />

          {/* Shimmer Effect */}
          {phase === 'shimmer' && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          )}
        </div>

        {/* Texto "Detecta Clínica" - Ahora sigue al logo naturalmente */}
        <motion.div
          className="mt-6" // Espacio entre logo y texto
          initial={{ opacity: 0, y: 10 }} // Animación más suave
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-medium text-primary">Detecta Clínica</h2>
        </motion.div>
      </div>

    </motion.div>
  )
}