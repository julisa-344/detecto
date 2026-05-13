import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowLeft,
  Stethoscope,
  GraduationCap,
  Calendar,
  ShieldCheck,
  Monitor,
  FlaskConical,
  Lightbulb,
  Building2,
} from 'lucide-react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import { getDoctorBySlug } from '../data/staff'
import clinicaBg from '../assets/clinica.jpg'
const COUNTRY_CODES = {
  Perú: 'pe',
  Peru: 'pe',
  'Estados Unidos': 'us',
  USA: 'us',
  México: 'mx',
  Mexico: 'mx',
  España: 'es',
  Spain: 'es',
  Argentina: 'ar',
  Brasil: 'br',
  Chile: 'cl',
  Colombia: 'co',
  Francia: 'fr',
  Alemania: 'de',
  'Reino Unido': 'gb',
  Italia: 'it',
  Canadá: 'ca',
}

function flagImageFor(country) {
  const code = COUNTRY_CODES[country]

  if (!code) return null

  return `https://flagcdn.com/w80/${code}.png`
}

function Section({ eyebrow, title, icon: Icon, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 lg:py-16"
    >
      <div className="mb-8 flex items-center gap-3">
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 text-primary-dark">
            <Icon className="h-5 w-5" />
          </span>
        )}

        <div>
          {eyebrow && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-medium">
              {eyebrow}
            </p>
          )}

          <h2 className="text-2xl font-light tracking-tight text-slate-900 lg:text-3xl">
            {title}
          </h2>
        </div>
      </div>

      {children}
    </motion.section>
  )
}

const COUNTRY_FLAGS = {
  Perú: '🇵🇪',
  Peru: '🇵🇪',
  'Estados Unidos': '🇺🇸',
  USA: '🇺🇸',
  México: '🇲🇽',
  Mexico: '🇲🇽',
  España: '🇪🇸',
  Spain: '🇪🇸',
  Argentina: '🇦🇷',
  Brasil: '🇧🇷',
  Chile: '🇨🇱',
  Colombia: '🇨🇴',
  Francia: '🇫🇷',
  Alemania: '🇩🇪',
  'Reino Unido': '🇬🇧',
  Italia: '🇮🇹',
  Canadá: '🇨🇦',
}

function flagFor(country) {
  return COUNTRY_FLAGS[country] ?? '🌐'
}

function InfoCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-medium leading-snug text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-[15px] font-medium leading-snug text-slate-900">
          {value}
        </p>
      </div>
    </div>
  )
}

