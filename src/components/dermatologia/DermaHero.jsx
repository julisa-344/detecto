import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, ShieldCheck, Calendar } from 'lucide-react'
import { fadeUp } from '../specialty'
import { dermaImages } from './data'

export default function DermaHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Fondo suave */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-(--brand-bg-ultra) via-white to-(--brand-bg-soft)" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[rgb(var(--brand-base)/0.18)] blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[rgb(var(--brand-med)/0.12)] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(var(--brand-dark)) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Texto — col 1-7 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--brand-base)/0.3)] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))] shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--brand-base))] opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-base))]" />
              </span>
              Dermatología
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extralight leading-[1.02] tracking-tight text-[rgb(var(--brand-dark))]">
              Cuidado integral para tu{' '}
              <span className="italic font-medium text-[rgb(var(--brand-base))]">
                salud dermatológica.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base lg:text-[17px] font-light leading-relaxed text-slate-500">
              Diagnóstico y tratamiento personalizado de afecciones de la piel,
              desde lo más común hasta condiciones complejas. Tecnología
              avanzada y especialistas con experiencia internacional.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
                <span className="rounded-full bg-[rgb(var(--brand-dark))] px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))]">
                  Agendar una cita
                </span>
                <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-[rgb(var(--brand-dark))] text-white transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))]">
                  <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </button>

              <a
                href="https://wa.me/51000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-700 transition hover:border-[rgb(var(--brand-base))] hover:text-[rgb(var(--brand-base))] cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                Consulta por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Bento visual — col 8-12 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-6 grid-rows-[auto_auto_auto] gap-3 h-full">
              {/* Foto principal — tall card (col 1-4, row 1-3) */}
              <div className="col-span-6 sm:col-span-4 row-span-3 relative overflow-hidden rounded-[36px] shadow-[0_30px_60px_-20px_rgb(var(--brand-base)/0.4)] aspect-[3/4] sm:aspect-auto">
                <img
                  src={dermaImages.hero}
                  alt="Cuidado dermatológico"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[rgb(var(--brand-dark)/0.45)] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[9px] font-mono font-semibold tracking-[0.22em] uppercase text-white/70">
                    Consulta dermatológica
                  </p>
                </div>
              </div>

              {/* Stat experiencia — col 5-6, row 1 */}
              <div className="col-span-3 sm:col-span-2 relative rounded-[28px] bg-[rgb(var(--brand-dark))] p-5 text-white flex flex-col justify-between min-h-[120px]">
                <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-white/60">
                  Experiencia
                </p>
                <div>
                  <p className="text-4xl font-extralight leading-none">+15</p>
                  <p className="mt-1 text-[10px] text-white/70">años</p>
                </div>
              </div>

              {/* Certificación — col 5-6, row 2 */}
              <div className="col-span-3 sm:col-span-2 rounded-[28px] bg-white border border-slate-100 p-5 flex flex-col justify-between min-h-[120px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                    Certificación
                  </p>
                  <p className="mt-0.5 text-[13px] font-medium text-slate-900 leading-tight">
                    MINSA
                  </p>
                </div>
              </div>

              {/* Cita 24h — col 5-6, row 3 */}
              <div className="col-span-6 sm:col-span-2 rounded-[28px] bg-linear-to-br from-[rgb(var(--brand-base))] to-[rgb(var(--brand-med))] p-5 text-white min-h-[120px] flex flex-col justify-between">
                <Calendar className="h-5 w-5 text-white/80" />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/80">
                    Disponibilidad
                  </p>
                  <p className="mt-0.5 text-[16px] font-medium leading-tight">
                    Cita en 24h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
