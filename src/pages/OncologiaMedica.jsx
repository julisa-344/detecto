import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [activeTab, setActiveTab] = useState('cita')

  const contactItems = [
    { icon: MessageCircle, label: 'WhatsApp',    val: '+51 922 335 154', href: 'https://wa.me/51922335154', color: 'bg-emerald-50 text-emerald-600' },
    { icon: Phone,          label: 'Teléfono',   val: '(01) 217 5100',   href: 'tel:+5112175100',          color: 'bg-blue-50 text-[#0199C6]' },
    { icon: MapPin,         label: 'Sede',        val: 'Angamos 2688, Surquillo', href: '#',              color: 'bg-slate-100 text-slate-500' },
  ]

  const horarios = [
    { day: 'Lun – Vie', hours: '8:00 am – 7:00 pm' },
    { day: 'Sábado',    hours: '8:00 am – 1:00 pm' },
    { day: 'Domingo',   hours: 'Emergencias' },
  ]

  return (
    <aside className="rounded-[28px] overflow-hidden border border-slate-100 bg-white shadow-[0_8px_48px_-12px_rgba(0,112,165,0.18)]">

      {/* Header strip */}
      <div className="bg-gradient-to-br from-[#0070A5] to-[#0199C6] px-7 py-6">
        <div className="flex items-center gap-3 mb-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <Stethoscope className="h-4 w-4 text-white" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">Contacto rápido</p>
        </div>
        <p className="text-xl font-light text-white leading-snug">Agenda tu evaluación <span className="font-medium">hoy</span></p>

        {/* Tabs */}
        <div className="mt-5 flex gap-1 rounded-xl bg-white/10 p-1">
          {[{ id: 'cita', label: 'Cita' }, { id: 'info', label: 'Info' }, { id: 'horarios', label: 'Horarios' }].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 rounded-lg py-1.5 text-[10px] font-semibold tracking-wider transition-all duration-200 ${
                activeTab === tab.id ? 'bg-white text-[#0070A5]' : 'text-white/70 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-7 py-6">
        <AnimatePresence mode="wait">

          {/* TAB: Cita */}
          {activeTab === 'cita' && (
            <motion.div key="cita" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className="space-y-3">
              {contactItems.map((item, idx) => (
                <a key={idx} href={item.href} className="group flex items-center gap-3.5 rounded-2xl border border-slate-50 bg-slate-50/60 p-3.5 transition-all hover:border-[#0199C6]/20 hover:bg-blue-50/40 hover:shadow-sm">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] font-semibold uppercase tracking-widest text-slate-400">{item.label}</span>
                    <span className="block truncate text-[13px] font-medium text-[#0070A5]">{item.val}</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-200 transition-colors group-hover:text-[#0199C6]" />
                </a>
              ))}

              {/* Tip */}
              <div className="mt-5 flex gap-3 rounded-2xl bg-blue-50/60 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0199C6]" />
                <p className="text-[12px] font-light leading-relaxed text-slate-500">
                  Trae tus informes previos para agilizar el diagnóstico.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <CTAButton label="AGENDAR CITA" />
              </div>
            </motion.div>
          )}

          {/* TAB: Info */}
          {activeTab === 'info' && (
            <motion.div key="info" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className="space-y-4">
              <p className="text-[13px] font-light leading-relaxed text-slate-500">
                Somos un equipo de oncólogos médicos especializados en tratamiento sistémico. Atendemos con cobertura de seguros, EPS y de forma particular.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '15+', label: 'Años de exp.' },
                  { value: '98%', label: 'Pacientes satisfechos' },
                  { value: '12', label: 'Tipos de cáncer' },
                  { value: '3', label: 'Sedes disponibles' },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl bg-slate-50 p-4 text-center">
                    <p className="text-2xl font-light text-[#0070A5]">{s.value}</p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 rounded-2xl bg-amber-50 p-4">
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-amber-400 fill-amber-400" />
                <p className="text-[12px] font-light leading-relaxed text-slate-500">Trabajamos con las principales EPS y aseguradoras del país.</p>
              </div>
            </motion.div>
          )}

          {/* TAB: Horarios */}
          {activeTab === 'horarios' && (
            <motion.div key="horarios" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className="space-y-3">
              {horarios.map((h, i) => (
                <div key={i} className="flex items-center justify-between rounded-2xl border border-slate-50 bg-slate-50/70 px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${i < 2 ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span className="text-[13px] font-medium text-slate-700">{h.day}</span>
                  </div>
                  <span className="text-[12px] font-light text-slate-500">{h.hours}</span>
                </div>
              ))}
              <div className="mt-5 flex gap-3 rounded-2xl bg-slate-50 p-4">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#0199C6]" />
                <p className="text-[12px] font-light leading-relaxed text-slate-500">Agenda con anticipación para garantizar disponibilidad con tu médico.</p>
              </div>
              <div className="mt-2">
                <a href="https://wa.me/51922335154" className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3.5 text-[11px] font-semibold tracking-wider text-white transition-colors hover:bg-emerald-600">
                  <MessageCircle className="h-4 w-4" />
                  ESCRIBIR POR WHATSAPP
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
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
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-slate-950 pb-20 pt-24 lg:items-center lg:pb-0 lg:pt-20">
      <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover opacity-55">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradients */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/15 via-slate-950/20 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" /> */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl space-y-6">
          <SectionEyebrow light>Oncología Médica</SectionEyebrow>

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

            {/* ── Servicios completos ── */}
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionEyebrow>Servicios</SectionEyebrow>
              <SectionTitle className="mb-3">Lo que ofrecemos</SectionTitle>
              <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
                Un ecosistema completo de atención oncológica bajo un mismo techo.
              </p>

              <div className="space-y-2.5">
                {servicios.map((s, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-4.5 py-[18px] transition-all duration-200 hover:border-[#0199C6]/20 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-white hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0199C6] transition-colors duration-200 group-hover:bg-[#0199C6] group-hover:text-white">
                      <s.icon className="h-[17px] w-[17px]" />
                    </div>
                    <span className="text-[14px] font-light text-slate-700">{s.title}</span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-slate-200 transition-colors duration-200 group-hover:text-[#0199C6]" />
                  </motion.div>
                ))}
              </div>
            </motion.section>

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

          {/* ── Sticky Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-[96px] space-y-4">
              <QuickContact />

              {/* Secondary card – location */}
              <div className="rounded-[22px] border border-slate-100 bg-slate-50 p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#0199C6]" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Nuestra sede</p>
                </div>
                <p className="text-[13px] font-medium text-[#0070A5]">Surquillo, Lima</p>
                <p className="text-[13px] font-light text-slate-500">Av. Angamos Este 2688</p>
                <a href="#" className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0199C6] hover:underline">
                  Ver en mapa <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>

      <FooterV4 />
      <WhatsAppButton />
    </div>
  )
}