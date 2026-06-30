import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '../../lib/animations'
import { BRAND } from '../../lib/brand'
import SectionEyebrow from '../../components/shared/SectionEyebrow'
import SectionTitle from '../../components/shared/SectionTitle'
import { DETECTION_FLOW } from './data'

import doctorImage from "../../assets/responsabilidad/doctor.png";

const EXPLANATION =
  'El cáncer de cuello uterino está relacionado con el Virus del Papiloma Humano o VPH. El riesgo puede reducirse con la vacunación y detectarse mediante pruebas de tamizaje como el Papanicolaou. Cuando se necesita una evaluación más precisa, la colposcopía permite observar el cuello uterino con mayor detalle. De ser necesario, una biopsia confirma el diagnóstico para iniciar la atención correspondiente.'

export default function DetectionFlow() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:col-span-6"
          >
            <img
              src={doctorImage}
              alt="Profesional de salud"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>

          <div className="lg:col-span-6">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionEyebrow color={BRAND.med}>La solución existe</SectionEyebrow>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle color={BRAND.dark} className="mb-6">
                Detectar a tiempo cambia el resultado.
              </SectionTitle>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-9 max-w-xl text-base font-light leading-7 text-slate-500"
            >
              {EXPLANATION}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {DETECTION_FLOW.map((step, i) => {
                const isLast = i === DETECTION_FLOW.length - 1
                return (
                  <div key={step} className="flex items-center gap-3 sm:gap-4">
                    <span
                      className="rounded-full px-5 py-2.5 text-sm font-medium tracking-wide"
                      style={{
                        background: isLast ? BRAND.dark : 'white',
                        color: isLast ? 'white' : BRAND.dark,
                        border: `1px solid ${BRAND.dark}1A`,
                      }}
                    >
                      {step}
                    </span>
                    {!isLast && (
                      <ArrowRight className="h-4 w-4 flex-shrink-0" style={{ color: BRAND.base }} />
                    )}
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
