import { motion } from 'framer-motion'
import { FileText, BookOpen } from 'lucide-react'
import { etapas } from './data'
import eticaBg from '../../assets/eticabg.png'

export default function ProcesoRevision() {
  return (
    <section id='proceso' className="relative -mx-6 overflow-hidden rounded-4xl bg-[rgb(var(--brand-dark))] lg:-mx-12">

      <div className="pointer-events-none absolute inset-0 w-full">
        <img
          src={eticaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-right opacity-50"
          loading="lazy"
        />
        {/* Overlay corregido: ocupa todo el ancho y usa hex #0a0a0a */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a3f] via-[#0a2a3f]/60 to-[#0a2a3f]/30" />
      </div>

      {/* Ornamentos */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[rgb(var(--brand-base)/0.15)] blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 px-6 py-16 lg:px-14 lg:py-24">
        {/* Encabezado */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[rgb(var(--brand-base))]">
              Proceso
            </p>
            <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Proceso de revisión{' '} <br />
              <span className="italic font-medium text-[rgb(var(--brand-base))]">
                ética
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] font-light leading-7 text-white/75">
              Flujo estructurado para evaluación, dictamen y seguimiento de
              protocolos de investigación.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href="#"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white hover:text-[rgb(var(--brand-dark))]"
            >
              <FileText className="h-4 w-4" />
              Manual
            </a>
            <a
              href="#"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white hover:text-[rgb(var(--brand-dark))]"
            >
              <BookOpen className="h-4 w-4" />
              Reglamento
            </a>
          </div>
        </div>

        {/* Cards flotantes */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e, i) => {
            const Icon = e.icon
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-3xl bg-white/95 p-6 shadow-[0_20px_40px_-15px_rgb(0,0,0,0.35)] backdrop-blur transition-all hover:-translate-y-2 hover:bg-white"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--brand-base)/0.12)] text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-3xl font-extralight tracking-tighter text-[rgb(var(--brand-base)/0.3)]">
                    {e.id}
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-base))]">
                  {e.tag}
                </p>
                <h3 className="mt-1 text-lg font-medium leading-tight tracking-tight text-[rgb(var(--brand-dark))]">
                  {e.title}
                </h3>
                <p className="mt-3 text-[12px] font-light leading-relaxed text-slate-500">
                  {e.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
