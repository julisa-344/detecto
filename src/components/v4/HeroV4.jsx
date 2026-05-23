import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react'
import heroVideo1 from '../../assets/herobg.mp4'
import heroVideo2 from '../../assets/herobg1.mp4'
import heroVideo3 from '../../assets/herobg2.mp4'
const heroVideo4 = `${import.meta.env.VITE_BASE_IMAGE_URL}home-videos/hero1.mp4`
import portada1 from '../../assets/portada1.webp'
import portada2 from '../../assets/portada2.webp'
import portada3 from '../../assets/portada3.webp'
import portada4 from '../../assets/portada4.webp'
import portada5 from '../../assets/portada5.webp'
import gaston from '../../assets/gaston.jpg'
import samanthaMendoza from '../../assets/doctores/samanthamendozarivera1.webp'
import proximamente from '../../assets/proximamenteArticulo.png'

const publications = [
  {
    short: 'WJSO',
    title: 'World J. Surgical Oncology',
    fullTitle: 'World Journal of Surgical Oncology',
    tag: 'Research / Open access',
    principalAuthor: 'Dr. Gaston Mendoza De Lama',
    coautores: [
      'Nancy Elena Muñoz Quispe',
      'Jorge Marcelo Aguilar Cosme',
      'Samantha Mendoza',
      'Renson Eduardo Hidalgo Ramos',
      'Diana Díaz-Llontop',
      'Richard Eduardo Castillo Laborio',
      'Juan Manuel Trejo Mena',
      'Enrique Oswaldo Bedoya Ismodes',
      'Luis Taxa',
    ],
    lead: { name: 'Dr. Gaston Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://link.springer.com/article/10.1186/s12957-025-04183-5',
    pages: '12 páginas',
    image: portada1,
  },
  {
    short: 'Tumori',
    title: 'Tumori Journal',
    fullTitle: 'Tumori Journal',
    tag: 'Abstract Book / Supplement',
    principalAuthor: 'Dr. Gaston Mendoza De Lama',
    coautores: [
      'Nancy Muñoz-Quispe',
      'Diana Díaz-Llontop',
      'Samantha Mendoza-Rivera',
      'Claudia Quiñones',
      'Richard Castillo-Laborio',
      'Renson Hidalgo',
      'Luis Taxa',
    ],
    presentedAt:
      '18.ª Conferencia Internacional sobre Cáncer de Mama, Ginecología e Inmunooncología — BGIICC 2026, 22–23 de enero de 2026, Hotel Hilton Heliopolis, El Cairo, Egipto.',
    lead: { name: 'Dr. Gaston Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://journals.sagepub.com/toc/tmja/112/1_suppl',
    pages: '8 páginas',
    image: portada2,
  },
  {
    short: 'EJC',
    title: 'European J. of Cancer',
    fullTitle: 'European Journal of Cancer',
    tag: 'Conference Supplement',
    principalAuthor: 'Dr. Gaston Mendoza De Lama',
    coautores: [
      'N.E. Muñoz Quispe',
      'J.M. Aguilar Cosme',
      'J. Ayon Seminario',
      'D. Diaz Llontop',
      'S.E. Mendoza Rivera',
      'C.S. Quiñones Pereyra',
      'R.E. Castillo Laborio',
      'L.M. Taxa Rojas',
    ],
    presentedAt:
      '15th European Breast Cancer Conference (EBCC-15), 25–27 de marzo de 2026, Barcelona, España.',
    lead: { name: 'Dr. Gaston Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://www.ejcancer.com/issue/S0959-8049(26)X2004-4',
    pages: '157 páginas',
    image: portada3,
  },
  {
    short: 'R&O',
    title: 'Radiology and Oncology',
    fullTitle: 'Radiology and Oncology',
    tag: 'Article / Ahead of Print',
    principalAuthor: 'Dr. Gaston Mendoza De Lama',
    coautores: [
      'Nancy Muñoz',
      'Jorge Aguilar',
      'Jorge Ayón',
      'Diana Díaz-Llontop',
      'Samantha Mendoza',
      'Claudia Quiñones',
      'Richard Castillo',
      'Luis Taxa',
    ],
    lead: { name: 'Dr. Gaston Mendoza De Lama', role: 'Investigador principal', photo: gaston },
    link: 'https://reference-global.com/article/10.2478/raon-2026-0018?tab=article',
    pages: '13 páginas',
    image: portada4,
  },
  {
    short: 'PPCR',
    title: 'Clinical Research',
    fullTitle: 'Clinical Research',
    tag: 'Journal Article',
    principalAuthor: 'Dra. Samantha Mendoza',
    coautores: ['Gastón Mendoza de Lama', 'Enrique Oswaldo Bedoya Ismodes'],
    lead: { name: 'Dra. Samantha Mendoza', role: 'Investigadora principal', photo: samanthaMendoza },
    link: 'https://journal.ppcr.org/index.php/ppcrjournal/article/view/433',
    pages: '2 páginas',
    image: portada5,
  },
]

function getInitials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

const slides = [
  {
    video: heroVideo4,
    label: 'Investigación Clínica',
    headline: ['Innovación que marca', 'un hito en el Perú'],
    highlight: 1,
    sub: 'Nuestros estudios forman parte de publicaciones internacionales orientadas a mejorar la atención del paciente oncológico.',
    cta: 'Ver todas las publicaciones',
    isResearch: true,
  },
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
    label: 'Innovación Tecnológica',
    headline: ['Precisión tecnológica', 'para tu diagnóstico'],
    highlight: 1,
    sub: 'Incorporamos los avances más recientes en imagenología y cirugía robótica para tratamientos más precisos.',
    cta: 'Descubre la tecnología',
  },
  {
    video: heroVideo3,
    label: 'Detección Temprana',
    headline: ['Detección que', 'salva vidas'],
    highlight: 1,
    sub: 'Nuestros programas de screening preventivo identifican el cáncer en sus etapas más tratables.',
    cta: 'Conoce el programa',
  },
]

const INTERVAL = 7000
const RESEARCH_INTERVAL = 12000
const SLIDE3_INTERVAL = 10000

const medicalTags = [
  { label: 'Detección Temprana', to: '/v4/pulmoscan' },
  { label: 'Oncología Clínica', to: '/v4/oncologia-medica' },
  { label: 'Investigación', to: '/v4/investigacion' },
  { label: 'Medicina Preventiva', to: '/v4/preventivo-azul' },
  { label: 'Quimioterapia', to: '/v4/quimioterapia' },
  { label: 'Cirugía de Precisión', to: '/v4/sala-operaciones' },
  { label: 'Diagnóstico por Imágenes', to: '/v4/diagnostico-imagenes' },
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
  const [tooltipPos, setTooltipPos] = useState(null) // { x, y }
  const [paused, setPaused] = useState(false)
  const loop = [...publications, ...publications]

  const handleEnter = (e, i) => {
    setActiveIdx(i)
    const r = e.currentTarget.getBoundingClientRect()
    setTooltipPos({ x: r.left + r.width / 2, y: r.top })
  }
  const handleLeave = () => {
    setActiveIdx(null)
    setTooltipPos(null)
  }

  const activePub = activeIdx !== null ? loop[activeIdx] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-8 lg:mt-10 max-w-3xl"
    >
      {/* Marquee loop */}
      <div
        className="relative overflow-x-clip overflow-y-visible rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setActiveIdx(null) }}
      >
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
              onMouseEnter={(e) => handleEnter(e, i)}
              onMouseLeave={handleLeave}
              onFocus={(e) => handleEnter(e, i)}
              onBlur={handleLeave}
              onClick={(e) => {
                if (window.matchMedia('(hover: none)').matches && activeIdx !== i) {
                  e.preventDefault()
                  setActiveIdx(i)
                }
              }}
              className="group relative flex items-center gap-3 lg:gap-4 pl-2 lg:pl-3 pr-4 lg:pr-5 py-2 lg:py-3 rounded-xl whitespace-nowrap text-[11px] lg:text-sm font-light text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <span className="relative h-12 w-9 lg:h-16 lg:w-12 shrink-0 overflow-hidden rounded-sm ring-1 ring-white/20 shadow-md">
                <img
                  src={pub.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
              <span>{pub.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Card estática: Próximamente — fuera del loop */}
      <div className="mt-3 flex items-center gap-2 max-w-full lg:w-fit pl-1 pr-4 lg:pr-5 py-1 rounded-2xl border border-primary/30 bg-white/5 backdrop-blur-xl shadow-[0_0_24px_rgba(82,192,225,0.15)] cursor-default select-none overflow-hidden">
        {/* Imagen */}
        <div className="relative h-12 w-16 lg:h-14 lg:w-24 shrink-0 overflow-hidden rounded-xl">
          <img src={proximamente} alt="Próximamente" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
        </div>
        <span className="flex flex-col gap-0.5 min-w-0">
          <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#52C0E1]">Próximamente</span>
          <span className="text-white/80 text-xs font-medium">Dr. Francis Martinez</span>
          <span className="text-white/45 text-[11px] font-light">Cirugía de implante coclear con exoscopio</span>
        </span>
      </div>

      {/* Tooltip portaled — fuera del marquee transformado para que el backdrop-blur funcione */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activePub && tooltipPos && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'fixed',
                  left: tooltipPos.x,
                  top: tooltipPos.y,
                  transform: 'translate(-50%, calc(-100% - 12px))',
                }}
                className="
                  pointer-events-none z-9999
                  w-90 overflow-hidden rounded-2xl
                  border border-white/15
                  bg-white/10 backdrop-blur-2xl
                  shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                "
              >
                <div className="flex items-start gap-4 px-5 pt-5 pb-4">
                  {activePub.lead && (
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-linear-to-br from-primary-medium/40 to-primary/30 text-[12px] font-semibold tracking-wide text-white">
                      {activePub.lead.photo ? (
                        <img
                          src={activePub.lead.photo}
                          alt={activePub.lead.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        getInitials(activePub.lead.name)
                      )}
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold leading-snug text-white">
                      {activePub.fullTitle}
                    </p>
                    {activePub.principalAuthor && (
                      <p className="mt-1.5 text-[11.5px] font-light leading-snug text-white/75">
                        {activePub.principalAuthor}
                      </p>
                    )}
                  </div>
                </div>
                {activePub.coautores && activePub.coautores.length > 0 && (
                  <div className="border-t border-white/10 px-5 py-4">
                    <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-white/50">
                      Coautores
                    </p>
                    <p className="mt-2 text-[11.5px] font-light leading-[1.55] text-white/85">
                      {activePub.coautores.join(', ')}
                    </p>
                  </div>
                )}
                {activePub.presentedAt && (
                  <div className="border-t border-white/10 px-5 py-4">
                    <p className="text-[9px] font-semibold tracking-[0.22em] uppercase text-white/50">
                      Presentado en
                    </p>
                    <p className="mt-2 text-[11.5px] font-light leading-[1.45] text-white/85">
                      {activePub.presentedAt}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
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
    const duration = slides[current].isResearch
      ? RESEARCH_INTERVAL
      : current === 2
      ? SLIDE3_INTERVAL
      : INTERVAL

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
      <div className={`absolute inset-0 z-10 transition-colors duration-700 ${slide.isResearch ? 'bg-gray-950/40' : 'bg-gray-950/25'}`} />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-gray-950/25 to-transparent z-10" />

      {/* Contenido */}
      <div className="relative z-20 grow flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 items-center min-w-0">

            {/* Texto del slide activo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="min-w-0"
              >
       

                <motion.h1
                  variants={itemVariants}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`${slide.isResearch ? 'text-3xl sm:text-5xl lg:text-6xl xl:text-7xl' : 'text-4xl sm:text-6xl lg:text-7xl xl:text-8xl'} font-extralight text-white tracking-tight leading-[1.05] wrap-break-word hyphens-auto`}
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
                  {slide.isResearch ? (
                    <Link
                      to="/v4/investigacion"
                      className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
                    >
                      <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-primary group-hover:bg-primary-dark group-hover:text-white backdrop-blur-md border border-primary/0">
                        VER INVESTIGACIONES
                      </span>
                      <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-primary text-white group-hover:bg-primary-dark group-hover:text-white backdrop-blur-md border border-primary/0">
                        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                    </Link>
                  ) : (
                    <a
                      href="https://appointments.detecta.pe/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
                    >
                      <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-primary group-hover:bg-primary-dark group-hover:text-white backdrop-blur-md border border-primary/0">
                        AGENDAR CITA
                      </span>
                      <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-primary text-white group-hover:bg-primary-dark group-hover:text-white backdrop-blur-md border border-primary/0">
                        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                    </a>
                  )}
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
                <Link
                  to={tag.to}
                  className="px-8 lg:px-12 text-[10px] lg:text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 hover:text-cyan-400 transition-colors duration-300"
                >
                  {tag.label}
                </Link>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 mx-2" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
