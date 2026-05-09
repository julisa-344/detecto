import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { fadeUp, tiposCancer } from './data'

export default function TiposCancer() {
  return (
    <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <SectionEyebrow>Tratamientos</SectionEyebrow>
      <SectionTitle className="mb-3">Tipos de cáncer que tratamos</SectionTitle>
      <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
        Abordamos un amplio espectro de patologías oncológicas con protocolos actualizados.
      </p>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {tiposCancer.map((t, i) => (
          <motion.div
            key={i}
            custom={i % 6}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-100 bg-white px-5 py-4 transition-all duration-200 hover:border-[#0199C6]/30 hover:bg-blue-50/40 hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52C0E1]" />
              <span className="text-[13.5px] font-light text-slate-700">{t}</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-slate-200 transition-colors duration-200 group-hover:text-[#0199C6]" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
