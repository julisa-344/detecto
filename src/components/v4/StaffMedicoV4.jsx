import { useEffect, useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react'
import doctor1 from '../../assets/doctor1.webp'
import doctor2 from '../../assets/doctor2.webp'
import doctor3 from '../../assets/doctor3.webp'
import doctor4 from '../../assets/doctor4.webp'
import doctor5 from '../../assets/doctor5.webp'

const doctors = [
  { name: 'Dr. Nicanor Rodríguez Gutarra', specialty: 'Urología General y Oncológica', reg: 'CMP 025867 | RNE 027671', description: 'Pionero en cirugía robótica en el Perú. Referente en técnicas de mínima invasión.', image: doctor4, bg: '#0199C6' },
  { name: 'Dr. Alexis Alva Pinto', specialty: 'Urología Oncológica', reg: 'RNE 011507', description: 'Dedicado al diagnóstico y tratamiento de enfermedades prostáticas complejas.', image: doctor2, bg: '#0199C6' },
  { name: 'Dr. Gastón Mendoza de Lama', specialty: 'Cirugía Oncológica y Mastología', reg: 'CMP 25779 | RNE 11470', description: 'Especialista en tratamiento integral con énfasis en patologías mamarias.', image: doctor1, bg: '#0199C6' },
  { name: 'Dr. Victor Castro', specialty: 'Oncología Médica', reg: 'CMP 031518', description: 'Reconocido por su enfoque en personalización terapéutica e inmunoterapia.', image: doctor3, bg: '#0199C6' },
  { name: 'Dr. Carlos Oleachea Matto', specialty: 'Cirugía de Cabeza y Cuello', reg: 'CMP 018493 | RNE 029918', description: 'Especialista en patologías complejas de alta precisión anatómica.', image: doctor5, bg: '#0199C6  ' },
]

const N = doctors.length
const tripled = [...doctors, ...doctors, ...doctors]
const CARD_WIDTH = 322 

export default function StaffMedicoV4() {
  const [virtIdx, setVirtIdx] = useState(N)
  const [animated, setAnimated] = useState(true)
  const [paused, setPaused] = useState(false)
  const isJumping = useRef(false)

  const activeIndex = virtIdx % N

  const handleCardClick = (clickedRealIdx) => {
    if (isJumping.current) return
    const diff = clickedRealIdx - activeIndex
    setVirtIdx(virtIdx + diff)
  }

  const nextDoctor = useCallback(() => {
    if (isJumping.current) return
    setVirtIdx(prev => prev + 1)
  }, [])

  const prevDoctor = useCallback(() => {
    if (isJumping.current) return
    setVirtIdx(prev => prev - 1)
  }, [])

  useEffect(() => {
    if (virtIdx >= N * 2 || virtIdx < N) {
      isJumping.current = true
      const t = setTimeout(() => {
        setAnimated(false)
        setVirtIdx(N + (virtIdx % N))
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimated(true)
            isJumping.current = false
          })
        })
      }, 700)
      return () => clearTimeout(t)
    }
  }, [virtIdx])

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full relative flex flex-col pt-16 pb-8 px-6 lg:px-12 overflow-hidden"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: 'linear-gradient(100deg, #ffffff 0%, #EEFBFF 50%, #DCF1F8 100%)',
      }}
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#52C0E1]/15 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0199C6]/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #0070A5 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      <motion.div
        className="max-w-[1400px] mx-auto w-full h-full flex flex-col relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex justify-between items-start w-full mb-6">
          <div>
            <p className="text-[9px] font-medium tracking-[0.4em] uppercase text-[#0199C6] mb-4">NUESTRO STAFF</p>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 tracking-tighter leading-[1.0]">
              Especialistas de <br />
              <span className="italic text-[#0070A5]">clase mundial.</span>
            </h2>
          </div>

          <Link to="/v4/staff-medico" className="group flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-primary-dark pt-2">
            <span className="border-b border-transparent group-hover:border-[#0070A5] pb-1 transition-all">VER TODO EL STAFF</span>
            <div className="w-7 h-7 rounded-full bg-[#EEFBFF] flex items-center justify-center border border-[#C0DDE5]">
              <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-32 items-center flex-grow pb-4">
          
          {/* Panel Izquierdo: Info Detallada */}
          <div className="flex flex-col h-[430px] justify-end pb-4">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#0199C6] font-bold mb-8">PERFIL PROFESIONAL</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-3xl font-normal text-slate-900 leading-tight uppercase tracking-tight">
                    {doctors[activeIndex].name}
                  </h3>
                  <p className="text-xs text-[#0199C6] font-medium mt-1 uppercase tracking-wider">
                    {doctors[activeIndex].specialty}
                  </p>
                </div>
                <p className="text-sm font-light text-slate-500 leading-relaxed max-w-[280px]">
                  {doctors[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carrusel: Con especialidad y registro en card */}
          <div className="relative overflow-hidden h-[430px] flex items-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div
              className="flex gap-8"
              style={{
                transform: `translateX(calc(-${virtIdx * CARD_WIDTH}px))`,
                transition: animated ? 'transform 700ms cubic-bezier(0.23,1,0.32,1)' : 'none',
              }}
            >
              {tripled.map((doctor, index) => {
                const isActive = index === virtIdx
                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index % N)}
                    className={`relative flex-shrink-0 w-[290px] h-[430px] rounded-[40px] overflow-hidden transition-all duration-700 cursor-pointer ${
                      isActive ? 'scale-100 shadow-xl shadow-blue-900/10' : 'scale-[0.9] opacity-20 grayscale'
                    }`}
                    style={{ backgroundColor: doctor.bg }}
                  >
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] object-contain pointer-events-none transition-transform duration-700 hover:scale-105" 
                    />
                    
                    {/* Overlay con Información */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/40 to-transparent">
                      <div className="border-l-2 border-[#0199C6] pl-4 text-white">
                        <h4 className="text-xs font-bold uppercase tracking-wide leading-tight">
                          {doctor.name}
                        </h4>
                        <p className="text-[9px] font-mono tracking-widest mt-1 opacity-90">
                          {doctor.reg}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Navegación Inferior */}
        <div className="flex items-center justify-between mt-auto pb-12 w-full">
          <div className="flex items-center gap-5">
            <span className="text-[10px] font-bold text-[#0070A5] tracking-[0.4em]">0{activeIndex + 1}</span>
            <div className="w-20 h-px bg-slate-100 relative">
              <motion.div
                animate={{ width: `${((activeIndex + 1) / N) * 100}%` }}
                className="absolute left-0 top-0 h-full bg-[#0070A5]"
              />
            </div>
            <span className="text-[10px] font-bold text-slate-300 tracking-[0.4em]">0{N}</span>
          </div>

          <div className="flex gap-2">
            <button onClick={prevDoctor} className="w-11 h-11 rounded-full border border-[#C0DDE5] flex items-center justify-center bg-white text-[#0070A5] hover:bg-[#0070A5] hover:text-white transition-all shadow-sm active:scale-90">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={nextDoctor} className="w-11 h-11 rounded-full border border-[#C0DDE5] flex items-center justify-center bg-white text-[#0070A5] hover:bg-[#0070A5] hover:text-white transition-all shadow-sm active:scale-90">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}