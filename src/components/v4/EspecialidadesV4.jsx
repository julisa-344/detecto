import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HeartPulse,
  Brain,
  Stethoscope,
  Baby,
  Venus,
  Target,
  ArrowUpRight,
} from 'lucide-react'
import mastologiaVideo from '../../assets/mastologia.mp4'
import ginecologiaVideo from '../../assets/gine.mp4'
import cardiologiaVideo from '../../assets/cardiologia.mp4'
import neurologiaVideo from '../../assets/neurologia.mp4'
import gastroVideo from '../../assets/gastro.mp4'
import urologiaVideo from '../../assets/urologia.MP4'

const departments = [
  { id: '01', title: 'Mastología', description: 'Detección, diagnóstico y tratamiento de patologías mamarias.', icon: <Baby className="w-5 h-5" />, video: mastologiaVideo },
  { id: '02', title: 'Ginecología', description: 'Salud de la mujer, cuidado del embarazo y servicios de parto.', icon: <Venus className="w-5 h-5" />, video: ginecologiaVideo },
  { id: '03', title: 'Cardiología', description: 'Cuidado integral del corazón incluyendo angioplastia y ECG.', icon: <HeartPulse className="w-5 h-5" />, video: cardiologiaVideo },
  { id: '04', title: 'Neurología', description: 'Diagnóstico y tratamiento de condiciones del cerebro y nervios.', icon: <Brain className="w-5 h-5" />, video: neurologiaVideo },
  { id: '05', title: 'Gastroenterología', description: 'Cuidado experto para el sistema digestivo e hígado.', icon: <Stethoscope className="w-5 h-5" />, video: gastroVideo },
  { id: '06', title: 'Urología', description: 'Tratamientos avanzados para el sistema reproductivo.', icon: <Target className="w-5 h-5" />, video: urologiaVideo },
]

export default function EspecialidadesV4() {
  const [activeIdx, setActiveIdx] = useState(0)
  const videoRefs = useRef([])

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === activeIdx) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  }, [activeIdx])

  const active = departments[activeIdx]

  return (
    <section className="bg-white py-24 px-6 lg:px-10" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0199C6] mb-4">
              Nuestras Unidades
            </p>
            <h2 className="text-4xl lg:text-6xl font-light text-[#0070A5] tracking-tight leading-none uppercase mb-6">
              Explora nuestras <br />
              <span className="font-normal italic">especialidades.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pt-12"
          >
            <p className="text-sm font-light text-slate-400 leading-relaxed border-l border-[#C0DDE5] pl-8 mb-12 max-w-sm">
              En Detecta Clínica, combinamos el rigor científico con tecnología avanzada para ofrecer resultados exactos cuando más se necesitan.
            </p>

            <button className="group flex cursor-pointer items-center gap-4 bg-transparent p-0 transition-all active:scale-95">
              <span
                className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-[#0070A5] transition-all duration-500 ease-in-out bg-[#EEFBFF]/60 group-hover:bg-[#0070A5] group-hover:text-white"
                style={{
                  backdropFilter: 'blur(12px)',
                  border: '1px solid #C0DDE5',
                  position: 'relative',
                  marginRight: '-15px',
                  zIndex: 1,
                }}
              >
                 Especialidades
              </span>
              <div
                className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-[#C0DDE5]/40 text-[#0070A5] group-hover:bg-[#0070A5] group-hover:text-white"
                style={{
                  backdropFilter: 'blur(12px)',
                  border: '1px solid #C0DDE5',
                  zIndex: 2
                }}
              >
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* CONTENIDO PRINCIPAL — 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* COLUMNA IZQUIERDA — Video */}
          <div className="lg:h-full">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full rounded-[28px] overflow-hidden bg-[#0070A5] shadow-[0_30px_60px_-20px_rgba(0,112,165,0.35)]">
              {departments.map((dept, i) => (
                <video
                  key={dept.id}
                  ref={(el) => (videoRefs.current[i] = el)}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  style={{ opacity: i === activeIdx ? 1 : 0, zIndex: i === activeIdx ? 1 : 0 }}
                >
                  <source src={dept.video} type="video/mp4" />
                </video>
              ))}

              {/* Overlay degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0070A5]/80 via-[#0070A5]/20 to-transparent z-10" />

              {/* Texto sobre video */}
              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-[10px] font-mono font-medium text-white/60 tracking-widest">
                      / {active.id}
                    </span>
                    <h3 className="mt-2 text-3xl lg:text-4xl font-light text-white tracking-tight uppercase">
                      {active.title}
                    </h3>
                    <p className="mt-3 text-sm font-light text-white/70 leading-relaxed max-w-md">
                      {active.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA — 6 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                onMouseEnter={() => setActiveIdx(index)}
                onFocus={() => setActiveIdx(index)}
                tabIndex={0}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative p-6 rounded-[20px] border bg-white transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeIdx === index
                    ? 'border-[#52C0E1]/60 shadow-[0_20px_40px_-15px_rgba(82,192,225,0.25)]'
                    : 'border-[#C0DDE5]/40 hover:border-[#52C0E1]/50'
                }`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#52C0E1]/0 via-[#52C0E1]/15 to-[#52C0E1]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className={`text-[10px] font-mono font-medium transition-colors ${
                      activeIdx === index ? 'text-[#0199C6]' : 'text-[#0199C6]/40'
                    }`}>
                      {dept.id}
                    </span>
                    <div className={`p-3 rounded-2xl transition-all duration-500 ${
                      activeIdx === index
                        ? 'bg-[#52C0E1] text-white shadow-lg shadow-[#52C0E1]/30'
                        : 'bg-[#EEFBFF] text-[#0199C6]'
                    }`}>
                      {dept.icon}
                    </div>
                  </div>

                  <h3 className={`text-base font-normal tracking-wide uppercase transition-colors ${
                    activeIdx === index ? 'text-[#0199C6]' : 'text-[#0070A5]'
                  }`}>
                    {dept.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2">
                    <span className={`text-[9px] font-bold tracking-widest transition-colors ${
                      activeIdx === index ? 'text-[#52C0E1]' : 'text-[#52C0E1]/40'
                    }`}>
                      SOLICITAR
                    </span>
                    <div className={`h-px transition-all duration-500 ${
                      activeIdx === index ? 'w-8 bg-[#52C0E1]' : 'w-4 bg-[#52C0E1]/40'
                    }`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
