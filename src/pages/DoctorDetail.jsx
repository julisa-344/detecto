import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowLeft,
  Stethoscope,
  Calendar,
  ShieldCheck,
  Monitor,
  FlaskConical,
  Lightbulb,
  Building2,
  GraduationCap,
  UserRound,
  HeartPulse,
} from 'lucide-react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import clinicaBg from '../assets/clinica.jpg'
import { useDoctor } from '../hooks/useDoctors'
import { getFileUrl } from '../lib/images'

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

function ExpandableText({ text, threshold = 220 }) {
  const [expanded, setExpanded] = useState(false)
  if (!text) return null
  const needsToggle = text.length > threshold

  if (!needsToggle) {
    return (
      <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 lg:text-[17px]">
        {text}
      </p>
    )
  }

  if (expanded) {
    return (
      <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 lg:text-[17px]">
        {text}{' '}
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="font-semibold text-white/90 hover:text-white"
        >
          ...menos
        </button>
      </p>
    )
  }

  // Buscar último espacio antes del threshold para no cortar palabras
  const cut = text.lastIndexOf(' ', threshold)
  const slice = (cut > 0 ? text.slice(0, cut) : text.slice(0, threshold)).trimEnd()

  return (
    <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 lg:text-[17px]">
      {slice}
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="ml-1 font-semibold text-white/90 hover:text-white"
      >
        ...más
      </button>
    </p>
  )
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0">
      <Icon
        className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-primary-medium"
        strokeWidth={1.6}
      />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-[14px] font-medium leading-snug text-slate-900">
          {value}
        </p>
      </div>
    </div>
  )
}

export default function DoctorDetail() {
  const { id } = useParams()
  const { doctor, loading, error } = useDoctor(id)

  if (loading) {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
        <HeaderV3 forceLight />
        <div className="pt-40 pb-20 flex items-center justify-center text-slate-400 text-sm">
          Cargando perfil...
        </div>
        <FooterV4 showCTA={false} />
      </div>
    )
  }

  if (error || !doctor) return <Navigate to="/v4/staff-medico" replace />

  const imageUrl = getFileUrl(doctor.image)
  const rneList = (doctor.specialties ?? [])
    .map((s) => s.rne)
    .filter(Boolean)
    .join(' · ')

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <HeaderV3 />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 lg:pt-40">
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
          <Link
            to="/v4/staff-medico"
            className="mb-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 transition-all hover:gap-3 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al staff
          </Link>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_480px] lg:gap-16">
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
                {doctor.name?.trim()}
              </h1>

              <ExpandableText text={doctor.bio} />

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: 'CMP', value: doctor.cmp || '—' },
                  { label: 'RNE', value: rneList || '—' },
                  { label: 'Atención', value: doctor.careType || '—' },
                  { label: 'Modalidad', value: doctor.modality || '—' },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="rounded-2xl border border-white/50 bg-white/35 p-4 backdrop-blur-md"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary-dark">
                      {d.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-primary-dark wrap-break-word">
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://appointments.detecta.pe/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
                >
                  <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900">
                    AGENDAR CITA
                  </span>
                  <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-primary-dark text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900">
                    <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:translate-x-10" />
                    <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </a>

                <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/60 bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-dark backdrop-blur-md transition hover:border-primary-dark hover:bg-white/30">
                  <Calendar className="h-4 w-4" />
                  VER DISPONIBILIDAD
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative self-end"
            >
              <div className="relative mx-auto h-140 w-full max-w-120 lg:h-160">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={doctor.name}
                    className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto object-contain object-bottom"
                    style={{
                      WebkitMaskImage:
                        'linear-gradient(to bottom, black 78%, transparent 100%)',
                      maskImage:
                        'linear-gradient(to bottom, black 78%, transparent 100%)',
                    }}
                  />
                ) : (
                  <div className="absolute inset-x-0 bottom-0 mx-auto h-full w-full flex items-end justify-center">
                    <UserRound className="h-40 w-40 text-white/60" strokeWidth={1.1} />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <main className="min-w-0 divide-y divide-slate-100">
            {doctor.areas && doctor.areas.length > 0 && (
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
            )}

            {doctor.education && doctor.education.length > 0 && (
              <Section
                eyebrow="Trayectoria"
                title="Formación académica"
                icon={GraduationCap}
                delay={0.05}
              >
                <ol className="relative">
                  {/* Línea vertical del timeline */}
                  <span
                    aria-hidden="true"
                    className="absolute left-6 top-2 bottom-2 w-px bg-linear-to-b from-primary-medium/40 via-slate-200 to-transparent"
                  />

                  {doctor.education.map((f, i) => {
                    const flagSrc = f.isoCode
                      ? `https://flagcdn.com/w80/${f.isoCode.toLowerCase()}.png`
                      : null
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative flex items-start gap-5 pb-8 last:pb-0"
                      >
                        {/* Marker: círculo con bandera */}
                        <div className="relative z-10 shrink-0">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_8px_18px_-10px_rgba(0,112,165,0.3)] transition-all group-hover:border-primary-medium/40 group-hover:scale-105">
                            {flagSrc ? (
                              <img
                                src={flagSrc}
                                alt=""
                                aria-hidden="true"
                                className="h-5 w-7 rounded-xs object-cover shadow-sm"
                                loading="lazy"
                              />
                            ) : (
                              <Building2 className="h-4 w-4 text-primary-medium" />
                            )}
                          </span>
                        </div>

                        {/* Contenido */}
                        <div className="min-w-0 flex-1 pt-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400">
                              {f.pais}
                            </span>
                            {f.tipo && (
                              <>
                                <span className="h-1 w-1 rounded-full bg-slate-300" />
                                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-medium">
                                  {f.tipo}
                                </span>
                              </>
                            )}
                          </div>

                          <p className="mt-1.5 text-[15px] font-medium leading-snug text-slate-900 transition-colors group-hover:text-primary-dark lg:text-base">
                            {f.institucion}
                          </p>

                          {f.descripcion && (
                            <p className="mt-2 text-sm font-light leading-relaxed text-slate-500">
                              {f.descripcion}
                            </p>
                          )}
                        </div>
                      </motion.li>
                    )
                  })}
                </ol>
              </Section>
            )}
          </main>

          <aside className="py-12 lg:sticky lg:top-28 lg:self-start lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(0,112,165,0.14)] lg:p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-medium leading-tight text-primary-dark ">
                  Información destacada
                </h3>
          
              </div>

              <div className="divide-y divide-slate-100/80">
                <InfoCard
                  icon={ShieldCheck}
                  label="Tipo de atención"
                  value={doctor.careType ?? '—'}
                />
                <InfoCard
                  icon={Monitor}
                  label="Modalidad de atención"
                  value={doctor.modality ?? '—'}
                />
                <InfoCard
                  icon={FlaskConical}
                  label="Trayectoria en investigación"
                  value={doctor.research || 'No registra trabajos de investigación.'}
                />
                <InfoCard
                  icon={Lightbulb}
                  label="Interés en investigación"
                  value={
                    doctor.researchInterest
                      ? 'Sí, desea recibir información del área de investigación.'
                      : 'No registra interés actual.'
                  }
                />
                {doctor.isOncology && (
                  <InfoCard icon={HeartPulse} label="Enfoque" value="Oncología" />
                )}
              </div>

              <a
                href="https://appointments.detecta.pe/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex w-full items-center justify-between rounded-full bg-primary-dark pl-6 pr-2 py-2 transition-all duration-500 hover:bg-slate-900 active:scale-[0.98]"
              >
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white">
                  Agendar cita
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </motion.div>
          </aside>
        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </div>
  )
}
