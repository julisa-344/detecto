import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { beneficios } from './data'

export default function ValoranPacientes() {
  return (
    <section className="relative -mx-6 overflow-hidden rounded-4xl bg-[rgb(var(--brand-dark))] px-6 py-16 lg:-mx-12 lg:px-12 lg:py-24">
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[rgb(var(--brand-base)/0.3)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[rgb(var(--brand-base)/0.18)] blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--brand-base))]">
            Lo que más valoran los pacientes
          </p>
          <h2 className="mt-4 text-4xl font-extralight leading-[1.05] tracking-tight text-white lg:text-5xl">
            Confianza y precisión{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              en cada resultado.
            </span>
          </h2>

          <button className="group mt-8 inline-flex items-center gap-0 active:scale-95">
            <span className="rounded-full bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-dark))] transition-all duration-500 group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
              Agenda tu cita
            </span>
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
              <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {beneficios.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--brand-base)/0.2)] text-[rgb(var(--brand-base))]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[15px] font-medium text-white">{b.title}</h3>
                <p className="mt-1 text-[12.5px] font-light leading-relaxed text-white/65">
                  {b.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
