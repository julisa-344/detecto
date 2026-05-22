import { motion, useInView } from 'framer-motion'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

const NAVE_URL = `${import.meta.env.VITE_BASE_IMAGE_URL}detectos/nave.png`

const RevealCtx = createContext({ revealed: false, phase: 'idle' })

export function useRocketReveal() {
  return useContext(RevealCtx)
}

// shape: 0 → silueta ancha (5 lóbulos), 1 → media (4 lóbulos), 2 → compacta (3 lóbulos)
const PUFFS = [
  { w: 520, h: 280, x: -6,  y: 82, driftX: -22, driftY: -30, delay: 0.00, tint: 'white', shape: 0, z: 2 },
  { w: 420, h: 240, x: 12,  y: 92, driftX: -16, driftY: -22, delay: 0.05, tint: 'cyan',  shape: 1, z: 1 },
  { w: 360, h: 220, x: 24,  y: 74, driftX: -12, driftY: -36, delay: 0.10, tint: 'white', shape: 2, z: 3 },
  { w: 460, h: 260, x: 40,  y: 86, driftX:  -6, driftY: -28, delay: 0.00, tint: 'white', shape: 0, z: 2 },
  { w: 460, h: 260, x: 60,  y: 86, driftX:   6, driftY: -28, delay: 0.00, tint: 'white', shape: 0, z: 2 },
  { w: 360, h: 220, x: 76,  y: 74, driftX:  12, driftY: -36, delay: 0.10, tint: 'white', shape: 2, z: 3 },
  { w: 420, h: 240, x: 88,  y: 92, driftX:  16, driftY: -22, delay: 0.05, tint: 'cyan',  shape: 1, z: 1 },
  { w: 520, h: 280, x: 106, y: 82, driftX:  22, driftY: -30, delay: 0.00, tint: 'white', shape: 0, z: 2 },
  { w: 280, h: 170, x: 32,  y: 58, driftX:  -8, driftY: -42, delay: 0.20, tint: 'cyan',  shape: 2, z: 1 },
  { w: 280, h: 170, x: 68,  y: 58, driftX:   8, driftY: -42, delay: 0.20, tint: 'cyan',  shape: 2, z: 1 },
]

const CLOUD_PATHS = [
  // 0: silueta ancha — 5 lóbulos sobre una base elipsoidal
  'M 30 95 Q 30 60 60 58 Q 70 30 105 32 Q 130 18 158 38 Q 195 35 200 65 Q 235 65 235 95 Q 235 115 215 118 L 50 118 Q 30 118 30 95 Z',
  // 1: silueta media — 4 lóbulos
  'M 35 95 Q 35 62 65 60 Q 80 32 115 38 Q 150 28 175 55 Q 210 60 210 92 Q 210 115 190 118 L 55 118 Q 35 118 35 95 Z',
  // 2: silueta compacta — 3 lóbulos
  'M 45 95 Q 45 65 75 62 Q 95 38 130 50 Q 170 50 175 88 Q 195 92 195 110 Q 195 118 180 118 L 60 118 Q 45 118 45 110 Z',
]

function CloudShape({ tint, shape }) {
  const fill = tint === 'cyan' ? '#E5F3FE' : '#FFFFFF'
  const fillSoft = tint === 'cyan' ? '#D0E8FA' : '#EAF4FC'
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: 'visible' }}
    >
      {/* Sombra sutil debajo */}
      <ellipse cx="120" cy="118" rx="100" ry="6" fill="rgba(120,170,210,0.18)" />
      {/* Cuerpo de la nube */}
      <path d={CLOUD_PATHS[shape]} fill={fill} />
      {/* Acento inferior tenue */}
      <path d={CLOUD_PATHS[shape]} fill={fillSoft} transform="translate(0, 4)" opacity="0.55" style={{ mixBlendMode: 'multiply' }} />
    </svg>
  )
}

function SmokePuff({ w, h, x, y, driftX, driftY, delay, tint, shape, z, phase }) {
  const variants = {
    idle:   { left: `${x}%`, top: `${y}%`, scale: 0.92, opacity: 0 },
    hover:  { left: `${x}%`, top: `${y}%`, scale: 1,    opacity: 1 },
    launch: { left: `${x + driftX * 0.5}%`, top: `${y + driftY * 0.5}%`, scale: 1.18, opacity: 0.95 },
    reveal: { left: `${x + driftX}%`,       top: `${y + driftY}%`,       scale: 1.5,  opacity: 0.35 },
    done:   { left: `${x + driftX}%`,       top: `${y + driftY}%`,       scale: 1.75, opacity: 0 },
  }

  const dur =
    phase === 'launch' ? 1.3 :
    phase === 'reveal' ? 1.6 :
    phase === 'hover'  ? 0.9 :
    phase === 'done'   ? 0.8 : 0.5

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        width: w,
        height: h,
        zIndex: z,
        filter: 'drop-shadow(0 6px 18px rgba(120,170,210,0.18)) blur(0.6px)',
      }}
      initial="idle"
      animate={phase}
      variants={variants}
      transition={{ duration: dur, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <CloudShape tint={tint} shape={shape} />
    </motion.div>
  )
}

