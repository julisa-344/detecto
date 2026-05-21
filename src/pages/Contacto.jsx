import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import { FAQs, ThemeProvider, BLUE_THEME } from '../components/specialty'

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
  </svg>
)
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 001.38 2.13 5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.21-.11.51-.11.81V19h-3V8h3v1.27c.4-.62 1.11-1.5 2.7-1.5 1.97 0 3.46 1.29 3.46 4.05V19z" />
  </svg>
)
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
)

const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: YoutubeIcon, label: 'YouTube', href: '#' },
]

const ESPECIALIDADES = [
  'Oncología Médica',
  'Oncología Pediátrica',
  'Mastología y Ginecología',
  'Urología Oncológica',
  'Diagnóstico por Imágenes',
  'Laboratorio Clínico',
  'Anatomía Patológica',
  'Psicooncología',
  'Telemedicina',
  'Otra',
]

const MOTIVOS = [
  'Primera consulta',
  'Control / seguimiento',
  'Despistaje preventivo',
  'Resultados',
  'Investigación clínica',
  'Otro',
]

const LOCALES = [
  {
    name: 'Detecta Clínica · Surquillo',
    address: 'Av. Angamos Este 2688, Surquillo, Lima',
    map: 'https://www.google.com/maps?q=Av.+Angamos+Este+2688,+Surquillo,+Lima&output=embed',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Angamos+Este+2688,+Surquillo,+Lima',
  },
  {
    name: 'Consultorios Detecta · San Borja',
    address: 'Av. Angamos Este Mz. F-12 Lote 72, San Borja, Lima',
    map: 'https://www.google.com/maps?q=Av.+Angamos+Este+San+Borja,+Lima&output=embed',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Angamos+Este+San+Borja,+Lima',
  },
]

const CANALES = [
  {
    label: 'Citas y consultas',
    phone: '+51 922 335 134',
    email: 'citas@detecta.pe',
    href: 'https://wa.me/51922335134',
  },
  {
    label: 'Central telefónica',
    phone: '(01) 217 5100',
    email: 'informes@detecta.pe',
    href: 'tel:+5112175100',
  },
  {
    label: 'Resultados',
    phone: '+51 922 335 134',
    email: 'resultados@detecta.pe',
    href: 'mailto:resultados@detecta.pe',
  },
  {
    label: 'Investigación',
    phone: '+51 922 335 134',
    email: 'investigacion@detecta.pe',
    href: 'mailto:investigacion@detecta.pe',
  },
]

const inputCls =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-light text-slate-700 placeholder:text-slate-300 outline-none transition focus:border-primary-medium focus:ring-2 focus:ring-primary-medium/15'

function Label({ children, optional }) {
  return (
    <span className="mb-1.5 block text-[12px] font-semibold text-slate-700">
      {children}{' '}
      {optional ? (
        <span className="font-light text-slate-400">(opcional)</span>
      ) : (
        <span className="text-primary-medium">*</span>
      )}
    </span>
  )
}

