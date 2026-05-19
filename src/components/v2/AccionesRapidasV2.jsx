import { motion } from 'framer-motion'
import { ArrowUpRight } from "lucide-react"
import detecto from '../../assets/detecto.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Tiempo de espera entre cada elemento
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
}

const actions = [
  {
    key: 'agendar', number: '01', title: 'Agendar Cita', description: 'Reserva tu consulta en menos de 2 minutos con nuestro sistema de agenda inteligente.', accent: '#0070A5', accentLight: '#EEFBFF',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-6 h-6"><rect x="8" y="10" width="32" height="30" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 20h32" stroke="currentColor" strokeWidth="1.5"/><path d="M16 6v8M32 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 30l6 6 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    key: 'rosa', number: '02', title: 'Preventivo Rosa', description: 'Detección temprana de cáncer de mama con tecnología de imagen de última generación.', accent: '#C2185B', accentLight: '#FFF0F6',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-6 h-6"><path d="M24 42C14 34 6 26 6 17a9 9 0 0118-3 9 9 0 0118 3c0 9-8 17-18 25z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M20 16c-2 3 0 7 4 8M28 16c2 3 0 7-4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    key: 'azul', number: '03', title: 'Preventivo Azul', description: 'Chequeo integral de próstata para hombres mayores de 40 años.', accent: '#0199C6', accentLight: '#EAF6FC',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-6 h-6"><path d="M24 6l16 6v10c0 10-7 17-16 20-9-3-16-10-16-20V12l16-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    key: 'pulmon', number: '04', title: 'Pulmón Sano', description: 'Evaluación respiratoria integral con espirometría y TAC de tórax de alta resolución.', accent: '#0F8C7E', accentLight: '#E8F7F4',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-6 h-6"><path d="M24 8v26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M24 14c-3 0-9 3-10 9-2 6 0 14 3 17 3 3 7 0 7-5V14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M24 14c3 0 9 3 10 9 2 6 0 14-3 17-3 3-7 0-7-5V14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="24" cy="8" r="1.5" fill="currentColor"/></svg>),
  },
]

export default function AccionesRapidasV3() {
  return (
    <section className="bg-white py-24 px-6 lg:px-10" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-84 h-84 mb-10 mx-auto" 
            >
              <img src={detecto} alt="Detecto" className="w-full h-full object-contain" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-[#0070A5] mb-6 tracking-tight leading-[1.1]">
              ¿En qué puede ayudarte <br />
              <span className="font-bold italic text-[#0070A5]">Detecto hoy?</span>
            </h2>
          </motion.div>

          {/* LADO DERECHO: Grid de tarjetas con Variants */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {actions.map((action) => (
              <motion.div
                key={action.key}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-[24px] border border-[#C0DDE5]/30 bg-white transition-all duration-500 cursor-pointer overflow-hidden hover:border-[#52C0E1]/50 hover:shadow-[0_20px_40px_-15px_rgba(82,192,225,0.2)] h-[320px]"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#52C0E1]/0 via-[#52C0E1]/15 to-[#52C0E1]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div 
                      className="p-3 rounded-2xl transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#52C0E1]/30" 
                      style={{ backgroundColor: action.accentLight, color: action.accent }}
                    >
                      <div className="w-6 h-6">{action.icon}</div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-slate-400">
                      {action.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-[#0070A5] mb-3 tracking-tight">
                    {action.title}
                  </h3>
                  <p className="text-sm font-light text-slate-500 leading-relaxed mb-6 h-12">
                    {action.description}
                  </p>

                  <div className="flex items-center gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ color: action.accent }}>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Saber más</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}