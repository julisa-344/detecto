import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ScrollText, Mail, FileText, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import {
  ThemeProvider,
  BLUE_THEME,
  SectionEyebrow,
  SectionTitle,
  fadeUp,
} from '../components/specialty'

const TERMINOS = [
  {
    id: 'aceptacion',
    num: '01',
    title: 'Aceptación de los términos',
    body: [
      'Al acceder o utilizar el sitio web de Detecta Clínica y los servicios asociados, usted acepta cumplir y quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte, le pedimos abstenerse de usar el sitio.',
      'Estos términos pueden actualizarse periódicamente; la versión vigente será la publicada en esta página.',
    ],
  },
  {
    id: 'uso',
    num: '02',
    title: 'Uso del sitio y de los servicios',
    body: [
      'El contenido del sitio es informativo y no reemplaza la consulta médica presencial. La información sobre especialidades, programas preventivos y servicios se ofrece con fines orientativos.',
      'Usted se compromete a utilizar el sitio de forma lícita, sin afectar la disponibilidad, integridad o seguridad de los sistemas, ni los derechos de terceros.',
    ],
  },
  {
    id: 'citas',
    num: '03',
    title: 'Citas y reservas',
    body: [
      'La solicitud de citas a través del sitio queda sujeta a confirmación por parte del equipo de Detecta Clínica según disponibilidad médica.',
      'Cualquier cancelación o reprogramación debe realizarse con la anticipación que se le indique al momento de confirmar la cita.',
    ],
  },
  {
    id: 'propiedad',
    num: '04',
    title: 'Propiedad intelectual',
    body: [
      'Todos los contenidos del sitio — textos, gráficos, imágenes, logotipos, íconos y marcas — son propiedad de Detecta Clínica o de sus respectivos titulares y están protegidos por las leyes de propiedad intelectual.',
      'Queda prohibida su reproducción, distribución o modificación sin autorización previa por escrito.',
    ],
  },
  {
    id: 'responsabilidad',
    num: '05',
    title: 'Limitación de responsabilidad',
    body: [
      'Detecta Clínica no será responsable por daños derivados del uso o imposibilidad de uso del sitio, errores u omisiones en los contenidos, ni por la interrupción del servicio por motivos técnicos.',
      'Tampoco se responsabiliza por contenidos de sitios externos enlazados desde nuestra plataforma.',
    ],
  },
  {
    id: 'modificaciones',
    num: '06',
    title: 'Modificaciones',
    body: [
      'Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del sitio o de los servicios en cualquier momento, sin necesidad de aviso previo.',
    ],
  },
  {
    id: 'legislacion',
    num: '07',
    title: 'Legislación aplicable',
    body: [
      'Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia será sometida a la jurisdicción de los tribunales de Lima.',
    ],
  },
]

const PRIVACIDAD = [
  {
    id: 'datos',
    num: '01',
    title: 'Datos que recopilamos',
    body: [
      'Recopilamos únicamente la información que usted nos proporciona voluntariamente al completar formularios de contacto, agendar citas o suscribirse a comunicaciones: nombre, correo electrónico, teléfono, motivo de consulta y otros datos estrictamente necesarios.',
    ],
  },
  {
    id: 'uso-datos',
    num: '02',
    title: 'Uso de la información',
    body: [
      'Los datos se utilizan para gestionar su solicitud, coordinar citas, enviar información que usted haya autorizado expresamente y mejorar la calidad de nuestros servicios.',
      'No comercializamos, vendemos ni cedemos sus datos personales a terceros.',
    ],
  },
  {
    id: 'derechos',
    num: '03',
    title: 'Sus derechos',
    body: [
      'Usted puede en todo momento acceder, rectificar, actualizar o solicitar la supresión de sus datos personales, conforme a la Ley N.° 29733 de Protección de Datos Personales.',
      'Para ejercer estos derechos puede escribirnos a contacto@detecta.pe.',
    ],
  },
]

const HERO_BG = `${import.meta.env.VITE_BASE_IMAGE_URL}ethical-committee/terminos.jpg`

const TOC = [
  {
    group: 'Términos y Condiciones',
    icon: FileText,
    items: TERMINOS.map((t) => ({ id: t.id, num: t.num, title: t.title })),
  },
  {
    group: 'Protección de Datos',
    icon: Lock,
    items: PRIVACIDAD.map((t) => ({ id: t.id, num: t.num, title: t.title })),
  },
]

