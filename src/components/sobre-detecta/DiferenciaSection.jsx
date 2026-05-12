import { motion } from 'framer-motion'
import StackCard from './StackCard'
import { DIFERENCIADORES } from './data'

export default function DiferenciaSection() {
  return (
    <section className="relative bg-linear-to-b from-[#0A2A3F] via-primary-dark to-[#0A2A3F] text-white overflow-hidden">
      {/* Watermark gigante de fondo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="text-[18vw] lg:text-[14vw] font-light tracking-tighter text-white/[0.04] select-none uppercase whitespace-nowrap leading-none">
          Diferencia
        </p>
      </div>

      {/* Grano sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Encabezado */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-20 lg:pt-28 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/70 mb-4">
            Lo que nos diferencia
          </p>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tighter leading-[1.05]">
            Más que una clínica,{' '}
            <span className="italic text-primary-medium">
              un equipo a tu lado.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Scroll-stack */}
      <div className="relative">
        {DIFERENCIADORES.map((d, i) => (
          <StackCard
            key={d.title}
            diff={d}
            index={i}
            total={DIFERENCIADORES.length}
          />
        ))}
      </div>

      <div className="h-16 lg:h-24" />
    </section>
  )
}
