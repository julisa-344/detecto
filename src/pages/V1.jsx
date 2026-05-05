import { useCallback, useEffect, useRef, useState } from 'react'
import VersionNavWidget from '../components/VersionNavWidget'
import Splash from '../components/v1/Splash'
import Header from '../components/v1/Header'
import Hero from '../components/v1/Hero'
import AccionesRapidas from '../components/v1/AccionesRapidas'
import Especialidades from '../components/v1/Especialidades'
import StaffMedico from '../components/v1/StaffMedico'
import PorQueNosotros from '../components/v1/PorQueNosotros'
import AppDetecta from '../components/v1/AppDetecta'
import Partners from '../components/v1/Partners'
import WhatsAppButton from '../components/WhatsAppButton'
import Footer from '../components/v1/Footer'
import detecto from '../assets/detecto.png'

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const lerp = (a, b, t) => a + (b - a) * t
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

export default function V1() {
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashDone = useCallback(() => setSplashDone(true), [])

  const heroSlotRef = useRef(null)
  const targetSlotRef = useRef(null)
  const detectoRef = useRef(null)

  const [landed, setLanded] = useState(false)

  useEffect(() => {
    let raf = 0
    let mounted = true

    const update = () => {
      if (!mounted) return
      const heroEl = heroSlotRef.current
      const targetEl = targetSlotRef.current
      const detectoEl = detectoRef.current

      if (heroEl && targetEl && detectoEl) {
        const heroRect = heroEl.getBoundingClientRect()
        const targetRect = targetEl.getBoundingClientRect()
        const vh = window.innerHeight

        const startTrigger = vh * 0.95
        const endTrigger = vh * 0.35
        const raw = (startTrigger - targetRect.top) / (startTrigger - endTrigger)
        const progress = clamp(raw, 0, 1)
        const eased = easeInOutQuad(progress)

        const left = lerp(heroRect.left, targetRect.left, eased)
        const top = lerp(heroRect.top, targetRect.top, eased)
        const width = lerp(heroRect.width, targetRect.width, eased)
        const rotate = -8 * eased

        detectoEl.style.left = `${left}px`
        detectoEl.style.top = `${top}px`
        detectoEl.style.width = `${width}px`
        detectoEl.style.transform = `rotate(${rotate}deg)`
        detectoEl.style.opacity = '1'

        // Hide the static Hero img once the floating one takes over
        heroEl.style.opacity = eased > 0.01 ? '0' : '1'
        heroEl.style.transition = 'opacity 200ms'

        setLanded(prev => {
          if (!prev && eased >= 0.97) return true
          if (prev && eased < 0.90) return false
          return prev
        })
      }

      raf = requestAnimationFrame(update)
    }

    raf = requestAnimationFrame(update)
    return () => {
      mounted = false
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {!splashDone && <Splash onDone={handleSplashDone} />}
      <Header />
      <Hero slotRef={heroSlotRef} />
      <AccionesRapidas slotRef={targetSlotRef} landed={landed} />
      <Especialidades />
      <StaffMedico />
      <PorQueNosotros />
      <AppDetecta />
      <Partners />

      <img
        ref={detectoRef}
        src={detecto}
        alt="Detecto IA"
        className="drop-shadow-2xl select-none pointer-events-none"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 0,
          opacity: 0,
          transformOrigin: 'center center',
          willChange: 'transform, left, top, width',
          zIndex: 30,
        }}
      />

      <Footer />
      <WhatsAppButton />
      <VersionNavWidget current="Versión 01 — Glass Premium" />
    </div>
  )
}
