import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { pilaresFuncionamiento } from './data'
import clinicaImg from '../../assets/clinica.jpg'
import tecnologiaImg from '../../assets/tecnologia.jpg'
import doctoresImg from '../../assets/doctores.webp'
import insImg from '../../assets/ins.webp'

const CARD_IMAGES = [clinicaImg, tecnologiaImg, doctoresImg, insImg]
const CARD_TONES = [
  { chip: 'bg-[rgb(var(--brand-base))]', tint: 'from-[rgb(var(--brand-dark)/0.9)] via-[rgb(var(--brand-dark)/0.7)] to-[rgb(var(--brand-dark)/0.5)]' },
  { chip: 'bg-[rgb(var(--brand-med))]', tint: 'from-[rgb(var(--brand-dark)/0.85)] via-[rgb(var(--brand-base)/0.6)] to-[rgb(var(--brand-med)/0.45)]' },
  { chip: 'bg-[rgb(var(--brand-dark))]', tint: 'from-[rgb(var(--brand-dark)/0.92)] via-[rgb(var(--brand-dark)/0.65)] to-[rgb(var(--brand-base)/0.4)]' },
  { chip: 'bg-[rgb(var(--brand-base))]', tint: 'from-[rgb(var(--brand-dark)/0.9)] via-[rgb(var(--brand-med)/0.55)] to-[rgb(var(--brand-base)/0.4)]' },
]

export default function QueEsCIEI() {
  return (
    <section className="relative">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:items-center">
        {/* Lado izquierdo — título + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[rgb(var(--brand-base))]">
            El comité
          </p>
          <h2 className="text-4xl font-extralight leading-[1.05] tracking-tight text-[rgb(var(--brand-dark))] sm:text-5xl lg:text-6xl">
            ¿Qué es el{' '}
            <span className="font-medium text-[rgb(var(--brand-base))]">
              CIEI
            </span>{' '}
            y cómo{' '}
            <span className=" font-medium text-[rgb(var(--brand-base))]">
              funciona?
            </span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] font-light leading-7 text-slate-500">
            Es un órgano independiente encargado de evaluar protocolos de
            investigación en seres humanos, asegurando cumplimiento ético,
            científico y normativo.
          </p>

          <a
            href="#proceso"
            className="group relative mt-10 flex w-fit cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
          >
            <span className="rounded-full bg-[rgb(var(--brand-dark))] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))]">
              Conoce el proceso
            </span>
            <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-[rgb(var(--brand-dark))] text-white transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))]">
              <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </a>
        </motion.div>

        {/* Lado derecho — cards con imágenes */}
        <div className="flex flex-col gap-4">
          {pilaresFuncionamiento.map((p, i) => {
            const tone = CARD_TONES[i % CARD_TONES.length]
            const img = CARD_IMAGES[i % CARD_IMAGES.length]
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-4xl shadow-[0_20px_40px_-20px_rgb(0,0,0,0.25)] transition-all hover:-translate-y-1"
              >
                <img
                  src={img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-linear-to-r ${tone.tint}`} />

                <div className="relative z-10 flex items-center justify-between gap-4 p-6 lg:p-7">
                  <div className="min-w-0">
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white shadow-sm ${tone.chip}`}
                    >
                      Pilar 0{p.num}
                    </span>
                    <h3 className="mt-3 text-xl font-light leading-tight tracking-tight text-white lg:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[13px] font-light leading-relaxed text-white/85">
                      {p.desc}
                    </p>
                  </div>

                  <span className="font-mono text-3xl font-extralight tracking-tighter text-white/40">
                    0{p.num}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
