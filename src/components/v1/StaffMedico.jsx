import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react'
import doctor1 from '../../assets/doctor1.webp'
import doctor2 from '../../assets/doctor2.webp'
import doctor3 from '../../assets/doctor3.webp'
import doctor4 from '../../assets/doctor4.webp'
import doctor5 from '../../assets/doctor5.webp'

const doctors = [
  { 
    name: 'Dr. Nicanor Rodríguez Gutarra', 
    specialty: 'Urología General y Oncológica', 
    reg: 'CMP 025867 | RNE 027671',
    description: 'Pionero en cirugía robótica en el Perú. Referente en técnicas de mínima invasión, cirugía laparoscópica avanzada y tecnología láser.', 
    image: doctor4, 
    bg: '#F0F9FF' 
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
    name: 'Dr. Gastón Mendoza de Lama', 
    specialty: 'Cirugía Oncológica y Mastología', 
    reg: 'CMP 25779 | RNE 11470',
    description: 'Especialista en tratamiento integral con énfasis en patologías mamarias. Prioriza la preservación de la calidad de vida y seguridad oncológica.', 
    image: doctor1, 
    bg: '#E0F2FE' 
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
    name: 'Dr. Carlos Oleachea Matto', 
    specialty: 'Cirugía de Cabeza y Cuello', 
    reg: 'CMP 018493 | RNE 029918',
    description: 'Especialista en patologías complejas de alta precisión anatómica. Enfocado en intervenciones seguras con preservación funcional.', 
    image: doctor5, 
    bg: '#E0F2FE' 
  },
]

const N = doctors.length
// Triplicamos para el loop infinito: [copia A | copia B (real) | copia C]
const tripled = [...doctors, ...doctors, ...doctors]
const CARD_WIDTH = 322 // ancho de card + gap

export default function StaffMedico() {
  // virtIdx arranca en N (mitad del array triplicado = copia B real)
  const [virtIdx, setVirtIdx]       = useState(N)
  const [animated, setAnimated]     = useState(true)   // controla si la tira tiene transition CSS
  const [paused, setPaused]         = useState(false)
  const isJumping                   = useRef(false)

  const activeIndex = virtIdx % N  // 0-4 para el panel de info

  // ── Navegación ──────────────────────────────────────────────
  const goTo = useCallback((newVirt) => {
    if (isJumping.current) return
    setVirtIdx(newVirt)
  }, [])

  const nextDoctor = useCallback(() => goTo(virtIdx + 1), [virtIdx, goTo])
  const prevDoctor = useCallback(() => goTo(virtIdx - 1), [virtIdx, goTo])

  // ── Reset invisible al llegar al extremo ────────────────────
  useEffect(() => {
    // Al llegar a la copia C (índice N*2 o más), salta sin animación a la copia B
    if (virtIdx >= N * 2) {
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
    // Al llegar a la copia A (índice < N), salta sin animación a la copia B
    if (virtIdx < N) {
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

  // ── Autoplay ────────────────────────────────────────────────
  useEffect(() => {
    if (paused) return
    const interval = setInterval(nextDoctor, 3500)
    return () => clearInterval(interval)
  }, [nextDoctor, paused])

  // ── Animación de entrada de la sección ──────────────────────
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-white relative flex flex-col pt-16 pb-8 px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col">

        {/* Header — entra con fade + slide */}
        <div
          className="flex justify-between items-start w-full mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
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

        {/* Grid principal */}
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 items-center flex-grow pb-16">

          {/* Info del doctor — entra con delay */}
          <div
            className="flex flex-col h-[430px] justify-end pb-4 transition-all duration-700 delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-24px)',
            }}
          >
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

          {/* Carrusel infinito */}
          <div
            className="relative overflow-hidden h-[430px] flex items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex gap-8"
              style={{
                transform: `translateX(calc(-${virtIdx * CARD_WIDTH}px))`,
                transition: animated ? 'transform 700ms cubic-bezier(0.23,1,0.32,1)' : 'none',
              }}
            >
              {tripled.map((doctor, index) => {
                const realIdx = index % N
                const isActive = realIdx === activeIndex && 
                  Math.abs(index - virtIdx) < N   // solo la copia activa brilla
                return (
                  <div
                    key={index}
                    onClick={() => !isJumping.current && goTo(N + realIdx)}
                    className={`relative flex-shrink-0 w-[290px] h-[430px] rounded-[40px] overflow-hidden transition-all duration-700 cursor-pointer ${
                      isActive
                        ? 'scale-100 shadow-xl shadow-blue-900/10'
                        : 'scale-[0.9] opacity-20 grayscale blur-[0.5px]'
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
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <div
        className="absolute bottom-24 right-64 flex items-center gap-10 z-50 transition-all duration-700 delay-300"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        <div className="flex items-center gap-5">
          <span className="text-[10px] font-bold text-[#0070A5] tracking-[0.4em]">0{activeIndex + 1}</span>
          <div className="w-20 h-px bg-slate-100 relative">
            <motion.div
              animate={{ width: `${((activeIndex + 1) / N) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute left-0 top-0 h-full bg-[#0070A5]"
            />
          </div>
          <span className="text-[10px] font-bold text-slate-300 tracking-[0.4em]">0{N}</span>
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
