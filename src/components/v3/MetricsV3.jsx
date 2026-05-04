import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import bgImage from '../../assets/opcion2.png'

const metrics = [
  {
    value: 25000,
    suffix: '+',
    shortLabel: 'PACIENTES',
    description: 'evaluados exitosamente',
    detail: 'pacientes en todo el Perú.',
  },
  {
    value: 98,
    suffix: '%',
    shortLabel: 'PRECISIÓN',
    description: 'diagnóstica comprobada',
    detail: 'reducción de errores diagnósticos.',
  },
  {
    value: 120,
    suffix: '+',
    shortLabel: 'ESPECIALISTAS',
    description: 'médicos de primer nivel',
    detail: 'eficiencia en atención al paciente.',
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
      const t = Math.min((now - start) / duration, 1)
      setCount(Math.floor(easeOut(t) * target))
      if (t < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return count
}

function MetricItem({ metric, index, active }) {
  const count = useCounter(metric.value, 1200 - index * 100, active)
  const formatted = metric.value >= 1000 ? count.toLocaleString('es-PE') : count

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex items-start gap-6 py-8 group cursor-default"
    >
      {/* Número grande */}
      <div className="flex-shrink-0">
        <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tabular-nums tracking-tight leading-none">
          {formatted}
          <span className="text-primary text-3xl lg:text-4xl">{metric.suffix}</span>
        </span>
      </div>

      {/* Labels */}
      <div className="pt-1">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/80 leading-none mb-1.5">
          {metric.shortLabel}
        </p>
        <p className="text-xs font-light text-white/40 leading-snug">
          {metric.description}
        </p>
        <p className="text-[11px] font-light text-white/25 leading-snug mt-1">
          {metric.detail}
        </p>
      </div>
    </motion.div>
  )
}

export default function MetricsV3() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'rgba(10,12,18,1)',
      }}
    >
      {/* Imagen de fondo recortada en la esquina izquierda — como la referencia */}
      <div className="absolute left-0 top-0 bottom-0 w-[340px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* Máscara derecha para fundir */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0c12]" />
        {/* Máscara inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0c12] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[340px_1fr] gap-0 items-center">

          {/* Espacio del recorte de imagen — solo en desktop */}
          <div className="hidden lg:block" />

          {/* Contenido de métricas */}
          <div className="lg:pl-12">

            {/* Título bloque — como "CUTTING-EDGE TECHNOLOGY..." de la referencia */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight leading-tight">
                Tecnología de vanguardia<br />
                <span className="text-white/40 font-light normal-case text-xl">en cada diagnóstico.</span>
              </h2>
            </motion.div>

            {/* Separador horizontal */}
            <div className="w-full h-px bg-white/8 mb-2" />

            {/* Grid de métricas */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
              {metrics.map((metric, i) => (
                <div key={i} className={i > 0 ? 'md:pl-8' : ''}>
                  <MetricItem metric={metric} index={i} active={active} />
                </div>
              ))}
            </div>

            {/* Separador horizontal */}
            <div className="w-full h-px bg-white/8 mt-2" />
          </div>
        </div>
      </div>
    </section>
  )
}
