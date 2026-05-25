import { motion, useInView } from 'framer-motion'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

const NAVE_URL = `${import.meta.env.VITE_BASE_IMAGE_URL}detectos/nave.png`

const RevealCtx = createContext({ revealed: false, phase: 'idle' })

export function useRocketReveal() {
  return useContext(RevealCtx)
}

// shape: 0 → silueta ancha, 1 → media, 2 → compacta
// Distribuido para llenar mejor un viewport 100vw × 100vh
const PUFFS = [
  // Base de despegue — pocas pero gigantes
  { w: 1200, h: 640, x:  5, y: 92, driftX: -28, driftY: -36, delay: 0.00, tint: 'white', shape: 0, z: 2 },
  { w: 1080, h: 580, x: 30, y: 96, driftX: -10, driftY: -30, delay: 0.06, tint: 'cyan',  shape: 1, z: 1 },
  { w: 1100, h: 600, x: 50, y: 92, driftX:   0, driftY: -34, delay: 0.02, tint: 'white', shape: 0, z: 2 },
  { w: 1080, h: 580, x: 70, y: 96, driftX:  10, driftY: -30, delay: 0.06, tint: 'cyan',  shape: 1, z: 1 },
  { w: 1200, h: 640, x: 95, y: 92, driftX:  28, driftY: -36, delay: 0.00, tint: 'white', shape: 0, z: 2 },

  // Capa intermedia — un par a los costados
  { w:  820, h: 480, x: 18, y: 68, driftX: -18, driftY: -56, delay: 0.22, tint: 'white', shape: 2, z: 1 },
  { w:  820, h: 480, x: 82, y: 68, driftX:  18, driftY: -56, delay: 0.22, tint: 'white', shape: 2, z: 1 },
]

const CLOUD_PATHS = [
  'M 30 95 Q 30 60 60 58 Q 70 30 105 32 Q 130 18 158 38 Q 195 35 200 65 Q 235 65 235 95 Q 235 115 215 118 L 50 118 Q 30 118 30 95 Z',
  'M 35 95 Q 35 62 65 60 Q 80 32 115 38 Q 150 28 175 55 Q 210 60 210 92 Q 210 115 190 118 L 55 118 Q 35 118 35 95 Z',
  'M 45 95 Q 45 65 75 62 Q 95 38 130 50 Q 170 50 175 88 Q 195 92 195 110 Q 195 118 180 118 L 60 118 Q 45 118 45 110 Z',
]

function CloudShape({ tint, shape }) {
  const fill = tint === 'cyan' ? '#C8DEF0' : '#EFF6FC'
  return (
    <svg
      viewBox="0 0 240 120"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: 'visible' }}
    >
      <path d={CLOUD_PATHS[shape]} fill={fill} />
    </svg>
  )
}

function SmokePuff({ w, h, x, y, driftX, driftY, delay, tint, shape, z, phase, seed = 0 }) {
  // Pequeñas variaciones por puff para que el grupo no se sienta sincronizado
  const wobble = (seed % 5) - 2 // -2..2
  const rot = (seed % 7) - 3    // -3..3 grados
  const scaleNoise = 1 + ((seed % 11) - 5) / 200 // ±2.5%

  const variants = {
    idle:   { left: `${x}%`, top: `${y}%`, scale: 0.9 * scaleNoise, opacity: 0, rotate: rot * 0.5 },
    hover:  { left: `${x}%`, top: `${y}%`, scale: 1 * scaleNoise,   opacity: 1, rotate: rot },
    launch: {
      left: `${x + driftX * 0.5 + wobble}%`,
      top:  `${y + driftY * 0.5}%`,
      scale: 1.25 * scaleNoise,
      opacity: 0.95,
      rotate: rot * 1.4,
    },
    reveal: {
      left: `${x + driftX + wobble * 1.5}%`,
      top:  `${y + driftY}%`,
      scale: 1.7 * scaleNoise,
      opacity: 0.12,
      rotate: rot * 2,
    },
    done: {
      left: `${x + driftX + wobble * 2}%`,
      top:  `${y + driftY - 6}%`,
      scale: 2.0 * scaleNoise,
      opacity: 0,
      rotate: rot * 2.4,
    },
  }

  // Easings curvas largas y suaves; sin ease "sharp"
  const transitions = {
    idle:   { duration: 0.5,  ease: 'easeOut' },
    hover:  { duration: 1.0,  ease: [0.32, 0.72, 0.36, 1] },
    launch: { duration: 1.3,  ease: [0.4, 0.0, 0.2, 1] },
    reveal: { duration: 1.0,  ease: [0.4, 0, 0.2, 1] },
    done:   { duration: 0.5,  ease: 'easeIn' },
  }

  // Stagger natural: el delay base + un offset chiquito según seed
  const stagger = delay + (seed % 6) * 0.04

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ width: w, height: h, zIndex: z }}
      initial="idle"
      animate={phase}
      variants={variants}
      transition={{ ...(transitions[phase] || transitions.idle), delay: stagger }}
    >
      <CloudShape tint={tint} shape={shape} />
    </motion.div>
  )
}

