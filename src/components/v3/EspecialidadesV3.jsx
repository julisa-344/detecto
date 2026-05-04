import { motion } from 'framer-motion'
import {
  HeartPulse,
  Brain,
  Bone,
  Stethoscope,
  Baby,
  Venus,
  Target,
  Scan,
  Plus,
  ArrowUpRight
} from "lucide-react"


const departments = [
  { id: '01', title: 'Cardiología', description: 'Cuidado integral del corazón incluyendo angioplastia y ECG.', icon: <HeartPulse className="w-5 h-5" /> },
  { id: '02', title: 'Neurología', description: 'Diagnóstico y tratamiento de condiciones del cerebro y nervios.', icon: <Brain className="w-5 h-5" /> },
  { id: '03', title: 'Ortopedia', description: 'Cuidado de huesos y articulaciones: fracturas y reemplazos.', icon: <Bone className="w-5 h-5" /> },
  { id: '04', title: 'Gastroenterología', description: 'Cuidado experto para el sistema digestivo e hígado.', icon: <Stethoscope className="w-5 h-5" /> },
  { id: '05', title: 'Pediatría', description: 'Servicios médicos especializados para niños y adolescentes.', icon: <Baby className="w-5 h-5" /> },
  { id: '06', title: 'Ginecología', description: 'Salud de la mujer, cuidado del embarazo y servicios de parto.', icon: <Venus className="w-5 h-5" /> },
  { id: '07', title: 'Urología', description: 'Tratamientos avanzados para el sistema reproductivo.', icon: <Target className="w-5 h-5" /> },
  { id: '08', title: 'Radiología', description: 'Servicios de imagen de alta tecnología como MRI y CT scan.', icon: <Scan className="w-5 h-5" /> },
]

export default function EspecialidadesV3() {
  return (
    <section className="bg-white py-24 px-6 lg:px-10" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO CON CTA INTEGRADO A LA IZQUIERDA */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 mb-20 items-start" style={{ fontFamily: 'Lexend, sans-serif' }}>
          <div className="flex flex-col items-start">
            <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0199C6] mb-4">
              Nuestras Unidades
            </p>
            <h2 className="text-4xl lg:text-6xl font-light text-[#0070A5] tracking-tight leading-none uppercase mb-6">
              Explora nuestras <br />
              <span className="font-normal italic">especialidades.</span>
            </h2>
          </div>

          <div className="hidden lg:flex flex-col items-start pt-12">
            {/* Bajada de texto */}
            <p className="text-sm font-light text-slate-400 leading-relaxed border-l border-[#C0DDE5] pl-8 mb-12 max-w-sm">
              En Detecta Clínica, combinamos el rigor científico con tecnología avanzada para ofrecer resultados exactos cuando más se necesitan.
            </p>

            {/* Botón CTA con Colores Detecta y sin márgenes negativos */}
            <button className="group flex cursor-pointer items-center gap-4 bg-transparent p-0 transition-all active:scale-95">
              {/* Lado del Texto (Pill) */}
              <span
                className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-[#0070A5] transition-all duration-500 ease-in-out bg-[#EEFBFF]/60 group-hover:bg-[#0070A5] group-hover:text-white"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid #C0DDE5',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                AGENDAR CITA
              </span>

              {/* Lado del Icono (Círculo) */}
              <div
                className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-[#C0DDE5]/40 text-[#0070A5] group-hover:bg-[#0070A5] group-hover:text-white"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid #C0DDE5',
                  zIndex: 2
                }}
              >
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>
          </div>
        </div>

        {/* GRID DE ESPECIALIDADES CON HOVER INNOVADOR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[24px] border border-[#C0DDE5]/30 bg-white transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Efecto de Luz de Escaneo (Hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#52C0E1]/0 via-[#52C0E1]/5 to-[#52C0E1]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-mono font-medium text-[#0199C6]/40 group-hover:text-[#0199C6] transition-colors">
                    {dept.id}
                  </span>
                  <div className="p-3 rounded-2xl bg-[#EEFBFF] text-[#0199C6] transition-all duration-500 group-hover:bg-[#52C0E1] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#52C0E1]/30">
                    {dept.icon}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-normal text-[#0070A5] tracking-wide uppercase transition-colors group-hover:text-[#0199C6]">
                    {dept.title}
                  </h3>
                  <p className="text-sm font-light text-slate-500 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                {/* Micro-indicador de acción */}
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[9px] font-bold tracking-widest text-[#52C0E1]">SOLICITAR</span>
                  <div className="w-6 h-px bg-[#52C0E1]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}