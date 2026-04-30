import { useEffect, useRef, useState } from 'react'
import doctor1 from '../assets/doctor1.webp'
import doctor2 from '../assets/doctor2.webp'
import doctor3 from '../assets/doctor3.webp'
import doctor4 from '../assets/doctor4.webp'
import doctor5 from '../assets/doctor5.webp'

const doctors = [
  {
    name: 'Dr. Alexis Alva Pinto',
    specialty: 'Oncología Clínica',
    description: 'Especialista en diagnóstico y tratamiento oncológico con más de 15 años de experiencia en protocolos internacionales.',
    image: doctor1,
    bg: '#C8E9F2',
  },
  {
    name: 'Dra. María Elena Ríos',
    specialty: 'Cirugía Oncológica',
    description: 'Cirujana oncológica referente en técnicas mínimamente invasivas y cirugía robótica.',
    image: doctor2,
    bg: '#D6EFF5',
  },
  {
    name: 'Dr. Carlos Mendoza Luna',
    specialty: 'Radioterapia',
    description: 'Experto en radioterapia estereotáctica y tratamientos de alta precisión con tecnología de última generación.',
    image: doctor3,
    bg: '#BFE4EF',
  },
  {
    name: 'Dra. Lucía Fernández Torres',
    specialty: 'Detección Temprana',
    description: 'Líder en programas de screening preventivo y detección temprana con enfoque en medicina personalizada.',
    image: doctor4,
    bg: '#CCEDF7',
  },
  {
    name: 'Dr. Roberto Guzmán Paredes',
    specialty: 'Quimioterapia',
    description: 'Especialista en diseño de protocolos personalizados de quimioterapia con acompañamiento integral al paciente.',
    image: doctor5,
    bg: '#C0DDE5',
  },
]

export default function StaffMedico() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const columnRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [maxTranslate, setMaxTranslate] = useState(0)

  useEffect(() => {
    const calcMax = () => {
      if (!trackRef.current || !columnRef.current) return
      const trackWidth = trackRef.current.scrollWidth
      const colWidth = columnRef.current.offsetWidth
      setMaxTranslate(Math.max(0, trackWidth - colWidth))
    }
    calcMax()
    window.addEventListener('resize', calcMax)
    return () => window.removeEventListener('resize', calcMax)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const current = -rect.top
      setProgress(Math.min(Math.max(current / total, 0), 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeCard = Math.min(
    Math.floor(progress * doctors.length),
    doctors.length - 1
  )

  const translateX = progress * maxTranslate

  return (
    <section className="bg-white">
      <div ref={sectionRef} className="relative h-[350vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-full grid lg:grid-cols-[1fr_2.5fr]">

            {/* ── COLUMNA IZQUIERDA ── */}
            <div className="flex flex-col justify-between px-8 lg:px-12 py-28
                            backdrop-blur-md bg-white/70 border-r border-gray-100">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                  Equipo médico
                </p>
                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                  Especialistas que marcan la diferencia
                </h2>
              </div>

              {/* Doctor activo */}
              <div className="space-y-1">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
                  Ahora viendo
                </p>
                <p className="text-lg font-semibold text-gray-900 transition-all duration-300">
                  {doctors[activeCard].name}
                </p>
                <p className="text-sm text-primary font-medium">
                  {doctors[activeCard].specialty}
                </p>
              </div>

              {/* Progreso */}
              <div className="space-y-4">
                <div className="flex gap-1.5 w-3/4">
                  {doctors.map((_, i) => (
                    <div
                      key={i}
                      className={`h-px flex-1 transition-all duration-500 ${
                        i <= activeCard ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between w-3/4">
                  <span className="text-xs font-mono text-gray-400 tracking-widest">
                    {String(activeCard + 1).padStart(2, '0')} / {String(doctors.length).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-gray-400 tracking-wider">
                    scroll para explorar
                  </span>
                </div>
              </div>
            </div>

            {/* ── COLUMNA DERECHA: CARDS ── */}
            <div ref={columnRef} className="relative overflow-hidden">
              <div
                ref={trackRef}
                className="flex h-full items-center gap-5 px-10 py-16"
                style={{
                  transform: `translateX(-${translateX}px)`,
                  transition: 'transform 0.08s linear',
                  width: 'max-content',
                }}
              >
                {doctors.map((doctor, index) => (
                  <div
                    key={index}
                    className="group relative flex-shrink-0 w-[280px] h-[420px] overflow-hidden rounded-2xl"
                    style={{ backgroundColor: doctor.bg }}
                  >
                    {/* Imagen sin fondo, anclada abajo */}
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain object-bottom
                                 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Info base siempre visible */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-4
                                    bg-gradient-to-t from-black/40 to-transparent
                                    transition-transform duration-500 group-hover:-translate-y-1">
                      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80 mb-0.5">
                        {doctor.specialty}
                      </p>
                      <h3 className="text-base font-semibold text-white leading-snug">
                        {doctor.name}
                      </h3>
                    </div>

                    {/* Panel hover glass */}
                    <div className="absolute inset-0 flex flex-col justify-end
                                    backdrop-blur-xl bg-white/15 border border-white/20
                                    translate-y-full group-hover:translate-y-0
                                    transition-transform duration-500 ease-out rounded-2xl">
                      <div className="p-6">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                          {doctor.specialty}
                        </p>
                        <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          {doctor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
