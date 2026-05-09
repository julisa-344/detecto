import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { servicios } from './data'

export default function LoQueOfrecemos() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Servicios</SectionEyebrow>
        <SectionTitle className="mb-3">Lo que ofrecemos</SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-400">
          Un ecosistema completo de atención oncológica bajo un mismo techo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicios.map((s, index) => {
          const Icon = s.icon
          const id = String(index + 1).padStart(2, '0')
          return (
            <motion.div
              key={id}
              tabIndex={0}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-[20px] border bg-white transition-all duration-500 cursor-pointer overflow-hidden border-[#C0DDE5]/40 hover:border-[#52C0E1]/60 hover:shadow-[0_20px_40px_-15px_rgba(82,192,225,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#52C0E1]/0 via-[#52C0E1]/15 to-[#52C0E1]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-mono font-medium transition-colors text-[#0199C6]/40 group-hover:text-[#0199C6]">
                    {id}
                  </span>
                  <div className="p-3 rounded-2xl transition-all duration-500 bg-[#EEFBFF] text-[#0199C6] group-hover:bg-[#52C0E1] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#52C0E1]/30">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-normal tracking-wide uppercase transition-colors text-[#0070A5] group-hover:text-[#0199C6]">
                  {s.title}
                </h3>

                <div className="mt-5 flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-widest transition-colors text-[#52C0E1]/40 group-hover:text-[#52C0E1]">
                    SOLICITAR
                  </span>
                  <div className="h-px transition-all duration-500 w-4 bg-[#52C0E1]/40 group-hover:w-8 group-hover:bg-[#52C0E1]" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
