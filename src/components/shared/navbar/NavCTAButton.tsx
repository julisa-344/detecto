import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { whatsappUrlWithMessage } from '@/config/constants'

const WHATSAPP_URL = whatsappUrlWithMessage('Hola, me gustaría agendar una cita en Detecta')

/**
 * CTA "AGENDAR CITA" del Navbar.
 *
 * Estilos cambian según scroll de página (transparente vs solid).
 * En hover, todo se vuelve dark con la flecha animada.
 */
export default function NavCTAButton({ scrolled }: { scrolled: boolean }) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href="https://appointments.detecta.pe"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
    >
      <span
        className="rounded-full px-6 py-3 text-[11px] font-semibold tracking-[0.18em] transition-all duration-500 ease-in-out"
        style={{
          background: hover
            ? '#0F172A'
            : scrolled
              ? 'rgba(15,23,42,0.04)'
              : 'rgba(255,255,255,0.15)',
          color: hover ? '#ffffff' : scrolled ? '#0F172A' : '#ffffff',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: scrolled
            ? '1px solid rgba(15,23,42,0.1)'
            : '1px solid rgba(255,255,255,0.3)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        AGENDAR CITA
      </span>
      <div
        className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out"
        style={{
          background: hover
            ? '#0F172A'
            : scrolled
              ? 'rgba(15,23,42,0.08)'
              : 'rgba(255,255,255,0.25)',
          color: hover ? '#ffffff' : scrolled ? '#0F172A' : '#ffffff',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: scrolled
            ? '1px solid rgba(15,23,42,0.1)'
            : '1px solid rgba(255,255,255,0.4)',
          zIndex: 2,
        }}
      >
        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </a>
  )
}
