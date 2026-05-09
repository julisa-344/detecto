import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { fadeUp, highlights } from './data'

export default function QueEsOncologia() {
  return (
    <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <SectionEyebrow>Especialidad</SectionEyebrow>
      <SectionTitle className="mb-6">
        ¿Qué es la{' '}
        <em className="not-italic font-light text-[#52C0E1]">oncología médica?</em>
      </SectionTitle>
      <p className="mb-12 max-w-2xl text-base font-light leading-[1.8] text-slate-500 sm:text-[17px]">
        La oncología médica diagnostica, trata y controla el cáncer con medicamentos (quimioterapia, inmunoterapia, terapias dirigidas y hormonoterapia). Su objetivo es frenar o reducir el crecimiento tumoral, aliviar síntomas y mejorar la calidad de vida del paciente.
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group rounded-[22px] border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0199C6]/20 hover:shadow-lg hover:shadow-blue-900/5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0199C6]">
              <h.icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
            </div>
            <h4 className="mb-2 text-[14px] font-semibold text-[#0070A5]">{h.title}</h4>
            <p className="text-[13px] font-light leading-relaxed text-slate-500">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
