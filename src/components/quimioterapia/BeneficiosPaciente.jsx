import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { CardClipDef, CARD_CLIP_ID } from '../staff-medico'
import { beneficios } from './data'

const CLIP_STYLE = {
  clipPath: `url(#${CARD_CLIP_ID})`,
  WebkitClipPath: `url(#${CARD_CLIP_ID})`,
}

function BeneficioCard({ item, index }) {
  const Icon = item.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative aspect-616/868 w-full">
        <div
          className="absolute inset-0 overflow-hidden bg-slate-900"
          style={CLIP_STYLE}
        >
          {/* Imagen de fondo siempre visible + zoom en hover */}
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/45 to-slate-950/15" />

          <div className="relative flex h-full w-full flex-col justify-between p-7 lg:p-8">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-md">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                {num}
              </span>
            </div>

            <div className="pr-[18%]">
              <h3 className="text-2xl font-light leading-tight tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-1 lg:text-3xl">
                {item.title}
              </h3>
              <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr]">
                <p className="overflow-hidden text-[13px] font-light leading-relaxed text-white/0 transition-colors duration-500 group-hover:text-white/85">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-[2%] right-[2%] flex h-[11%] w-[16%] items-center justify-center rounded-full bg-[rgb(var(--brand-base))] transition-all duration-500 group-hover:scale-105"
        />
      </div>
    </motion.article>
  )
}

export default function BeneficiosPaciente() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Beneficios para el paciente</SectionEyebrow>
        <SectionTitle className="mb-3">
          Una propuesta pensada para{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            convertir confianza en decisión.
          </em>
        </SectionTitle>
      </div>

      <CardClipDef />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beneficios.map((b, i) => (
          <BeneficioCard key={b.title} item={b} index={i} />
        ))}
      </div>
    </section>
  )
}
