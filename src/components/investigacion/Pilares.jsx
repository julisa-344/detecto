import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { CardClipDef, CARD_CLIP_ID } from '../staff-medico'
import { pilares } from './data'

const CLIP_STYLE = {
  clipPath: `url(#${CARD_CLIP_ID})`,
  WebkitClipPath: `url(#${CARD_CLIP_ID})`,
}

function PilarCard({ item, index }) {
  const Icon = item.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative aspect-616/868 w-full">
        <div
          className="absolute inset-0 overflow-hidden bg-white"
          style={CLIP_STYLE}
        >
          {/* Imagen de hover */}
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/40 to-slate-950/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative flex h-full w-full flex-col justify-between p-7 lg:p-8">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-med))] transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300 transition-colors duration-500 group-hover:text-white/70">
                {num}
              </span>
            </div>

            <div className="pr-[18%]">
              <h3 className="text-2xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] transition-colors duration-500 group-hover:text-white lg:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/85">
                {item.desc}
              </p>
            </div>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-[2%] right-[2%] flex h-[11%] w-[16%] items-center justify-center rounded-full bg-[rgb(var(--brand-base))] transition-all duration-500 group-hover:scale-105 group-hover:bg-primary-dark"
        />
      </div>
    </motion.article>
  )
}

export default function Pilares() {
  return (
    <section className="relative -mx-6 rounded-4xl bg-(--brand-bg-ultra) px-6 py-16 lg:-mx-12 lg:px-12 lg:py-20">
      <CardClipDef />

      <div className="mb-10 max-w-2xl">
        <SectionEyebrow>Investigación</SectionEyebrow>
        <SectionTitle className="mb-4">
          Investigación que{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            transforma vidas
          </em>
        </SectionTitle>
        <p className="text-[15px] font-light leading-7 text-slate-500">
          Estudios clínicos y proyectos que impactan la salud real de nuestros
          pacientes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pilares.map((item, i) => (
          <PilarCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
