import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import detecto from '../assets/detecto.png'
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  MapPin,
  Plus,
  Minus,
  Activity,
  Pill,
  ShieldCheck,
  Dna,
  Heart,
  Apple,
  ClipboardList,
  Clock,
  Stethoscope,
  CheckCircle2,
  ChevronDown,
  Calendar,
  Send,
  Star,
} from 'lucide-react'

import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import heroVideo from '../assets/medicinaoncologicahero.mp4'

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const tiposCancer = [
  'Cáncer de mama',        'Cáncer de pulmón',
  'Cáncer colorrectal',    'Cáncer de próstata',
  'Linfomas y leucemias',  'Melanoma y cánceres de piel',
  'Cáncer de páncreas, hígado, gástrico y otros',
]

const servicios = [
  { title: 'Quimioterapia ambulatoria',           icon: Activity },
  { title: 'Inmunoterapia y terapias biológicas', icon: ShieldCheck },
  { title: 'Terapia hormonal',                    icon: Pill },
  { title: 'Planes de tratamiento individualizados', icon: ClipboardList },
  { title: 'Evaluación genética y marcadores tumorales', icon: Dna },
  { title: 'Acompañamiento psicooncológico',      icon: Heart },
  { title: 'Nutrición oncológica y cuidados paliativos', icon: Apple },
]

const highlights = [
  { icon: Stethoscope, title: 'Equipo especializado',  text: 'Oncólogos médicos con enfoque integral y multidisciplinario.' },
  { icon: Dna,         title: 'Medicina personalizada', text: 'Planes diseñados según tu perfil genético y molecular.' },
  { icon: Clock,       title: 'Atención oportuna',      text: 'Seguimiento continuo desde la primera evaluación.' },
]

const faqs = [
  { q: '¿Me pueden tratar si ya estoy en tratamiento en otro lugar?', a: 'Sí, podemos ofrecer una segunda opinión o complementar tu tratamiento actual..' },
  { q: '¿Qué necesito para la primera consulta?', a: 'Lleva tus estudios más recientes. Nuestro equipo evaluará si necesitas análisis adicionales.' },
  { q: '¿Usan tratamientos nuevos como inmunoterapia?', a: 'Sí, contamos con inmunoterapia y terapias dirigidas según el tipo de tumor y las características genéticas.' },
]

/* ─── Animation ─────────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── Atomic components ──────────────────────────────────────────────────────── */

