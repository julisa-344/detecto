import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import detecto from '../../assets/detecto.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

const actions = [
  {
    key: 'agendar',
    title: 'Agendar Cita',
    description: 'Reserva tu consulta en menos de 2 minutos.',
    color: '#0199C6',
    glow: 'rgba(82,192,225,0.18)',
    bg: 'linear-gradient(135deg, #EEFBFF 0%, #ffffff 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="14" width="44" height="42" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 26h44" stroke="currentColor" strokeWidth="2" />
        <path d="M22 8v12M42 8v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 38l6 6 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'rosa',
    title: 'Preventivo Rosa',
    description: 'Detección temprana de cáncer de mama.',
    color: '#E91E8C',
    glow: 'rgba(233,30,140,0.16)',
    bg: 'linear-gradient(135deg, #FFF0F8 0%, #ffffff 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 56C20 48 10 38 10 26a12 12 0 0122-7 12 12 0 0122 7c0 12-10 22-22 30z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M28 22c-2 4 0 8 4 10M36 22c2 4 0 8-4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'azul',
    title: 'Preventivo Azul',
    description: 'Despistaje de próstata para hombres +40.',
    color: '#1976D2',
    glow: 'rgba(25,118,210,0.16)',
    bg: 'linear-gradient(135deg, #EAF3FC 0%, #ffffff 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 8l20 8v14c0 14-9 22-20 26-11-4-20-12-20-26V16l20-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22 32l8 8 14-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'pulmon',
    title: 'Pulmón Sano',
    description: 'Evaluación respiratoria integral.',
    color: '#0F8C7E',
    glow: 'rgba(15,140,126,0.16)',
    bg: 'linear-gradient(135deg, #E8F7F4 0%, #ffffff 100%)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 12v32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 18c-4 0-12 4-14 12-2 8 0 18 4 22 4 4 10 0 10-6V18z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M32 18c4 0 12 4 14 12 2 8 0 18-4 22-4 4-10 0-10-6V18z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="32" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
]

function ActionCard({ action, index }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: -dy * 7, y: dx * 7 })
  }

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHover(false)
  }

  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.08)}
      style={{ perspective: '900px' }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={onMouseLeave}
        className="group relative h-full w-full rounded-2xl border border-white/80 overflow-hidden cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hover ? 'scale(1.02)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
          transition: hover
            ? 'transform 120ms ease-out, box-shadow 300ms'
            : 'transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms',
          boxShadow: hover
            ? `0 24px 50px -20px ${action.glow}, 0 10px 24px -10px rgba(0,0,0,0.08)`
            : '0 4px 24px -8px rgba(0,0,0,0.06), 0 1px 4px -1px rgba(0,0,0,0.04)',
        }}
      >
        {/* Contenido */}
        <div className="relative h-full flex flex-col p-5" style={{ transformStyle: 'preserve-3d' }}>
          {/* Ícono */}
          <div
            className="w-11 h-11 mb-3"
            style={{
              color: action.color,
              transform: 'translateZ(35px)',
            }}
          >
            {action.icon}
          </div>

          {/* Texto */}
          <div style={{ transform: 'translateZ(18px)' }}>
            <h3 className="text-base lg:text-lg font-semibold tracking-tight text-gray-900 leading-tight">
              {action.title}
            </h3>
            <p className="mt-1.5 text-xs lg:text-sm text-gray-500 leading-snug">
              {action.description}
            </p>
          </div>

          {/* CTA flecha — eliminado */}

          {/* Línea decorativa — eliminada */}
        </div>
      </div>
    </motion.div>
  )
}

export default function AccionesRapidas({ slotRef, landed }) {

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{ background: 'linear-gradient(160deg, #f0f9ff 0%, #f8fafc 60%, #f0fdf4 100%)' }}>
      {/* Dot grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0199C6 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-center">

          {/* ── IZQUIERDA: slot del Detecto + globo de pensamiento ── */}
          <div className="relative flex justify-center lg:justify-start">

            {/* Wrapper relativo al placeholder para anclar el globo */}
            <div className="relative">

              {/* Globo de pensamiento — aparece ARRIBA del Detecto cuando aterriza */}
              <div
                className="absolute z-20 pointer-events-none"
                style={{
                  bottom: 'calc(100% - 1px)',
                  left: '-10px',
                  opacity: landed ? 1 : 0,
                  transform: landed ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.88)',
                  transition: 'opacity 500ms cubic-bezier(0.34,1.4,0.64,1), transform 500ms cubic-bezier(0.34,1.4,0.64,1)',
                  transformOrigin: 'bottom left',
                }}
              >
                {/* Burbuja principal */}
                <div
                  className="relative px-4 py-3 rounded-2xl"
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #0199C6',
                    boxShadow: '0 4px 24px -6px rgba(1,153,198,0.22), 0 1px 6px -1px rgba(0,0,0,0.06)',
                    minWidth: 160,
                  }}
                >
                  {/* Icono sparkle + texto */}
                  <div className="flex items-start gap-2">
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#0199C6' }}>
                      <path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-800 tracking-tight leading-snug">
                      Hola,<br />¿qué necesitas<br />hacer hoy?
                    </span>
                  </div>

                  {/* Cola de pensamiento → hacia abajo */}
                  <span
                    className="absolute rounded-full"
                    style={{
                      width: 9, height: 9,
                      bottom: -16,
                      left: 24,
                      background: '#ffffff',
                      border: '1.5px solid #0199C6',
                    }}
                  />
                  <span
                    className="absolute rounded-full"
                    style={{
                      width: 5, height: 5,
                      bottom: -26,
                      left: 28,
                      background: '#ffffff',
                      border: '1.5px solid #0199C6',
                    }}
                  />
                  <span
                    className="absolute rounded-full"
                    style={{
                      width: 3, height: 3,
                      bottom: -34,
                      left: 30,
                      background: '#0199C6',
                    }}
                  />
                </div>
              </div>

              {/* Placeholder invisible — reserva el espacio donde aterriza el Detecto */}
              <img
                ref={slotRef}
                src={detecto}
                alt=""
                aria-hidden="true"
                className="relative z-10 w-60 sm:w-64 lg:w-80 select-none pointer-events-none"
                style={{ visibility: 'hidden' }}
              />
            </div>
          </div>

          {/* ── DERECHA: texto arriba + cards abajo ── */}
          <div className="flex flex-col gap-8 lg:gap-10">

            {/* Texto */}
            <motion.div
              className="text-center lg:text-left"
              {...fadeUp(0)}
            >
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                Acciones rápidas
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                ¿En qué te puedo <span className="text-primary">ayudar?</span>
              </h2>
              <p className="mt-4 text-sm lg:text-base text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Servicios diseñados para tu bienestar. Elige el que necesites.
              </p>
            </motion.div>

            {/* 2x2 grid de cards */}
            <div className="grid grid-cols-2 gap-4 lg:gap-5 auto-rows-[180px] lg:auto-rows-[200px]">
              {actions.map((action, i) => (
                <ActionCard
                  key={action.key}
                  action={action}
                  index={i}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
