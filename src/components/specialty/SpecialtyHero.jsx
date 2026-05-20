import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { fadeUp } from './theme'

export default function SpecialtyHero({
  eyebrow = 'Especialidad médica',
  titlePre,
  titleAccent,
  paragraph,
  video,
  image,
  ctaLabel = 'Agendar una cita',
  whatsappHref = 'https://wa.me/51000000000',
  whatsappLabel = 'Consulta por WhatsApp',
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-slate-950 pb-20 pt-24 lg:items-center lg:pb-0 lg:pt-20">
      {video ? (
        <video
          muted
          loop
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
      ) : null}

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/55 via-slate-950/25 to-slate-950/5" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-5"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            {eyebrow}
          </p>

          <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {titlePre}{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              {titleAccent}
            </span>
          </h1>

          {paragraph && (
            <p className="max-w-lg text-[14.5px] font-light leading-relaxed text-slate-200 lg:text-[15.5px]">
              {paragraph}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://appointments.detecta.pe/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 no-underline"
            >
              <span className="rounded-full bg-white px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                {ctaLabel}
              </span>
              <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white backdrop-blur-md transition hover:bg-white hover:text-[rgb(var(--brand-dark))]"
            >
              <MessageCircle className="h-4 w-4" />
              {whatsappLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
