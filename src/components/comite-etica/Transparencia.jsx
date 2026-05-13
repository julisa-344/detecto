import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { transparencia } from './data'

export default function Transparencia() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Buenas prácticas</SectionEyebrow>
        <SectionTitle className="mb-3">
          Transparencia y{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            buenas prácticas
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Principios que garantizan integridad, confianza y cumplimiento
          normativo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {transparencia.map((t, i) => {
          const Icon = t.icon
          return (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_20px_40px_-15px_rgb(var(--brand-base)/0.25)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-[17px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                {t.title}
              </h3>
              <p className="mt-2 text-[13px] font-light leading-relaxed text-slate-500">
                {t.desc}
              </p>
            </motion.div>
          )
        })}

        {/* Card destacada: Canal de consultas */}
        <motion.a
          href="mailto:comitedeetica@detecta.pe"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-4xl bg-linear-to-br from-[rgb(var(--brand-dark))] to-[rgb(var(--brand-base))] p-7 text-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgb(var(--brand-base)/0.45)]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/15 blur-3xl" />

          <div className="relative flex items-start justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/25">
              <Mail className="h-5 w-5" />
            </span>
            <ArrowUpRight className="h-5 w-5 text-white/70 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </div>

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Canal de consultas
            </p>
            <p className="mt-2 text-[16px] font-medium leading-tight">
              comitedeetica@detecta.pe
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
