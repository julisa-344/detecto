import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { patrocinadores } from './data'

export default function Patrocinadores() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Nuestros Patrocinadores</SectionEyebrow>
        <SectionTitle className="mb-3">
          Colaboramos con{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            líderes globales
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Compañías líderes que impulsan estudios clínicos con estándares
          internacionales.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {patrocinadores.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group flex aspect-3/2 flex-col items-center justify-center gap-3 rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
              <Building2 className="h-5 w-5" />
            </span>
            <p className="text-center text-[12px] font-medium uppercase tracking-[0.18em] text-slate-500">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
