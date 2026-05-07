import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react'
import heroVideo1 from '../../assets/herobg.mp4'
import heroVideo2 from '../../assets/herobg1.mp4'
import heroVideo3 from '../../assets/herobg2.mp4'
import heroVideo4 from '../../assets/herobg3.mov'
import portada1 from '../../assets/portada1.webp'
import portada2 from '../../assets/portada2.webp'
import portada3 from '../../assets/portada3.webp'
import portada4 from '../../assets/portada4.webp'
import portada5 from '../../assets/portada5.webp'

const publications = [
  {
    short: 'WJSO',
    title: 'World J. Surgical Oncology',
    fullTitle: 'World Journal of Surgical Oncology',
    link: 'https://link.springer.com/article/10.1186/s12957-025-04183-5',
    pages: '12 páginas',
    image: portada1,
  },
  {
    short: 'Tumori',
    title: 'Tumori Journal',
    fullTitle: 'Tumori Journal',
    link: 'https://journals.sagepub.com/toc/tmja/112/1_suppl',
    pages: '8 páginas',
    image: portada2,
  },
  {
    short: 'EJC',
    title: 'European J. of Cancer',
    fullTitle: 'European Journal of Cancer',
    link: 'https://www.ejcancer.com/issue/S0959-8049(26)X2004-4',
    pages: '157 páginas',
    image: portada3,
  },
  {
    short: 'R&O',
    title: 'Radiology and Oncology',
    fullTitle: 'Radiology and Oncology',
    link: 'https://reference-global.com/article/10.2478/raon-2026-0018?tab=article',
    pages: '13 páginas',
    image: portada4,
  },
  {
    short: 'PPCR',
    title: 'Clinical Research',
    fullTitle: 'Clinical Research',
    link: 'https://journal.ppcr.org/index.php/ppcrjournal/article/view/433',
    pages: '2 páginas',
    image: portada5,
  },
]

const slides = [
  {
    video: heroVideo1,
    label: 'Innovación Clínica',
    headline: ['Tecnología que', 'transforma', 'la medicina.'],
    highlight: 1,
    sub: 'Diagnósticos más tempranos y precisos gracias a inteligencia artificial de última generación.',
    cta: 'Agendar cita',
  },
  {
    video: heroVideo2,
    label: 'Tecnología de Vanguardia',
    headline: ['Equipamiento de', 'última', 'generación.'],
    highlight: 1,
    sub: 'Incorporamos los avances más recientes en imagenología y cirugía robótica para tratamientos más precisos.',
    cta: 'Descubre la tecnología',
  },
  {
    video: heroVideo3,
    label: 'Detección Temprana',
    headline: ['Detección que', 'salva vidas', 'hoy.'],
    highlight: 1,
    sub: 'Nuestros programas de screening preventivo identifican el cáncer en sus etapas más tratables.',
    cta: 'Conoce el programa',
  },
  {
    video: heroVideo4,
    label: 'Investigación Clínica',
    headline: ['Innovación que marca', 'un hito en el Perú'],
    highlight: 1,
    sub: 'Nuestros estudios forman parte de publicaciones internacionales orientadas a mejorar la atención del paciente oncológico.',
    cta: 'Ver todas las publicaciones',
    isResearch: true,
  },
]

const INTERVAL = 7000
const RESEARCH_INTERVAL = 9000

const medicalTags = [
  'Detección Temprana', 'Oncología Clínica', 'Investigación',
  'Medicina Preventiva', 'Quimioterapia', 'Cirugía de Precisión', 'Radioterapia',
]

const containerVariants = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

