import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import logoColor from '@/assets/home/logo.png'
import { CONTACT } from '@/config/constants'

// ─── Social icons ─────────────────────────────────────────────────────────────
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 001.38 2.13 5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.21-.11.51-.11.81V19h-3V8h3v1.27c.4-.62 1.11-1.5 2.7-1.5 1.97 0 3.46 1.29 3.46 4.05V19z" />
  </svg>
)

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
)

const socials = [
  { Icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/DetectaClinica/?locale=es_LA' },
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/detecta.clinica/' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://pe.linkedin.com/company/detecta-clinica' },
  { Icon: YoutubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@Detecta.Clinica' },
]

interface FooterProps {
  /** Reservado para futura sección CTA sobre el footer. Default: true */
  showCTA?: boolean
}

export default function Footer({ showCTA: _showCTA = true }: FooterProps) {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >

      {/* ── 2. GLASS CARD ────────────────────────────────────────────────────── */}
      <div className="w-full px-4 pb-8 pt-10 sm:px-6 lg:px-10 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl border border-white/40 px-6 py-8 shadow-[0_30px_80px_-30px_rgba(0,112,165,0.18)] lg:px-10 lg:py-10"
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(24px) saturate(140%)',
            WebkitBackdropFilter: 'blur(24px) saturate(140%)',
          }}
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#52C0E1]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#AFEAFC]/20 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-12">

            {/* Brand col-4 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-5 lg:col-span-4"
            >
              <img src={logoColor} alt="Detecta Clínica" className="h-10 w-auto self-start object-contain" />
              <p className="max-w-xs text-[14px] font-light leading-relaxed text-slate-600">
                Líderes en detección temprana e innovación oncológica en el Perú.
              </p>
              <div className="flex items-center gap-2 pt-1">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0070A5] hover:bg-[#0070A5] hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Links col-8 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8"
            >
              {/* Servicios */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#0070A5]">Servicios</h3>
                <ul className="flex flex-col gap-2.5 text-[13px] font-light text-slate-600">
                  <li><Link to="/especialidades/oncologia-medica" className="transition-colors hover:text-[#0070A5]">Oncología Médica</Link></li>
                  <li><Link to="/servicios/diagnostico-por-imagenes" className="transition-colors hover:text-[#0070A5]">Diagnóstico por Imágenes</Link></li>
                  <li><Link to="/servicios/laboratorio-clinico" className="transition-colors hover:text-[#0070A5]">Laboratorio Clínico</Link></li>
                  <li><Link to="/servicios/hospitalizacion" className="transition-colors hover:text-[#0070A5]">Hospitalización</Link></li>
                </ul>
              </div>

              {/* Nosotros */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#0070A5]">Nosotros</h3>
                <ul className="flex flex-col gap-2.5 text-[13px] font-light text-slate-600">
                  <li><Link to="/nosotros" className="transition-colors hover:text-[#0070A5]">Sobre Detecta</Link></li>
                  <li><Link to="/staff-medico" className="transition-colors hover:text-[#0070A5]">Staff Médico</Link></li>
                  <li><Link to="/investigacion" className="transition-colors hover:text-[#0070A5]">Investigación</Link></li>
                  <li><Link to="/comite-etica" className="transition-colors hover:text-[#0070A5]">Comité de Ética</Link></li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#0070A5]">Contacto</h3>
                <ul className="flex flex-col gap-2.5 text-[13px] font-light text-slate-600">
                  <li>
                    <a href={CONTACT.centralPhoneTel} className="transition-colors hover:text-[#0070A5]">
                      {CONTACT.centralPhoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0070A5]">
                      WhatsApp {CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${CONTACT.emailGeneral}`} className="transition-colors hover:text-[#0070A5]">
                      {CONTACT.emailGeneral}
                    </a>
                  </li>
                  <li className="text-slate-400">{CONTACT.address}</li>
                </ul>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#0070A5]">Legal</h3>
                <ul className="flex flex-col gap-2.5 text-[13px] font-light text-slate-600">
                  <li><Link to="/privacidad" className="transition-colors hover:text-[#0070A5]">Privacidad</Link></li>
                  <li><Link to="/terminos-y-condiciones" className="transition-colors hover:text-[#0070A5]">Términos y Condiciones</Link></li>
                  <li><Link to="/libro-de-reclamaciones" className="transition-colors hover:text-[#0070A5]">Libro de Reclamaciones</Link></li>
                  <li><Link to="/contacto" className="transition-colors hover:text-[#0070A5]">Contacto</Link></li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/50 pt-5 text-[10px] font-medium uppercase tracking-[0.2em] sm:flex-row">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Detecta Clínica · Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
