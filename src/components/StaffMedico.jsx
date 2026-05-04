import { useEffect, useRef, useState, useCallback } from 'react'
import doctor1 from '../assets/doctor1.webp'
import doctor2 from '../assets/doctor2.webp'
import doctor3 from '../assets/doctor3.webp'
import doctor4 from '../assets/doctor4.webp'
import doctor5 from '../assets/doctor5.webp'

const doctors = [
  { name: 'Dr. Alexis Alva Pinto', specialty: 'Oncología Clínica', description: 'Especialista en diagnóstico oncológico con más de 15 años de experiencia.', image: doctor1, bg: '#E0F2FE' },
  { name: 'Dra. María Elena Ríos', specialty: 'Cirugía Oncológica', description: 'Cirujana referente en técnicas mínimamente invasivas y robótica.', image: doctor2, bg: '#F0F9FF' },
  { name: 'Dr. Carlos Mendoza Luna', specialty: 'Radioterapia', description: 'Experto en radioterapia estereotáctica de alta precisión.', image: doctor3, bg: '#E0F2FE' },
  { name: 'Dra. Lucía Fernández Torres', specialty: 'Detección Temprana', description: 'Líder en programas de screening preventivo y medicina personalizada.', image: doctor4, bg: '#F0F9FF' },
  { name: 'Dr. Roberto Guzmán Paredes', specialty: 'Quimioterapia', description: 'Especialista en diseño de protocolos personalizados integrales.', image: doctor5, bg: '#E0F2FE' },
]

export default function StaffMedico() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [animating, setAnimating] = useState(false)

  const nextDoctor = useCallback(() => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev + 1) % doctors.length)
    setTimeout(() => setAnimating(false), 500) // Transición más rápida
  }, [animating])

  const prevDoctor = () => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length)
    setTimeout(() => setAnimating(false), 500)
  }

  // CX: 3 segundos es el estándar para carruseles de información rápida
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextDoctor, 2000) 
    return () => clearInterval(interval)
  }, [nextDoctor, isPaused])

  return (
    <section className="bg-white h-screen min-h-[700px] overflow-hidden relative">
      
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.2fr_2.8fr] gap-0">

        {/* ── COLUMNA IZQUIERDA: Sidebar Fija con Z-Index ── */}
        <div className="relative z-30 bg-white/95 backdrop-blur-xl flex flex-col justify-between py-24 pr-12 border-r border-gray-100 shadow-[20px_0_40px_rgba(255,255,255,1)]">
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary-dark opacity-60">
              Nuestro Staff
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-slate-900 tracking-tighter leading-tight">
              Especialistas de <br />
              <span className="font-light italic text-primary-dark">clase mundial.</span>
            </h2>
          </div>

          {/* Info Dinámica: CX centrado en legibilidad instantánea */}
          <div className={`min-h-[180px] transition-all duration-400 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-slate-400 mb-6">Perfil Profesional</p>
            <p className="text-2xl font-light text-slate-900 mb-2">{doctors[activeIndex].name}</p>
            <p className="text-sm text-primary-dark font-medium mb-4">{doctors[activeIndex].specialty}</p>
            <p className="text-sm font-light text-slate-500 leading-relaxed leading-6">{doctors[activeIndex].description}</p>
          </div>

          {/* Navegación manual */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button onClick={prevDoctor} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all group">
                <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={nextDoctor} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all group">
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            <span className="text-[10px] font-mono text-slate-300 tracking-[0.3em]">0{activeIndex + 1} / 0{doctors.length}</span>
          </div>
        </div>

        {/* ── COLUMNA DERECHA: Carrusel con Máscara de Entrada ── */}
        <div 
          className="relative z-10 flex items-center overflow-hidden pl-16 pr-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sombra de entrada para que las tarjetas no "choquen" al aparecer */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none" />

          <div 
            className="flex gap-8 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(calc(-${activeIndex * 340}px))` }}
          >
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 w-[310px] h-[460px] rounded-[40px] overflow-hidden transition-all duration-500 ${
                  index === activeIndex ? 'scale-100 shadow-2xl shadow-blue-900/10' : 'scale-[0.9] opacity-40 blur-[1px]'
                }`}
                style={{ backgroundColor: doctor.bg }}
              >
                {/* Imagen del doctor optimizada visualmente */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain object-bottom pointer-events-none transition-transform duration-1000"
                />

                {/* Info Overlay sutil para las tarjetas inactivas */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/10 to-transparent">
                  <h3 className="text-slate-900 text-base font-light leading-tight">
                    {doctor.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}