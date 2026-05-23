import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import torre1 from '../../assets/torre1.png'
import torre2 from '../../assets/torre2.png'
import detectoMascot from '../../assets/detectoConstruccion.png'

const slides = [
  {
    title: 'Torre de Contención',
    subtitle: 'Próxima apertura · 2026',
    description:
      'Construiremos nuevos espacios diseñados para ampliar nuestra capacidad de atención y acompañar a más pacientes con cercanía, humanidad y especialización.',
    accent: '#0199C6',
    image: torre1,
    year: '2026',
  },
  {
    title: 'Torre principal',
    subtitle: 'En desarrollo · 2028',
    description:
      'En Detecta Clínica, construiremos una nueva sede principal pensada para ti, donde la atención especializada, la investigación clínica y el diagnóstico se unirán para cuidar mejor de tu salud.',
    accent: '#52C0E1',
    image: torre2,
    year: '2030',
  },
]

// Segmentos de scroll por fase (todos dentro del rango sticky 0–0.69)
const TITLE_END = 0.42 // 0 → 0.42: el título tiene bastante tiempo de leerse
const SLIDE_1 = [0.46, 0.56]
const SLIDE_2 = [0.58, 0.68]

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  )
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoint])
  return isMobile
}

export default function FuturoTimeline() {
  const isMobile = useIsMobile()

  // Pre-carga las imágenes para evitar el flash borroso al cambiar de slide
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image()
      img.src = s.image
    })
  }, [])

  if (isMobile) return <FuturoTimelineMobile />
  return <FuturoTimelineDesktop />
}

