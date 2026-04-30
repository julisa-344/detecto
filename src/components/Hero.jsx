import { useEffect, useRef } from 'react'
import detecto from '../assets/detecto.png'

const PARTICLE_COUNT = 60

function initParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(Math.random() * 0.4 + 0.1), // drift upward
    opacity: Math.random() * 0.5 + 0.15,
  }))
}

export default function Hero() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particlesRef.current = initParticles(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    // primary color: approximate from Tailwind config — use a teal/blue-green
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mouseRef.current
      const REPEL_RADIUS = 100
      const REPEL_STRENGTH = 1.8

      for (const p of particlesRef.current) {
        // Mouse repulsion
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }

        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap vertically
        if (p.y < -p.radius) {
          p.y = canvas.height + p.radius
          p.x = Math.random() * canvas.width
        }
        if (p.x < -p.radius) p.x = canvas.width + p.radius
        if (p.x > canvas.width + p.radius) p.x = -p.radius

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 153, 198, ${p.opacity})`
        ctx.fill()
      }

      // Draw subtle connecting lines between nearby particles
      const ps = particlesRef.current
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x
          const dy = ps[i].y - ps[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.strokeStyle = `rgba(0, 153, 198, ${0.1 * (1 - dist / 90)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24">
      
      {/* Bottom gradient fuerte */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>
      </div>

      {/* Glow sutil tecnológico */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/30 blur-[160px] opacity-60"></div>

      {/* Grid ultra sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Canvas de partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'all' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-gray-900">
              Detectar a tiempo
              <span className="block text-primary">
                cambia todo
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Tecnología avanzada para diagnóstico temprano, con la precisión
              que necesitas y la tranquilidad que buscas.
            </p>

            {/* CTA mejorado */}
            <div className="mt-10">
              <a
                href="#agendar"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-medium overflow-hidden"
              >
                <span className="relative z-10">
                  Comenzar evaluación
                </span>

                {/* efecto innovador */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 transition-transform group-hover:translate-x-1">
                  →
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            
            {/* Halo detrás */}
            <div className="absolute w-[320px] h-[320px] bg-primary/20 rounded-full blur-3xl"></div>

            {/* Mascota */}
            <img
              src={detecto}
              alt="Detecto IA"
              className="relative z-10 w-56 sm:w-64 lg:w-72 drop-shadow-2xl"
            />

            {/* Detalle innovador: orb flotante */}
            <div className="absolute -top-6 right-10 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
