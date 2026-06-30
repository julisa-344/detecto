import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { ReactNode, useEffect, useRef, useState } from "react"
import splashVideo from "../../assets/responsabilidad/detectosplash.mp4"

declare global {
  interface Window {
    __detectaIntroSplashDone?: boolean
  }
}

interface PageTransitionProps {
  children: ReactNode
}

const SWAP_AT_MS = 1400  // cuándo cambiar el contenido de la página
const TOTAL_MS  = 2900   // cuándo retirar el overlay (incluye zoom-out de 0.6s)

// ─── Overlay con la animación del Splash ───
export function Overlay({ id }: { id: string }) {
  const [phase, setPhase] = useState<"loading" | "scan" | "shimmer" | "zoomout">("loading")
  const [ready, setReady]   = useState(false)
  const videoRef  = useRef<HTMLVideoElement>(null)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const startTimeline = () => {
    if (ready) return
    setReady(true)
    setPhase("scan")
    const t1 = setTimeout(() => setPhase("shimmer"), 1100)
    const t2 = setTimeout(() => setPhase("zoomout"), 2200)
    timersRef.current = [t1, t2]
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (video.readyState >= 3) { startTimeline(); return }
    video.addEventListener("canplay", startTimeline, { once: true })
    const fallback = setTimeout(startTimeline, 800)
    return () => {
      video.removeEventListener("canplay", startTimeline)
      clearTimeout(fallback)
      timersRef.current.forEach(clearTimeout)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const isExiting = phase === "zoomout"

  return (
    <motion.div
      key={id + "-overlay"}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white"
      animate={isExiting ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={isExiting ? { duration: 0.6, ease: [0.2, 0, 0.4, 1] } : { duration: 0 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="relative w-64 h-64 overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: ready ? 1 : 0, scale: ready ? 1 : 0.9 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover bg-white"
          >
            <source src={splashVideo} type="video/mp4" />
          </video>

          {phase === "shimmer" && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-medium text-[#0199C6]" style={{ fontFamily: "Lexend, sans-serif" }}>
            Detecta Clínica
          </h2>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Aviso global de "splash de entrada ya terminó" ───
// Las animaciones de entrada de cada página deben esperar a esto antes de
// jugar; si no, terminan mientras el splash blanco todavía las tapa.
export const INTRO_SPLASH_EVENT = 'detecta:intro-splash-done'

export function isIntroSplashDone() {
  return typeof window !== 'undefined' && window.__detectaIntroSplashDone === true
}

// ─── Hook para App.tsx ───
export function usePageTransition() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [isTransitioning, setIsTransitioning] = useState(!isIntroSplashDone())

  // Cierra el splash inicial
  useEffect(() => {
    if (isIntroSplashDone()) return
    const t = setTimeout(() => {
      setIsTransitioning(false)
      window.__detectaIntroSplashDone = true
      window.dispatchEvent(new Event(INTRO_SPLASH_EVENT))
    }, TOTAL_MS)
    return () => clearTimeout(t)
  }, []) // solo una vez

  // Transición entre rutas (solo cuando el home está involucrado)
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      const involvesHome = location.pathname === '/'
      if (involvesHome) {
        setIsTransitioning(true)
        const t1 = setTimeout(() => setDisplayLocation(location), SWAP_AT_MS)
        const t2 = setTimeout(() => setIsTransitioning(false), TOTAL_MS)
        return () => { clearTimeout(t1); clearTimeout(t2) }
      } else {
        setDisplayLocation(location)
      }
    }
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  return { displayLocation, isTransitioning, currentPath: location.pathname }
}

// ─── Wrapper (por compatibilidad) ───
export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true)
      const t1 = setTimeout(() => setDisplayLocation(location), SWAP_AT_MS)
      const t2 = setTimeout(() => setIsTransitioning(false), TOTAL_MS)
      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>{children}</div>
      <AnimatePresence>
        {isTransitioning && <Overlay key={location.pathname} id={location.pathname} />}
      </AnimatePresence>
    </>
  )
}
