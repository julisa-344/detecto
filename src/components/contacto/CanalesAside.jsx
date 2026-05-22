import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SOCIALS } from './data'

export default function CanalesAside() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4"
    >
      <div className="mb-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
          Hablemos
        </p>
        <h3 className="mt-2 text-2xl font-light leading-tight text-primary-dark lg:text-3xl">
          Información de{' '}
          <span className="italic font-medium text-primary-medium">contacto</span>
        </h3>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.15)] transition-all hover:border-primary-medium/30 hover:shadow-[0_20px_45px_-20px_rgba(0,112,165,0.25)]">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
          <Phone className="h-4 w-4" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-primary-dark">Teléfono</p>
          <a href="tel:+5112175100" className="mt-1 block text-[13px] font-light text-slate-500 hover:text-primary-medium transition-colors">
            (01) 217 5100
          </a>
          <a
            href="https://wa.me/51922335134"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[13px] font-light text-slate-500 hover:text-primary-medium transition-colors"
          >
            +51 922 335 134 · WhatsApp
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.15)] transition-all hover:border-primary-medium/30 hover:shadow-[0_20px_45px_-20px_rgba(0,112,165,0.25)]">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
          <Mail className="h-4 w-4" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-primary-dark">Correo electrónico</p>
          <a href="mailto:citas@detecta.pe" className="mt-1 block text-[13px] font-light text-slate-500 hover:text-primary-medium transition-colors">
            citas@detecta.pe
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.15)] transition-all hover:border-primary-medium/30 hover:shadow-[0_20px_45px_-20px_rgba(0,112,165,0.25)]">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
          <Clock className="h-4 w-4" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-primary-dark">Horario de atención</p>
          <p className="mt-1 text-[13px] font-light text-slate-500">Lun – Vie · 7:00 a.m. – 8:00 p.m.</p>
          <p className="text-[13px] font-light text-slate-500">Sábado · 8:00 a.m. – 2:00 p.m.</p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.15)] transition-all hover:border-primary-medium/30 hover:shadow-[0_20px_45px_-20px_rgba(0,112,165,0.25)]">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
          <MapPin className="h-4 w-4" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-primary-dark">Sede principal</p>
          <p className="mt-1 text-[13px] font-light text-slate-500">Av. Angamos Este 2688, Surquillo, Lima</p>
        </div>
      </div>

      <div className="mt-auto flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.15)]">
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">Síguenos</p>
          <div className="mt-3 flex gap-2">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-500 ring-1 ring-slate-100 transition-all hover:bg-primary-medium hover:text-white hover:ring-primary-medium hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