function SectionEyebrow({ children, light = false }) {
  return (
    <p className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] ${light ? 'text-[#52C0E1]' : 'text-[#0199C6]'}`}>
      {children}
    </p>
  )
}

function SectionTitle({ children, light = false, className = '' }) {
  return (
    <h2 className={`text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem] ${light ? 'text-white' : 'text-[#0070A5]'} ${className}`}>
      {children}
    </h2>
  )
}

function CTAButton({ label = 'AGENDAR CITA' }) {
  return (
    <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
      <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-[#52C0E1]/100 group-hover:bg-[#0070A5] group-hover:text-white backdrop-blur-md border border-[#52C0E1]/0">
        {label}
      </span>
      <div className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-[#52C0E1]/100 text-white group-hover:bg-[#0070A5] group-hover:text-white backdrop-blur-md border border-[#52C0E1]/0">
        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </button>
  )
}

/* ─── Quick Contact Sidebar ──────────────────────────────────────────────────── */

function QuickContact() {
  const contactItems = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      val: '+51 922 335 154',
      href: 'https://wa.me/51922335154',
      accent: 'text-emerald-500',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      val: '(01) 217 5100',
      href: 'tel:+5112175100',
      accent: 'text-[#0199C6]',
    },
    {
      icon: MapPin,
      label: 'Sede',
      val: 'Av. Angamos 2688, Surquillo',
      href: '#',
      accent: 'text-slate-500',
    },
  ]

  return (
    <aside className="overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-[#F7FCFE] to-[#EEF9FC] px-6 py-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0199C6]/10 blur-2xl" />
        <div className="relative z-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0199C6]">
            Contacto
          </p>
          <h3 className="mt-2 text-[20px] font-light leading-snug text-slate-900">
            ¿Tienes dudas? <span className="font-medium text-[#0070A5]">Estamos aquí.</span>
          </h3>
        </div>
      </div>

      {/* Datos de contacto */}
      <div className="px-2 py-2">
        {contactItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-[#F7FCFE]"
          >
            <span className={`shrink-0 ${item.accent}`}>
              <item.icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
            </span>
            <div className="min-w-0 flex-1">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {item.label}
              </span>
              <span className="mt-0.5 block truncate text-[13.5px] font-medium text-slate-800">
                {item.val}
              </span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0199C6]" />
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-slate-100 px-5 pb-5 pt-5">
        <CTAButton label="AGENDAR CITA" />
      </div>

    </aside>
  )
}

/* ─── FAQ Accordion ──────────────────────────────────────────────────────────── */

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? 'border-[#0199C6]/25 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`text-[14px] font-medium leading-snug transition-colors duration-200 ${open ? 'text-[#0070A5]' : 'text-slate-700'}`}>{q}</span>
        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? 'bg-[#0070A5] text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[13px] font-light leading-relaxed text-slate-500">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-slate-950 pb-20 pt-24 lg:items-center lg:pb-0 lg:pt-20">
      <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover opacity-55">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradients */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/15 via-slate-950/20 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" /> */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl space-y-6">

          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Diagnóstico y{' '}
            <br />
            <span className="font-light text-[#52C0E1]">tratamiento integral.</span>
          </h1>

          <p className="max-w-lg text-base font-light leading-relaxed text-slate-300 sm:text-lg">
            Tecnología de vanguardia y calidez humana para acompañarte en cada etapa de tu recuperación.
          </p>

          <div className="pt-2">
            <CTAButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Services Strip ─────────────────────────────────────────────────────────── */

function ServicesStrip() {
  const [paused, setPaused] = useState(false)
  const loop = [...servicios, ...servicios]

  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fades laterales */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

        <motion.div
          className="flex w-max items-center py-4 sm:py-5"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        >
          {loop.map((s, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 border-r border-slate-200 px-6 py-1"
            >
              <s.icon className="h-3.5 w-3.5 shrink-0 text-[#0199C6]" />
              <span className="whitespace-nowrap text-[11px] font-medium text-slate-600">{s.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Main Page ──────────────────────────────────────────────────────────────── */

const SERVICIO_Y_OFFSETS = ['-22vh', '12vh', '-8vh', '18vh', '-18vh', '6vh', '-12vh']

function ServiciosScrollSync() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const total = servicios.length
  const SLOT_VW = 37 // 34 (card) + 3 (gap)
  const trackVW = total * SLOT_VW
  const x = useTransform(scrollYProgress, [0, 1], ['100vw', `-${trackVW}vw`])

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Servicios</SectionEyebrow>
        <SectionTitle className="mb-3">Lo que ofrecemos</SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-400">
          Un ecosistema completo de atención oncológica bajo un mismo techo.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{ height: '220vh' }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* Imagen Detecto — debajo de las cards para que el texto sea legible */}
          <motion.img
            src={detecto}
            alt="Detecto"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-20 h-[60vh] w-auto max-w-[60vw] object-contain"
          />

          {/* Track horizontal de cards — encima de Detecto */}
          <motion.div
            style={{ x }}
            className="pointer-events-none absolute inset-y-0 left-0 z-40 flex items-center gap-[3vw] px-[2vw] will-change-transform"
          >
            {servicios.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={i}
                  style={{ transform: `translateY(${SERVICIO_Y_OFFSETS[i]})` }}
                  className="flex w-[34vw] shrink-0 items-center gap-4 rounded-2xl border border-white/60 bg-white/85 px-6 py-5 shadow-[0_18px_40px_-18px_rgba(1,153,198,0.3)] backdrop-blur-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0199C6] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#0199C6]">
                      Servicio {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-lg font-light leading-tight tracking-tight text-[#0070A5] sm:text-xl">
                      {s.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Velos de blur — comentados temporalmente
          <div
            className="pointer-events-none absolute inset-y-0 -left-2 z-50 w-[8vw] backdrop-blur-lg"
            style={{
              maskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 -right-2 z-50 w-[8vw] backdrop-blur-lg"
            style={{
              maskImage: 'linear-gradient(to left, black 0%, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 0%, black 50%, transparent 100%)',
            }}
          />
          */}

          {/* Indicador de progreso inferior */}
          <div className="pointer-events-none absolute inset-x-0 bottom-10 z-[60] mx-auto flex max-w-md items-center gap-2 px-6">
            {servicios.map((_, i) => (
              <ServiceProgressDot key={i} idx={i} total={total} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceProgressDot({ idx, total, progress }) {
  const start = idx / total
  const end = (idx + 1) / total
  const peak = (start + end) / 2
  const before = Math.max(0, start - 0.02)
  const after = Math.min(1, end + 0.02)

  const opacity = useTransform(progress, [before, peak, after], [0.3, 1, 0.3])
  const scale = useTransform(progress, [before, peak, after], [0.8, 1.4, 0.8])

  return (
    <motion.span
      style={{ opacity, scale }}
      className="h-1.5 flex-1 rounded-full bg-[#0199C6]"
    />
  )
}

export default function OncologiaMedica() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <HeaderV3 />
      <Hero />
      <ServicesStrip />

      {/* ── Page Body ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">

          {/* ── Main content ── */}
          <main className="min-w-0 space-y-20 lg:space-y-24">

            {/* ── What is oncología ── */}
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionEyebrow>Especialidad</SectionEyebrow>
              <SectionTitle className="mb-6">
                ¿Qué es la{' '}
                <em className="not-italic font-light text-[#52C0E1]">oncología médica?</em>
              </SectionTitle>
              <p className="mb-12 max-w-2xl text-base font-light leading-[1.8] text-slate-500 sm:text-[17px]">
                La oncología médica diagnostica, trata y controla el cáncer con medicamentos (quimioterapia, inmunoterapia, terapias dirigidas y hormonoterapia). Su objetivo es frenar o reducir el crecimiento tumoral, aliviar síntomas y mejorar la calidad de vida del paciente.
              </p>

              <div className="grid gap-5 sm:grid-cols-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group rounded-[22px] border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0199C6]/20 hover:shadow-lg hover:shadow-blue-900/5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0199C6]">
                      <h.icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                    </div>
                    <h4 className="mb-2 text-[14px] font-semibold text-[#0070A5]">{h.title}</h4>
                    <p className="text-[13px] font-light leading-relaxed text-slate-500">{h.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ── Tipos de cáncer ── */}
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionEyebrow>Tratamientos</SectionEyebrow>
              <SectionTitle className="mb-3">Tipos de cáncer que tratamos</SectionTitle>
              <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
                Abordamos un amplio espectro de patologías oncológicas con protocolos actualizados.
              </p>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {tiposCancer.map((t, i) => (
                  <motion.div
                    key={i}
                    custom={i % 6}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-100 bg-white px-5 py-4 transition-all duration-200 hover:border-[#0199C6]/30 hover:bg-blue-50/40 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#52C0E1]" />
                      <span className="text-[13.5px] font-light text-slate-700">{t}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-200 transition-colors duration-200 group-hover:text-[#0199C6]" />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ── Mision CTA — visual con video, "Tu salud, nuestra misión" ── */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative -mx-6 overflow-hidden rounded-none sm:mx-0 sm:rounded-[32px]"
            >
              <div className="relative isolate min-h-[460px] overflow-hidden bg-slate-950 sm:rounded-[32px]">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003F5C]/85 via-[#0070A5]/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Orb decorativo animado */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#52C0E1]/30 to-transparent blur-3xl"
                />

                {/* Líneas decorativas animadas */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-10 top-10 h-px w-24 origin-left bg-[#52C0E1]/60"
                />

                <div className="relative z-10 flex min-h-[460px] flex-col justify-between p-8 sm:p-12 lg:p-14">
                  <SectionEyebrow light>Nuestro compromiso</SectionEyebrow>

                  <div className="max-w-xl">
                    <h3 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl">
                      Tu salud,<br />
                      <span className="italic font-light text-[#52C0E1]">nuestra misión.</span>
                    </h3>

                    <p className="mt-5 max-w-md text-[14px] font-light leading-7 text-white/70 sm:text-[15px]">
                      Combinamos ciencia, tecnología y humanidad para acompañarte en cada etapa del
                      tratamiento oncológico. Da el primer paso hacia tu recuperación hoy mismo.
                    </p>

                    <div className="mt-8">
                      <CTAButton label="AGENDAR CITA" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ── Servicios — sticky image + scroll-synced bullets ── */}
            <ServiciosScrollSync />


            {/* ── FAQ ── */}
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
              <SectionTitle className="mb-3">Resolvemos tus dudas</SectionTitle>
              <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
                Información clara para que llegues a tu consulta con confianza.
              </p>

              <div className="space-y-2.5">
                {faqs.map((f, i) => (
                  <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
                ))}
              </div>
            </motion.section>

          </main>

          {/* ── Fixed sidebar (sticky dentro del grid → solo el main scrollea) ── */}
          <aside className="hidden self-start lg:sticky lg:top-[96px] lg:block">
            <QuickContact />
          </aside>

        </div>
      </div>

      <FooterV4 />
      <WhatsAppButton />
    </div>
  )
}