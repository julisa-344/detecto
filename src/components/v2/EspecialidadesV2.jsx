import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Imports
import bgDefault from '../../assets/img-05.avif'
import img01 from '../../assets/img-01.avif'
import img02 from '../../assets/img-02.avif'
import img03 from '../../assets/img-03.avif'
import img04 from '../../assets/img-04.avif'
import img05 from '../../assets/img-05.avif'
import img06 from '../../assets/img-06.avif'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

const specialties = [
  {
    number: '01',
    title: 'Ginecología',
    description:
      'Atención integral de la salud femenina y seguimiento especializado durante el embarazo.',
    image: img01,
  },
  {
    number: '02',
    title: 'Urología',
    description:
      'Diagnóstico y tratamiento de patologías del sistema urinario y reproductivo masculino.',
    image: img02,
  },
  {
    number: '03',
    title: 'Mastología',
    description:
      'Evaluación y tratamiento de enfermedades mamarias con enfoque en detección temprana.',
    image: img03,
  },
  {
    number: '04',
    title: 'Oncología de Cabeza y Cuello',
    description:
      'Manejo especializado de tumores en la región cervical y facial con técnicas avanzadas.',
    image: img04,
  },
  {
    number: '05',
    title: 'Gastroenterología',
    description:
      'Estudio y tratamiento integral de enfermedades del tracto digestivo para tu bienestar.',
    image: img05,
  },
  {
    number: '06',
    title: 'Oncología General',
    description:
      'Protocolos de vanguardia para el manejo integral de diversas patologías oncológicas.',
    image: img06,
  },
]

export default function EspecialidadesV3() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const currentImage =
    hoveredIndex !== null ? specialties[hoveredIndex].image : bgDefault

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-20 overflow-hidden bg-gray-950">
      {/* Fondo con Zoom e Imagen Dinámica */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight">
            Nuestras{' '}
            <span className="font-bold italic">Especialidades</span>
          </h2>
        </motion.div>

        {/* Grid con Animación de entrada Staggered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specialties.map((spec, index) => {
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={spec.number}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
                className={`group h-64 flex flex-col items-center justify-center p-8 rounded-3xl border border-white/10 backdrop-blur-md transition-colors duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-white text-gray-900 shadow-2xl'
                    : 'bg-white/10 text-white'
                }`}
              >
                <h3 className="text-2xl font-medium text-center transition-colors duration-300">
                  {spec.title}
                </h3>

                <AnimatePresence mode="wait">
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                      className="text-center mt-4 overflow-hidden"
                    >
                      <p className="text-sm font-light text-gray-600 leading-relaxed">
                        {spec.description}
                      </p>

                      <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-cyan-700">
                        Ver más →
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}