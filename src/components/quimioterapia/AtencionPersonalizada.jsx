import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { equipo } from './data'

const IMG =
  'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1400&q=80'

export default function AtencionPersonalizada() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Atención médica personalizada</SectionEyebrow>
        <SectionTitle className="mb-3">
          Cada tratamiento{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            se adapta a ti.
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Un equipo multidisciplinario evalúa tu caso de forma integral para
          diseñar un plan de tratamiento personalizado, acompañándote en cada
          etapa con criterio médico, tecnología y un enfoque centrado en tu
          bienestar.
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[520px] overflow-hidden rounded-4xl bg-slate-100 lg:min-h-[500px]"
        >
          <img
            src={IMG}
            alt="Atención oncológica personalizada"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[rgb(var(--brand-dark)/0.4)] via-transparent to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {equipo.map((e, i) => {
            const Icon = e.icon
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-[16px] font-medium leading-tight text-[rgb(var(--brand-dark))]">
                  {e.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
