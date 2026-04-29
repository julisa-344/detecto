import { useEffect, useRef, useState } from 'react'
import doctor1 from '../assets/doctor1.png'
import doctor2 from '../assets/doctor2.png'
import doctor3 from '../assets/doctor3.png'
import doctor4 from '../assets/doctor4.png'
import doctor5 from '../assets/doctor5.png'

const doctors = [
  {
    name: 'Dr. Alexis Alva Pinto',
    specialty: 'Oncología Clínica',
    description: 'Especialista en diagnóstico y tratamiento oncológico.',
    image: doctor1,
  },
  {
    name: 'Dra. María Elena Ríos',
    specialty: 'Cirugía Oncológica',
    description: 'Cirujana oncológica con enfoque mínimamente invasivo.',
    image: doctor2,
  },
  {
    name: 'Dr. Carlos Mendoza Luna',
    specialty: 'Radioterapia',
    description: 'Experto en tratamientos de alta precisión.',
    image: doctor3,
  },
  {
    name: 'Dra. Lucía Fernández Torres',
    specialty: 'Detección Temprana',
    description: 'Líder en screening preventivo.',
    image: doctor4,
  },
  {
    name: 'Dr. Roberto Guzmán Paredes',
    specialty: 'Quimioterapia',
    description: 'Protocolos personalizados de tratamiento.',
    image: doctor5,
  },
]

export default function StaffMedico() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const total = rect.height - windowHeight
      const current = -rect.top

      const scrollProgress = Math.min(Math.max(current / total, 0), 1)
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-gradient-to-b from-primary-dark via-primary-dark to-primary-medium">

      {/* HEADER (YA NO ABSOLUTE) */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <h2 className="text-5xl sm:text-6xl font-semibold text-white tracking-tight">
          Equipo médico
        </h2>
        <p className="mt-4 text-primary-light/80 max-w-md">
          Especialistas con experiencia respaldada por tecnología avanzada.
        </p>
      </div>

      {/* SCROLL SECTION */}
      <div ref={sectionRef} className="relative h-[300vh]">

        <div className="sticky top-0 h-screen overflow-hidden">

          <div
            className="flex h-full items-center"
            style={{
              transform: `translateX(-${progress * 70}%)`,
              transition: 'transform 0.1s linear',
            }}
          >
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="relative w-[420px] h-[520px] flex-shrink-0"
              >
                <div className="group relative w-full h-full">

                  {/* Imagen */}
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />

                  {/* Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {doctor.name}
                    </h3>
                    <p className="text-primary-light text-sm">
                      {doctor.specialty}
                    </p>
                  </div>

                  {/* Glass hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-xl bg-white/15 border border-white/20 flex items-end">
                    <div className="p-6">
                      <p className="text-sm text-white leading-relaxed">
                        {doctor.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}