function ResearchBar() {
  const [activeIdx, setActiveIdx] = useState(null)
  const [paused, setPaused] = useState(false)
  const loop = [...publications, ...publications]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-10 max-w-3xl"
    >


      <div
        className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setActiveIdx(null) }}
      >
        {/* Fades laterales */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-gray-950/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-gray-950/60 to-transparent" /> */}

        <motion.div
          className="flex gap-2 p-2 w-max"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        >
          {loop.map((pub, i) => (
            <a
              key={i}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              onFocus={() => setActiveIdx(i)}
              onBlur={() => setActiveIdx(null)}
              onClick={(e) => {
                if (window.matchMedia('(hover: none)').matches && activeIdx !== i) {
                  e.preventDefault()
                  setActiveIdx(i)
                }
              }}
              className="group relative flex items-center gap-3 pl-2 pr-4 py-2 rounded-xl whitespace-nowrap text-[11px] lg:text-xs font-light text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="relative h-12 w-9 shrink-0 overflow-hidden rounded-[4px] ring-1 ring-white/20 shadow-md">
                <img
                  src={pub.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
              <span>{pub.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />

              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-30 w-52 rounded-xl border border-white/15 bg-gray-950/85 backdrop-blur-xl shadow-2xl overflow-hidden pointer-events-none"
                  >
                    <div className="aspect-[3/4] w-full bg-gray-900 overflow-hidden">
                      <img
                        src={pub.image}
                        alt={pub.fullTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-[11px] font-medium text-white leading-snug line-clamp-2">
                        {pub.fullTitle}
                      </p>
                      <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-white/50">
                        <FileText className="h-3 w-3" />
                        <span>{pub.pages}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-primary">
                        Ver publicación
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function HeroV4() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const startRef = useRef(null)
  const rafRef = useRef(null)
  const videoRefs = useRef([])

  const goTo = (idx) => {
    if (idx === current) return
    setCurrent(idx)
  }

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === current) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  }, [current])

  useEffect(() => {
    if (paused) return
    setProgress(0)
    startRef.current = performance.now()
    const duration = slides[current].isResearch ? RESEARCH_INTERVAL : INTERVAL

    const tick = (now) => {
      const pct = Math.min((now - startRef.current) / duration, 1)
      setProgress(pct)
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCurrent((c) => (c + 1) % slides.length)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [current, paused])

  const slide = slides[current]

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gray-950"
      style={{ fontFamily: 'Lexend, sans-serif' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Videos — todos montados, solo el activo visible */}
      {slides.map((s, i) => (
        <video
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <source src={s.video} type="video/mp4" />
        </video>
      ))}

      {/* Overlays */}
      <div className={`absolute inset-0 z-10 transition-colors duration-700 ${slide.isResearch ? 'bg-gray-950/65' : 'bg-gray-950/45'}`} />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-950/40 to-transparent z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex-grow flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

            {/* Texto del slide activo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
       

                <motion.h1
                  variants={itemVariants}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`${slide.isResearch ? 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl' : 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'} font-extralight text-white tracking-tight leading-[1.05]`}
                >
                  {slide.headline.map((line, i) => (
                    <span
                      key={i}
                      className={`block ${i === slide.highlight ? 'font-light text-primary' : ''}`}
                    >
                      {line}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  transition={{ duration: 0.4 }}
                  className="mt-6 text-base lg:text-lg text-white/60 font-light max-w-xl leading-relaxed"
                >
                  {slide.sub}
                </motion.p>

                {slide.isResearch && <ResearchBar />}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 }}
                  className="hidden lg:flex items-center mt-10"
                >
                  <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
                    <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-[#52C0E1]/100 group-hover:bg-[#0070A5] group-hover:text-white backdrop-blur-md border border-[#52C0E1]/0">
                      {slide.isResearch ? 'VER INVESTIGACIONES' : 'AGENDAR CITA'}
                    </span>
                    <div className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-[#52C0E1]/100 text-white group-hover:bg-[#0070A5] group-hover:text-white backdrop-blur-md border border-[#52C0E1]/0">
                      <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Cards de navegación — columna derecha */}
            <div className="hidden lg:flex flex-col gap-3">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`group relative text-left w-52 px-5 py-4 rounded-sm border cursor-pointer transition-all duration-400 overflow-hidden ${
                    i === current
                      ? 'border-primary/60 bg-white/10 backdrop-blur-md'
                      : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {i === current && (
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-primary transition-none"
                      style={{ width: `${progress * 100}%` }}
                    />
                  )}
                  <p className={`text-[9px] font-bold tracking-[0.35em] uppercase mb-1 transition-colors duration-300 ${
                    i === current ? 'text-primary' : 'text-white/30 group-hover:text-white/50'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className={`text-xs font-light transition-colors duration-300 ${
                    i === current ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                  }`}>
                    {s.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Indicadores móviles */}
            <div className="lg:hidden flex items-center gap-3 mt-4">
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="flex flex-col items-center gap-1.5 cursor-pointer">
                  <span className={`text-[9px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${i === current ? 'text-white/70' : 'text-white/20'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-[2px] bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: i === current ? `${progress * 100}%` : i < current ? '100%' : '0%' }}
                    />
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Marquee inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-20 w-full border-t border-white/10 bg-white/5 backdrop-blur-md"
      >
        <div className="flex overflow-hidden select-none py-5 lg:py-7">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...medicalTags, ...medicalTags].map((tag, i) => (
              <div key={i} className="flex items-center">
                <span className="px-8 lg:px-12 text-[10px] lg:text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                  {tag}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 mx-2" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
