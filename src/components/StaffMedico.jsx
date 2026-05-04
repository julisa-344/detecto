import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react'
import doctor1 from '../assets/doctor1.webp'
import doctor2 from '../assets/doctor2.webp'
import doctor3 from '../assets/doctor3.webp'
import doctor4 from '../assets/doctor4.webp'
import doctor5 from '../assets/doctor5.webp'

const doctors = [
  { 
    name: 'Dr. Gastón Mendoza de Lama', 
    specialty: 'Cirugía Oncológica y Mastología', 
    reg: 'CMP 25779 | RNE 11470',
    description: 'Especialista en tratamiento integral con énfasis en patologías mamarias. Prioriza la preservación de la calidad de vida y seguridad oncológica.', 
    image: doctor1, 
    bg: '#E0F2FE' 
  },
  { 
    name: 'Dr. Alexis Alva Pinto', 
    specialty: 'Urología Oncológica', 
    reg: 'RNE 011507',
    description: 'Dedicado al diagnóstico y tratamiento de enfermedades prostáticas complejas. Su práctica integra tecnología de vanguardia y criterios clínicos internacionales.', 
    image: doctor2, 
    bg: '#F0F9FF' 
  },
  { 
    name: 'Dr. Victor Castro', 
    specialty: 'Oncología Médica', 
    reg: 'CMP 031518',
    description: 'Reconocido por su enfoque en personalización terapéutica e inmunoterapia. Investigador activo en estudios clínicos multicéntricos.', 
    image: doctor3, 
    bg: '#E0F2FE' 
  },
  { 
    name: 'Dr. Nicanor Rodríguez Gutarra', 
    specialty: 'Urología General y Oncológica', 
    reg: 'CMP 025867 | RNE 027671',
    description: 'Pionero en cirugía robótica en el Perú. Referente en técnicas de mínima invasión, cirugía laparoscópica avanzada y tecnología láser.', 
    image: doctor4, 
    bg: '#F0F9FF' 
  },
  { 
    name: 'Dr. Carlos Oleachea Matto', 
    specialty: 'Cirugía de Cabeza y Cuello', 
    reg: 'CMP 018493 | RNE 029918',
    description: 'Especialista en patologías complejas de alta precisión anatómica. Enfocado en intervenciones seguras con preservación funcional.', 
    image: doctor5, 
    bg: '#E0F2FE' 
  },
]

export default function StaffMedico() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const handleIndexChange = useCallback((newIndex) => {
    if (animating) return
    setAnimating(true)
    setActiveIndex(newIndex)
    setTimeout(() => setAnimating(false), 500)
  }, [animating])

  const nextDoctor = () => handleIndexChange((activeIndex + 1) % doctors.length)
  const prevDoctor = () => handleIndexChange((activeIndex - 1 + doctors.length) % doctors.length)

  return (
    <section className="h-screen w-full bg-white relative flex flex-col pt-12 pb-8 px-6 lg:px-12 overflow-hidden" style={{ fontFamily: 'Lexend, sans-serif' }}>
      
      <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col">
        
        {/* 1. Header: Título refinado y Botón "Ver Todo" */}
        <div className="flex justify-between items-start w-full mb-6">
          <div>
            <p className="text-[9px] font-medium tracking-[0.4em] uppercase text-[#0199C6] mb-4">
              NUESTRO STAFF
            </p>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 tracking-tighter leading-[1.0]">
              Especialistas de <br />
              <span className="italic text-[#0070A5]">clase mundial.</span>
            </h2>
          </div>

          <button className="group flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-[#0070A5] pt-2">
            <span className="border-b border-transparent group-hover:border-[#0070A5] pb-1 transition-all">VER TODO EL STAFF</span>
            <div className="w-7 h-7 rounded-full bg-[#EEFBFF] flex items-center justify-center border border-[#C0DDE5]">
              <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />
            </div>
          </button>
        </div>

        {/* 2. Grid Principal: Bio e Imágenes */}
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 items-center flex-grow pb-16">
          
          {/* Info del Doctor: Alineada a la BASE (justify-end) con alto de Card (430px) */}
          <div className="flex flex-col h-[430px] justify-end pb-4">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#0199C6] font-bold mb-8">
              PERFIL PROFESIONAL
            </p>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-3xl font-normal text-slate-900 leading-tight mb-2 uppercase tracking-tight">
                    {doctors[activeIndex].name}
                  </h3>
                  <p className="text-xs text-[#0070A5] font-medium italic">
                    {doctors[activeIndex].specialty}
                  </p>
                </div>
                
                <p className="text-sm font-light text-slate-500 leading-relaxed max-w-[280px]">
                  {doctors[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carrusel de Cards (430px de alto) */}
          <div className="relative overflow-hidden h-[430px] flex items-center">
            <div 
              className="flex gap-8 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(calc(-${activeIndex * 322}px))` }}
            >
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  onClick={() => handleIndexChange(index)}
                  className={`relative flex-shrink-0 w-[290px] h-[430px] rounded-[40px] overflow-hidden transition-all duration-700 cursor-pointer ${
                    index === activeIndex ? 'scale-100 shadow-xl shadow-blue-900/10' : 'scale-[0.9] opacity-20 grayscale blur-[0.5px]'
                  }`}
                  style={{ backgroundColor: doctor.bg }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto object-contain object-bottom pointer-events-none"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/30 to-transparent">
                    <div className="border-l border-[#0070A5] pl-4">
                      <h4 className="text-white text-xs font-bold uppercase tracking-wide leading-tight">
                        {doctor.name}
                      </h4>
                      <p className="text-white/80 text-[9px] font-mono tracking-widest mt-1">
                        {doctor.reg}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* 3. Navegación: Subida y movida significativamente a la izquierda (right-64) */}
      <div className="absolute bottom-24 right-64 flex items-center gap-10 z-50">
        <div className="flex items-center gap-5">
          <span className="text-[10px] font-bold text-[#0070A5] tracking-[0.4em]">0{activeIndex + 1}</span>
          <div className="w-20 h-px bg-slate-100 relative">
            <motion.div 
              animate={{ width: `${((activeIndex + 1) / doctors.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full bg-[#0070A5]" 
            />
          </div>
          <span className="text-[10px] font-bold text-slate-300 tracking-[0.4em]">0{doctors.length}</span>
        </div>

        <div className="flex gap-2">
          <button onClick={prevDoctor} className="w-10 h-10 rounded-full border border-[#C0DDE5] flex items-center justify-center bg-white text-[#0070A5] hover:bg-[#0070A5] hover:text-white transition-all shadow-sm active:scale-95">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button onClick={nextDoctor} className="w-10 h-10 rounded-full border border-[#C0DDE5] flex items-center justify-center bg-white text-[#0070A5] hover:bg-[#0070A5] hover:text-white transition-all shadow-sm active:scale-95">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}