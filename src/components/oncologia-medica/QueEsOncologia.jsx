import { useState } from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, Heart, Dna, Stethoscope, Activity } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { perfilPaciente, oncoImages } from './data'

const ITEM_ICONS = [ClipboardList, Heart, Dna, Stethoscope, Activity]

export default function QueEsOncologia() {
  return (
    <section className="relative">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionEyebrow>Especialidad</SectionEyebrow>
          <SectionTitle className="mb-4">
            Cuidado {' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              oncológico integral
            </em>
          </SectionTitle>
          <p className="max-w-2xl text-[15px] font-light leading-7 text-slate-500">
            En Detecta Clínica, acompañamos el diagnóstico, tratamiento y seguimiento del cáncer con un enfoque médico especializado, humano y seguro.

          </p>
        </div>
   
      </div>

      <AtendemosBlock />
    </section>
  )
}

function AtendemosBlock() {
  const [active, setActive] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr] lg:items-stretch"
    >
      <div className="rounded-4xl border border-slate-100 bg-white p-5 lg:p-6">
        <p className="mb-4 px-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--brand-base))]">
          ¿Cuándo acudir a oncología médica?
        </p>
        <ul className="space-y-1">
          {perfilPaciente.map((item, i) => {
            const Icon = ITEM_ICONS[i % ITEM_ICONS.length]
            const isActive = i === active
            return (
              <li key={item.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex w-full cursor-pointer items-start gap-3 rounded-2xl px-3 py-3 text-left transition-all ${
                    isActive
                      ? 'bg-[rgb(var(--brand-base))] text-white shadow-[0_10px_25px_-12px_rgb(var(--brand-base)/0.6)]'
                      : 'text-slate-700 hover:bg-(--brand-bg-ultra)'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-medium leading-tight">
                      {item.title}
                    </span>
                    <span
                      className={`mt-1 block text-[12.5px] font-light leading-snug ${
                        isActive ? 'text-white/85' : 'text-slate-500'
                      }`}
                    >
                      {item.desc}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="relative min-h-72 overflow-hidden rounded-4xl bg-slate-100 lg:min-h-full">
        <img
          src={oncoImages.hero}
          alt="Atención oncológica Detecta"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}