function FuturoTimelineDesktop() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef(null)
  const transitionTimers = useRef([])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Cambia el slide activo según el progreso de scroll
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < SLIDE_2[0] ? 0 : 1
    if (next !== currentIndex) {
      transitionTimers.current.forEach(clearTimeout)
      transitionTimers.current = []
      setIsTransitioning(true)
      transitionTimers.current.push(
        setTimeout(() => {
          setCurrentIndex(next)
          transitionTimers.current.push(
            setTimeout(() => setIsTransitioning(false), 40)
          )
        }, 180)
      )
    }
  })

  useEffect(() => () => {
    transitionTimers.current.forEach(clearTimeout)
  }, [])

  // Progreso de cada slide individual (como cadenas CSS width)
  const progress0Width = useTransform(scrollYProgress, SLIDE_1, ['0%', '100%'], { clamp: true })
  const progress1Width = useTransform(scrollYProgress, SLIDE_2, ['0%', '100%'], { clamp: true })

  // Visibilidad del título y del slide
  const titleOpacity = useTransform(scrollYProgress, [0, TITLE_END * 0.88, TITLE_END], [1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, TITLE_END], [0, -80])
  const titleScale = useTransform(scrollYProgress, [0, TITLE_END], [1, 0.92])
  const titleVisibility = useTransform(scrollYProgress, (v) => (v > TITLE_END + 0.005 ? 'hidden' : 'visible'))
  const titlePointer = useTransform(scrollYProgress, (v) => (v > TITLE_END - 0.06 ? 'none' : 'auto'))

  const slideOpacity = useTransform(scrollYProgress, [TITLE_END - 0.02, TITLE_END + 0.03, 0.7, 0.76], [0, 1, 1, 0])
  const slideY = useTransform(scrollYProgress, [TITLE_END - 0.02, TITLE_END + 0.03], [60, 0])

  // Navegación manual: hace scroll a la posición correspondiente
  const goToSlide = useCallback((index) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const sectionTop = window.scrollY + rect.top
    const sectionHeight = rect.height
    const target = index === 0 ? (SLIDE_1[0] + SLIDE_1[1]) / 2 : (SLIDE_2[0] + SLIDE_2[1]) / 2
    window.scrollTo({ top: sectionTop + sectionHeight * target, behavior: 'smooth' })
  }, [])

  const current = slides[currentIndex]

  const css = `
    .ft-section { position: relative; height: 280vh; }
    .ft-bg-base { position: absolute; inset: 0; background: linear-gradient(180deg, #F5FBFE 0%, #DCF1F8 50%, #F5FBFE 100%); z-index: 0; }
    .ft-bg-wash { position: absolute; inset: 0; transition: background 1.2s ease; pointer-events: none; z-index: 1; }
    .ft-grid { position: absolute; inset: 0; opacity: .05; pointer-events: none; z-index: 1;
      background-image: radial-gradient(circle at 1px 1px, #0070A5 1px, transparent 0);
      background-size: 32px 32px; }

    .ft-sticky { position: sticky; top: 0; height: 100vh; overflow: hidden;
      display: flex; flex-direction: column; justify-content: center; z-index: 2; }

    .ft-title-block { position: absolute; inset: 0; display: flex; flex-direction: column;
      justify-content: center; align-items: center; text-align: center; padding: 0 24px; z-index: 3; }
    @media (min-width: 1024px) { .ft-title-block { padding: 0 48px; } }
    .ft-title-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.5em;
      text-transform: uppercase; color: #0199C6; margin-bottom: 24px; }
    .ft-title-h { font-size: clamp(40px, 6vw, 88px); font-weight: 200; line-height: 1.02;
      letter-spacing: -0.025em; color: #0070A5; max-width: 980px; }
    @media (max-width: 639px) { .ft-title-h { font-size: 34px; line-height: 1.1; } }
    .ft-title-h em { font-style: italic; font-weight: 500; color: #0199C6; }
    .ft-title-sub { margin-top: 24px; max-width: 580px; font-size: clamp(14px, 1.1vw, 17px);
      font-weight: 300; line-height: 1.7; color: #475569; }
    .ft-scroll-hint { margin-top: 56px; display: inline-flex; flex-direction: column; align-items: center;
      gap: 10px; font-size: 10px; font-weight: 600; letter-spacing: 0.32em; text-transform: uppercase;
      color: #94A3B8; }
    @media (max-width: 639px) { .ft-scroll-hint { margin-top: 28px; } }
    .ft-scroll-hint .line { width: 1px; height: 36px; background: linear-gradient(180deg, transparent, #0199C6);
      animation: ftScrollLine 1.8s ease-in-out infinite; }
    @keyframes ftScrollLine {
      0%, 100% { transform: scaleY(.4); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
    }

    .ft-mascot-wrap { position: relative; margin: 24px auto 0;
      width: clamp(200px, 22vw, 360px); aspect-ratio: 1 / 1;
      pointer-events: none; user-select: none; }
    .ft-mascot-wrap::before {
      content: ''; position: absolute; inset: -8%;
      background: radial-gradient(circle at 50% 55%,
        rgba(1,153,198,0.22) 0%,
        rgba(1,153,198,0.10) 35%,
        rgba(82,192,225,0.05) 60%,
        transparent 75%);
      filter: blur(10px); z-index: -1;
    }
    .ft-mascot { width: 100%; height: 100%; object-fit: contain;
      animation: ftMascotFloat 4.5s ease-in-out infinite;
      filter: drop-shadow(0 24px 40px rgba(0,112,165,0.35)); }
    @media (max-width: 768px) {
      .ft-mascot-wrap { width: 180px; }
    }
    @media (max-width: 639px) {
      .ft-mascot-wrap { width: 150px; margin-top: 16px; }
    }
    @keyframes ftMascotFloat {
      0%, 100% { transform: translateY(0) rotate(-2deg); }
      50% { transform: translateY(-14px) rotate(2deg); }
    }

    .ft-slide-block { position: absolute; inset: 0; display: flex; align-items: center; z-index: 2; }

    .ft-inner { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 24px;
      display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
    @media (max-width: 639px) { .ft-inner { gap: 20px; padding: 0 20px; } }
    @media (min-width: 1024px) {
      .ft-inner { grid-template-columns: 1fr 1.05fr; gap: 80px; padding: 0 48px; }
    }

    .ft-num { display: flex; align-items: center; gap: 16px;
      transition: opacity .5s, transform .5s; }
    .ft-num.transitioning { opacity: 0; transform: translateY(8px); }
    .ft-num-line { display: block; width: 48px; height: 1px; background: currentColor; opacity: .4; }
    .ft-num-text { font-family: ui-monospace, SFMono-Regular, monospace; font-size: 11px;
      font-weight: 600; letter-spacing: 0.28em; color: #475569; }

    .ft-year { font-size: clamp(64px, 9vw, 132px); font-weight: 200; line-height: 1; letter-spacing: -0.04em;
      color: #0070A5; margin-top: 8px; transition: opacity .55s ease, transform .55s ease; }
    @media (max-width: 639px) { .ft-year { font-size: 52px; margin-top: 4px; } }
    .ft-year.transitioning { opacity: 0; transform: translateY(20px); }

    .ft-title { font-size: clamp(28px, 3.5vw, 44px); font-weight: 300; line-height: 1.05;
      letter-spacing: -0.01em; color: #0070A5; margin-top: 16px;
      transition: opacity .55s .05s ease, transform .55s .05s ease; }
    @media (max-width: 639px) { .ft-title { font-size: 24px; margin-top: 10px; } }
    .ft-title.transitioning { opacity: 0; transform: translateY(12px); }
    .ft-title em { font-style: italic; font-weight: 500; }

    .ft-subtitle { font-size: 11px; font-weight: 600; letter-spacing: 0.28em; text-transform: uppercase;
      margin-top: 14px; transition: opacity .55s .1s ease, color .8s ease; }
    .ft-subtitle.transitioning { opacity: 0; }

    .ft-desc { max-width: 460px; margin-top: 20px; font-size: 15px; font-weight: 300; line-height: 1.7;
      color: #475569; transition: opacity .55s .15s ease, transform .55s .15s ease; }
    @media (max-width: 639px) { .ft-desc { font-size: 13.5px; line-height: 1.6; margin-top: 14px; } }
    .ft-desc.transitioning { opacity: 0; transform: translateY(8px); }

    .ft-arrows { display: flex; gap: 12px; margin-top: 36px; }
    @media (max-width: 639px) { .ft-arrows { margin-top: 20px; } }
    .ft-arrow { width: 48px; height: 48px; border-radius: 999px; border: 1px solid rgba(0,112,165,0.18);
      background: rgba(255,255,255,0.6); backdrop-filter: blur(8px); display: inline-flex;
      align-items: center; justify-content: center; color: #0070A5; cursor: pointer; transition: all .4s; }
    .ft-arrow:hover { background: #0199C6; border-color: #0199C6; color: #fff; transform: translateY(-2px); }
    .ft-arrow:disabled { opacity: .35; cursor: not-allowed; }
    .ft-arrow:disabled:hover { background: rgba(255,255,255,0.6); border-color: rgba(0,112,165,0.18); color: #0070A5; transform: none; }

    .ft-image-wrap { position: relative; aspect-ratio: 4/5; width: 100%; max-width: 560px; margin: 0 auto; }
    @media (max-width: 639px) { .ft-image-wrap { aspect-ratio: 4/3; max-width: 320px; } }
    @media (min-width: 1024px) { .ft-image-wrap { margin-left: auto; margin-right: 0; } }

    .ft-image-frame { position: absolute; inset: 0; border-radius: 36px; overflow: hidden;
      background: #fff; box-shadow: 0 50px 100px -40px rgba(0,112,165,0.35);
      transition: opacity .35s ease; }
    .ft-image-frame.transitioning { opacity: 0; }

    .ft-image { width: 100%; height: 100%; object-fit: cover; display: block; }
    .ft-image-overlay { position: absolute; inset: 0; transition: background .8s ease; pointer-events: none; }

    .ft-year-badge { position: absolute; right: 18px; top: 18px; padding: 8px 14px; border-radius: 999px;
      background: rgba(255,255,255,0.85); backdrop-filter: blur(10px); font-size: 11px;
      font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #0070A5; }

    .ft-progress { margin-top: 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
      max-width: 360px; }
    @media (min-width: 1024px) { .ft-progress { margin-left: auto; margin-right: 0; } }
    @media (max-width: 639px) { .ft-progress { margin-top: 24px; gap: 20px; max-width: 100%; } }

    .ft-progress-item { display: flex; flex-direction: column; cursor: pointer;
      background: none; border: none; padding: 0; text-align: left;
      transition: opacity .5s ease; opacity: .35; }
    .ft-progress-item.active, .ft-progress-item.past { opacity: 1; }
    .ft-progress-item:hover { opacity: .85; }
    .ft-progress-item.active:hover { opacity: 1; }

    .ft-progress-year { font-size: 13px; font-weight: 500; letter-spacing: 0.32em;
      color: #0F172A; line-height: 1; transition: color .5s ease;
      font-family: ui-monospace, SFMono-Regular, monospace; }

    .ft-progress-track { width: 100%; height: 1px; background: rgba(15,23,42,0.12);
      overflow: hidden; margin-top: 14px; }
    .ft-progress-fill { height: 100%; }
  `

  return (
    <section
      ref={sectionRef}
      className="ft-section"
      id="futuro-detecta"
    >
      <style>{css}</style>

      <div className="ft-bg-base" />
      <div
        className="ft-bg-wash"
        style={{
          background: `radial-gradient(ellipse at 80% 50%, ${current.accent}22 0%, transparent 60%)`,
        }}
      />
      <div className="ft-grid" />

      <div className="ft-sticky">
        {/* Título de intro */}
        <motion.div
          className="ft-title-block"
          style={{
            opacity: titleOpacity,
            y: titleY,
            scale: titleScale,
            visibility: titleVisibility,
            pointerEvents: titlePointer,
          }}
        >
          <p className="ft-title-eyebrow">El futuro</p>
          <h2 className="ft-title-h">
            Innovación que{' '}
            <em>transforma la salud.</em>
          <br />
          <br />
          </h2>
       
          

          {/* <p className="ft-title-sub">
            Una visión a largo plazo que combina infraestructura de vanguardia,
            tecnología y humanidad para acompañarte en cada etapa de tu vida.
          </p> */}

          <span className="ft-mascot-wrap">
            <img
              src={detectoMascot}
              alt="Detecto en construcción"
              className="ft-mascot"
              loading="lazy"
            />
          </span>

          <div className="ft-scroll-hint">
            <span>Desliza</span>
            <span className="line" />
          </div>
        </motion.div>

        {/* Slide */}
        <motion.div
          className="ft-slide-block"
          style={{ opacity: slideOpacity, y: slideY }}
        >
          <div className="ft-inner">
            {/* Texto */}
            <div>
              <div className={`ft-num ${isTransitioning ? 'transitioning' : ''}`}>
                <span className="ft-num-line" />
                <span className="ft-num-text">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              <div className={`ft-year ${isTransitioning ? 'transitioning' : ''}`}>
                {current.year}
              </div>

              <h3 className={`ft-title ${isTransitioning ? 'transitioning' : ''}`}>
                {current.title.split(' ').slice(0, -1).join(' ')}{' '}
                <em style={{ color: current.accent }}>
                  {current.title.split(' ').slice(-1)}
                </em>
              </h3>

              <p
                className={`ft-subtitle ${isTransitioning ? 'transitioning' : ''}`}
                style={{ color: current.accent }}
              >
                {current.subtitle}
              </p>

              <p className={`ft-desc ${isTransitioning ? 'transitioning' : ''}`}>
                {current.description}
              </p>

              <div className="ft-arrows">
                <button
                  onClick={() => goToSlide(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className="ft-arrow"
                  aria-label="Anterior"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => goToSlide(currentIndex + 1)}
                  disabled={currentIndex === slides.length - 1}
                  className="ft-arrow"
                  aria-label="Siguiente"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Imagen + progreso */}
            <div>
              <div className="ft-image-wrap">
                <div className={`ft-image-frame ${isTransitioning ? 'transitioning' : ''}`}>
                  <img src={current.image} alt={current.title} className="ft-image" />
                  <div
                    className="ft-image-overlay"
                    style={{
                      background: `linear-gradient(135deg, ${current.accent}22 0%, transparent 55%)`,
                    }}
                  />
                  <span className="ft-year-badge">{current.subtitle}</span>
                </div>
              </div>

              <div className="ft-progress">
                {slides.map((s, i) => {
                  const isActive = i === currentIndex
                  const isPast = i < currentIndex
                  const motionWidth = i === 0 ? progress0Width : progress1Width
                  const stateClass = isActive ? 'active' : isPast ? 'past' : ''
                  return (
                    <button
                      key={s.year}
                      onClick={() => goToSlide(i)}
                      className={`ft-progress-item ${stateClass}`}
                      aria-label={`Ir a ${s.year}`}
                    >
                      <span className="ft-progress-year">{s.year}</span>
                      <div className="ft-progress-track">
                        {isActive ? (
                          <motion.div
                            className="ft-progress-fill"
                            style={{ width: motionWidth, backgroundColor: s.accent }}
                          />
                        ) : (
                          <div
                            className="ft-progress-fill"
                            style={{
                              width: isPast ? '100%' : '0%',
                              backgroundColor: '#0F172A',
                              transition: 'width .4s ease',
                            }}
                          />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FuturoTimelineMobile() {
  const css = `
    .ftm { position: relative; overflow: hidden;
      background: linear-gradient(180deg, #F5FBFE 0%, #DCF1F8 50%, #F5FBFE 100%); }
    .ftm-grid { position: absolute; inset: 0; opacity: .05; pointer-events: none;
      background-image: radial-gradient(circle at 1px 1px, #0070A5 1px, transparent 0);
      background-size: 32px 32px; }

    .ftm-intro { position: relative; padding: 72px 20px 56px; text-align: center; }
    .ftm-inner { position: relative; max-width: 480px; margin: 0 auto; }

    .ftm-eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 0.4em;
      text-transform: uppercase; color: #0199C6; margin-bottom: 18px; }
    .ftm-h { font-size: 34px; font-weight: 200; line-height: 1.1; letter-spacing: -0.02em;
      color: #0070A5; margin: 0; }
    .ftm-h em { font-style: italic; font-weight: 500; color: #0199C6; }
    .ftm-mascot-wrap { position: relative; width: 110px; aspect-ratio: 1/1; margin: 56px auto 0; }
    .ftm-mascot-wrap::before { content: ''; position: absolute; inset: -10%;
      background: radial-gradient(circle at 50% 55%, rgba(1,153,198,0.22) 0%, rgba(82,192,225,0.05) 60%, transparent 75%);
      filter: blur(10px); z-index: -1; }
    .ftm-mascot { width: 100%; height: 100%; object-fit: contain;
      filter: drop-shadow(0 16px 28px rgba(0,112,165,0.3));
      animation: ftmFloat 4.5s ease-in-out infinite; }
    @keyframes ftmFloat {
      0%, 100% { transform: translateY(0) rotate(-2deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
    }

    .ftm-list { padding: 16px 20px 96px; display: flex; flex-direction: column; gap: 28px; }

    .ftm-card { position: relative; background: #fff; border-radius: 28px; overflow: hidden;
      box-shadow: 0 30px 60px -30px rgba(0,112,165,0.35); }
    .ftm-image-wrap { position: relative; aspect-ratio: 4/3; overflow: hidden; background: #DCF1F8; }
    .ftm-image { width: 100%; height: 100%; object-fit: cover; display: block; }
    .ftm-image-overlay { position: absolute; inset: 0; pointer-events: none; }
    .ftm-year-badge { position: absolute; right: 14px; top: 14px; padding: 6px 12px;
      border-radius: 999px; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px);
      font-size: 10px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
      color: #0070A5; }

    .ftm-body { padding: 24px 22px 26px; }
    .ftm-num { font-family: ui-monospace, SFMono-Regular, monospace; font-size: 10px;
      font-weight: 600; letter-spacing: 0.28em; color: #94A3B8; }
    .ftm-year { font-size: 48px; font-weight: 200; line-height: 1; letter-spacing: -0.03em;
      color: #0070A5; margin: 8px 0 0; }
    .ftm-title { font-size: 22px; font-weight: 300; line-height: 1.15; letter-spacing: -0.01em;
      color: #0070A5; margin: 10px 0 0; }
    .ftm-title em { font-style: italic; font-weight: 500; }
    .ftm-subtitle { font-size: 10px; font-weight: 600; letter-spacing: 0.28em; text-transform: uppercase;
      margin-top: 10px; }
    .ftm-desc { font-size: 13.5px; font-weight: 300; line-height: 1.65; color: #475569;
      margin: 14px 0 0; }
  `

  return (
    <section className="ftm" id="futuro-detecta">
      <style>{css}</style>
      <div className="ftm-grid" />

      {/* Bloque de intro */}
      <div className="ftm-intro">
        <div className="ftm-inner">
          <p className="ftm-eyebrow">El futuro</p>
          <h2 className="ftm-h">
            Innovación que <em>transforma la salud.</em>
          </h2>
          <span className="ftm-mascot-wrap">
            <img src={detectoMascot} alt="Detecto en construcción" className="ftm-mascot" loading="lazy" />
          </span>
        </div>
      </div>

      {/* Lista de torres en flujo normal */}
      <div className="ftm-list">
        {slides.map((s, i) => (
          <motion.article
            key={s.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="ftm-card"
          >
            <div className="ftm-image-wrap">
              <img src={s.image} alt={s.title} className="ftm-image" loading="lazy" />
              <div
                className="ftm-image-overlay"
                style={{ background: `linear-gradient(135deg, ${s.accent}22 0%, transparent 60%)` }}
              />
              <span className="ftm-year-badge">{s.subtitle}</span>
            </div>

            <div className="ftm-body">
              <p className="ftm-num">
                {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </p>
              <p className="ftm-year">{s.year}</p>
              <h3 className="ftm-title">
                {s.title.split(' ').slice(0, -1).join(' ')}{' '}
                <em style={{ color: s.accent }}>
                  {s.title.split(' ').slice(-1)}
                </em>
              </h3>
              <p className="ftm-subtitle" style={{ color: s.accent }}>
                {s.subtitle}
              </p>
              <p className="ftm-desc">{s.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

