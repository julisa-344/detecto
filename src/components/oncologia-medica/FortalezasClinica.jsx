import { motion } from 'framer-motion'
import detecto from '../../assets/detecto.png'

const fortalezas = [
  'Excelencia médica',
  'Tecnología de vanguardia',
  'Atención humana',
  'Diagnóstico preciso',
  'Innovación continua',
  'Equipo multidisciplinario',
  'Cuidado personalizado',
  'Resultados confiables',
]

function MarqueeRow({ items, duration = 50, reverse = false, className = '' }) {
  const loop = [...items, ...items]
  return (
    <div className={`pointer-events-none flex w-max items-center ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-12"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration, repeat: Infinity }}
      >
        {loop.map((word, i) => (
          <span key={i} className="flex shrink-0 items-center gap-12">
            <span className="whitespace-nowrap text-[clamp(2.5rem,7vw,6rem)] font-extralight uppercase tracking-tight text-[#0070A5]/85 italic">
              {word}
            </span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#52C0E1]/70" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function FortalezasClinica() {
  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden">
        <div className="relative flex min-h-[70vh] items-center justify-center py-16">

          {/* Detecto al frente */}
          <motion.img
            src={detecto}
            alt="Detecto"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-20 h-[55vh] w-auto max-w-[55vw] object-contain"
          />

          {/* Filas de palabras pasando automáticamente — detrás de Detecto */}
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center gap-8">
            <MarqueeRow items={fortalezas} duration={55} />
            <MarqueeRow
              items={[...fortalezas].reverse()}
              duration={48}
              reverse
              className="opacity-60"
            />
            <MarqueeRow items={fortalezas} duration={65} className="opacity-40" />
          </div>

          {/* Fades laterales */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-32 bg-gradient-to-r from-[#ecfafe] via-[#ecfafe]/100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-32 bg-gradient-to-l from-[#ecfafe] via-[#ecfafe]/100 to-transparent" />
        </div>
      </div>
    </section>
  )
}