function BaseFog({ phase }) {
  const visible = phase === 'hover' || phase === 'launch' || phase === 'idle'
  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 pointer-events-none"
      style={{
        height: '95%',
        background:
          'linear-gradient(to top, rgba(225,235,247,1) 0%, rgba(210,228,245,0.9) 30%, rgba(200,222,240,0.6) 60%, rgba(200,222,240,0.2) 80%, rgba(200,222,240,0) 100%)',
        filter: 'blur(2px)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: phase === 'reveal' ? 1.6 : 0.7, ease: [0.22, 1, 0.36, 1] }}
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
    idle:   { duration: 0.4 },
    hover:  { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    launch: { duration: 0.8, ease: [0.55, 0.05, 0.55, 1] },
    reveal: { duration: 0.85, ease: 'easeOut' },
    done:   { duration: 0.3 },
  }

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 xl:w-68 xl:h-68"
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
      className="absolute left-1/2 top-1/2 -translate-x-1/2 pointer-events-none"
      style={{
        width: 90,
        height: 480,
        transform: 'translate(-50%, 0)',
        background:
          'linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 30%, rgba(225,243,255,0.55) 70%, rgba(225,243,255,0) 100%)',
        filter: 'blur(20px)',
        borderRadius: '50%',
      }}
      initial={{ opacity: 0, scaleY: 0.25 }}
      animate={{
        opacity: active ? (phase === 'reveal' ? 0.5 : 0.95) : 0,
        scaleY: active ? 1 : 0.25,
      }}
      transition={{ duration: phase === 'reveal' ? 1.2 : 0.5, ease: 'easeOut' }}
    />
  )
}

// Humo ambiental constante: partículas que ascienden lentamente
function AmbientSmoke({ phase }) {
  if (phase === 'idle' || phase === 'done') return null
  const particles = [
    { x: 15, w: 320, delay: 0.0,  dur: 4.4 },
    { x: 28, w: 380, delay: 0.5,  dur: 4.8 },
    { x: 40, w: 340, delay: 1.0,  dur: 4.2 },
    { x: 50, w: 400, delay: 0.3,  dur: 5.0 },
    { x: 60, w: 340, delay: 0.8,  dur: 4.2 },
    { x: 72, w: 380, delay: 0.2,  dur: 4.6 },
    { x: 85, w: 320, delay: 0.6,  dur: 4.4 },
  ]
  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: '100%',
            width: p.w,
            height: p.w * 0.6,
            transform: 'translate(-50%, 0)',
            background:
              'radial-gradient(ellipse at center, rgba(220,234,247,0.85) 0%, rgba(200,222,240,0.4) 50%, rgba(200,222,240,0) 75%)',
            filter: 'blur(10px)',
          }}
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={{ y: -1000, opacity: [0, 1, 0.7, 0], scale: 1.5 }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

function ResidualSmoke() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-10"
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
  hoverAt  = 150,
  launchAt = 1100,
  revealAt = 1800,
  doneAt   = 2900,
  amount   = 0.15,
  margin   = '0px 0px -200px 0px',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount, margin })
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

  // Bloquear el scroll del body mientras la animación cubre todo el viewport
  useEffect(() => {
    if (!animating) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [animating])

  return (
    <RevealCtx.Provider value={{ revealed, phase }}>
      <div ref={ref} className={`relative ${className}`}>
        <div className="relative z-0">{children}</div>

        {animating && (
          <div
            className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
            style={{ width: '100vw', height: '100vh' }}
          >
            <BaseFog phase={phase} />
            <AmbientSmoke phase={phase} />
            {PUFFS.map((puff, i) => (
              <SmokePuff key={i} {...puff} phase={phase} seed={i + 1} />
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
