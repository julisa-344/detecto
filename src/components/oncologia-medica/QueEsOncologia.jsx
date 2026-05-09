import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { fadeUp, perfilPaciente } from './data'
import imagen from '../../assets/OncologiaMedica.jpg'

export default function QueEsOncologia() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionEyebrow>Especialidad</SectionEyebrow>
      <SectionTitle className="mb-6">
        ¿Qué es la{' '}
        <em className="not-italic font-light text-[#52C0E1]">oncología médica?</em>
      </SectionTitle>
      <p className="mb-12 max-w-2xl text-base font-light leading-[1.8] text-slate-500 sm:text-[17px]">
        La oncología médica diagnostica, trata y controla el cáncer con medicamentos (quimioterapia, inmunoterapia, terapias dirigidas y hormonoterapia). Su objetivo es frenar o reducir el crecimiento tumoral, aliviar síntomas y mejorar la calidad de vida del paciente.
      </p>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Imagen con detalles decorativos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-[#52C0E1]/20 via-[#0199C6]/10 to-transparent blur-2xl" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#52C0E1] to-[#0199C6] opacity-20 blur-xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl shadow-blue-900/5">
            <img
              src={imagen}
              alt="Especialista en oncología médica"
              className="h-[480px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0070A5]/30 via-transparent to-transparent" />


          </div>
        </motion.div>

        {/* Checklist creativa con línea conectora */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 text-[15px] font-light text-slate-600"
          >
            Esta especialidad es para ti si{' '}
            <span className="font-medium text-[#0070A5]">te identificas con alguno de estos casos</span>
          </motion.p>

          <ul className="relative space-y-5">
            {/* Línea conectora vertical */}
            <span
              aria-hidden
              className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-[#52C0E1]/60 via-[#0199C6]/30 to-transparent"
            />

            {perfilPaciente.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative flex items-start gap-4"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#52C0E1]/30 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#0199C6] group-hover:shadow-md group-hover:shadow-[#52C0E1]/30">
                  <span className="absolute inset-1 rounded-full bg-gradient-to-br from-[#52C0E1]/10 to-[#0199C6]/10 transition-opacity duration-300 group-hover:opacity-0" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#52C0E1] to-[#0199C6] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Check
                    className="relative h-4 w-4 text-[#0199C6] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2.5}
                  />
                </span>

                <div className="flex-1 pt-1.5">
                  <p className="text-[15px] font-light leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-[#0070A5]">
                    {item}
                  </p>
                  <span className="mt-2 block h-px w-0 bg-gradient-to-r from-[#52C0E1] to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
