import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import SectionEyebrow from '@/components/shared/SectionEyebrow'
import CTAButton from '@/components/shared/CTAButton'
import { CONTACT } from '@/config/constants'
import { BRAND } from '@/lib/brand'

export interface MisionCTAProps {
  image: string
  imageAlt?: string
  eyebrow?: string
  titlePre?: string
  titleAccent?: string
  paragraph?: string
  ctaLabel?: string
  /** Ruta interna (usa Link). Tiene prioridad sobre ctaHref. */
  ctaTo?: string
  /** URL externa (abre en _blank). Fallback al appointmentsUrl. */
  ctaHref?: string
}

export default function MisionCTA({
  image,
  imageAlt = '',
  eyebrow = 'Nuestro compromiso',
  titlePre,
  titleAccent,
  paragraph,
  ctaLabel = 'AGENDAR CITA',
  ctaTo,
  ctaHref,
}: MisionCTAProps) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative -mx-6 overflow-hidden rounded-none sm:mx-0 sm:rounded-3xl"
    >
      <div className="relative isolate min-h-[460px] overflow-hidden bg-slate-900 sm:rounded-3xl">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/75 via-slate-950/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

        {/* Blob decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: 'rgba(82,192,225,0.20)' }}
        />

        <div className="relative z-10 flex min-h-[460px] flex-col justify-between p-8 sm:p-12 lg:p-14">
          <SectionEyebrow color="#ffffff" className="opacity-70">
            {eyebrow}
          </SectionEyebrow>

          <div className="max-w-xl">
            <h3 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl">
              {titlePre}
              <br />
              <span style={{ color: BRAND.base }} className="font-medium">
                {titleAccent}
              </span>
            </h3>

            {paragraph && (
              <p className="mt-5 max-w-md text-[14px] font-light leading-7 text-white/90 sm:text-[15px]">
                {paragraph}
              </p>
            )}

            <div className="mt-8">
              <CTAButton
                label={ctaLabel}
                {...(ctaTo ? { to: ctaTo } : { href: ctaHref ?? CONTACT.appointmentsUrl })}
                baseBg={BRAND.base}
                hoverBg={BRAND.dark}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
