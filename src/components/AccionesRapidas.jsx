import { useEffect, useRef, useState } from 'react'

const actions = [
  {
    key: 'agendar',
    title: 'Agendar Cita',
    description: 'Reserva tu consulta con un especialista en menos de 2 minutos.',
    cta: 'Reservar ahora',
    color: '#0199C6',
    glow: 'rgba(82,192,225,0.18)',
    bg: 'linear-gradient(135deg, #EEFBFF 0%, #ffffff 100%)',
    span: 'lg:col-span-2 lg:row-span-2',
    big: true,
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
    cta: 'Conocer más',
    color: '#E91E8C',
    glow: 'rgba(233,30,140,0.16)',
    bg: 'linear-gradient(135deg, #FFF0F8 0%, #ffffff 100%)',
    span: '',
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
    description: 'Chequeo de próstata para hombres mayores de 40.',
    cta: 'Conocer más',
    color: '#1976D2',
    glow: 'rgba(25,118,210,0.16)',
    bg: 'linear-gradient(135deg, #EAF3FC 0%, #ffffff 100%)',
    span: '',
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
    description: 'Evaluación respiratoria integral con tecnología avanzada.',
    cta: 'Conocer más',
    color: '#0F8C7E',
    glow: 'rgba(15,140,126,0.16)',
    bg: 'linear-gradient(135deg, #E8F7F4 0%, #ffffff 100%)',
    span: 'lg:col-span-2',
    wide: true,
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

function ActionCard({ action, visible, delay }) {
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
    <div
      className={`relative ${action.span}`}
      style={{
        perspective: '900px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.34,1.4,0.64,1) ${delay}ms`,
      }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={onMouseLeave}
        className="group relative h-full w-full rounded-3xl border border-gray-100 overflow-hidden cursor-pointer"
        style={{
          background: action.bg,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hover ? 'scale(1.015)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
          transition: hover
            ? 'transform 120ms ease-out, box-shadow 300ms'
            : 'transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms',
          boxShadow: hover
            ? `0 30px 60px -20px ${action.glow}, 0 12px 30px -10px rgba(0,0,0,0.10)`
            : '0 8px 24px -12px rgba(0,0,0,0.05)',
        }}
      >
        {/* Glow radial */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-20%',
            right: '-10%',
            width: action.big ? 380 : 260,
            height: action.big ? 380 : 260,
            background: `radial-gradient(circle, ${action.glow} 0%, transparent 70%)`,
            opacity: hover ? 1 : 0.6,
            transition: 'opacity 400ms ease',
          }}
        />

        {/* Contenido */}
        <div
          className={`relative h-full flex flex-col ${action.big ? 'p-10 lg:p-12' : 'p-7 lg:p-8'}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Ícono flotante en 3D */}
          <div
            className={`${action.big ? 'w-20 h-20' : 'w-14 h-14'} mb-auto`}
            style={{
              color: action.color,
              transform: 'translateZ(40px)',
              transition: 'transform 500ms ease',
            }}
          >
            {action.icon}
          </div>

          {/* Texto */}
          <div style={{ transform: 'translateZ(20px)' }}>
            <h3
              className={`${action.big ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'} font-semibold tracking-tight text-gray-900 leading-tight`}
            >
              {action.title}
            </h3>
            <p className={`mt-3 ${action.big ? 'text-base max-w-md' : 'text-sm'} text-gray-500 leading-relaxed`}>
              {action.description}
            </p>

            {/* CTA */}
            <div
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
              style={{ color: action.color }}
            >
              <span>{action.cta}</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Línea decorativa lateral */}
          <div
            className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r-full transition-all duration-500"
            style={{
              backgroundColor: action.color,
              opacity: hover ? 0.9 : 0.25,
              transform: hover ? 'scaleY(1.15)' : 'scaleY(1)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function AccionesRapidas() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white relative overflow-hidden">
      {/* Sutil dot grid de fondo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0199C6 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        {/* Header */}
        <div
          className="max-w-2xl mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Acciones rápidas
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            Tu salud, a un clic
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-lg">
            Servicios diseñados para tu bienestar. Comienza con la acción que te corresponde.
          </p>
        </div>

        {/* Grid Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[220px] lg:auto-rows-[240px]">
          {actions.map((action, i) => (
            <ActionCard
              key={action.key}
              action={action}
              visible={visible}
              delay={i * 90}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
