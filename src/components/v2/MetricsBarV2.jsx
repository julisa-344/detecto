import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { prefix: '$', value: 250, suffix: 'M+', label: 'En tecnología médica', duration: 1200 },
  { prefix: '',  value: 25000, suffix: '+', label: 'Pacientes evaluados', duration: 1400 },
  { prefix: '',  value: 98, suffix: '%', label: 'Precisión diagnóstica', duration: 900 },
  { prefix: '',  value: 120, suffix: '+', label: 'Especialistas médicos', duration: 1000 },
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
  const count = useCounter(metric.value, metric.duration, active)
  const formatted = metric.value >= 1000 ? count.toLocaleString('es-PE') : count

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center py-8 px-6"
    >
      <span className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight tabular-nums">
        {metric.prefix}{formatted}{metric.suffix}
      </span>
      <span className="mt-1.5 text-xs font-light text-gray-400 tracking-wide uppercase">
        {metric.label}
      </span>
    </motion.div>
  )
}

export default function MetricsBarV2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <section ref={ref} className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {metrics.map((metric, i) => (
            <MetricItem key={i} metric={metric} index={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
