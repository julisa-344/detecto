import { motion } from 'framer-motion'
import { Check, Shield } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { garantizamos } from './data'
import eticaBg from '../../assets/etica.jpg'

export default function Compromiso() {
  return (
    <section id="compromiso" className="relative">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* ── COLUMNA IZQUIERDA: TÍTULO + CHECKLIST ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionEyebrow>Compromiso</SectionEyebrow>
          <SectionTitle className="mb-5">
            Nuestro compromiso{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              ético institucional
            </em>
          </SectionTitle>
          <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
            Promovemos un sistema ético que orienta la conducta de nuestros
            equipos y respalda cada interacción con transparencia.
          </p>

          <ul className="mt-8 space-y-3">
            {garantizamos.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--brand-base)/0.12)] text-[rgb(var(--brand-base))]">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-[14px] font-light leading-relaxed text-slate-700">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── COLUMNA DERECHA: IMAGEN ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-4xl">
            <img
              src={eticaBg}
              alt="Compromiso ético"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* ── BLOQUE INFERIOR: POR QUÉ ES IMPORTANTE ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 rounded-4xl border border-slate-100 bg-(--brand-bg-ultra) p-8 lg:mt-20 lg:p-10"
      >
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[rgb(var(--brand-base))]">
            <Shield className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-base))]">
              Por qué es importante
            </p>
            <p className="mt-2 text-[14.5px] font-light leading-relaxed text-slate-600">
              La ética protege a pacientes, equipos y aliados, previene riesgos
              y fortalece la reputación institucional frente a situaciones
              sensibles.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
