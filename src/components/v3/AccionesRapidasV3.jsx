import { motion } from 'framer-motion'
import { Calendar, Heart, Shield, Wind } from "lucide-react"
import opcion1 from '../../assets/fondo1.jpg'

const actions = [
  {
    key: 'agendar',
    title: 'Agendar Cita',
    description: 'Reserva tu consulta de forma inmediata con nuestro sistema inteligente.',
    icon: <Calendar className="w-6 h-6" />,
    bg: 'bg-[#C8E9F2]'
  },
  {
    key: 'rosa',
    title: 'Preventivo Rosa',
    description: 'Detección temprana de cáncer de mama con tecnología de vanguardia.',
    icon: <Heart className="w-6 h-6" />,
    bg: 'bg-[#D6EFF5]'
  },
  {
    key: 'azul',
    title: 'Preventivo Azul',
    description: 'Chequeo integral de próstata para hombres mayores de 40 años.',
    icon: <Shield className="w-6 h-6" />,
    bg: 'bg-[#BFE4EF]'
  },
  {
    key: 'pulmon',
    title: 'Pulmón Sano',
    description: 'Evaluación respiratoria integral con espirometría y TAC de tórax.',
    icon: <Wind className="w-6 h-6" />,
    bg: 'bg-[#CCEDF7]'
  },
]

export default function AccionesRapidasV3() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* BLOQUE 1: Imagen con Título abajo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-full min-h-[500px] overflow-hidden rounded-2xl group"
          >
            <img 
              src={opcion1} 
              alt="Innovación Médica" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay sutil para legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Nuestras <br />
                Direcciones de <br />
                <span className="font-light italic">Transformación.</span>
              </h2>
            </div>
          </motion.div>

          {/* BLOQUE 2: Cuadrícula de Acciones (Fondo Blanco de sección) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {actions.map((action, index) => (
              <motion.div
                key={action.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${action.bg} p-8 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              >
                <div>
                  {/* Contenedor del Icono */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-dark shadow-sm mb-12 group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-dark mb-3">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed max-w-[200px]">
                    {action.description}
                  </p>
                </div>

                {/* Micro-acción para reforzar el CX */}
                <div className="mt-8 flex items-center gap-2 text-[11px] font-bold tracking-widest text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity">
                  SOLICITAR <div className="w-6 h-px bg-primary-dark" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}