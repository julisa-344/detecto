import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import eticaBg from '../../assets/eticabg.png'

const diferenciales = [
  'Equipo multidisciplinario',
  'Técnicas reconstructivas avanzadas',
  'Acompañamiento integral',
  'Atención personalizada y humana',
]

export default function NuestroDiferencial() {
  return (
    <section className="relative  overflow-hidden rounded-4xl w-full ">
      <img
        src={eticaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[rgb(var(--brand-dark))]/85 via-[rgb(var(--brand-dark))]/55 to-[rgb(var(--brand-dark))]/15" />

      <div className="relative z-10 grid items-center gap-10 px-8 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-16 lg:py-20">
        {/* Columna izquierda — texto grande */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl font-light leading-tight text-white/90 lg:text-3xl">
            ¿Por qué elegir{' '}
            <span className="font-medium text-white">Detecta Clínica?</span>
          </p>

          <h2 className="mt-8 text-white">
            <span className="block text-base font-light tracking-tight text-white/85">
              Más de
            </span>
            <span className="block text-7xl font-light leading-none tracking-tight lg:text-8xl">
              10 años
            </span>
            <span className="mt-2 block text-lg font-light leading-snug tracking-tight text-white/85 lg:text-xl">
              de experiencia en atención<br />oncológica integral
            </span>
          </h2>
        </motion.div>

        {/* Columna derecha — lista de pills */}
        <div className="space-y-3.5">
          {diferenciales.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-white/15 backdrop-blur-md transition-all hover:bg-white/15 hover:ring-white/25"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--brand-base))] text-white shadow-md">
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-[14.5px] font-light leading-snug text-white lg:text-[15.5px]">
                {d}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
