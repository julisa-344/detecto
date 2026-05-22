import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Label from './Label'
import FieldError from './FieldError'
import CustomSelect from './CustomSelect'
import { inputClsFor, validateForm } from './formUtils'
import { ESPECIALIDADES, MOTIVOS, initialForm } from './data'

export default function ContactoForm() {
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
  )
}