export default function DoctorDetail() {
  const { slug } = useParams()
  const doctor = getDoctorBySlug(slug)

  if (!doctor) return <Navigate to="/v4/staff-medico" replace />

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <HeaderV3 />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 lg:pt-40">
        {/* Fondo: imagen clínica + degradado innovador */}
        <div className="absolute inset-0 z-0">
          <img
            src={clinicaBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-br from-[#0A2A3F]/85 via-primary-dark/75 to-primary-medium/60" />

          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          {/* Volver */}
          <Link
            to="/v4/staff-medico"
            className="mb-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 transition-all hover:gap-3 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al staff
          </Link>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_480px] lg:gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pb-16 lg:pb-24"
            >
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md">
                {doctor.specialty}
              </span>

              <h1 className="mt-6 text-4xl font-light leading-[1.05] tracking-tighter text-white lg:text-6xl">
                {doctor.name}
              </h1>

              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 lg:text-[17px]">
                {doctor.bio}
              </p>

              {/* Datos rápidos */}
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    label: 'CMP',
                    value:
                      (doctor.reg.match(/CMP\s*([\w-]+)/i)?.[1] ?? '—').trim(),
                  },
                  {
                    label: 'RNE',
                    value:
                      (doctor.reg.match(/RNE\s*([\w-]+)/i)?.[1] ?? '—').trim(),
                  },
                  {
                    label: 'Atención',
                    value: doctor.info.tipoAtencion,
                  },
                  {
                    label: 'Modalidad',
                    value: doctor.info.modalidad,
                  },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="rounded-2xl border border-white/50 bg-white/35 p-4 backdrop-blur-md"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary-dark">
                      {d.label}
                    </p>

                    <p className="mt-1 text-base font-semibold text-primary-dark">
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
                  <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-white">
                    AGENDAR CITA
                  </span>

                  <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-primary-dark text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-white">
                    <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:translate-x-10" />
                    <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </button>

                <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/60 bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-dark backdrop-blur-md transition hover:border-primary-dark hover:bg-white/30">
                  <Calendar className="h-4 w-4" />
                  VER DISPONIBILIDAD
                </button>
              </div>
            </motion.div>

            {/* Imagen del doctor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative self-end"
            >
              <div className="relative mx-auto h-140 w-full max-w-120 lg:h-160">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto object-contain object-bottom "
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, black 78%, transparent 100%)',
                    maskImage:
                      'linear-gradient(to bottom, black 78%, transparent 100%)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 divide-y divide-slate-100">
            {/* Áreas de desarrollo */}
            <Section
              eyebrow="Especialización"
              title="Áreas de desarrollo"
              icon={Stethoscope}
            >
              <ul className="grid gap-3 sm:grid-cols-2">
                {doctor.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5 transition hover:border-primary-medium/40 hover:bg-white"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-medium" />

                    <span className="text-sm font-light leading-snug text-slate-700">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

{/* Formación académica */}
<Section
  eyebrow="Trayectoria"
  title="Formación académica"
  icon={GraduationCap}
  delay={0.05}
>
  <div className="grid gap-4 sm:grid-cols-2">
    {doctor.formacion.map((f, i) => {
      const flagSrc = flagImageFor(f.pais)

      return (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.45,
            delay: i * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="rounded-3xl border border-slate-100 bg-white p-5 transition-all hover:border-primary-medium/40 hover:shadow-[0_18px_38px_-24px_rgba(0,112,165,0.25)] lg:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2">
              {flagSrc ? (
                <img
                  src={flagSrc}
                  alt={`Bandera de ${f.pais}`}
                  className="h-4 w-6 rounded-[3px] object-cover shadow-sm"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm leading-none">{flagFor(f.pais)}</span>
              )}

              <span className="text-[12px] font-medium text-slate-500">
                {f.pais}
              </span>
            </div>

            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] text-primary-dark">
              {f.anio}
            </span>
          </div>

          <h3 className="text-[17px] font-medium leading-snug text-slate-900">
            {f.title}
          </h3>

          <p className="mt-3 flex items-start gap-2 text-sm font-light leading-relaxed text-slate-600">
            <Building2 className="mt-[2px] h-4 w-4 shrink-0 text-primary-medium" />
            <span>{f.institucion}</span>
          </p>
        </motion.article>
      )
    })}
  </div>
</Section>
          </main>

          {/* Sidebar: Información destacada */}
          <aside className="py-12 lg:sticky lg:top-28 lg:self-start lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(0,112,165,0.14)] lg:p-6"
            >
              {/* Encabezado */}
              <div className="mb-6 border-b border-slate-100 pb-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-primary-medium">
                  Perfil
                </p>

                <h3 className="mt-1 text-lg font-medium leading-tight text-slate-900">
                  Información destacada
                </h3>
              </div>

              {/* Lista de info */}
              <div className="divide-y divide-slate-100">
                <InfoCard
                  icon={ShieldCheck}
                  label="Tipo de atención"
                  value={doctor.info.tipoAtencion}
                  accent="bg-emerald-50 text-emerald-600"
                />

                <InfoCard
                  icon={Monitor}
                  label="Modalidad de atención"
                  value={doctor.info.modalidad}
                  accent="bg-sky-50 text-sky-600"
                />

                <InfoCard
                  icon={FlaskConical}
                  label="Trayectoria en investigación"
                  value={doctor.info.trayectoriaInvestigacion}
                  accent="bg-violet-50 text-violet-600"
                />

                <InfoCard
                  icon={Lightbulb}
                  label="Interés en investigación"
                  value={doctor.info.interesInvestigacion}
                  accent="bg-amber-50 text-amber-600"
                />
              </div>

              {/* CTA Agendar cita */} 
              <div>
                <button className="pt-4 mx-auto w-full group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
                  <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-white">
                    AGENDAR CITA
                  </span>
                </button>
              </div>

            </motion.div>
          </aside>
        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </div>
  )
}