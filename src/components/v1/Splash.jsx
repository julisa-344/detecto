import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'

// Puntos del path ECG: línea plana → pico → valle → pico → plana
// Coordenadas en un viewBox de 320x80
const ECG_PATH = "M0,40 L60,40 L75,40 L82,10 L90,70 L98,28 L106,40 L120,40 L260,40"

export default function Splash({ onDone }) {
  const [phase, setPhase] = useState('visible') // 'visible' | 'fadeout'
  const pathRef = useRef(null)

  useEffect(() => {
    // Medir longitud del path para la animación stroke-dashoffset
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = len
      pathRef.current.style.strokeDashoffset = len
      // Trigger reflow y arrancar la animación
      pathRef.current.getBoundingClientRect()
      pathRef.current.style.transition = 'stroke-dashoffset 900ms ease-in-out 600ms'
      pathRef.current.style.strokeDashoffset = '0'
    }

    // Fade out a los 2000ms
    const fadeTimer = setTimeout(() => setPhase('fadeout'), 2000)
    // Desmontar a los 2600ms
    const doneTimer = setTimeout(() => onDone(), 2600)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#0070A5',
        transition: phase === 'fadeout' ? 'opacity 600ms ease-in, transform 600ms ease-in' : undefined,
        opacity: phase === 'fadeout' ? 0 : 1,
        transform: phase === 'fadeout' ? 'scale(1.15)' : 'scale(1)',
        pointerEvents: phase === 'fadeout' ? 'none' : 'all',
      }}
    >
      {/* Dot grid sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glow central */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(82,192,225,0.25) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Contenido */}
      <div
        className="relative flex flex-col items-center gap-8"
        style={{
          animation: 'splashFadeIn 500ms ease-out 100ms both',
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Detecta Clínica"
          className="h-14 w-auto select-none"
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        {/* ECG line */}
        <div className="relative w-[260px]">
          <svg
            viewBox="0 0 260 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            {/* Línea de base tenue */}
            <line x1="0" y1="40" x2="260" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

            {/* Pulso ECG animado */}
            <path
              ref={pathRef}
              d={ECG_PATH}
              stroke="#CAD507"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Punto pulsante al final del trazo */}
            <circle cx="260" cy="40" r="3" fill="#CAD507" style={{ animation: 'ecgPulse 1s ease-in-out 1500ms both' }} />
          </svg>
        </div>


      </div>

      <style>{`
        @keyframes splashFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ecgPulse {
          0%   { opacity: 0; transform: scale(0); }
          50%  { opacity: 1; transform: scale(1.6); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
