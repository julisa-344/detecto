import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { indicadores } from './data'
import detectoEtic from '../../assets/detetctoetic.png'

function parseValue(raw) {
  const str = String(raw).trim()
  const match = str.match(/^(\D*)([\d.,]+)(.*)$/)
  if (!match) return { prefix: '', target: null, suffix: str, isStatic: true }
  const num = parseFloat(match[2].replace(/,/g, ''))
  if (Number.isNaN(num)) return { prefix: '', target: null, suffix: str, isStatic: true }
  return { prefix: match[1] || '', target: num, suffix: match[3] || '', isStatic: false }
}

function useCounter(target, duration, active) {
  const [count, setCount] = useState(0)
  const fired = useRef(false)

  useEffect(() => {
    if (!active || fired.current || target == null) return
    fired.current = true
    const start = performance.now()
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setCount(easeOut(t) * target)
      if (t < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])

  return count
}

function Indicador({ item, active, index }) {
  const Icon = item.icon
  const parsed = parseValue(item.value)
  const duration = 1200 + index * 120
  const count = useCounter(parsed.target ?? 0, duration, active)
  const [pct, setPct] = useState(0)
  const fired = useRef(false)

  useEffect(() => {
    if (!active || fired.current) return
    fired.current = true
    const start = performance.now()
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setPct(Math.round(easeOut(t) * 100))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, duration])

  const display = parsed.isStatic
    ? item.value
    : `${parsed.prefix}${Math.round(count).toLocaleString('es-PE')}${parsed.suffix}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-slate-200 py-6"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="text-5xl font-semibold tracking-tight text-[rgb(var(--brand-dark))] tabular-nums lg:text-6xl">
            {display}
          </h3>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            {item.label}
          </p>
        </div>
        <span className="mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-[rgb(var(--brand-base))] transition-all duration-100"
          style={{ width: `${pct}%` }}
        />
      </div>
    </motion.div>
  )
}

export default function Indicadores() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Seguimiento</SectionEyebrow>
        <SectionTitle className="mb-3">
          Indicadores sugeridos de{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            gestión
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Métricas clave que monitoreamos para sostener el compromiso ético en
          el tiempo.
        </p>
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Imagen Detecto Ética */}
        <div className="relative flex justify-center lg:justify-start">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--brand-base)/0.15)] blur-[120px]" />

          <motion.img
            src={detectoEtic}
            alt="Detecto Ética"
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[320px] select-none drop-shadow-2xl lg:w-[420px]"
          />
        </div>

        {/* Métricas */}
        <div>
          {indicadores.map((item, i) => (
            <Indicador key={item.label} item={item} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
