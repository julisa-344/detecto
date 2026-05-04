import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const specialties = [
  {
    number: '01',
    title: 'Detección Temprana',
    description: 'Exámenes preventivos con tecnología de última generación para un diagnóstico oportuno. Identificamos señales antes de que se conviertan en un problema mayor.',
    tag: 'Prevención',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
        <path d="M32 10v6M32 48v6M10 32h6M48 32h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Oncología Clínica',
    description: 'Atención integral con especialistas de alto nivel y protocolos internacionales. Un equipo multidisciplinario dedicado a tu recuperación.',
    tag: 'Tratamiento',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 56s20-14 20-32a10 10 0 00-20 0 10 10 0 00-20 0c0 18 20 32 20 32z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 24v16M24 32h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Quimioterapia',
    description: 'Tratamientos personalizados en un ambiente cómodo y con acompañamiento permanente. Cada protocolo diseñado específicamente para ti.',
    tag: 'Tratamiento',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="22" y="10" width="20" height="34" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 44h28v5a5 5 0 01-5 5H23a5 5 0 01-5-5v-5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 22v10M27 27h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 10V7M36 10V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Cirugía Oncológica',
    description: 'Procedimientos mínimamente invasivos con los más altos estándares de seguridad. Precisión quirúrgica al servicio de tu salud.',
    tag: 'Cirugía',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12l24 40M44 12L20 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Radioterapia',
    description: 'Tratamiento de alta precisión con tecnología avanzada para eliminar células cancerosas protegiendo el tejido sano circundante.',
    tag: 'Tratamiento',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 8v10M32 46v10M8 32h10M46 32h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 15l7 7M42 42l7 7M49 15l-7 7M22 42l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
  },
]

export default function EspecialidadesV2() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-primary-dark mb-4">
              Departamentos
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
              Nuestras
              <span className="block font-light text-primary-dark">especialidades médicas</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-light text-gray-400 max-w-sm lg:text-right leading-relaxed"
          >
            Ofrecemos una amplia gama de servicios médicos especializados liderados por expertos consultores y cirujanos.
          </motion.p>
        </div>

        {/* Lista numerada estilo agencia */}
        <div className="divide-y divide-gray-200">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative grid lg:grid-cols-[120px_1fr_1fr_280px] items-center gap-8 py-8 cursor-pointer transition-all duration-300"
            >
              {/* Fondo hover sutil */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 -mx-6 bg-primary-lighter pointer-events-none rounded-sm"
                  />
                )}
              </AnimatePresence>

              {/* Número grande */}
              <div className="relative">
                <span
                  className="text-6xl lg:text-7xl font-black tracking-tighter transition-colors duration-300"
                  style={{
                    color: hoveredIndex === index ? '#0070A5' : '#E5E7EB',
                    lineHeight: 1,
                  }}
                >
                  {spec.number}
                </span>
              </div>

              {/* Título + tag */}
              <div className="relative">
                <span className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-2 opacity-70">
                  {spec.tag}
                </span>
                <h3 className="text-xl lg:text-2xl font-light text-gray-900 tracking-tight group-hover:text-primary-dark transition-colors duration-300">
                  {spec.title}
                </h3>
              </div>

              {/* Descripción — aparece con hover en desktop */}
              <p className="relative text-sm font-light text-gray-400 leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 lg:translate-x-4 lg:group-hover:translate-x-0 transition-all duration-400">
                {spec.description}
              </p>

              {/* Ícono + botón */}
              <div className="relative flex items-center justify-between lg:justify-end gap-6">
                <div
                  className="w-12 h-12 text-primary-medium opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                >
                  {spec.icon}
                </div>
                <a
                  href="#"
                  className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-primary-dark text-primary-dark text-xs font-medium tracking-wide rounded-sm hover:bg-primary-dark hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  Conocer más
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
