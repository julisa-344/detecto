import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { fadeUp } from '../../lib/animations'
import { BRAND } from '../../lib/brand'
import SectionEyebrow from '../../components/shared/SectionEyebrow'
import SectionTitle from '../../components/shared/SectionTitle'
import { INTERVENTIONS } from './data'

import entregaImage from "../../assets/responsabilidad/entrega.png";

/**
 * "El cambio ya empezó": intervenciones realizadas por Proyecto Athenea Perú.
 */
export default function InterventionsTimeline() {
  return (
    <section>
      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionEyebrow color={BRAND.med}>Resultados</SectionEyebrow>
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionTitle color={BRAND.dark} className="mb-4">
          El cambio ya empezó.
        </SectionTitle>
      </motion.div>

      <motion.p
        variants={fadeUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 max-w-2xl text-[15px] font-light leading-7 text-slate-500"
      >
        Proyecto Athenea Perú ya ha iniciado sus primeras intervenciones para acercar
        tecnología y fortalecer la detección oportuna.
      </motion.p>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl lg:col-span-6"
        >
          <img
            src={entregaImage}
            alt="Entrega de un colposcopio durante una intervención de Proyecto Athenea Perú"
            className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-[480px]"
          />
        </motion.div>

        <div className="flex flex-col gap-8 lg:col-span-6">
          {INTERVENTIONS.map((item, i) => (
            <motion.div
              key={item.place}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-5"
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: '#F7FCFE', color: BRAND.dark }}
              >
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="mb-1.5 text-lg font-medium text-slate-900">{item.place}</h4>
                <p className="max-w-md text-sm font-light leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
