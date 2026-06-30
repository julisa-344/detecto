import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'
import Counter from './Counter'
import { type StatItem } from './data'

interface StatSlideProps {
  stat: StatItem
  index: number
}

/**
 * Tarjeta individual del carrusel de "El reto no puede esperar":
 * foto a pantalla completa, cifra animada arriba a la izquierda y
 * frase descriptiva anclada en la base.
 */
export default function StatSlide({ stat, index }: StatSlideProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative h-full w-[78vw] flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[58vw] lg:w-[23.5vw]"
    >
      <img src={stat.image} alt={stat.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/40" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-baseline gap-1 text-white">
            <span className="text-6xl font-light tracking-tight sm:text-7xl">
              {stat.prefix}
              <Counter to={stat.value} delay={index * 0.1} />
              {stat.suffix}
            </span>
          </div>
          <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
            0{index + 1}
          </span>
        </div>

        <div>
          <p className="mb-2.5 text-lg font-semibold uppercase tracking-[0.06em] text-white">
            {stat.title}
          </p>
          <p className="text-base font-light leading-snug text-white/85">{stat.sentence}</p>
        </div>
      </div>
    </motion.div>
  )
}
