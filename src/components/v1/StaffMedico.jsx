import { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import doctor1 from '../../assets/doctor1.webp'
import doctor2 from '../../assets/doctor2.webp'
import doctor3 from '../../assets/doctor3.webp'
import doctor4 from '../../assets/doctor4.webp'
import doctor5 from '../../assets/doctor5.webp'
import { useStaffDoctors } from '../../hooks/useStaffDoctors'
import { getFileUrl } from '../../lib/images'

const CARD_WIDTH = 322
const TOTAL_LIMIT = 20

// Doctores destacados (dato duro)
const FEATURED = [
  {
    id: 'featured-nicanor',
    name: 'Dr. Nicanor Rodríguez Gutarra',
    specialty: 'Urología General y Oncológica',
    reg: 'CMP 025867',
    description:
      'Pionero en cirugía robótica en el Perú. Referente en técnicas de mínima invasión.',
    image: doctor4,
    bg: '#F0F9FF',
  },
  {
    id: 'featured-alexis',
    name: 'Dr. Alexis Alva Pinto',
    specialty: 'Urología Oncológica',
    reg: 'RNE 011507',
    description:
      'Dedicado al diagnóstico y tratamiento de enfermedades prostáticas complejas.',
    image: doctor2,
    bg: '#E0F2FE',
  },
  {
    id: 'featured-gaston',
    name: 'Dr. Gastón Mendoza de Lama',
    specialty: 'Cirugía Oncológica y Mastología',
    reg: 'CMP 25779 | RNE 11470',
    description:
      'Especialista en tratamiento integral con énfasis en patologías mamarias.',
    image: doctor1,
    bg: '#F0F9FF',
  },
  {
    id: 'featured-victor',
    name: 'Dr. Victor Castro',
    specialty: 'Oncología Médica',
    reg: 'CMP 031518',
    description:
      'Reconocido por su enfoque en personalización terapéutica e inmunoterapia.',
    image: doctor3,
    bg: '#E0F2FE',
  },
  {
    id: 'featured-carlos',
    name: 'Dr. Carlos Oleachea Matto',
    specialty: 'Cirugía de Cabeza y Cuello',
    reg: 'CMP 018493 | RNE 029918',
    description:
      'Especialista en patologías complejas de alta precisión anatómica.',
    image: doctor5,
    bg: '#F0F9FF',
  },
]

const FEATURED_KEYS = FEATURED.map((d) =>
  d.name.toLowerCase().replace(/^dra?\.?\s+/, '').split(/\s+/).slice(0, 2).join(' ')
)

function buildDescription(doc) {
  if (doc.bio?.trim()) {
    const clean = doc.bio.replace(/\s+/g, ' ').trim()
    return clean.length > 180 ? clean.slice(0, 177).trimEnd() + '…' : clean
  }
  const parts = []
  if (doc.specialty) parts.push(doc.specialty)
  if (doc.careType) parts.push(doc.careType)
  return parts.join(' · ') || 'Especialista del staff médico de Detecta.'
}

function buildReg(doc) {
  const parts = []
  if (doc.cmp) parts.push(`CMP ${doc.cmp}`)
  const rne = (doc.specialties ?? []).map((s) => s?.rne).filter(Boolean)
  if (rne.length) parts.push(`RNE ${rne.join(' / ')}`)
  return parts.join(' | ') || '—'
}

function isFeatured(name = '') {
  const lower = name.toLowerCase()
  return FEATURED_KEYS.some((key) => lower.includes(key))
}

export default function StaffMedico() {
  const { doctors: apiDoctors } = useStaffDoctors({ pageSize: TOTAL_LIMIT })

  const doctors = useMemo(() => {
    const apiList = (apiDoctors ?? [])
      .filter((d) => d?.name && !isFeatured(d.name))
      .map((d, i) => ({
        id: d.id ?? `api-${i}`,
        name: d.name.trim(),
        specialty: d.specialty || d.careType || 'Especialista',
        reg: buildReg(d),
        description: buildDescription(d),
        image: getFileUrl(d.image),
        bg: i % 2 === 0 ? '#E0F2FE' : '#F0F9FF',
      }))
    return [...FEATURED, ...apiList].slice(0, TOTAL_LIMIT)
  }, [apiDoctors])

  const N = doctors.length
  const tripled = useMemo(() => [...doctors, ...doctors, ...doctors], [doctors])

  const [virtIdx, setVirtIdx] = useState(FEATURED.length)
  const [animated, setAnimated] = useState(true)
  const [paused, setPaused] = useState(false)
  const isJumping = useRef(false)
  const prevN = useRef(N)

  // Resync virtIdx when N changes (API loaded -> N grows)
  useEffect(() => {
    if (N === 0) return
    if (prevN.current !== N) {
      isJumping.current = true
      setAnimated(false)
      setVirtIdx(N)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true)
          isJumping.current = false
        })
      )
      prevN.current = N
    }
  }, [N])

  // Wrap-around when scrolling past the edges of the middle copy
  useEffect(() => {
    if (N === 0 || prevN.current !== N) return
    if (virtIdx >= N * 2 || virtIdx < N) {
      isJumping.current = true
      const t = setTimeout(() => {
        setAnimated(false)
        setVirtIdx(N + (((virtIdx % N) + N) % N))
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimated(true)
            isJumping.current = false
          })
        )
      }, 700)
      return () => clearTimeout(t)
    }
  }, [virtIdx, N])

  const activeIndex = N > 0 ? ((virtIdx % N) + N) % N : 0
  const active = doctors[activeIndex]

  const handleCardClick = (clickedRealIdx) => {
    if (isJumping.current || N === 0) return
    const diff = clickedRealIdx - activeIndex
    setVirtIdx((prev) => prev + diff)
  }

  const nextDoctor = useCallback(() => {
    if (isJumping.current || N === 0) return
    setVirtIdx((prev) => prev + 1)
  }, [N])

  const prevDoctor = useCallback(() => {
    if (isJumping.current || N === 0) return
    setVirtIdx((prev) => prev - 1)
  }, [N])

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-white relative flex flex-col pt-16 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <motion.div
        className="max-w-350 mx-auto w-full h-full flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end w-full mb-6">
          <div>
            <p className="text-[9px] font-medium tracking-[0.4em] uppercase text-primary-medium mb-4">NUESTRO STAFF</p>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-slate-900 tracking-tighter leading-[1.05]">
              Los mejores especialistas <br />
              <span className="italic text-primary-dark">contigo.</span>
            </h2>
          </div>

          <Link
            to="/v4/staff-medico"
            className="group relative inline-flex items-center gap-0 self-start sm:self-end shrink-0 active:scale-95 transition-all"
          >
            <span className="rounded-full bg-primary-dark px-6 py-3 text-[10px] font-semibold tracking-[0.22em] uppercase text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900">
              Ver todo el staff
            </span>
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-primary-dark text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 -ml-0.5">
              <ArrowRight className="absolute h-4 w-4 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowRight className="absolute h-4 w-4 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-32 items-center grow pb-4">
          {/* Panel Izquierdo */}
          <div className="flex flex-col lg:h-107.5 lg:justify-end pb-4">
            <p className="text-[9px] tracking-[0.3em] uppercase text-primary-medium font-bold mb-8">PERFIL PROFESIONAL</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.id ?? activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-3xl font-normal text-slate-900 leading-tight uppercase tracking-tight">
                    {active?.name}
                  </h3>
                  <p className="text-xs text-primary-medium font-medium mt-1 uppercase tracking-wider">
                    {active?.specialty}
                  </p>
                </div>
                <p className="text-sm font-light text-slate-500 leading-relaxed max-w-70">
                  {active?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carrusel */}
          <div
            className="relative overflow-hidden h-107.5 flex items-center"
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
                const isActive = index === virtIdx
                return (
                  <div
                    key={`${doctor.id}-${index}`}
                    onClick={() => handleCardClick(index % N)}
                    className={`relative shrink-0 w-72.5 h-107.5 rounded-[40px] overflow-hidden transition-all duration-700 cursor-pointer ${
                      isActive ? 'scale-100 shadow-xl shadow-blue-900/10' : 'scale-[0.9] opacity-20 grayscale'
                    }`}
                    style={{ backgroundColor: doctor.bg }}
                  >
                    {doctor.image ? (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] object-contain pointer-events-none transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs uppercase tracking-widest">
                        Sin foto
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/40 to-transparent">
                      <div className="border-l-2 border-primary-medium pl-4 text-white">
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

        {/* Navegación */}
        <div className="flex items-center justify-between mt-auto pb-12 w-full">
          <div className="flex items-center gap-5">
            <span className="text-[10px] font-bold text-primary-dark tracking-[0.4em]">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-20 h-px bg-slate-100 relative">
              <motion.div
                animate={{ width: `${((activeIndex + 1) / N) * 100}%` }}
                className="absolute left-0 top-0 h-full bg-primary-dark"
              />
            </div>
            <span className="text-[10px] font-bold text-slate-300 tracking-[0.4em]">{String(N).padStart(2, '0')}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevDoctor}
              className="w-11 h-11 rounded-full border border-primary-light flex items-center justify-center bg-white text-primary-dark hover:bg-primary-dark hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextDoctor}
              className="w-11 h-11 rounded-full border border-primary-light flex items-center justify-center bg-white text-primary-dark hover:bg-primary-dark hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
