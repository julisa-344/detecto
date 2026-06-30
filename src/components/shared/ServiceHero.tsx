import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { BRAND_COLORS, CONTACT } from '@/config/constants'

/**
 * Hero unificado para páginas de servicios y especialidades.
 *
 * Maneja background image/video, gradients, eyebrow + título con accent,
 * dos CTAs y un marquee strip inferior. Reemplaza los 7+ heroes individuales
 * que existían (SalaHero, FarmaciaHero, etc.) con un solo componente.
 *
 * @example
 * <ServiceHero
 *   eyebrow="Sala de Operaciones"
 *   titlePre="Tu cirugía con respaldo experto y"
 *   titleAccent="Tecnología de Alta Precisión."
 *   description="Nuestras salas..."
 *   media={{ type: 'image', src: getFileUrl('servicios/sala.webp'), alt: 'Sala de operaciones' }}
 *   marquee={['Quirófanos', 'Tecnología', ...]}
 * />
 */

export interface ServiceHeroMedia {
  type: 'image' | 'video'
  src: string
  alt: string
  /** Para imágenes; default 0.85 (videos no aplican). */
  opacity?: number
}

export interface ServiceHeroCta {
  label: string
  href: string
}

interface ServiceHeroProps {
  eyebrow: string
  titlePre: string
  titleAccent: string
  description: string
  media: ServiceHeroMedia
  marquee: string[]
  /** CTA principal. Default: "Agendar una cita" → appointments URL. */
  primaryCta?: Partial<ServiceHeroCta>
  /** CTA secundario. Default: WhatsApp. Pasa `null` para ocultarlo. */
  secondaryCta?: Partial<ServiceHeroCta> | null
}

const DEFAULT_PRIMARY: ServiceHeroCta = {
  label: 'Agendar una cita',
  href: CONTACT.appointmentsUrl,
}

const DEFAULT_SECONDARY: ServiceHeroCta = {
  label: 'Consulta por WhatsApp',
  href: CONTACT.whatsappUrl,
}

export default function ServiceHero({
  eyebrow,
  titlePre,
  titleAccent,
  description,
  media,
  marquee,
  primaryCta,
  secondaryCta,
}: ServiceHeroProps) {
  const primary: ServiceHeroCta = {
    label: primaryCta?.label ?? DEFAULT_PRIMARY.label,
    href: primaryCta?.href ?? DEFAULT_PRIMARY.href,
  }
  const secondary: ServiceHeroCta | null =
    secondaryCta === null
      ? null
      : {
          label: secondaryCta?.label ?? DEFAULT_SECONDARY.label,
          href: secondaryCta?.href ?? DEFAULT_SECONDARY.href,
        }

  const isVideo = media.type === 'video'
  const imageOpacity = media.opacity ?? 0.85

  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-900 pt-24 lg:pt-20">
      {/* Background media */}
      {isVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-label={media.alt}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={media.src}
          alt={media.alt}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: imageOpacity }}
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/45 via-slate-950/20 to-slate-950/5" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl space-y-6"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            {eyebrow}
          </p>

          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {titlePre}{' '}
            <span className="font-medium italic" style={{ color: BRAND_COLORS.base }}>
              {titleAccent}
            </span>
          </h1>

          <p className="max-w-xl text-base font-light leading-relaxed text-slate-200 lg:text-[17px]">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary CTA: pill blanco con flecha circular que rota en hover */}
            <a
              href={primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 no-underline transition-all active:scale-95"
            >
              <span
                className="rounded-full bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-in-out group-hover:bg-[#52C0E1] group-hover:text-white"
                style={{ color: BRAND_COLORS.dark }}
              >
                {primary.label}
              </span>
              <div
                className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-500 ease-in-out group-hover:bg-[#52C0E1] group-hover:text-white"
                style={{ color: BRAND_COLORS.dark }}
              >
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </a>

            {/* Secondary CTA: ghost glassmorphism */}
            {secondary && (
              <a
                href={secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white hover:text-[#0070A5] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                {secondary.label}
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-20 w-full border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex select-none overflow-hidden py-4 lg:py-5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...marquee, ...marquee, ...marquee].map((tag, i) => (
              <div key={i} className="flex items-center">
                <span className="cursor-default px-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 hover:text-[#52C0E1] lg:px-10 lg:text-[11px]">
                  {tag}
                </span>
                <div
                  className="mx-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ background: 'rgba(82,192,225,0.5)' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
