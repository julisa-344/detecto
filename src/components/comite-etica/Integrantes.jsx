import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { integrantes } from './data'

const ROLE_TONE = {
  Presidencia: 'bg-[rgb(var(--brand-dark))] text-white',
  'Secretaría Técnica': 'bg-[rgb(var(--brand-base))] text-white',
  'Miembro Titular': 'bg-[rgb(var(--brand-base)/0.12)] text-[rgb(var(--brand-dark))]',
  'Miembro Alterno': 'bg-slate-100 text-slate-600',
}

export default function Integrantes() {
  return (
    <section id="integrantes" className="relative scroll-mt-24">
      <div className="mb-10 max-w-3xl">
        <SectionEyebrow>El equipo</SectionEyebrow>
        <SectionTitle className="mb-4">
          Integrantes del{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            comité.
          </em>
        </SectionTitle>
        <p className="text-[15px] font-light leading-7 text-slate-500">
          Profesionales multidisciplinarios certificados en Buenas Prácticas
          Clínicas, Ética en la Investigación y Conducta Responsable.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_50px_-30px_rgba(0,112,165,0.2)]">
        <ul className="divide-y divide-slate-100">
          {integrantes.map((m, i) => {
            const tone = ROLE_TONE[m.role] ?? 'bg-slate-100 text-slate-600'
            return (
              <motion.li
                key={m.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-5 px-5 py-4 transition-colors hover:bg-(--brand-bg-soft) lg:px-7 lg:py-5"
              >
                <span className="hidden font-mono text-[11px] font-semibold tabular-nums tracking-[0.18em] text-slate-300 sm:block">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--brand-bg-ultra) text-[13px] font-semibold tracking-wide text-[rgb(var(--brand-dark))] ring-1 ring-[rgb(var(--brand-base)/0.2)]">
                  {m.initials}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[15px] font-medium leading-tight text-[rgb(var(--brand-dark))] lg:text-base">
                    {m.name}
                  </h3>
                </div>

                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${tone}`}
                >
                  {m.role}
                </span>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
