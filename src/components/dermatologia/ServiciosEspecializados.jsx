import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { servicios, dermaImages } from './data'

export default function ServiciosEspecializados() {
  const [featured, ...rest] = servicios
  const FeaturedIcon = featured.icon

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Servicios</SectionEyebrow>
        <SectionTitle className="mb-3">Servicios especializados</SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Procedimientos clínicos y estéticos respaldados por tecnología avanzada.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
        {/* Featured — col-span-2 row-span-2 con imagen */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-4xl sm:col-span-2 lg:row-span-2 cursor-pointer"
        >
          <img
            src={dermaImages.procedure}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

          <div className="relative h-full flex flex-col justify-between p-8 lg:p-10 text-white">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/25">
                <FeaturedIcon className="h-5 w-5" />
              </span>
              <span className="text-[10px] font-mono font-semibold tracking-[0.22em] uppercase text-white/70">
                01 / {String(servicios.length).padStart(2, '0')}
              </span>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-3">
                Servicio destacado
              </p>
              <h3 className="text-3xl lg:text-4xl font-light tracking-tight leading-[1.1]">
                {featured.title}
              </h3>
              <p className="mt-3 text-[14px] font-light text-white/85 max-w-md leading-relaxed">
                Procedimientos rigurosos con seguimiento personalizado y
                resultados respaldados por evidencia clínica.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[10px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand-dark))]">
                Solicitar servicio
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </motion.article>

        {/* Cards restantes — con watermark de número */}
        {rest.map((s, i) => {
          const Icon = s.icon
          const num = String(i + 2).padStart(2, '0')
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-4xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)] cursor-pointer flex flex-col justify-between"
            >
              {/* Número watermark */}
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-2 text-7xl font-extralight leading-none text-slate-100 select-none tracking-tighter transition-colors group-hover:text-[rgb(var(--brand-base)/0.15)]"
              >
                {num}
              </span>

              <div className="relative flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-med))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <Icon className="h-4.5 w-4.5" />
                </span>
              </div>

              <div className="relative">
                <h3 className="text-[15px] font-medium text-[rgb(var(--brand-dark))] leading-snug">
                  {s.title}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-[rgb(var(--brand-base)/0.4)] transition-colors group-hover:text-[rgb(var(--brand-base))]">
                    Solicitar
                  </span>
                  <div className="h-px w-4 bg-[rgb(var(--brand-base)/0.4)] transition-all duration-500 group-hover:w-8 group-hover:bg-[rgb(var(--brand-base))]" />
                </div>
              </div>
            </motion.article>
          )
        })}


      </div>
    </section>
  )
}
