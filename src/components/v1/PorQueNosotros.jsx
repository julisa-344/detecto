import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import detecto from '../../assets/detecto.png'

const metrics = [
  { 
    prefix: '+', 
    value: 15, 
    suffix: '', 
    label: 'Años de experiencia', 
    duration: 1400, 
    description: 'Trayectoria consolidada liderando la innovación en detección temprana y tratamientos de alta complejidad.' 
  },
  { 
    prefix: '',  
    value: 100000,    
    suffix: '', 
    label: 'Pacientes atendidos', 
    duration: 1200, 
    description: 'Historias de éxito respaldadas por un enfoque humano y estándares clínicos de nivel internacional.' 
  },
  { 
    prefix: '+', 
    value: 3500,   
    suffix: '',  
    label: 'Cirugías Complejas Anuales', 
    duration: 1000, 
    description: 'Precisión quirúrgica excepcional realizada por especialistas de élite con la tecnología más avanzada del país.' 
  },
]


function useCounter(target, duration, active) {
  const [count, setCount] = useState(0)
  const fired = useRef(false)

  useEffect(() => {
    if (!active || fired.current) return
    fired.current = true

    const start = performance.now()
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      setCount(Math.floor(easeOut(t) * target))
      if (t < 1) requestAnimationFrame(tick)
      else setCount(target)
    }

    requestAnimationFrame(tick)
  }, [active, target, duration])

  return count
}

function Metric({ metric, active, index }) {
  const count = useCounter(metric.value, metric.duration, active)

  const formatted = metric.value >= 1000
    ? count.toLocaleString('es-PE')
    : count

  const filledPct = active ? Math.round((count / metric.value) * 100) : 0

  return (
    <div
      className={`py-7 border-t border-gray-200 transition-all duration-700 ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: active ? `${index * 120}ms` : '0ms' }}
    >
      <h3 className="text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight tabular-nums">
        {metric.prefix}{formatted}{metric.suffix}
      </h3>
      <p className="mt-1 text-sm text-gray-400 tracking-wider uppercase">
        {metric.label}
      </p>
      {/* Barra de progreso */}
      <div className="mt-3 h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-100"
          style={{ width: `${filledPct}%` }}
        />
      </div>
    </div>
  )
}

export default function PorQueNosotros() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const current = -rect.top
      setProgress(Math.min(Math.max(current / total, 0), 1))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const easeOut = (t) => 1 - Math.pow(1 - t, 3)

  // Fase 1: progress 0→0.5 — Detecto entra desde la derecha
  const phase1 = Math.min(progress / 0.5, 1)
  const easedPhase1 = easeOut(phase1)
  const detectoX = (1 - easedPhase1) * 140

  const isPhase2 = progress >= 0.5

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh]"
      style={{
        background: 'linear-gradient(160deg, #ffffff 0%, #EEFBFF 40%, #d9f4fc 100%)',
      }}
    >
      {/* Dot grid textura */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0199C6 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Anillo decorativo detrás del Detecto */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 480,
          height: 480,
          borderRadius: '50%',
          border: '1.5px solid rgba(1,153,198,0.18)',
          boxShadow: 'inset 0 0 80px rgba(1,153,198,0.07)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: '7.5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 380,
          height: 380,
          borderRadius: '50%',
          border: '1px solid rgba(1,153,198,0.10)',
        }}
      />

      {/* Glow detrás del Detecto */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Sticky */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* ── COLUMNA IZQUIERDA: DETECTO ── */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="will-change-transform"
                style={{
                  transform: `translateX(${detectoX}px)`,
                  opacity: easedPhase1,
                }}
              >
                <img
                  src={detecto}
                  alt="Detecto IA"
                  className="w-[380px] lg:w-[420px] select-none pointer-events-none drop-shadow-2xl"
                />
              </div>
            </div>

            {/* ── COLUMNA DERECHA: CONTENIDO ── */}
            <div className="relative">

              {/* FASE 1 — Título + descripción */}
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`transition-all duration-700 ${
                  !isPhase2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none absolute inset-0'
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-5">
                  Por qué elegirnos
                </p>
                <h2 className="text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.05]">
                  Tecnología que detecta
                  <span className="block text-primary mt-1">lo que otros no ven</span>
                </h2>
                <p className="mt-7 text-lg text-gray-500 leading-relaxed max-w-md">
                  Utilizamos inteligencia artificial avanzada para lograr diagnósticos más tempranos, precisos y confiables.
                </p>


                {/* CTA */}
                <div className="mt-10 flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary-medium transition-colors duration-200"
                  >
                    Conoce más
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div className="h-px w-12 bg-primary/20" />
                </div>
              </motion.div>

              {/* FASE 2 — Métricas con contadores */}
              <div
                className={`transition-all duration-700 ${
                  isPhase2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute inset-0'
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-2">
                  Resultados que hablan
                </p>
                <div>
                  {metrics.map((metric, i) => (
                    <Metric key={i} metric={metric} active={isPhase2} index={i} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
