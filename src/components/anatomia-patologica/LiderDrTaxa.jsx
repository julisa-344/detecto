import { motion } from 'framer-motion'
import { Award, UserRound } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { lider } from './data'

export default function LiderDrTaxa() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Equipo de élite</SectionEyebrow>
        <SectionTitle className="mb-3">
          Liderado por el{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            {lider.name}.
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Experiencia y precisión al servicio de tu salud.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_30px_70px_-30px_rgba(0,112,165,0.3)] lg:grid-cols-[360px_1fr]"
      >
        {/* Imagen lateral */}
        <div className="relative h-80 lg:h-auto bg-linear-to-br from-[rgb(var(--brand-base)/0.18)] to-[rgb(var(--brand-med)/0.1)]">
          {lider.image ? (
            <img
              src={lider.image}
              alt={lider.name}
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <UserRound
                className="h-32 w-32 text-[rgb(var(--brand-base)/0.4)]"
                strokeWidth={1}
              />
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="relative p-7 lg:p-10">
          <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[rgb(var(--brand-base)/0.15)] blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-(--brand-bg-ultra) px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))]">
              <Award className="h-3 w-3" />
              {lider.experiencia}
            </span>

            <h3 className="mt-4 text-3xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-4xl">
              {lider.name}
            </h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-[rgb(var(--brand-base))]">
              {lider.role}
            </p>

            <p className="mt-6 max-w-xl text-[14.5px] font-light leading-relaxed text-slate-600">
              {lider.bio}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {lider.expertise.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgb(var(--brand-base)/0.25)] bg-(--brand-bg-soft) px-3.5 py-1.5 text-[11px] font-medium text-[rgb(var(--brand-dark))]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
