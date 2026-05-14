import { SectionEyebrow, SectionTitle } from '../specialty'
import { pasosModelo } from './data'

export default function ModeloGestion() {
  const loop = [...pasosModelo, ...pasosModelo]

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Cómo funciona</SectionEyebrow>
        <SectionTitle className="mb-3">
          Nuestro modelo de{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            gestión ética
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Un flujo claro de cinco pasos que garantiza coherencia entre principios
          y práctica.
        </p>
      </div>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="flex w-max gap-6 animate-[modelo-marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => {
            const Icon = p.icon
            return (
              <article
                key={`${p.n}-${i}`}
                className="group/card relative flex h-[420px] w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_25px_50px_-20px_rgb(var(--brand-base)/0.35)] sm:w-[340px]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[rgb(var(--brand-base)/0.08)] opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
                />

                <div className="relative">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-base))]">
                    Paso {p.n}
                  </span>
                  <span
                    aria-hidden
                    className="absolute -top-4 right-0 font-serif text-[80px] font-light leading-none text-[rgb(var(--brand-base)/0.08)] transition-all duration-500 group-hover/card:text-[rgb(var(--brand-base)/0.18)] group-hover/card:-translate-y-1"
                  >
                    {p.n}
                  </span>
                </div>

                <div className="relative mt-auto">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(var(--brand-base)/0.12)] text-[rgb(var(--brand-base))] transition-transform duration-500 group-hover/card:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[17px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-light leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes modelo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
