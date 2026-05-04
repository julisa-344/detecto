import { motion } from 'framer-motion'

const actions = [
  {
    key: 'agendar',
    number: '01',
    title: 'Agendar Cita',
    description: 'Reserva tu consulta en menos de 2 minutos con nuestro sistema de agenda inteligente.',
    accent: '#0070A5',
    accentLight: '#EEFBFF',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="8" y="10" width="32" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20h32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 6v8M32 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 30l6 6 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'rosa',
    number: '02',
    title: 'Preventivo Rosa',
    description: 'Detección temprana de cáncer de mama con tecnología de imagen de última generación.',
    accent: '#C2185B',
    accentLight: '#FFF0F6',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 42C14 34 6 26 6 17a9 9 0 0118-3 9 9 0 0118 3c0 9-8 17-18 25z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 16c-2 3 0 7 4 8M28 16c2 3 0 7-4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'azul',
    number: '03',
    title: 'Preventivo Azul',
    description: 'Chequeo integral de próstata para hombres mayores de 40 años.',
    accent: '#0199C6',
    accentLight: '#EAF6FC',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 6l16 6v10c0 10-7 17-16 20-9-3-16-10-16-20V12l16-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'pulmon',
    number: '04',
    title: 'Pulmón Sano',
    description: 'Evaluación respiratoria integral con espirometría y TAC de tórax de alta resolución.',
    accent: '#0F8C7E',
    accentLight: '#E8F7F4',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 8v26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 14c-3 0-9 3-10 9-2 6 0 14 3 17 3 3 7 0 7-5V14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 14c3 0 9 3 10 9 2 6 0 14-3 17-3 3-7 0-7-5V14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="8" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AccionesRapidasV2() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-primary-dark mb-4">
              Servicios disponibles
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
              ¿En qué podemos
              <span className="block font-light text-primary-dark">ayudarte hoy?</span>
            </h2>
          </div>
          <p className="text-sm font-light text-gray-400 max-w-xs lg:text-right leading-relaxed">
            Servicios diseñados para tu bienestar. Elige el que necesites y empieza tu proceso.
          </p>
        </motion.div>

        {/* Grid de 4 cards — todas visibles sin scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {actions.map((action) => (
            <motion.div
              key={action.key}
              variants={cardVariants}
              className="group relative border border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-400 cursor-pointer overflow-hidden"
            >
              {/* Barra superior de acento */}
              <div
                className="h-1 w-full"
                style={{ background: action.accent }}
              />

              <div className="p-7">
                {/* Número */}
                <span
                  className="text-[11px] font-mono font-medium tracking-[0.2em] mb-5 block"
                  style={{ color: action.accent }}
                >
                  {action.number}
                </span>

                {/* Ícono */}
                <div
                  className="w-12 h-12 mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: action.accent }}
                >
                  {action.icon}
                </div>

                {/* Texto */}
                <h3 className="text-base font-semibold text-gray-900 mb-2 tracking-tight">
                  {action.title}
                </h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  {action.description}
                </p>

                {/* CTA link */}
                <div
                  className="mt-6 flex items-center gap-2 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  style={{ color: action.accent }}
                >
                  Saber más
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Fondo de acento sutil en hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${action.accentLight} 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
