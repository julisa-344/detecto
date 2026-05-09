import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Phone, MapPin } from 'lucide-react'
import CTAButton from './CTAButton'

const contactItems = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    val: '+51 922 335 154',
    href: 'https://wa.me/51922335154',
    accent: 'text-emerald-500',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    val: '(01) 217 5100',
    href: 'tel:+5112175100',
    accent: 'text-[#0199C6]',
  },
  {
    icon: MapPin,
    label: 'Sede',
    val: 'Av. Angamos 2688, Surquillo',
    href: '#',
    accent: 'text-slate-500',
  },
]

export default function QuickContact() {
  return (
    <aside className="overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-[#F7FCFE] to-[#EEF9FC] px-6 py-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0199C6]/10 blur-2xl" />
        <div className="relative z-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0199C6]">
            Contacto
          </p>
          <h3 className="mt-2 text-[20px] font-light leading-snug text-slate-900">
            ¿Tienes dudas? <span className="font-medium text-[#0070A5]">Estamos aquí.</span>
          </h3>
        </div>
      </div>

      <div className="px-2 py-2">
        {contactItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-[#F7FCFE]"
          >
            <span className={`shrink-0 ${item.accent}`}>
              <item.icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
            </span>
            <div className="min-w-0 flex-1">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {item.label}
              </span>
              <span className="mt-0.5 block truncate text-[13.5px] font-medium text-slate-800">
                {item.val}
              </span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0199C6]" />
          </motion.a>
        ))}
      </div>

      <div className="border-t border-slate-100 px-5 pb-5 pt-5">
        <CTAButton label="AGENDAR CITA" />
      </div>
    </aside>
  )
}
