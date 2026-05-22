import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { HeroMarquee } from '../specialty'
import { MARQUEE_ITEMS, heroVideo } from './data'

export default function HeroContacto() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-900 pt-24 lg:pt-20">
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/55 via-slate-950/30 to-slate-950/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950/70 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-6"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Contacto
          </p>
          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Estamos para{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              ayudarte.
            </span>
          </h1>
          <p className="max-w-xl text-base font-light leading-relaxed text-slate-200 lg:text-[17px]">
            Déjanos tus datos y un asesor te responderá a la brevedad.
            También puedes contactarnos directamente por nuestros canales
            oficiales.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#formulario"
              className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 no-underline"
            >
              <span className="rounded-full bg-white px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                Escríbenos ahora
              </span>
              <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </a>

            <a
              href="https://wa.me/51922335134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white backdrop-blur-md transition hover:bg-white hover:text-[rgb(var(--brand-dark))]"
            >
              <MessageCircle className="h-4 w-4" />
              Consulta por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <HeroMarquee items={MARQUEE_ITEMS} />
    </section>
  )
}
