import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { fadeUp, HeroMarquee } from '../specialty'

const heroVideo = `${import.meta.env.VITE_BASE_IMAGE_URL}investigacion/investigacionBanner.mp4`

export default function InvestigacionHero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-900 pt-24 lg:pt-20">
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/45 via-slate-950/20 to-slate-950/5" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950/60 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-6"
        >

          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Investigación que{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              transforma vidas.
            </span>
          </h1>

          <p className="max-w-xl text-base font-light leading-relaxed text-slate-200 lg:text-[17px]">
            Estudios clínicos y proyectos que impactan la salud real de
            nuestros pacientes, con autorización del Instituto Nacional de Salud
            y patrocinio de farmacéuticas internacionales.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/v4/contacto"
              className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 no-underline transition-all active:scale-95"
            >
              <span className="rounded-full bg-white px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                Solicitar información
              </span>
              <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </Link>

            <a
              href="https://wa.me/51000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white backdrop-blur-md transition hover:text-primary hover:border-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Consulta por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <HeroMarquee
        items={[
          'Publicaciones Internacionales',
          'Estudios Clínicos',
          'Investigación Oncológica',
          'Innovación Médica',
          'Protocolos Validados',
          'Avances Científicos',
        ]}
      />
    </section>
  )
}
