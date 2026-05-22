import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { fadeUp } from '../specialty'
import heroVideo from '../../assets/medicinaoncologicahero.mp4'

export default function OncologiaHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-slate-950 pb-20 pt-24 lg:items-center lg:pb-0 lg:pt-20">
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-950/40 to-slate-950/10" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-6"
        >
   

          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Diagnóstico y{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              tratamiento integral.
            </span>
          </h1>

          <p className="max-w-xl text-base font-light leading-relaxed text-slate-200 lg:text-[17px]">
            Tecnología de Alta Precisión y calidez humana para acompañarte en cada
            etapa de tu recuperación, con un equipo multidisciplinario enfocado
            en tu bienestar.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://appointments.detecta.pe/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 no-underline"
            >
              <span className="rounded-full bg-white px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                Agendar una cita
              </span>
              <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </a>

            <a
              href="https://wa.me/51000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white backdrop-blur-md transition hover:bg-white hover:text-[rgb(var(--brand-dark))]"
            >
              <MessageCircle className="h-4 w-4" />
              Consulta por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
