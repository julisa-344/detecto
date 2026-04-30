import { useEffect, useRef } from 'react'
import detecto from '../assets/detecto.png'

// ─── Config ───────────────────────────────────────────────────────
const COUNT      = 940
const LINK_DIST  = 80
const ATTR_F     = 0.28    // atracción al cursor (global)
const ATTR_DAMP  = 0.82    // amortiguación cerca del cursor
const IDLE_DAMP  = 0.97    // amortiguación sin cursor
const REPEL_R    = 28      // radio de repulsión inter-partícula
const REPEL_F    = 0.32    // fuerza repulsión
const MAX_SPD    = 6.0
const PRIMARY    = '1,153,198'

function smoothNoise(t) {
  return (Math.sin(t * 1.3) + Math.sin(t * 2.7 + 1.1) + Math.sin(t * 0.7 + 2.5)) / 3
}

function mkParticle(w, h) {
  const angle = Math.random() * Math.PI * 2
  const speed = Math.random() * 0.4 + 0.1
  return {
    x:  Math.random() * w,
    y:  Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r:  Math.random() * 2.2 + 0.8,
    op: Math.random() * 0.5 + 0.15,
    nox: Math.random() * 1000,
    noy: Math.random() * 1000,
    ns:  Math.random() * 0.002 + 0.0006,
  }
}

export default function Hero({ slotRef }) {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const psRef     = useRef([])
  const rafRef    = useRef(null)
  const tRef      = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      psRef.current = Array.from({ length: COUNT }, () =>
        mkParticle(canvas.width, canvas.height)
      )
    }

    resize()
    window.addEventListener('resize', resize)

    const onMove  = (e) => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }
    window.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    const draw = () => {
      tRef.current++
      const t  = tRef.current
      const W  = canvas.width
      const H  = canvas.height
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const hasCursor = mx > -100

      ctx.clearRect(0, 0, W, H)
      const ps = psRef.current

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i]

        // ── Drift orgánico (siempre activo, suave) ──
        p.vx += smoothNoise(p.nox + t * p.ns) * 0.03
        p.vy += smoothNoise(p.noy + t * p.ns) * 0.03

        if (hasCursor) {
          // ── Atracción global al cursor ──
          const dx = mx - p.x
          const dy = my - p.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d > 0) {
            // Fuerza plana — responde igual sin importar la distancia
            const strength = ATTR_F
            p.vx += (dx / d) * strength
            p.vy += (dy / d) * strength
          }
          // Amortiguación fuerte → la masa se "congela" alrededor del cursor
          p.vx *= ATTR_DAMP
          p.vy *= ATTR_DAMP
        } else {
          p.vx *= IDLE_DAMP
          p.vy *= IDLE_DAMP
        }

        // ── Repulsión inter-partícula (mantiene la nube dispersa) ──
        for (let j = i + 1; j < ps.length; j++) {
          const q  = ps[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < REPEL_R && d > 0) {
            const f = (1 - d / REPEL_R) * REPEL_F
            const fx = (dx / d) * f
            const fy = (dy / d) * f
            p.vx += fx;  p.vy += fy
            q.vx -= fx;  q.vy -= fy
          }
        }

        // ── Speed cap ──
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > MAX_SPD) { p.vx = (p.vx / spd) * MAX_SPD; p.vy = (p.vy / spd) * MAX_SPD }

        p.x += p.vx
        p.y += p.vy

        // Wrap
        if (p.x < -4) p.x = W + 4
        if (p.x > W + 4) p.x = -4
        if (p.y < -4) p.y = H + 4
        if (p.y > H + 4) p.y = -4

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${PRIMARY},${p.op})`
        ctx.fill()
      }

      // ── Líneas de conexión ──
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x
          const dy = ps[i].y - ps[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK_DIST) {
            ctx.beginPath()
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.strokeStyle = `rgba(${PRIMARY},${0.13 * (1 - d / LINK_DIST)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ background: '#f5fbff' }}
    >
      {/* ── Mesh gradient — orbs animados lentos ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', borderRadius: '50%',
          width: 700, height: 700,
          top: '-20%', left: '-10%',
          background: 'radial-gradient(circle, rgba(1,153,198,0.13) 0%, transparent 70%)',
          animation: 'meshFloat1 18s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%',
          width: 600, height: 600,
          top: '10%', right: '-15%',
          background: 'radial-gradient(circle, rgba(0,82,162,0.10) 0%, transparent 70%)',
          animation: 'meshFloat2 22s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%',
          width: 500, height: 500,
          bottom: '-10%', left: '35%',
          background: 'radial-gradient(circle, rgba(1,153,198,0.09) 0%, transparent 70%)',
          animation: 'meshFloat3 16s ease-in-out infinite alternate',
        }} />
      </div>

      {/* ── Gradiente inferior ── */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary-dark/75 via-primary/10 to-transparent" />

      {/* ── Canvas partículas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
          

<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.1] text-gray-900">
  <span className="block whitespace-nowrap">Detectar a <br /> tiempo</span>
  <span className="block text-primary mt-1">cambia todo</span>
</h1>

            <p className="mt-6 text-lg text-gray-500 max-w-md leading-relaxed">
              Tecnología avanzada para diagnóstico temprano, con la precisión
              que necesitas y la tranquilidad que mereces.
            </p>

            <div className="mt-10">
              <a
                href="#agendar"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-dark text-white font-medium overflow-hidden shadow-lg shadow-primary/25"
              >
                <span className="relative z-10">Comenzar evaluación</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* Badge — precisión (arriba izquierda) */}
            <div className="absolute z-20 -left-2 top-6 hero-badge" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-sm border border-white shadow-lg shadow-primary/10">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0" style={{ color: '#0199C6' }}>
                  <path d="M10 2l1.8 5.4H17l-4.6 3.3 1.7 5.4L10 13l-4.1 3.1 1.7-5.4L3 7.4h5.2L10 2z"
                    stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-semibold text-gray-700">98% precisión diagnóstica</span>
              </div>
            </div>

            {/* Badge — tiempo (abajo derecha) */}
            <div className="absolute z-20 -right-2 bottom-10 hero-badge" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-sm border border-white shadow-lg shadow-primary/10">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0" style={{ color: '#0199C6' }}>
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M10 6.5v3.8l2.3 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span className="text-xs font-semibold text-gray-700">Resultados en &lt; 24 h</span>
              </div>
            </div>

            {/* Placeholder invisible — slot del shared element transition — NO mover */}
            <img
              ref={slotRef}
              src={detecto}
              alt="Detecto IA"
              className="relative z-10 w-72 sm:w-80 lg:w-[420px] drop-shadow-2xl"
              style={{ visibility: 'hidden' }}
            />
          </div>

        </div>
      </div>

      {/* Keyframes para mesh orbs y badges */}
      <style>{`
        @keyframes meshFloat1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(60px, 40px) scale(1.08); }
        }
        @keyframes meshFloat2 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-50px, 60px) scale(1.05); }
        }
        @keyframes meshFloat3 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, -50px) scale(1.06); }
        }
        @keyframes heroBadgeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroBadgeFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-5px); }
        }
        .hero-badge {
          opacity: 0;
          animation:
            heroBadgeIn 600ms cubic-bezier(0.34,1.4,0.64,1) forwards,
            heroBadgeFloat 4s ease-in-out 1.2s infinite;
        }
      `}</style>
    </section>
  )
}
