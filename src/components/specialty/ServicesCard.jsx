import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'

export default function ServicesCard({
  eyebrow = 'Nuestros servicios',
  titlePre,
  titleAccent,
  paragraph,
  label = '/ Procedimientos',
  service,
  image,
  imageAlt = '',
  reverse = false,
  number = '01',
}) {
  if (!service) return null
  const Icon = service.icon

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionTitle className="mb-3">
          {titlePre}{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            {titleAccent}
          </em>
        </SectionTitle>
        {paragraph && (
          <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
            {paragraph}
          </p>
        )}
      </div>

      {image ? (
        <ImageGlassLayout
          image={image}
          imageAlt={imageAlt}
          service={service}
          Icon={Icon}
          label={label}
          reverse={reverse}
          number={number}
        />
      ) : (
        <PlainCardLayout service={service} Icon={Icon} label={label} />
      )}
    </section>
  )
}

function ImageGlassLayout({ image, imageAlt, service, Icon, label, reverse, number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="relative">
        {/* Imagen lateral */}
        <div
          className={`relative aspect-4/3 w-full overflow-hidden rounded-4xl shadow-[0_25px_55px_-25px_rgb(0,112,165,0.35)] lg:aspect-auto lg:h-150 lg:w-[80%] ${
            reverse ? 'lg:ml-auto' : ''
          }`}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))] shadow-md backdrop-blur-md">
            <span className="font-mono text-[rgb(var(--brand-base))]">
              {number}
            </span>
            Servicio
          </span>
        </div>

        {/* Tarjeta glass solapada */}
        <div
          className={`relative z-10 -mt-16 mx-4 sm:mx-8 lg:absolute lg:-bottom-16 lg:mt-0 lg:w-[60%] ${
            reverse ? 'lg:left-0' : 'lg:right-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-4xl bg-white/65 p-7 shadow-[0_30px_60px_-25px_rgb(0,112,165,0.28)] ring-1 ring-white/60 backdrop-blur-2xl lg:p-9">
            <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[rgb(var(--brand-base)/0.18)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[rgb(var(--brand-med)/0.12)] blur-3xl" />

            <div className="relative">
              {Icon && (
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                  <Icon className="h-5 w-5" />
                </span>
              )}

              <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--brand-base))]">
                {label}
              </p>
              <h3 className="mt-2 text-2xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-[2rem]">
                {service.title}
              </h3>

              <div className="my-5 h-px w-full bg-linear-to-r from-[rgb(var(--brand-base)/0.4)] via-slate-200 to-transparent" />

              <ul className="space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgb(var(--brand-base)/0.4)] text-[rgb(var(--brand-base))]">
                      <Check className="h-3 w-3" strokeWidth={2.25} />
                    </span>
                    <span className="text-[13.5px] font-light leading-relaxed text-slate-700">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:h-20" />
    </motion.article>
  )
}

function PlainCardLayout({ service, Icon, label }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-4xl bg-white p-7 ring-1 ring-slate-100 lg:p-10"
    >
      <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[rgb(var(--brand-base)/0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[rgb(var(--brand-med)/0.10)] blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-5">
          {Icon && (
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
              <Icon className="h-6 w-6" />
            </span>
          )}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--brand-base))]">
              {label}
            </p>
            <h3 className="mt-1 text-2xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-3xl">
              {service.title}
            </h3>
          </div>
        </div>

        <div className="my-7 h-px w-full bg-linear-to-r from-[rgb(var(--brand-base)/0.4)] via-slate-200 to-transparent" />

        <ul className="space-y-3.5">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgb(var(--brand-base)/0.4)] text-[rgb(var(--brand-base))]">
                <Check className="h-3.5 w-3.5" strokeWidth={2.25} />
              </span>
              <span className="text-[14.5px] font-light leading-relaxed text-slate-700">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
