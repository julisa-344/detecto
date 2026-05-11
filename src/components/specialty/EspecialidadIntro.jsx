import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { fadeUp } from './theme'

export default function EspecialidadIntro({
  eyebrow = 'Especialidad',
  titlePre,
  titleAccent,
  paragraph,
  image,
  imageAlt = '',
  listIntro,
  items,
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle className="mb-6">
        {titlePre}{' '}
        <em className="not-italic font-medium text-[rgb(var(--brand-base))]">{titleAccent}</em>
      </SectionTitle>
      <p className="mb-12 max-w-2xl text-base font-light leading-[1.8] text-slate-500 sm:text-[17px]">
        {paragraph}
      </p>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-[rgb(var(--brand-base)/0.2)] via-[rgb(var(--brand-med)/0.1)] to-transparent blur-2xl" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-[rgb(var(--brand-base))] to-[rgb(var(--brand-med))] opacity-20 blur-xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl shadow-blue-900/5">
            <img src={image} alt={imageAlt} className="h-[480px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--brand-dark)/0.3)] via-transparent to-transparent" />
          </div>
        </motion.div>

        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 text-[20px] font-medium text-[rgb(var(--brand-dark))]"
          >
            {listIntro}
          </motion.p>

          <ul className="relative space-y-5">
            <span
              aria-hidden
              className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-[rgb(var(--brand-base)/0.6)] via-[rgb(var(--brand-med)/0.3)] to-transparent"
            />

            {items.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative flex items-start gap-4"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgb(var(--brand-base)/0.3)] bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[rgb(var(--brand-med))] group-hover:shadow-md group-hover:shadow-[rgb(var(--brand-base)/0.3)]">
                  <span className="absolute inset-1 rounded-full bg-gradient-to-br from-[rgb(var(--brand-base)/0.1)] to-[rgb(var(--brand-med)/0.1)] transition-opacity duration-300 group-hover:opacity-0" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgb(var(--brand-base))] to-[rgb(var(--brand-med))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Check
                    className="relative h-4 w-4 text-[rgb(var(--brand-med))] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2.5}
                  />
                </span>

                <div className="flex-1 pt-1.5">
                  <p className="text-[15px] font-light leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-[rgb(var(--brand-dark))]">
                    {item}
                  </p>
                  <span className="mt-2 block h-px w-0 bg-gradient-to-r from-[rgb(var(--brand-base))] to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
