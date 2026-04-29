import { useEffect, useRef } from 'react'
import partnersVideo from '../assets/partners.mp4'

import logo1 from '../assets/logo1.webp'
import logo2 from '../assets/logo2.webp'
import logo3 from '../assets/logo3.webp'
import logo4 from '../assets/logo4.webp'
import logo5 from '../assets/logo5.webp'

const logos = [logo1, logo2, logo3, logo4, logo5]

export default function Partners() {
  const trackRef = useRef(null)

  useEffect(() => {
    let animationFrame
    let position = 0

    const speed = 0.5

    const animate = () => {
      if (!trackRef.current) return

      position -= speed

      if (Math.abs(position) >= trackRef.current.scrollWidth / 2) {
        position = 0
      }

      trackRef.current.style.transform = `translateX(${position}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={partnersVideo} type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex flex-col justify-between">

        {/* 🔝 TEXTO ARRIBA */}
        <div className="max-w-7xl mx-auto w-full px-6 pt-24">

          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
              Aliados que confían en Detecta
            </h2>

            <p className="mt-6 text-white/70">
              Trabajamos junto a aseguradoras, empresas y organizaciones líderes para ofrecer diagnósticos más precisos y oportunos.
            </p>
          </div>

        </div>

        {/* 🔽 LOGOS ABAJO */}
        <div className="w-full pb-16">

          {/* Línea */}
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <div className="w-full h-px bg-white/20" />
          </div>

          {/* Carrusel */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-center gap-20 whitespace-nowrap px-6"
            >
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  className="h-10 md:h-12 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}