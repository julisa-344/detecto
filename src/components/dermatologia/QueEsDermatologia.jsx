import { motion } from 'framer-motion'
import { Check, Sparkles, Stethoscope, ShieldAlert, Droplet, Pill, Scissors } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { perfilPaciente, dermaImages } from './data'

const stats = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '98%', label: 'Satisfacción' },
  { value: '+8K', label: 'Pacientes' },
  { value: '+10', label: 'Especialistas' },
]

const microIcons = [Stethoscope, ShieldAlert, Sparkles, Droplet, Pill, Scissors]

export default function QueEsDermatologia() {
  return (
    <section className="relative">
      {/* Encabezado */}
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end mb-12">
        <div>
          <SectionEyebrow>Especialidad</SectionEyebrow>
          <SectionTitle className="mb-4">
            ¿Qué es la{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              dermatología?
            </em>
          </SectionTitle>
          <p className="max-w-2xl text-[15px] font-light leading-7 text-slate-500">
            Diagnóstico y tratamiento de enfermedades de la piel, el cabello y
            las uñas, con un enfoque que combina excelencia clínica y cuidado
            estético.
          </p>
        </div>
        <span className="hidden lg:inline-flex text-[10px] font-mono font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand-base))]">
          Detecta · Dermatología
        </span>
      </div>

      {/* Stats band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 rounded-3xl border border-slate-200 bg-white overflow-hidden"
      >
        {stats.map((s) => (
          <div key={s.label} className="p-6 lg:p-7">
            <p className="text-3xl lg:text-4xl font-light tracking-tight text-[rgb(var(--brand-dark))]">
              {s.value}
            </p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Bento 4-cell */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
        {/* Cell A — large (2 col x 2 row) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-4xl bg-linear-to-br from-[rgb(var(--brand-dark))] to-[rgb(var(--brand-base))] p-8 lg:p-10 text-white shadow-[0_30px_60px_-25px_rgb(var(--brand-base)/0.45)] min-h-75"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative h-full flex flex-col justify-between">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70">
              Nuestro enfoque
            </p>
            <div>
              <h3 className="text-3xl lg:text-4xl font-light tracking-tight leading-[1.1] mb-5">
                Diagnóstico preciso,{' '}
                <span className="italic font-medium">tratamiento personalizado</span> y
                acompañamiento cercano.
              </h3>
              <p className="text-[15px] font-light text-white/85 leading-relaxed max-w-md">
                Combinamos tecnología avanzada con la experiencia de nuestros
                dermatólogos para cuidar tu piel en todas sus etapas, desde la
                prevención hasta el tratamiento especializado.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cell B — espacios clínicos (image) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 relative overflow-hidden rounded-4xl min-h-50"
        >
          <img
            src={dermaImages.clinica}
            alt="Espacios clínicos Detecta"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.28em] uppercase text-white/70 mb-1">
                Infraestructura
              </p>
              <p className="text-xl font-light text-white tracking-tight">
                Espacios clínicos modernos
              </p>
            </div>
            <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-white/80">
              01
            </span>
          </div>
        </motion.div>

        {/* Cell C — condiciones list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-4xl border border-slate-100 bg-white p-6"
        >
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[rgb(var(--brand-base))] mb-4">
            Atendemos
          </p>
          <ul className="space-y-1.5">
            {perfilPaciente.map((item) => (
              <li key={item} className="flex items-center gap-2.5 py-1">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-[13px] font-light text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Cell D — número grande */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-4xl bg-(--brand-bg-ultra) border border-[rgb(var(--brand-base)/0.2)] p-6 flex flex-col justify-between min-h-50"
        >
          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[rgb(var(--brand-base))]">
              Condiciones
            </p>
            <p className="mt-1 text-sm font-medium text-[rgb(var(--brand-dark))]">
              cubiertas
            </p>
          </div>
          <p className="text-7xl lg:text-8xl font-extralight leading-none text-[rgb(var(--brand-dark))] tracking-tighter">
            06<span className="text-[rgb(var(--brand-base))]">+</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {microIcons.map((Icon, i) => (
              <span
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[rgb(var(--brand-med))] border border-slate-100"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
