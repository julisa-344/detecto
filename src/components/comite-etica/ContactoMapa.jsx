import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { Label, FieldError, CustomSelect, inputClsFor } from '../contacto'
import { contactoInfo } from './data'

const TIPOS_TRAMITE = [
  'Consulta general',
  'Sometimiento de protocolo',
  'Enmienda',
  'Reporte de seguridad',
  'Otro',
]

const MAP_EMBED =
  'https://www.google.com/maps?q=Av.+Angamos+Este+2688,+Surquillo,+Lima&output=embed'

const initialForm = {
  nombre: '',
  correo: '',
  tipo: '',
  mensaje: '',
}

const validateForm = (f) => {
  const errors = {}
  if (!f.nombre.trim() || f.nombre.trim().length < 3) {
    errors.nombre = 'Ingresa tu nombre completo (mínimo 3 caracteres).'
  } else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]+$/.test(f.nombre.trim())) {
    errors.nombre = 'Solo se permiten letras y espacios.'
  }
  if (!f.correo.trim()) {
    errors.correo = 'Ingresa tu correo electrónico.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.correo.trim())) {
    errors.correo = 'El formato del correo no es válido.'
  }
  if (!f.tipo) errors.tipo = 'Selecciona un tipo de trámite.'
  if (!f.mensaje.trim() || f.mensaje.trim().length < 10) {
    errors.mensaje = 'Cuéntanos brevemente tu consulta (mínimo 10 caracteres).'
  } else if (f.mensaje.length > 500) {
    errors.mensaje = 'Máximo 500 caracteres.'
  }
  return errors
}

export default function ContactoMapa() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const setField = (name) => (e) => {
    let value = e.target.value
    if (name === 'nombre') {
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
    const fieldErrors = validateForm(form)
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
  }

  const showError = (name) => (touched[name] && errors[name]) || undefined
  const isValid = Object.keys(validateForm(form)).length === 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validateForm(form)
    setErrors(validation)
    setTouched({ nombre: true, correo: true, tipo: true, mensaje: true })
    if (Object.keys(validation).length > 0) {
      const firstKey = Object.keys(validation)[0]
      const el = document.querySelector(`[name="${firstKey}"]`)
      if (el && typeof el.focus === 'function') el.focus()
      return
    }
    try {
      setSubmitting(true)
      const subject = encodeURIComponent(`[CIEI] ${form.tipo} — ${form.nombre}`)
      const body = encodeURIComponent(
        `Nombre: ${form.nombre}\nCorreo: ${form.correo}\nTipo de trámite: ${form.tipo}\n\n${form.mensaje}`
      )
      await new Promise((r) => setTimeout(r, 600))
      window.location.href = `mailto:comitedeetica@detecta.pe?subject=${subject}&body=${body}`
      setSubmitted(true)
      setForm(initialForm)
      setTouched({})
      setErrors({})
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="escribenos-comite" className="relative scroll-mt-24">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Contacto</SectionEyebrow>
        <SectionTitle className="mb-3">
          Escríbenos al{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            comité
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Estamos disponibles para resolver tus dudas y acompañarte en el
          proceso de sometimiento de protocolos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Mapa + info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <div className="relative min-h-90 flex-1 overflow-hidden rounded-3xl border border-slate-100 shadow-[0_25px_55px_-30px_rgba(0,112,165,0.2)]">
            <iframe
              title="Ubicación Detecta Clínica"
              src={MAP_EMBED}
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {contactoInfo.map((c) => {
              const Icon = c.icon
              const Wrapper = c.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className={`group flex flex-col gap-2 rounded-3xl border border-slate-100 bg-white p-5 transition-all ${
                    c.href
                      ? 'cursor-pointer hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)]'
                      : ''
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {c.label}
                  </p>
                  <p className="text-[13px] font-medium leading-tight text-[rgb(var(--brand-dark))]">
                    {c.value}
                  </p>
                </Wrapper>
              )
            })}
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_30px_70px_-30px_rgba(0,112,165,0.25)] lg:p-9"
          noValidate
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
            Formulario de contacto
          </p>
          <h3 className="mt-2 text-2xl font-light leading-tight text-primary-dark lg:text-[26px]">
            Envíanos tu{' '}
            <span className="italic font-medium text-primary-medium">consulta</span>.
          </h3>

          {submitted && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              <div className="text-[13px] leading-relaxed text-emerald-800">
                <strong className="font-semibold">¡Gracias!</strong> Se abrió tu cliente
                de correo para completar el envío al comité.
              </div>
            </div>
          )}

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <Label>Nombre completo</Label>
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
              <Label>Correo electrónico</Label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={setField('correo')}
                onBlur={handleBlur('correo')}
                placeholder="tu@correo.com"
                autoComplete="email"
                inputMode="email"
                maxLength={120}
                aria-invalid={!!showError('correo')}
                className={inputClsFor(showError('correo'))}
              />
              <FieldError msg={showError('correo')} />
            </label>

            <div className="block sm:col-span-2">
              <Label>Tipo de trámite</Label>
              <CustomSelect
                name="tipo"
                value={form.tipo}
                onChange={setField('tipo')}
                onBlur={handleBlur('tipo')}
                options={TIPOS_TRAMITE}
                placeholder="Selecciona un tipo…"
                error={showError('tipo')}
                ariaLabel="Tipo de trámite"
              />
              <FieldError msg={showError('tipo')} />
            </div>

            <label className="block sm:col-span-2">
              <Label>Mensaje</Label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={setField('mensaje')}
                onBlur={handleBlur('mensaje')}
                rows={5}
                maxLength={500}
                placeholder="Escribe tu consulta..."
                aria-invalid={!!showError('mensaje')}
                className={`${inputClsFor(showError('mensaje'))} resize-none`}
              />

            </label>

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                disabled={submitting || !isValid}
                aria-disabled={submitting || !isValid}
                title={!isValid ? 'Completa todos los campos requeridos' : undefined}
                className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-disabled:group-hover:bg-primary-dark">
                  {submitting ? 'Enviando…' : 'Enviar consulta'}
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
      </div>
    </section>
  )
}
