import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { situacionesReportables, canalContactos } from './data'

export default function CanalDenuncias() {
  return (
    <section id="canal" className="relative -mx-6 rounded-4xl bg-(--brand-bg-ultra) px-6 py-20 lg:-mx-12 lg:px-16 lg:py-28">
      <div className="relative grid items-stretch gap-16 lg:grid-cols-2 lg:gap-24">
        {/* ── COLUMNA IZQUIERDA: CARD NAVY CON SITUACIONES ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-4xl bg-[rgb(var(--brand-dark))] p-10 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.45)] lg:p-12">
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[rgb(var(--brand-base))]">
                Situaciones que pueden reportarse
              </p>
              <h3 className="mt-3 text-2xl font-light leading-tight tracking-tight text-white lg:text-3xl">
                Seis tipos de situaciones
              </h3>

              <ul className="mt-8 space-y-3.5">
                {situacionesReportables.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--brand-base))]" />
                    <span className="text-[13px] font-light leading-relaxed text-white/85">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── COLUMNA DERECHA: CONTENIDO ── */}
        <div className="relative flex h-full flex-col">
          <SectionEyebrow>Canal de Ética</SectionEyebrow>
          <SectionTitle className="mb-4">
            Reporta de forma{' '}
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              segura y confidencial
            </em>
          </SectionTitle>
          <p className="text-[15px] font-light leading-7 text-slate-500">
            Detecta Clínica pone a disposición un canal seguro y confidencial
            para reportar situaciones que puedan vulnerar los principios
            éticos, las políticas internas o la normativa aplicable.
          </p>



          {/* Tarjetas de contacto */}
          <div className="mt-auto grid gap-5 pt-12 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {canalContactos.map((c) => {
              const Icon = c.icon
              const Wrapper = c.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className={`group flex items-center gap-4 rounded-2xl bg-[rgb(var(--brand-dark))] p-6 transition-all ${
                    c.href ? 'cursor-pointer hover:bg-[rgb(var(--brand-base))]' : ''
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-white/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-white">
                      {c.label}
                    </p>
                    <p className="mt-0.5 truncate text-[12.5px] font-light text-white/70">
                      {c.value}
                    </p>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