function Seccion({ item, index }) {
  return (
    <motion.article
      id={item.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group relative scroll-mt-28 grid grid-cols-1 gap-6 rounded-3xl border border-[rgb(var(--brand-med)/0.25)] bg-white p-6 transition-all hover:border-[rgb(var(--brand-med)/0.55)] hover:shadow-[0_20px_40px_-15px_rgb(var(--brand-med)/0.18)] sm:grid-cols-[68px_1fr] sm:p-8"
    >
      <span className="font-mono text-[26px] font-extralight tracking-tight text-[rgb(var(--brand-base))]">
        {item.num}
      </span>
      <div>
        <h3 className="text-xl font-normal leading-snug tracking-tight text-[rgb(var(--brand-dark))] sm:text-[22px]">
          {item.title}
        </h3>
        <div className="mt-4 space-y-3">
          {item.body.map((p, i) => (
            <p key={i} className="text-[14.5px] font-light leading-7 text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function Sidebar({ activeId }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto space-y-7 rounded-3xl border border-[rgb(var(--brand-med)/0.2)] bg-white/80 p-6 backdrop-blur-xl shadow-[0_20px_50px_-20px_rgb(var(--brand-med)/0.18)]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--brand-base))]">
            Índice
          </p>
          <p className="mt-2 text-[13px] font-light leading-relaxed text-slate-500">
            Navega entre las secciones del documento.
          </p>
        </div>

        <div className="space-y-6">
          {TOC.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.group}>
                <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-dark))]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {group.group}
                </div>
                <ul className="space-y-0.5 border-l border-[rgb(var(--brand-med)/0.2)] pl-3">
                  {group.items.map((it) => {
                    const isActive = activeId === it.id
                    return (
                      <li key={it.id}>
                        <a
                          href={`#${it.id}`}
                          className={`flex items-baseline gap-3 rounded-md py-1.5 pr-2 pl-2 text-[13px] font-light transition-all ${
                            isActive
                              ? 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-dark))] font-medium'
                              : 'text-slate-500 hover:text-[rgb(var(--brand-dark))]'
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] ${
                              isActive
                                ? 'text-[rgb(var(--brand-base))]'
                                : 'text-slate-400'
                            }`}
                          >
                            {it.num}
                          </span>
                          <span className="leading-snug">{it.title}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default function TerminosCondiciones() {
  const [activeId, setActiveId] = useState(TERMINOS[0].id)

  useEffect(() => {
    const ids = [...TERMINOS, ...PRIVACIDAD].map((s) => s.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const top = visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )[0]
        setActiveId(top.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider
      theme={BLUE_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background: BLUE_THEME.pageGradient,
      }}
    >
      <HeaderV3 forceLight />

      {/* Hero con imagen de fondo */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[rgb(var(--brand-dark)/0.92)] via-[rgb(var(--brand-dark)/0.78)] to-[rgb(var(--brand-dark)/0.45)]" />
        <div className="absolute inset-0 bg-linear-to-t from-[rgb(var(--brand-dark)/0.6)] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em]">
              <span className="h-px w-10 bg-[rgb(var(--brand-base))]" />
              <span className="text-[rgb(var(--brand-base))]">Marco legal</span>
            </div>

            <h1 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
              Términos, condiciones y{' '}
              <span className="italic font-medium text-[rgb(var(--brand-base))]">
                protección de datos.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/85 lg:text-[17px]">
              Conoce las condiciones que rigen el uso de nuestro sitio y los
              servicios de Detecta Clínica, así como el tratamiento responsable
              que damos a tus datos personales.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">
              <span className="inline-flex items-center gap-2">
                <ScrollText className="h-3.5 w-3.5" />
                Última actualización · Mayo 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5" />
                Ley N.° 29733
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenido + Sidebar */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <Sidebar activeId={activeId} />

            <div className="min-w-0">
              {/* Términos */}
              <div className="mb-10 max-w-2xl">
                <SectionEyebrow>Términos y Condiciones</SectionEyebrow>
                <SectionTitle>Condiciones de uso del sitio</SectionTitle>
              </div>

              <div className="space-y-5">
                {TERMINOS.map((s, i) => (
                  <Seccion key={s.id} item={s} index={i} />
                ))}
              </div>

              {/* Privacidad */}
              <div className="mt-24 mb-10 max-w-2xl">
                <SectionEyebrow>Protección de Datos</SectionEyebrow>
                <SectionTitle>
                  Tratamiento responsable de tu{' '}
                  <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
                    información
                  </em>
                </SectionTitle>
              </div>

              <div className="space-y-5">
                {PRIVACIDAD.map((s, i) => (
                  <Seccion key={s.id} item={s} index={i} />
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-16 overflow-hidden rounded-4xl bg-[rgb(var(--brand-dark))] p-8 sm:p-12"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[rgb(var(--brand-base)/0.25)] blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-[rgb(var(--brand-med)/0.25)] blur-3xl" />

                <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      ¿Dudas o consultas?
                    </span>
                    <h3 className="mt-5 text-2xl font-light leading-tight tracking-tight text-white sm:text-3xl">
                      Escríbenos para ejercer tus derechos sobre tus datos.
                    </h3>
                    <p className="mt-4 text-[14.5px] font-light leading-7 text-white/80">
                      Nuestro equipo te responderá en un plazo razonable.
                    </p>
                  </div>

                  <Link
                    to="/v4/contacto"
                    className="group inline-flex items-center gap-3 self-start rounded-full bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--brand-dark))] transition-all hover:bg-[rgb(var(--brand-base))] hover:text-white"
                  >
                    <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Ir a contacto
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
