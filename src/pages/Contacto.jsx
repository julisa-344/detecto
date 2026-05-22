import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronDown,
  AlertCircle,
  CheckCircle2,
  Check,
  Clock,
  Shield,
  Zap,
} from 'lucide-react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import { FAQs, ThemeProvider, BLUE_THEME, HeroMarquee } from '../components/specialty'

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

const heroVideo = `${import.meta.env.VITE_BASE_IMAGE_URL}contacto/contacto.mp4`

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

const baseInputCls =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm font-light text-slate-700 placeholder:text-slate-300 outline-none transition'
const inputOk =
  'border-slate-200 focus:border-primary-medium focus:ring-2 focus:ring-primary-medium/15'
const inputErr =
  'border-rose-300 bg-rose-50/30 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/40'

const inputClsFor = (err) => `${baseInputCls} ${err ? inputErr : inputOk}`

function Label({ children, optional }) {
  return (
    <span className="mb-2 block text-[12px] font-semibold text-slate-700">
      {children}{' '}
      {optional ? (
        <span className="font-light text-slate-400">(opcional)</span>
      ) : (
        <span className="text-primary-medium">*</span>
      )}
    </span>
  )
}

function FieldError({ msg }) {
  if (!msg) return null
  return (
    <span className="mt-1.5 flex items-center gap-1.5 text-[11.5px] font-light text-rose-500">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      {msg}
    </span>
  )
}

const MARQUEE_ITEMS = [
  'Atención Personalizada',
  'Respuesta Rápida',
  'Citas y Consultas',
  'Telemedicina',
  'Resultados en Línea',
  'Equipo Multidisciplinario',
  'Cobertura con EPS',
  'Acompañamiento Humano',
]

const initialForm = {
  nombre: '',
  telefono: '',
  email: '',
  motivo: '',
  especialidad: '',
  comentarios: '',
}

