import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { whatsappUrlWithMessage } from '@/config/constants'
import {
  ETHICS_LINKS,
  RESULTADOS_LINKS,
  MAIN_LINKS,
  PACIENTES_CATEGORIES,
} from './navData'

const WHATSAPP_URL = whatsappUrlWithMessage('Hola, me gustaría agendar una cita en Detecta')

type MobileSection = 'pacientes' | 'ethics' | 'laboratorio' | null

/**
 * Drawer del menú móvil. Acordeones para Pacientes / Ética / Laboratorio
 * + enlaces planos + CTA al final.
 */
export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<MobileSection>(null)

  const toggle = (key: Exclude<MobileSection, null>) =>
    setExpanded((prev) => (prev === key ? null : key))

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="max-h-[80vh] overflow-hidden overflow-y-auto lg:hidden"
      style={{
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(15,23,42,0.06)',
      }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-6">
        {/* Pacientes accordion (con sub-categorías) */}
        <div className="mb-1 border-b border-slate-100 pb-3">
          <AccordionToggle
            label="Para Pacientes"
            open={expanded === 'pacientes'}
            onClick={() => toggle('pacientes')}
          />
          <AnimatePresence>
            {expanded === 'pacientes' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                {PACIENTES_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="mb-4 mt-3 pl-3">
                    <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0199C6]">
                      {cat.title}
                    </p>
                    <div className="flex flex-col gap-0.5">
                      {cat.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={onClose}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-500 transition-all hover:bg-[#0070A5]/5 hover:text-[#0070A5]"
                        >
                          <span className="h-1 w-1 flex-shrink-0 rounded-full bg-slate-300" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enlaces planos */}
        {MAIN_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-[#0070A5]"
          >
            {link.label}
          </Link>
        ))}

        {/* Ética accordion */}
        <SubAccordion
          label="Ética"
          open={expanded === 'ethics'}
          onToggle={() => toggle('ethics')}
          items={ETHICS_LINKS}
          onItemClick={onClose}
        />

        {/* Resultados accordion */}
        <SubAccordion
          label="Resultados"
          open={expanded === 'laboratorio'}
          onToggle={() => toggle('laboratorio')}
          items={RESULTADOS_LINKS}
          onItemClick={onClose}
        />

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-[11px] font-semibold tracking-[0.18em] text-white shadow-lg"
        >
          AGENDAR CITA
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}

// ─── Sub-componentes locales ────────────────────────────────────────────────

function AccordionToggle({
  label,
  open,
  onClick,
}: {
  label: string
  open: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50"
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-300 ${
          open ? 'rotate-180 text-[#0070A5]' : 'text-slate-400'
        }`}
      />
    </button>
  )
}

function SubAccordion({
  label,
  open,
  onToggle,
  items,
  onItemClick,
}: {
  label: string
  open: boolean
  onToggle: () => void
  items: { label: string; to: string }[]
  onItemClick: () => void
}) {
  return (
    <div>
      <AccordionToggle label={label} open={open} onClick={onToggle} />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-3"
          >
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onItemClick}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-500 transition-all hover:bg-slate-50 hover:text-[#0070A5]"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
