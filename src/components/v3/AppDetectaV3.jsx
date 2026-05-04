import { motion } from 'framer-motion'
import mockup1 from '../../assets/mockup1.png'

/**
 * AppDetectaV3 - Versión Split (Texto Izquierda / Imagen Derecha)
 * - Altura: 100vh (sin scroll)
 * - Tipografía: Lexend
 * - Colores: Paleta Detecta Clínica
 */

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

export default function AppDetectaV3() {
  return (
    <section 
      className="h-screen w-full bg-white flex items-center overflow-hidden" 
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: Texto y CTAs (Acelerado y Snappy) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
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

          {/* Botones de Descarga sin márgenes negativos */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-sm hover:bg-gray-700 transition-colors duration-200"
              >
                <AppleIcon />
                <div className="text-left">
                  <p className="text-[10px] text-white/50 leading-none mb-0.5">Disponible en</p>
                  <p className="text-sm font-medium leading-none">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3.5 border-2 border-gray-900 text-gray-900 text-sm font-medium rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none mb-0.5 group-hover:text-white/50">Disponible en</p>
                  <p className="text-sm font-medium leading-none">Google Play</p>
                </div>
              </a>
            </div>
        </motion.div>

        {/* COLUMNA DERECHA: Mockup (Sin Deformación y con profundidad) */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full flex justify-end items-center"
        >
          {/* Fondo decorativo sutil detrás del mockup */}
          <div className="absolute right-0 w-[500px] h-[500px] bg-[#EEFBFF] blur-[120px] rounded-full -z-10" />
          
          <img 
            src={mockup1} 
            alt="App Detecta Mockup" 
            className="h-[75vh] w-auto object-contain "
          />
        </motion.div>

      </div>
    </section>
  )
}