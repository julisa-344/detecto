import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

interface CounterProps {
  to: number
  duration?: number
  delay?: number
}

export default function Counter({ to, duration = 1.8, delay = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration, delay])

  return <span ref={ref}>{value.toLocaleString('en-US')}</span>
}