function CustomSelect({ name, value, onChange, onBlur, options, placeholder, error, ariaLabel }) {
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(-1)
  const ref = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
        onBlur && onBlur()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open, onBlur])

  useEffect(() => {
    if (open && value) {
      const idx = options.indexOf(value)
      setHighlight(idx >= 0 ? idx : 0)
    } else if (open) {
      setHighlight(0)
    }
  }, [open, value, options])

  const select = (opt) => {
    onChange({ target: { value: opt } })
    setOpen(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!open) {
        setOpen(true)
      } else if (highlight >= 0) {
        select(options[highlight])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) setOpen(true)
      else setHighlight((h) => Math.min(options.length - 1, h + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) setOpen(true)
      else setHighlight((h) => Math.max(0, h - 1))
    } else if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'Tab') {
      setOpen(false)
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        name={name}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        aria-invalid={!!error}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleKey}
        onBlur={() => { if (!open) onBlur && onBlur() }}
        className={`group flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm font-light transition outline-none ${error
            ? 'border-rose-300 bg-rose-50/30 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/40'
            : open
              ? 'border-primary-medium ring-2 ring-primary-medium/15'
              : 'border-slate-200 hover:border-slate-300 focus:border-primary-medium focus:ring-2 focus:ring-primary-medium/15'
          } ${value ? 'text-slate-700' : 'text-slate-400'}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-primary-medium' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 z-50 mt-2 max-h-64 overflow-auto rounded-2xl border border-slate-100 bg-white p-1.5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.25)]"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {options.map((opt, i) => {
              const isSelected = opt === value
              const isHighlight = i === highlight
              return (
                <li key={opt}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={() => select(opt)}
                    className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] font-light transition-colors ${isSelected
                        ? 'bg-primary-medium/10 text-primary-dark font-medium'
                        : isHighlight
                          ? 'bg-slate-50 text-slate-800'
                          : 'text-slate-600'
                      }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <Check className="h-4 w-4 text-primary-medium" />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

const validateForm = (f, accept) => {
  const errors = {}
  if (!f.nombre.trim() || f.nombre.trim().length < 3) {
    errors.nombre = 'Ingresa tu nombre completo (mínimo 3 caracteres).'
  } else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]+$/.test(f.nombre.trim())) {
    errors.nombre = 'Solo se permiten letras y espacios.'
  }
  const phoneDigits = f.telefono.replace(/\D/g, '')
  if (!phoneDigits) {
    errors.telefono = 'Ingresa un número de contacto.'
  } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.telefono = 'Debe tener entre 7 y 15 dígitos.'
  }
  if (!f.email.trim()) {
    errors.email = 'Ingresa tu correo electrónico.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) {
    errors.email = 'El formato del correo no es válido.'
  }
  if (!f.motivo) errors.motivo = 'Selecciona un motivo.'
  if (!f.especialidad) errors.especialidad = 'Selecciona una especialidad.'
  if (f.comentarios.length > 500) {
    errors.comentarios = 'Máximo 500 caracteres.'
  }
  if (!accept) errors.accept = 'Debes aceptar las condiciones para continuar.'
  return errors
}

export default function Contacto() {
  const [activeLocal, setActiveLocal] = useState(0)
  const [accept, setAccept] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const setField = (name) => (e) => {
    let value = e.target.value
    if (name === 'telefono') {
      value = value.replace(/[^\d\s+()-]/g, '').slice(0, 20)
    } else if (name === 'nombre') {
      value = value.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]/g, '')
    }
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name] || errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleBlur = (name) => () => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validateForm(form, accept)
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
  }

  const showError = (name) => (touched[name] && errors[name]) || undefined
  const isValid = Object.keys(validateForm(form, accept)).length === 0

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validateForm(form, accept)
    setErrors(validation)
    setTouched({
      nombre: true,
      telefono: true,
      email: true,
      motivo: true,
      especialidad: true,
      comentarios: true,
      accept: true,
    })
    if (Object.keys(validation).length > 0) {
      const firstKey = Object.keys(validation)[0]
      const el = document.querySelector(`[name="${firstKey}"]`)
      if (el && typeof el.focus === 'function') el.focus()
      return
    }
    try {
      setSubmitting(true)
      await new Promise((r) => setTimeout(r, 900))
      setSubmitted(true)
      setForm(initialForm)
      setAccept(false)
      setTouched({})
      setErrors({})
    } finally {
      setSubmitting(false)
    }
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
      <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-slate-900 pt-24 lg:pt-20">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/55 via-slate-950/30 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950/70 to-transparent" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              Contacto
            </p>
            <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Estamos para{' '}
              <span className="italic font-medium text-[rgb(var(--brand-base))]">
                ayudarte.
              </span>
            </h1>
            <p className="max-w-xl text-base font-light leading-relaxed text-slate-200 lg:text-[17px]">
              Déjanos tus datos y un asesor te responderá a la brevedad.
              También puedes contactarnos directamente por nuestros canales
              oficiales.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#formulario"
                className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 no-underline"
              >
                <span className="rounded-full bg-white px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  Escríbenos ahora
                </span>
                <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-white text-[rgb(var(--brand-dark))] transition-all duration-500 ease-in-out group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                  <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </a>

              <a
                href="https://wa.me/51922335134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white backdrop-blur-md transition hover:bg-white hover:text-[rgb(var(--brand-dark))]"
              >
                <MessageCircle className="h-4 w-4" />
                Consulta por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <HeroMarquee items={MARQUEE_ITEMS} />
      </section>

      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 lg:pt-20 pb-20 lg:pb-28">

        {/* FORM + CANALES */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] relative z-10">

          {/* FORM CARD */}
          <motion.form
            id="formulario"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_30px_70px_-30px_rgba(0,112,165,0.25)] lg:p-10"
            noValidate
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
              Escríbenos
            </p>
            <h2 className="mt-2 text-2xl font-light leading-tight text-primary-dark lg:text-3xl">
              Cuéntanos cómo podemos{' '}
              <span className="italic font-medium text-primary-medium">acompañarte</span>.
            </h2>

            {submitted && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <div className="text-[13px] leading-relaxed text-emerald-800">
                  <strong className="font-semibold">¡Gracias por escribirnos!</strong> Hemos
                  recibido tu mensaje. Un asesor se pondrá en contacto contigo dentro de las
                  próximas 24 horas hábiles.
                </div>
              </div>
            )}

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <Label>Nombre y apellidos</Label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={setField('nombre')}
                  onBlur={handleBlur('nombre')}
                  placeholder="Ej. María Pérez"
                  autoComplete="name"
                  maxLength={80}
                  aria-invalid={!!showError('nombre')}
                  className={inputClsFor(showError('nombre'))}
                />
                <FieldError msg={showError('nombre')} />
              </label>

              <label className="block">
                <Label>Teléfono</Label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={setField('telefono')}
                  onBlur={handleBlur('telefono')}
                  placeholder="Ej. 999 999 999"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  aria-invalid={!!showError('telefono')}
                  className={inputClsFor(showError('telefono'))}
                />
                <FieldError msg={showError('telefono')} />
              </label>

              <label className="block sm:col-span-2">
                <Label>Correo electrónico</Label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={setField('email')}
                  onBlur={handleBlur('email')}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={120}
                  aria-invalid={!!showError('email')}
                  className={inputClsFor(showError('email'))}
                />
                <FieldError msg={showError('email')} />
              </label>

              <div className="block">
                <Label>Motivo de consulta</Label>
                <CustomSelect
                  name="motivo"
                  value={form.motivo}
                  onChange={setField('motivo')}
                  onBlur={handleBlur('motivo')}
                  options={MOTIVOS}
                  placeholder="Selecciona un motivo…"
                  error={showError('motivo')}
                  ariaLabel="Motivo de consulta"
                />
                <FieldError msg={showError('motivo')} />
              </div>

              <div className="block">
                <Label>Especialidad de interés</Label>
                <CustomSelect
                  name="especialidad"
                  value={form.especialidad}
                  onChange={setField('especialidad')}
                  onBlur={handleBlur('especialidad')}
                  options={ESPECIALIDADES}
                  placeholder="Selecciona una especialidad…"
                  error={showError('especialidad')}
                  ariaLabel="Especialidad de interés"
                />
                <FieldError msg={showError('especialidad')} />
              </div>

              <label className="block sm:col-span-2">
                <Label optional>Comentarios adicionales</Label>
                <textarea
                  name="comentarios"
                  value={form.comentarios}
                  onChange={setField('comentarios')}
                  onBlur={handleBlur('comentarios')}
                  rows={4}
                  maxLength={500}
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                  aria-invalid={!!showError('comentarios')}
                  className={`${inputClsFor(showError('comentarios'))} resize-none`}
                />
                <div className="mt-1.5 flex items-center justify-between">
                  <FieldError msg={showError('comentarios')} />
                  <span className={`ml-auto text-[11px] font-light ${form.comentarios.length > 480 ? 'text-rose-500' : 'text-slate-400'}`}>
                    {form.comentarios.length}/500
                  </span>
                </div>
              </label>

              <div className="sm:col-span-2 mt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      name="accept"
                      checked={accept}
                      onChange={(e) => {
                        setAccept(e.target.checked)
                        if (e.target.checked) {
                          setErrors((p) => { const n = { ...p }; delete n.accept; return n })
                        }
                      }}
                      onBlur={() => setTouched((p) => ({ ...p, accept: true }))}
                      aria-invalid={!!(touched.accept && errors.accept)}
                      className="peer absolute inset-0 h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 bg-white transition-all checked:border-primary-medium checked:bg-primary-medium focus:ring-2 focus:ring-primary-medium/25 focus:outline-none"
                    />
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none relative z-10 h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 8l3.5 3.5L13 5" />
                    </svg>
                  </span>
                  <span className="flex-1 text-[12.5px] font-light leading-relaxed text-slate-500">
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
                <FieldError msg={touched.accept && errors.accept} />
              </div>

              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={submitting || !isValid}
                  aria-disabled={submitting || !isValid}
                  title={!isValid ? 'Completa todos los campos requeridos' : undefined}
                  className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
                >
                  <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-disabled:group-hover:bg-primary-dark">
                    {submitting ? 'Enviando…' : 'Enviar mensaje'}
                  </span>
                  <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-primary-dark text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-disabled:group-hover:bg-primary-dark">
                    {submitting ? (
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                        <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <>
                        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </motion.form>

          {/* CANALES — diseño simple y editorial */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
              Hablemos
            </p>
            <h3 className="mt-3 text-3xl font-light leading-tight text-primary-dark lg:text-4xl">
              Nos encantaría{' '}
              <span className="italic font-medium text-primary-medium">escucharte</span>.
            </h3>
            <p className="mt-4 text-[14px] font-light leading-relaxed text-slate-500">
              Estamos disponibles para resolver tus dudas y orientarte sobre nuestras
              especialidades, programas preventivos y servicios oncológicos.
            </p>

            <ul className="mt-10 space-y-7">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
                  <Phone className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-primary-dark">
                    Teléfono
                  </p>
                  <a
                    href="tel:+5112175100"
                    className="mt-1 block text-[13px] font-light text-slate-500 hover:text-primary-medium transition-colors"
                  >
                    (01) 217 5100
                  </a>
                  <a
                    href="https://wa.me/51922335134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] font-light text-slate-500 hover:text-primary-medium transition-colors"
                  >
                    +51 922 335 134 · WhatsApp
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
                  <Mail className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-primary-dark">
                    Correo electrónico
                  </p>
                  <a
                    href="mailto:citas@detecta.pe"
                    className="mt-1 block text-[13px] font-light text-slate-500 hover:text-primary-medium transition-colors"
                  >
                    citas@detecta.pe
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
                  <Clock className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-primary-dark">
                    Horario de atención
                  </p>
                  <p className="mt-1 text-[13px] font-light text-slate-500">
                    Lun – Vie · 7:00 a.m. – 8:00 p.m.
                  </p>
                  <p className="text-[13px] font-light text-slate-500">
                    Sábado · 8:00 a.m. – 2:00 p.m.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-medium text-white">
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-primary-dark">
                    Sede principal
                  </p>
                  <p className="mt-1 text-[13px] font-light text-slate-500">
                    Av. Angamos Este 2688, Surquillo, Lima
                  </p>
                </div>
              </li>
            </ul>

            {/* Síguenos */}
            <div className="mt-10 pt-7 border-t border-slate-200/70">
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-400">
                Síguenos
              </p>
              <div className="mt-3 flex gap-2">
                {SOCIALS.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition-all hover:bg-primary-medium hover:text-white hover:ring-primary-medium hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
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
