import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp } from '@/lib/animations'
import SectionEyebrow from '@/components/shared/SectionEyebrow'
import SectionTitle from '@/components/shared/SectionTitle'
import { BRAND } from '@/lib/brand'

interface InfoSplitProps {
  eyebrow:     string
  titlePre:    string
  titleAccent: string
  paragraphs:  string[]
  image:       string
  imageAlt?:   string
  reverse?:    boolean
  ctaLabel?:   string
}

export default function InfoSplit({
  eyebrow,
  titlePre,
  titleAccent,
  paragraphs = [],
  image,
  imageAlt = '',
  reverse = false,
  ctaLabel = 'Solicitar más información',
}: InfoSplitProps) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* Texto */}
      <div className={reverse ? 'lg:order-2' : ''}>
        <SectionEyebrow color={BRAND.med}>{eyebrow}</SectionEyebrow>
        <SectionTitle color={BRAND.dark} className="mb-5">
          {titlePre}{' '}
          <em className="not-italic font-medium" style={{ color: BRAND.base }}>
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
          to="/contacto"
          className="group/cta mt-8 inline-flex cursor-pointer items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors"
          style={{ color: BRAND.dark }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = BRAND.base)}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = BRAND.dark)}
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </Link>
      </div>

      {/* Imagen */}
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 ${reverse ? 'lg:order-1' : ''}`}
      >
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
