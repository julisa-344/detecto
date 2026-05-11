import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'
import CTAButton from './CTAButton'
import { fadeUp } from './theme'

export default function MisionCTA({
  image,
  imageAlt = '',
  eyebrow = 'Nuestro compromiso',
  titlePre,
  titleAccent,
  paragraph,
  ctaLabel = 'AGENDAR CITA',
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative -mx-6 overflow-hidden rounded-none sm:mx-0 sm:rounded-[32px]"
    >
      <div className="relative isolate min-h-[460px] overflow-hidden bg-slate-900 sm:rounded-[32px]">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand-dark)/0.3)] via-[rgb(var(--brand-med)/0.15)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[rgb(var(--brand-base)/0.2)] to-transparent blur-3xl"
        />

        <div className="relative z-10 flex min-h-[460px] flex-col justify-between p-8 sm:p-12 lg:p-14">
          <SectionEyebrow light>{eyebrow}</SectionEyebrow>

          <div className="max-w-xl">
            <h3 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl">
              {titlePre}<br />
              <span className="italic font-light text-[rgb(var(--brand-base))]">{titleAccent}</span>
            </h3>

            <p className="mt-5 max-w-md text-[14px] font-light leading-7 text-white/90 sm:text-[15px]">
              {paragraph}
            </p>

            <div className="mt-8">
              <CTAButton label={ctaLabel} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
