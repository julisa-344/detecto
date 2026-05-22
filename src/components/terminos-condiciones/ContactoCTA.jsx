import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, Mail } from 'lucide-react'

export default function ContactoCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-16 overflow-hidden rounded-4xl bg-[rgb(var(--brand-dark))] p-8 sm:p-12"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[rgb(var(--brand-base)/0.25)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-[rgb(var(--brand-med)/0.25)] blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            ¿Dudas o consultas?
          </span>
          <h3 className="mt-5 text-2xl font-light leading-tight tracking-tight text-white sm:text-3xl">
            Escríbenos para ejercer tus derechos sobre tus datos.
          </h3>
          <p className="mt-4 text-[14.5px] font-light leading-7 text-white/80">
            Nuestro equipo te responderá en un plazo razonable.
          </p>
        </div>

        <Link
          to="/v4/contacto"
          className="group inline-flex items-center gap-3 self-start rounded-full bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-dark))] transition-all hover:bg-[rgb(var(--brand-base))] hover:text-white"
        >
          <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Ir a contacto
        </Link>
      </div>
    </motion.div>
  )
}
