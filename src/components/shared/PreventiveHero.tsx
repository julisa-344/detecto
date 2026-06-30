import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'
import { type ContactTheme } from '@/components/shared/ContactSidebar'
import { whatsappUrlWithMessage } from '@/config/constants'

// ─── Paleta de temas ──────────────────────────────────────────────────────────
const THEMES: Record<ContactTheme, { accent: string; med: string; dark: string }> = {
  blue:  { accent: '#52C0E1', med: '#0199C6', dark: '#0070A5' },
  pink:  { accent: '#F472B6', med: '#E91E8C', dark: '#C2185B' },
  green: { accent: '#6EE7B7', med: '#10B981', dark: '#059669' },
}

const WHATSAPP_URL = whatsappUrlWithMessage('Hola, me gustaría agendar una cita en Detecta Clínica.')

const fadeUp = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const DEFAULT_MARQUEE = [
  'Detección Temprana',
  'Innovación Tecnológica',
  'Equipo Especializado',
  'Atención Integral',
  'Resultados Confiables',
  'Cuidado Humano',
]

interface PreventiveHeroProps {
  videoUrl: string
  titlePre: string
  titleAccent: string
  subtitle: string
  marqueeItems?: string[]
  theme?: ContactTheme
}

export default function PreventiveHero({
  videoUrl,
  titlePre,
  titleAccent,
  subtitle,
  marqueeItems = [],
  theme = 'blue',
}: PreventiveHeroProps) {
  const palette = THEMES[theme]
  const items = marqueeItems.length ? marqueeItems : DEFAULT_MARQUEE
  const loop = [...items, ...items, ...items]

  return (
    <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-950 pt-24 lg:pt-20">
      {/* Video de fondo */}
      <video
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/45 via-slate-950/20 to-slate-950/5" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-6"
        >
          <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {titlePre}
            <br />
            <span className="font-light" style={{ color: palette.accent }}>
              {titleAccent}
            </span>
          </h1>

          <p className="max-w-lg text-base font-light leading-relaxed text-slate-300 sm:text-lg">
            {subtitle}
          </p>

          <div className="pt-2 w-fit">
            <CTAButton
              href={WHATSAPP_URL}
              baseBg={palette.med}
              hoverBg={palette.dark}
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee inferior */}
      <div className="relative z-20 w-full border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex select-none overflow-hidden py-4 lg:py-5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {loop.map((tag, i) => (
              <div key={i} className="flex items-center">
                <span
                  className="cursor-default px-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 lg:px-10 lg:text-[11px]"
                  style={{ ['--hover-color' as string]: palette.accent }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = palette.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  {tag}
                </span>
                <div
                  className="mx-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: `${palette.accent}80` }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
