import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView, AnimatePresence } from 'framer-motion'
import mockHome from '../../assets/home.webp'
import mockTipocita from '../../assets/tipocita.webp'
import mockDoctores from '../../assets/doctores.webp'
import RocketReveal from './RocketReveal'

const BOMBA_URL = `${import.meta.env.VITE_BASE_IMAGE_URL}home/bombaFinal.png`

const mockups = [
  { id: 0, img: mockTipocita },
  { id: 1, img: mockHome },
  { id: 2, img: mockDoctores },
]

const LAUNCH_DATE = new Date('2026-06-12T00:00:00')

function getTimeLeft(target) {
  const diff = Math.max(0, target.getTime() - Date.now())
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, finished: diff === 0 }
}

function CountdownLaunch() {
  const [t, setT] = useState(() => getTimeLeft(LAUNCH_DATE))

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(LAUNCH_DATE)), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: t.days,    label: 'Días' },
    { value: t.hours,   label: 'Horas' },
    { value: t.minutes, label: 'Min' },
    { value: t.seconds, label: 'Seg' },
  ]

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:mx-0">

      <p className="mb-5 text-2xl lg:text-3xl font-light text-primary text-center lg:text-left tracking-tight">
        Lanzamos el{' '}
        <span className="font-medium text-primary-dark">12 de junio</span>
      </p>

      {/* Contenedor con la imagen como fondo y los números superpuestos */}
      <div className="relative w-full">
        <img
          src={BOMBA_URL}
          alt="Cuenta regresiva del lanzamiento"
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />

        {/* Numeros superpuestos sobre los 4 cuadrados de la imagen */}
        <div
          className="absolute grid grid-cols-4 pointer-events-none"
          style={{
            left: '23%',
            right: '32%',
            top: '56%',
            bottom: '24%',
            gap: '1.5%',
          }}
        >
          {units.map((u) => (
            <div
              key={u.label}
              className="flex flex-col items-center justify-center"
            >
              <span
                className="font- text-white tabular-nums leading-none"
                style={{
                  fontSize: 'clamp(10px, 2vw, 28px)',
                  textShadow: '0 0 12px rgba(82,192,225,0.85), 0 0 24px rgba(82,192,225,0.45)',
                }}
              >
                {String(u.value).padStart(2, '0')}
              </span>
              <span
                className="mt-1 font-semibold uppercase text-primary/80 tracking-[0.18em]"
                style={{ fontSize: 'clamp(7px, 0.8vw, 10px)' }}
              >
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const getMockupVariants = (offset) => ({
  center: { x: 0, scale: 1, zIndex: 10, opacity: 1 },
  left: { x: -offset, scale: 0.82, zIndex: 5, opacity: 0.35 },
  right: { x: offset, scale: 0.82, zIndex: 5, opacity: 0.35 },
})

// Lista (fake) de especialidades y subespecialidades agrupadas
const ESPECIALIDADES_GROUPS = [
  {
    name: 'Oncología',
    items: [
      'Oncología Médica',
      'Oncología Cabeza y Cuello',
      'Oncología Pediátrica',
      'Mastología y Ginecología',
      'Ginecología Oncológica',
      'Urología Oncológica',
      'Psicooncología',
    ],
  },
  {
    name: 'Diagnóstico',
    items: [
      'Diagnóstico por Imágenes',
      'Laboratorio Clínico',
      'Anatomía Patológica',
      'Radiología Intervencionista',
    ],
  },
  {
    name: 'Medicina Interna',
    items: [
      'Enfermedades Infecciosas',
      'Geriatría',
      'Endocrinología',
      'Gastroenterología',
      'Hematología',
      'Nefrología',
      'Neumología',
    ],
  },
  {
    name: 'Cirugía',
    items: [
      'Cirugía Plástica',
      'Neurocirugía',
      'Coloproctología',
      'Traumatología',
      'Sala de Operaciones',
    ],
  },
  {
    name: 'Salud de la mujer y niño',
    items: ['Ginecología y Obstetricia', 'Pediatría'],
  },
  {
    name: 'Salud mental',
    items: ['Psicología', 'Psiquiatría'],
  },
  {
    name: 'Otras especialidades',
    items: [
      'Dermatología',
      'Oftalmología',
      'Otorrinolaringología',
      'Odontología',
      'Urología',
      'Medicina Física',
      'Medicina General',
    ],
  },
]

function MetricCard({ stat, idx }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (stat.list) setOpen(true)
  }
  const handleLeave = () => {
    if (!stat.list) return
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <motion.div
      className={`relative text-center ${idx === 2 ? 'col-span-2 lg:col-span-1' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className={stat.list ? 'cursor-default' : ''}>
        <h3 className="text-4xl lg:text-5xl font-light text-primary-medium mb-2 tracking-tighter">
          <NumberCounter value={stat.value} prefix={stat.prefix} />
        </h3>
        <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
          {stat.label}
        </p>
        {stat.list && (
          <span className="mt-2 inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-primary-medium/70">
          </span>
        )}
      </div>

      <AnimatePresence>
        {open && stat.list && (
          <motion.div
            key="popover"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-30 mt-4 w-[min(640px,92vw)] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-[0_30px_60px_-25px_rgba(0,112,165,0.25)]"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <span className="pointer-events-none absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-100 bg-white" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {stat.list.map((group) => (
                <div key={group.name}>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-dark">
                    {group.name}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-[12.5px] font-light leading-snug text-slate-500"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Componente de Contador optimizado para activarse al hacer scroll
function NumberCounter({ value, prefix = "", suffix = "" }) {
  const nodeRef = useRef(null);
  // Detecta si el elemento está en pantalla (se activa una sola vez)
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    // Solo inicia la animación si el elemento está visible
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Un ease-out más suave
        onUpdate(val) {
          node.textContent = `${prefix}${Math.floor(val).toLocaleString()}${suffix}`;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, prefix, suffix]);

  return <span ref={nodeRef}>0</span>; // Empieza en 0 visualmente
}

// Iconos
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M3.18 23.76c.3.17.65.19.98.07l11.65-6.73-2.51-2.52-10.12 9.18zM.5 1.4C.19 1.74 0 2.27 0 2.96v18.08c0 .69.19 1.22.51 1.56l.08.08 10.13-10.13v-.24L.58 1.32.5 1.4zM20.49 10.34l-2.88-1.66-2.83 2.83 2.83 2.83 2.9-1.67c.83-.48.83-1.26-.02-1.33zM3.18.24L13.3 9.42l-2.51 2.52L3.18.24z" />
    </svg>
  )
}

export default function AppDetectaV4() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const mockupVariants = getMockupVariants(isMobile ? 110 : 180)
  const mockupWidth = isMobile ? 180 : 260

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockups.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getVariant = (index) => {
    if (index === activeIndex) return "center"
    if ((activeIndex + 1) % mockups.length === index) return "right"
    return "left"
  }

  return (
    <section 
      className="w-full bg-white py-24" 
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <RocketReveal className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Columna Izquierda: Texto */}
            <div className="text-center lg:text-left">
              <RocketReveal.Item delay={0}>
                <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0199C6] mb-6">
                  Aplicativo Móvil
                </p>
              </RocketReveal.Item>

              <RocketReveal.Item delay={0.1}>
                <h2 className="text-5xl lg:text-7xl font-light text-[#0070A5] tracking-tighter leading-none uppercase mb-8">
                  Tu salud, <br />
                  <span className="font-normal text-slate-900">en tu bolsillo.</span>
                </h2>
              </RocketReveal.Item>

              <RocketReveal.Item delay={0.25}>
                <p className="text-base lg:text-lg font-light text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                  Agenda citas, consulta tus resultados y habla con tu médico desde la app de Detecta. Todo el control de tu bienestar en un solo lugar.
                </p>
              </RocketReveal.Item>

              <RocketReveal.Item delay={0.35}>
                <CountdownLaunch />
              </RocketReveal.Item>

              <RocketReveal.Item delay={0.5}>
                <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-50 items-center justify-center gap-3 px-5 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-sm hover:bg-gray-700 transition-colors"
                  >
                    <AppleIcon />
                    <div className="text-left">
                      <p className="text-[10px] text-white/50 leading-none mb-0.5">Disponible en</p>
                      <p className="text-sm font-medium leading-none">App Store</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-50 items-center justify-center gap-3 px-5 py-3.5 border-2 border-gray-900 text-gray-900 text-sm font-medium rounded-sm hover:bg-gray-900 hover:text-white transition-all"
                  >
                    <GooglePlayIcon />
                    <div className="text-left">
                      <p className="text-[10px] text-gray-400 leading-none mb-0.5">Disponible en</p>
                      <p className="text-sm font-medium leading-none">Google Play</p>
                    </div>
                  </motion.a>
                </div>
              </RocketReveal.Item>
            </div>

            {/* Columna Derecha: Mockups con foco interactivo */}
            <RocketReveal.Item delay={0.65}>
              <div
                className="relative flex justify-center items-center h-110 sm:h-150 overflow-hidden"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EEFBFF] blur-[100px] rounded-full -z-10" />
                {mockups.map((mock, index) => (
                  <motion.div
                    key={mock.id}
                    variants={mockupVariants}
                    animate={getVariant(index)}
                    initial={false}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    onClick={() => setActiveIndex(index)}
                    className="absolute cursor-pointer will-change-transform"
                    style={{ width: `${mockupWidth}px` }}
                  >
                    <div className={`relative transition-all duration-500 ${activeIndex === index ? 'drop-shadow-2xl' : 'drop-shadow-md'}`}>
                      <img
                        src={mock.img}
                        alt="App Detecta"
                        className="w-full h-auto rounded-[2.5rem]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </RocketReveal.Item>
          </div>
        </RocketReveal>

        {/* Sección de Métricas: Animación escalonada */}
        <div className="relative pt-12 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { value: '8', label: 'Años de experiencia', prefix: '+' },
            {
              value: '35',
              label: 'Especialidades y subespecialidades',
              prefix: '+',
              list: ESPECIALIDADES_GROUPS,
            },
            { value: '100000', label: 'Pacientes atendidos', prefix: '' },
          ].map((stat, idx) => (
            <MetricCard key={idx} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}