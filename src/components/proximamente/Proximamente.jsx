import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const DETECTO_IMG = `${import.meta.env.VITE_BASE_IMAGE_URL}detectos/proximamente.png`

const RIBBON_REPEAT = 12
const RIBBON_BG = '#dbf7ff'

function Ribbon({ text, angle = -6, duration = 30, reverse = false, offsetY = 0 }) {
  const items = Array.from({ length: RIBBON_REPEAT })
  return (
    <div
      className="pointer-events-none absolute overflow-hidden py-3"
      style={{
        width: '200vw',
        left: '50%',
        top: `calc(30% + ${offsetY}px)`,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        transformOrigin: 'center center',
        background: RIBBON_BG,
      }}
    >
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        style={{
          animation: `ribbon-loop ${duration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {items.map((_, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--brand-dark))] lg:text-[13px]">
              {text}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand-dark)/0.4)]" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Proximamente({ pageName = 'Próximamente' }) {
  return (
    <section
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-white via-(--brand-bg-ultra) to-white pt-28 pb-16"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      {/* Glow brand sutil */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--brand-base)/0.12)] blur-[140px]" />

      {/* Dot grid sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(var(--brand-base)) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Cintillos cruzados — al medio de la página */}
      <Ribbon text={pageName} angle={-6} duration={32} offsetY={140} />
      <Ribbon text={pageName} angle={6} duration={38} reverse offsetY={140} />

      {/* Contenido central */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <div className="inline-flex items-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-dark))]">
            En desarrollo
          </span>
        </div>

        <img
          src={DETECTO_IMG}
          alt="Detecto"
          loading="lazy"
          className="relative z-10 mt-6 w-[240px] select-none drop-shadow-[0_25px_35px_rgba(15,23,42,0.18)] sm:w-[300px] lg:w-[340px]"
        />

        <h1 className="mt-5 text-4xl font-extralight uppercase leading-[0.95] tracking-tight text-[rgb(var(--brand-dark))] sm:text-5xl lg:text-6xl">
          Próxima
          <span className="italic font-medium text-[rgb(var(--brand-base))]">mente</span>
        </h1>

        <Link
          to="/v4"
          className="group relative mt-10 flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
        >
          <span className="rounded-full bg-[rgb(var(--brand-dark))] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))]">
            Volver al inicio
          </span>
          <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-[rgb(var(--brand-dark))] text-white transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))]">
            <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </Link>
      </div>

      <style>{`
        @keyframes ribbon-loop {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
