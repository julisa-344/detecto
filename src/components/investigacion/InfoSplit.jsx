import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'

export default function InfoSplit({
  eyebrow,
  titlePre,
  titleAccent,
  paragraphs = [],
  image,
  imageAlt = '',
  reverse = false,
  ctaLabel = 'Solicitar más información',
  ctaHref = '/v4/contacto',
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <div className={reverse ? 'lg:order-2' : ''}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionTitle className="mb-5">
          {titlePre}{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            {titleAccent}
          </em>
        </SectionTitle>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] font-light leading-7 text-slate-500">
              {p}
            </p>
          ))}
        </div>

        <Link
          to={ctaHref}
          className="group/cta mt-8 inline-flex cursor-pointer items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))] no-underline transition-colors hover:text-[rgb(var(--brand-base))]"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </Link>
      </div>

      <div className={`relative aspect-4/3 overflow-hidden rounded-4xl bg-slate-100 ${reverse ? 'lg:order-1' : ''}`}>
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.section>
  )
}
