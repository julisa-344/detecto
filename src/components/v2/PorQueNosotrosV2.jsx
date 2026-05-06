import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

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

function MetricCard({ metric, index, active }) {
  const count = useCounter(metric.value, metric.duration, active)
  const formatted = metric.value >= 1000 ? count.toLocaleString('es-PE') : count

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-gray-100 p-8 relative overflow-hidden group hover:border-primary-light hover:shadow-lg transition-all duration-400"
    >
      {/* Acento lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Número */}
      <div className="text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight tabular-nums mb-2">
        {metric.prefix}{formatted}{metric.suffix}
      </div>

      {/* Label */}
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary-dark mb-4 opacity-70">
        {metric.label}
      </p>

      {/* Descripción */}
      <p className="text-sm font-light text-gray-400 leading-relaxed">
        {metric.description}
      </p>

      {/* Barra de progreso */}
      <div className="mt-6 h-px w-full bg-gray-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: metric.duration / 1000, ease: 'easeOut', delay: index * 0.15 }}
          className="h-full bg-primary-dark"
        />
      </div>
    </motion.div>
  )
}

export default function PorQueNosotrosV2() {
  const [active, setActive] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.05 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-primary-dark mb-4">
              Por qué elegirnos
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
              Tecnología que detecta
              <span className="block font-light text-primary-dark">lo que otros no ven.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base font-light text-gray-500 leading-relaxed mb-8">
              Utilizamos inteligencia artificial avanzada para lograr diagnósticos más tempranos, precisos y confiables.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary-dark text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[#005a84] transition-colors duration-200 group"
            >
              Conoce más
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Grid de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {metrics.map((metric, i) => (
            <MetricCard key={i} metric={metric} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
