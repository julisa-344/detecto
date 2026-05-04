import { motion } from 'framer-motion'
import { AtypicalButton } from './HeaderV3'
import bgImage from '../../assets/opcion2.png'

/**
 * HeroV3 — Futurista / Disruptivo
 * Fondo: opcion2.png (imagen médica macro)
 * Layout: izquierda-abajo como referencia, texto bold impactante
 * Botón atípico (pill doble) inline en el hero
 */
export default function HeroV3() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay sutil para contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/50 via-gray-950/20 to-transparent" />
      {/* Gradiente inferior para transición a la sección de métricas */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-950/80 to-transparent" />

      {/* Tag superior derecha — como la referencia */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-28 right-8 lg:right-12 flex flex-col items-end gap-2"
      >
        <AtypicalButton label="CONTACT US" action="Discover" />
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 text-right">
          Diagnóstico de<br />precisión avanzada
        </p>
      </motion.div>

      {/* Contenido principal — alineado abajo izquierda */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-0 w-full">
        <div className="max-w-2xl">

          {/* Headline bold impactante */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white tracking-tight leading-[1.0] mb-6"
          >
            Transformando{' '}
            <span className="italic font-light">el futuro</span>
            <br />
            de la medicina.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base lg:text-lg font-light text-white/55 max-w-md leading-relaxed mb-10"
          >
            Descubre cómo estamos redefiniendo el diagnóstico médico con inteligencia artificial e innovación de vanguardia.
          </motion.p>

          {/* Botón atípico pill doble — el elemento disruptivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <AtypicalButton label="EVALUACIÓN AHORA" action="Comenzar" />
          </motion.div>
        </div>
      </div>

      {/* Barra de tags horizontales — como la referencia ("CUTTING-EDGE TECHNOLOGY...") */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 w-full mt-16"
        style={{
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center overflow-x-auto no-scrollbar">
            {[
              'Detección Temprana',
              'Oncología Clínica',
              'Investigación',
              'Medicina Preventiva',
              'Quimioterapia',
              'Cirugía de Precisión',
              'Radioterapia',
            ].map((tag, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <span className="px-6 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-white/50 hover:text-white/90 cursor-pointer transition-colors duration-200 whitespace-nowrap">
                  {tag}
                </span>
                {i < 6 && (
                  <div className="w-px h-4 bg-white/15 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
