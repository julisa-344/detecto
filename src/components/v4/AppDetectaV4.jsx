import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'
import mockHome from '../../assets/home.webp'
import mockTipocita from '../../assets/tipocita.webp'
import mockDoctores from '../../assets/doctores.webp'

const mockups = [
  { id: 0, img: mockTipocita },
  { id: 1, img: mockHome },
  { id: 2, img: mockDoctores },
]

const getMockupVariants = (offset) => ({
  center: { x: 0, scale: 1, zIndex: 10, opacity: 1 },
  left: { x: -offset, scale: 0.82, zIndex: 5, opacity: 0.35 },
  right: { x: offset, scale: 0.82, zIndex: 5, opacity: 0.35 },
})

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Columna Izquierda: Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0199C6] mb-6">
              Aplicativo Móvil
            </p>
            <h2 className="text-5xl lg:text-7xl font-light text-[#0070A5] tracking-tighter leading-none uppercase mb-8">
              Tu salud, <br />
              <span className="font-normal text-slate-900">en tu bolsillo.</span>
            </h2>
            <p className="text-base lg:text-lg font-light text-slate-500 leading-relaxed max-w-md mb-12">
              Agenda citas, consulta tus resultados y habla con tu médico desde la app de Detecta. Todo el control de tu bienestar en un solo lugar.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-5 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-sm hover:bg-gray-700 transition-colors"
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
                className="inline-flex items-center gap-3 px-5 py-3.5 border-2 border-gray-900 text-gray-900 text-sm font-medium rounded-sm hover:bg-gray-900 hover:text-white transition-all"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none mb-0.5">Disponible en</p>
                  <p className="text-sm font-medium leading-none">Google Play</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Columna Derecha: Mockups con foco interactivo */}
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
        </div>

        {/* Sección de Métricas: Animación escalonada */}
        <div className="pt-12 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "8", label: "Años de experiencia", prefix: "+" },
            { value: "35", label: "Especialidades", prefix: "+" },
            { value: "100000", label: "Pacientes atendidos", prefix: "" },
            { value: "3500", label: "Cirugías anuales", prefix: "+" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }} // Staggered delay
            >
              <h3 className="text-4xl lg:text-5xl font-light text-[#0199C6] mb-2 tracking-tighter">
                <NumberCounter value={stat.value} prefix={stat.prefix} />
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.1em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}