function BaseFog({ phase }) {
  const visible = phase === 'hover' || phase === 'launch' || phase === 'idle'
  return (
    <motion.div
      className="absolute inset-x-0 bottom-0"
      style={{
        height: '85%',
        background:
          'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.75) 35%, rgba(240,249,255,0.35) 65%, rgba(240,249,255,0) 100%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: phase === 'reveal' ? 1.4 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}

function Rocket({ phase }) {
  const variants = {
    idle:   { y: '180%', opacity: 0, scale: 0.9 },
    hover:  { y: '0%',   opacity: 1, scale: 1 },
    launch: { y: '-260%', opacity: 1, scale: 1 },
    reveal: { y: '-460%', opacity: 0, scale: 0.95 },
    done:   { y: '-520%', opacity: 0, scale: 0.9 },
  }

  const transitions = {
    idle:   { duration: 0.5 },
    hover:  { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    launch: { duration: 1.0, ease: [0.55, 0.05, 0.55, 1] },
    reveal: { duration: 1.1, ease: 'easeOut' },
    done:   { duration: 0.4 },
  }

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44"
        initial="idle"
        animate={phase}
        variants={variants}
        transition={transitions[phase] || { duration: 0.5 }}
      >
        <motion.div
          className="w-full h-full"
          animate={
            phase === 'hover'
              ? { y: [-4, 4, -4], rotate: [-1.2, 1.2, -1.2] }
              : { y: 0, rotate: 0 }
          }
          transition={
            phase === 'hover'
              ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.3 }
          }
        >
          <img
            src={NAVE_URL}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="w-full h-full object-contain drop-shadow-[0_10px_28px_rgba(0,153,198,0.28)] select-none"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function RocketTrail({ phase }) {
  const active = phase === 'launch' || phase === 'reveal'
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2"
      style={{
        width: 70,
        height: 360,
        transform: 'translate(-50%, 0)',
        background:
          'linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 35%, rgba(225,243,255,0.5) 70%, rgba(225,243,255,0) 100%)',
        filter: 'blur(16px)',
        borderRadius: '50%',
      }}
      initial={{ opacity: 0, scaleY: 0.25 }}
      animate={{
        opacity: active ? (phase === 'reveal' ? 0.4 : 0.85) : 0,
        scaleY: active ? 1 : 0.25,
      }}
      transition={{ duration: phase === 'reveal' ? 1.2 : 0.5, ease: 'easeOut' }}
    />
  )
}

function ResidualSmoke() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
      style={{ height: '22%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(225,243,255,0.45) 0%, rgba(225,243,255,0.15) 50%, rgba(225,243,255,0) 100%)',
          filter: 'blur(10px)',
        }}
      />
    </motion.div>
  )
}

export default function RocketReveal({
  children,
  className = '',
  // Tweakable timings (ms desde que el componente entra al viewport)
  hoverAt  = 200,
  launchAt = 1500,
  revealAt = 2300,
  doneAt   = 4400,
  // Cuánto del bloque debe estar en pantalla para disparar
  amount   = 0.2,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount })
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    if (!inView) return
    const timers = [
      setTimeout(() => setPhase('hover'),  hoverAt),
      setTimeout(() => setPhase('launch'), launchAt),
      setTimeout(() => setPhase('reveal'), revealAt),
      setTimeout(() => setPhase('done'),   doneAt),
    ]
    return () => timers.forEach(clearTimeout)
  }, [inView, hoverAt, launchAt, revealAt, doneAt])

  const revealed = phase === 'reveal' || phase === 'done'
  const animating = phase !== 'idle' && phase !== 'done'

  return (
    <RevealCtx.Provider value={{ revealed, phase }}>
      <div ref={ref} className={`relative ${className}`}>
        <div className="relative z-0">{children}</div>

        {animating && (
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            <BaseFog phase={phase} />
            {PUFFS.map((puff, i) => (
              <SmokePuff key={i} {...puff} phase={phase} />
            ))}
            <RocketTrail phase={phase} />
            <Rocket phase={phase} />
          </div>
        )}

        {phase === 'done' && <ResidualSmoke />}
      </div>
    </RevealCtx.Provider>
  )
}

RocketReveal.Item = function RocketRevealItem({
  children,
  delay = 0,
  y = 22,
  className = '',
}) {
  const { revealed } = useRocketReveal()
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : y }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: revealed ? delay : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
