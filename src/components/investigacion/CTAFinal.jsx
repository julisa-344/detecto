import { motion } from 'framer-motion'
import { ArrowUpRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTAFinal() {
  return (
    <section className="relative w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-6"
      >
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-primary-medium md:text-[11px]">
          Ensayos clínicos en curso
        </p>
        <h2 className="mb-6 text-4xl font-light leading-[1.05] tracking-tighter text-primary-dark md:text-6xl">
          La innovación médica <br />
          <span className="font-normal text-slate-900">empieza investigando.</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-base font-light leading-relaxed text-slate-500 md:text-lg">
          Si quieres saber si calificas para un estudio activo o explorar una
          colaboración con nuestro centro, conversemos.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link
            to="/v4/contacto"
            className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 no-underline transition-all active:scale-95"
          >
            <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900">
              Solicitar información
            </span>
            <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-primary-dark text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900">
              <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>

          <a
            href="tel:+5112175100"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-dark no-underline transition-all hover:border-primary-medium hover:text-primary-medium active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Llamar al (01) 217 5100
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
