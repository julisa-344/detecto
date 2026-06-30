import { Link } from 'react-router-dom'
import logoWhite from '@/assets/home/LogoDetectaHorizontalblanco.png'
import logoDark from '@/assets/home/logo.png'

/**
 * Logo del Navbar con efecto crossfade entre versión blanca y oscura
 * según el estado de scroll de la página.
 */
export default function NavLogo({
  scrolled,
  onClick,
}: {
  scrolled: boolean
  onClick?: () => void
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="relative h-9 w-[150px] shrink-0 transition-opacity duration-300 hover:opacity-70"
    >
      <img
        src={logoWhite}
        alt="Detecta Clínica"
        className="absolute inset-0 h-9 w-auto transition-opacity duration-500"
        style={{ opacity: scrolled ? 0 : 1 }}
      />
      <img
        src={logoDark}
        alt="Detecta Clínica"
        className="absolute inset-0 h-9 w-auto transition-opacity duration-500"
        style={{ opacity: scrolled ? 1 : 0 }}
      />
    </Link>
  )
}
