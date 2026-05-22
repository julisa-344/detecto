import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Heart, Shield, Wind } from 'lucide-react'
const detectoRosa = `${import.meta.env.VITE_BASE_IMAGE_URL}detectos/detecta.gif`
const detectoAzul = `${import.meta.env.VITE_BASE_IMAGE_URL}detectos/preventivoAzul.gif`
const detectoPulmon = `${import.meta.env.VITE_BASE_IMAGE_URL}detectos/pulmonSano.gif`
const detectoAgendar = `${import.meta.env.VITE_BASE_IMAGE_URL}detectos/agendarCita.gif`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const actions = [
  {
    key: 'agendar',
    number: '01',
    title: 'Agendar Cita',
    description: 'Reserva tu consulta de forma inmediata con nuestro sistema inteligente.',
    icon: <Calendar className="w-6 h-6" />,
    accent: '#0070A5',
    bg: '#C8E9F2',
    hoverImage: detectoAgendar,
  },
  {
    key: 'rosa',
    number: '02',
    title: 'Preventivo Rosa',
    description: 'Detección temprana de cáncer de mama con Innovación Tecnológica.',
    icon: <Heart className="w-6 h-6" />,
    accent: '#E5739A',
    bg: '#D6EFF5',
    hoverImage: detectoRosa,
  },
  {
    key: 'azul',
    number: '03',
    title: 'Preventivo Azul',
    description: 'Despistaje integral de próstata para hombres mayores de 40 años.',
    icon: <Shield className="w-6 h-6" />,
    accent: '#0199C6',
    bg: '#BFE4EF',
    hoverImage: detectoAzul,
  },
  {
    key: 'pulmon',
    number: '04',
    title: 'Pulmón Sano',
    description: 'Evaluación respiratoria integral con espirometría y TAC de tórax.',
    icon: <Wind className="w-6 h-6" />,
    accent: '#4F8A9F',
    bg: '#CCEDF7',
    hoverImage: detectoPulmon,
  },
]

export default function AccionesRapidasV4() {
  const [activeKey, setActiveKey] = useState(null)
  const activeAction = actions.find((a) => a.key === activeKey)

  useEffect(() => {
    actions.forEach((a) => {
      const img = new Image()
      img.src = a.hoverImage
    })
  }, [])

  return (
    <section
      className="bg-white py-24 px-6 lg:px-10"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* LADO IZQUIERDO: Mascot + bajada */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left lg:h-full"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative w-80 h-80 lg:w-full lg:h-auto lg:max-w-[636px] lg:flex-1 lg:min-h-0 mb-2 mx-auto"
            >
              {actions.map((a) => {
                const isCurrent = (activeKey ?? 'agendar') === a.key
                return (
                  <motion.img
                    key={a.key}
                    src={a.hoverImage}
                    alt="Detecto"
                    loading="eager"
                    decoding="async"
                    animate={{ opacity: isCurrent ? 1 : 0, scale: isCurrent ? 1 : 0.97 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ pointerEvents: isCurrent ? 'auto' : 'none' }}
                  />
                )
              })}
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-light text-[#0070A5] mb-4 tracking-tight leading-[1.1]">
              ¿En qué puede ayudarte <br />
              <motion.span
                key={activeKey ?? 'default'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-bold italic transition-colors duration-300"
                style={{ color: activeAction ? activeAction.accent : '#0070A5' }}
              >
                {activeAction ? activeAction.title : 'Detecto hoy?'}
              </motion.span>
            </h2>
            <p className="text-base font-light text-slate-500 leading-relaxed max-w-md min-h-[3.5rem]">
              {activeAction
                ? activeAction.description
                : 'Pasa el cursor sobre cualquier acción para descubrir cómo Detecto puede acompañarte.'}
            </p>
          </motion.div>

          {/* LADO DERECHO: Grid de cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {actions.map((action) => {
              const isActive = activeKey === action.key
              const isAgendar = action.key === 'agendar'
              const Card = isAgendar ? motion.a : motion.div
              const linkProps = isAgendar
                ? { href: 'https://appointments.detecta.pe/login', target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <Card
                  key={action.key}
                  {...linkProps}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setActiveKey(action.key)}
                  onMouseLeave={() => setActiveKey(null)}
                  className="group relative p-8 rounded-[24px] cursor-pointer overflow-hidden h-[320px] flex flex-col justify-between transition-[background-color,box-shadow] duration-500 no-underline"
                  style={{
                    backgroundColor: isActive ? action.accent : action.bg,
                    boxShadow: isActive
                      ? `0 24px 48px -18px ${action.accent}80`
                      : '0 1px 2px rgba(0,0,0,0.02)',
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <motion.div
                        animate={{ scale: isActive ? 1.08 : 1 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                        className="p-3 rounded-2xl shadow-sm transition-colors duration-500"
                        style={{
                          backgroundColor: '#ffffff',
                          color: isActive ? action.accent : '#0070A5',
                        }}
                      >
                        {action.icon}
                      </motion.div>
                      <span
                        className="text-[10px] font-mono font-bold tracking-widest transition-colors duration-500"
                        style={{ color: isActive ? 'rgba(255,255,255,0.7)' : '#CBD5E1' }}
                      >
                        {action.number}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-medium mb-3 tracking-tight transition-colors duration-500"
                      style={{ color: isActive ? '#ffffff' : '#0070A5' }}
                    >
                      {action.title}
                    </h3>
                    <p
                      className="text-sm font-light leading-relaxed transition-colors duration-500"
                      style={{ color: isActive ? 'rgba(255,255,255,0.85)' : '#64748B' }}
                    >
                      {action.description}
                    </p>
                  </div>

                  <div
                    className="relative z-10 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    style={{ color: '#ffffff' }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Solicitar
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Card>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
