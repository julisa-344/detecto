import { useEffect, useRef, useState } from 'react'

/**
 * Hook que maneja:
 * - `visible`: si la navbar está visible (oculta cuando se scrollea hacia abajo
 *   después de 80px, vuelve cuando se scrollea hacia arriba)
 * - `scrolled`: si el usuario pasó el threshold de 40px (cambia a estilo solid)
 */
export function useNavbarScroll() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setVisible(current < lastScroll.current || current < 80)
      setScrolled(current > 40)
      lastScroll.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { visible, scrolled }
}