export default function Contacto() {
  const [activeLocal, setActiveLocal] = useState(0)
  const [accept, setAccept] = useState(false)

  const FAQS = [
    {
      q: '¿Cómo agendo una cita?',
      a: 'Puedes hacerlo desde el portal web en appointments.detecta.pe, llamando a la central (01) 217 5100, escribiéndonos por WhatsApp al +51 922 335 134 o llenando el formulario en esta página.',
    },
    {
      q: '¿Atienden urgencias 24/7?',
      a: 'Sí, contamos con atención de emergencias las 24 horas. Para consultas oncológicas urgentes te recomendamos contactarnos por nuestra central telefónica.',
    },
    {
      q: '¿Aceptan seguros y EPS?',
      a: 'Trabajamos con las principales aseguradoras y EPS del Perú. Al agendar tu cita confirmaremos la cobertura de tu plan específico.',
    },
    {
      q: '¿Cómo accedo a mis resultados?',
      a: 'A través del portal del paciente con tu DNI y clave de acceso. También puedes recogerlos presencialmente en cualquiera de nuestras sedes.',
    },
    {
      q: '¿Tienen telemedicina?',
      a: 'Sí, ofrecemos consultas virtuales en varias especialidades. Al agendar tu cita selecciona la modalidad "Telemedicina".',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <ThemeProvider
      theme={BLUE_THEME}
      className="min-h-screen"
      style={{
        fontFamily: 'Lexend, sans-serif',
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F7FCFE 35%, #EEFBFF 70%, #E3F4FB 100%)',
      }}
    >
      <HeaderV3 />

      {/* HERO */}
      <section
        className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{
          background:
            'linear-gradient(135deg, #0199C6 0%, #0070A5 50%, #0A2A3F 100%)',
        }}
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-dark/30 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.32em] uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Contacto
            </p>
            <h1 className="mt-5 text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Estamos para{' '}
              <span className="italic font-medium text-primary">ayudarte.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] font-light leading-7 text-white/75">
              Déjanos tus datos y un asesor te responderá a la brevedad.
              También puedes contactarnos directamente por nuestros canales
              oficiales.
            </p>
            <div className="mt-8 h-px w-32 bg-white/30" />
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 lg:pt-20 pb-20 lg:pb-28">

        {/* FORM + CANALES */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] relative z-10">

          {/* FORM CARD */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_30px_70px_-30px_rgba(0,112,165,0.25)] lg:p-10"
          >
            <h2 className="text-xl font-medium text-primary-dark lg:text-2xl">
              Completa los siguientes datos
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <Label>Nombre y apellidos</Label>
                <input type="text" required placeholder="Ej. María Pérez" className={inputCls} />
              </label>

              <label className="block">
                <Label>Teléfono</Label>
                <input type="tel" required placeholder="Ej. 999 999 999" className={inputCls} />
              </label>

              <label className="block sm:col-span-2">
                <Label>Correo electrónico</Label>
                <input type="email" required placeholder="tu@correo.com" className={inputCls} />
              </label>

              <label className="block">
                <Label>Motivo de consulta</Label>
                <select required defaultValue="" className={inputCls}>
                  <option value="" disabled>Selecciona…</option>
                  {MOTIVOS.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </label>

              <label className="block">
                <Label>Especialidad de interés</Label>
                <select required defaultValue="" className={inputCls}>
                  <option value="" disabled>Selecciona…</option>
                  {ESPECIALIDADES.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <Label optional>Comentarios adicionales</Label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                  className={`${inputCls} resize-none`}
                />
              </label>

              <label className="sm:col-span-2 flex items-start gap-3 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-primary-medium focus:ring-primary-medium/30 cursor-pointer"
                />
                <span className="text-[12px] font-light leading-relaxed text-slate-500">
                  Acepto las{' '}
                  <Link to="/v4/terminos-y-condiciones#proteccion-datos" className="font-medium text-primary-dark underline-offset-4 hover:underline">
                    condiciones de protección de datos
                  </Link>{' '}
                  y los{' '}
                  <Link to="/v4/terminos-y-condiciones#terminos" className="font-medium text-primary-dark underline-offset-4 hover:underline">
                    Términos y Condiciones
                  </Link>.
                </span>
              </label>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={!accept}
                  className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-disabled:group-hover:bg-primary-dark">
                    Enviar mensaje
                  </span>
                  <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-primary-dark text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-disabled:group-hover:bg-primary-dark">
                    <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                    <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </button>
              </div>
            </div>
          </motion.form>

          {/* CANALES CARD — primary-medium gradient */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl p-7 lg:p-8 text-white shadow-[0_30px_60px_-30px_rgba(0,112,165,0.6)]"
            style={{
              background:
                'linear-gradient(160deg, #52C0E1 0%, #0199C6 45%, #0070A5 100%)',
            }}
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary-dark/40 blur-3xl" />

            <div className="relative">
              <h3 className="text-xl font-light leading-tight lg:text-2xl">
                ¿Prefieres atención{' '}
                <span className="italic font-medium">inmediata?</span>
              </h3>
              <p className="mt-2 text-[13px] font-light text-white/80">
                Comunícate directamente con el canal correspondiente.
              </p>

              <div className="mt-6 space-y-3">
                {CANALES.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md p-3.5 transition hover:bg-white/25"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/25">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold leading-tight text-white">
                        {c.label}
                      </p>
                      <p className="mt-0.5 text-[11.5px] font-light text-white/85">{c.phone}</p>
                      <p className="text-[11px] font-light text-white/70 truncate">{c.email}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/60 transition-all group-hover:text-white group-hover:rotate-45" />
                  </a>
                ))}
              </div>

              {/* Síguenos */}
              <div className="mt-7 border-t border-white/15 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/70">
                  Síguenos en redes
                </p>
                <div className="mt-3 flex gap-2">
                  {SOCIALS.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition hover:bg-white hover:text-primary-dark hover:-translate-y-0.5"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* UBICACIÓN + MAPA */}
        <section className="mt-20 lg:mt-28">
          <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
                Visítanos
              </p>
              <h2 className="mt-2 text-2xl font-light tracking-tight text-primary-dark lg:text-3xl">
                Ubicación
              </h2>
            </div>
            <a
              href={LOCALES[activeLocal].mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary-dark transition hover:text-primary-medium"
            >
              Abrir en Google Maps
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>

          {/* Selector compacto de locales */}
          <div className="mb-4 flex flex-wrap gap-2">
            {LOCALES.map((l, i) => (
              <button
                key={l.name}
                type="button"
                onClick={() => setActiveLocal(i)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold transition-all ${
                  i === activeLocal
                    ? 'bg-primary-medium text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-primary-medium/40'
                }`}
              >
                <MapPin className="h-3.5 w-3.5" />
                {l.name}
              </button>
            ))}
          </div>


          <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-[0_25px_55px_-30px_rgba(0,112,165,0.2)]">
            <iframe
              key={LOCALES[activeLocal].map}
              src={LOCALES[activeLocal].map}
              className="block h-[400px] w-full border-0 lg:h-[460px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa ${LOCALES[activeLocal].name}`}
            />
          </div>
        </section>

        {/* FAQs */}
        <div className="mt-20 lg:mt-28">
          <FAQs
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            subtitle="Información clara para que contactarnos sea fácil y rápido."
            faqs={FAQS}
          />
        </div>
      </div>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
