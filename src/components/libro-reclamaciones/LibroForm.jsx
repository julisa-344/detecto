import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Info } from 'lucide-react'
import { Label, FieldError, CustomSelect, inputClsFor } from '../contacto'
import { TIPOS_DOCUMENTO, SERVICIOS, TIPOS_REGISTRO, initialForm } from './data'

const validateForm = (f, accept) => {
  const errors = {}
  if (!f.tipoDocumento) errors.tipoDocumento = 'Selecciona un tipo de documento.'

  const docDigits = f.numDocumento.replace(/\s/g, '')
  if (!docDigits) {
    errors.numDocumento = 'Ingresa tu número de documento.'
  } else if (docDigits.length < 6 || docDigits.length > 15) {
    errors.numDocumento = 'Debe tener entre 6 y 15 caracteres.'
  }

  if (!f.nombre.trim() || f.nombre.trim().length < 3) {
    errors.nombre = 'Ingresa tu nombre completo (mínimo 3 caracteres).'
  } else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]+$/.test(f.nombre.trim())) {
    errors.nombre = 'Solo se permiten letras y espacios.'
  }

  if (!f.email.trim()) {
    errors.email = 'Ingresa tu correo electrónico.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) {
    errors.email = 'El formato del correo no es válido.'
  }

  const phoneDigits = f.telefono.replace(/\D/g, '')
  if (!phoneDigits) {
    errors.telefono = 'Ingresa un número de contacto.'
  } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.telefono = 'Debe tener entre 7 y 15 dígitos.'
  }

  if (!f.direccion.trim() || f.direccion.trim().length < 5) {
    errors.direccion = 'Ingresa una dirección válida.'
  }

  if (!f.tipo) errors.tipo = 'Selecciona si es reclamo o queja.'
  if (!f.servicio) errors.servicio = 'Selecciona el servicio asociado.'

  if (!f.detalle.trim() || f.detalle.trim().length < 20) {
    errors.detalle = 'Describe los hechos (mínimo 20 caracteres).'
  } else if (f.detalle.length > 1000) {
    errors.detalle = 'Máximo 1000 caracteres.'
  }

  if (!accept) errors.accept = 'Debes aceptar los términos y condiciones.'

  return errors
}

export default function LibroForm() {
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
    } else if (name === 'numDocumento') {
      value = value.replace(/[^A-Za-z0-9-]/g, '').slice(0, 15)
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
      tipoDocumento: true,
      numDocumento: true,
      nombre: true,
      email: true,
      telefono: true,
      direccion: true,
      tipo: true,
      servicio: true,
      detalle: true,
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
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_30px_70px_-30px_rgba(0,112,165,0.25)] lg:p-10"
      noValidate
    >
      {submitted && (
        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
          <div className="text-[13px] leading-relaxed text-emerald-800">
            <strong className="font-semibold">¡Registro recibido!</strong> Tu
            {' '}reclamo o queja ha sido registrado. Recibirás una respuesta al
            correo indicado en un plazo máximo de 30 días calendario.
          </div>
        </div>
      )}

      {/* Bloque 1: Identificación */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
          Sección 01
        </p>
        <h2 className="mt-2 text-2xl font-light leading-tight text-primary-dark lg:text-3xl">
          Identificación del{' '}
          <span className="italic font-medium text-primary-medium">reclamante</span>
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="block">
            <Label>Tipo de documento</Label>
            <CustomSelect
              name="tipoDocumento"
              value={form.tipoDocumento}
              onChange={setField('tipoDocumento')}
              onBlur={handleBlur('tipoDocumento')}
              options={TIPOS_DOCUMENTO}
              placeholder="Seleccionar"
              error={showError('tipoDocumento')}
              ariaLabel="Tipo de documento"
            />
            <FieldError msg={showError('tipoDocumento')} />
          </div>

          <label className="block">
            <Label>N.º de documento</Label>
            <input
              type="text"
              name="numDocumento"
              value={form.numDocumento}
              onChange={setField('numDocumento')}
              onBlur={handleBlur('numDocumento')}
              placeholder="Ej. 12345678"
              autoComplete="off"
              inputMode="numeric"
              maxLength={15}
              aria-invalid={!!showError('numDocumento')}
              className={inputClsFor(showError('numDocumento'))}
            />
            <FieldError msg={showError('numDocumento')} />
          </label>

          <label className="block sm:col-span-2">
            <Label>Nombre completo</Label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={setField('nombre')}
              onBlur={handleBlur('nombre')}
              placeholder="Nombres y apellidos"
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
              name="email"
              value={form.email}
              onChange={setField('email')}
              onBlur={handleBlur('email')}
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              inputMode="email"
              maxLength={120}
              aria-invalid={!!showError('email')}
              className={inputClsFor(showError('email'))}
            />
            <FieldError msg={showError('email')} />
          </label>

          <label className="block">
            <Label>Teléfono / Celular</Label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={setField('telefono')}
              onBlur={handleBlur('telefono')}
              placeholder="+51 9xx xxx xxx"
              autoComplete="tel"
              inputMode="tel"
              maxLength={20}
              aria-invalid={!!showError('telefono')}
              className={inputClsFor(showError('telefono'))}
            />
            <FieldError msg={showError('telefono')} />
          </label>

          <label className="block sm:col-span-2">
            <Label>Dirección</Label>
            <input
              type="text"
              name="direccion"
              value={form.direccion}
              onChange={setField('direccion')}
              onBlur={handleBlur('direccion')}
              placeholder="Av. / Calle, distrito, provincia"
              autoComplete="street-address"
              maxLength={160}
              aria-invalid={!!showError('direccion')}
              className={inputClsFor(showError('direccion'))}
            />
            <FieldError msg={showError('direccion')} />
          </label>
        </div>
      </div>

      <div className="my-10 h-px bg-slate-100" />

      {/* Bloque 2: Servicio y tipo */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
          Sección 02
        </p>
        <h2 className="mt-2 text-2xl font-light leading-tight text-primary-dark lg:text-3xl">
          Servicio y tipo de{' '}
          <span className="italic font-medium text-primary-medium">registro</span>
        </h2>

        <div className="mt-8 space-y-5">
          {/* Tipo: Reclamo / Queja */}
          <div>
            <Label>Tipo de registro</Label>
            <div className="grid gap-3 sm:grid-cols-2">
              {TIPOS_REGISTRO.map((t) => {
                const isActive = form.tipo === t.value
                return (
                  <label
                    key={t.value}
                    className={`group relative flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all ${
                      isActive
                        ? 'border-primary-medium bg-primary-medium/5 shadow-[0_10px_28px_-18px_rgba(0,112,165,0.35)]'
                        : 'border-slate-200 bg-white hover:border-primary-medium/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tipo"
                      value={t.value}
                      checked={isActive}
                      onChange={setField('tipo')}
                      onBlur={handleBlur('tipo')}
                      className="sr-only"
                    />
                    <span
                      className={`relative mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                        isActive ? 'border-primary-medium' : 'border-slate-300'
                      }`}
                    >
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-primary-medium" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-primary-dark">
                        {t.label}
                      </span>
                      <span className="mt-1 block text-[12px] font-light leading-relaxed text-slate-500">
                        {t.description}
                      </span>
                    </span>
                  </label>
                )
              })}
            </div>
            <FieldError msg={showError('tipo')} />
          </div>

          <div className="block">
            <Label>Servicio asociado</Label>
            <CustomSelect
              name="servicio"
              value={form.servicio}
              onChange={setField('servicio')}
              onBlur={handleBlur('servicio')}
              options={SERVICIOS}
              placeholder="Seleccionar servicio"
              error={showError('servicio')}
              ariaLabel="Servicio asociado"
            />
            <FieldError msg={showError('servicio')} />
          </div>
        </div>
      </div>

      <div className="my-10 h-px bg-slate-100" />

      {/* Bloque 3: Detalle */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary-medium">
          Sección 03
        </p>
        <h2 className="mt-2 text-2xl font-light leading-tight text-primary-dark lg:text-3xl">
          Detalle del{' '}
          <span className="italic font-medium text-primary-medium">reclamo o queja</span>
        </h2>

        <label className="mt-8 block">
          <Label>Describe los hechos</Label>
          <textarea
            name="detalle"
            value={form.detalle}
            onChange={setField('detalle')}
            onBlur={handleBlur('detalle')}
            rows={6}
            maxLength={1000}
            placeholder="Describe los hechos con el mayor detalle posible..."
            aria-invalid={!!showError('detalle')}
            className={`${inputClsFor(showError('detalle'))} resize-none`}
          />
          <div className="mt-1.5 flex items-center justify-between">
            <FieldError msg={showError('detalle')} />
            <span
              className={`ml-auto text-[11px] font-light ${
                form.detalle.length > 950 ? 'text-rose-500' : 'text-slate-400'
              }`}
            >
              {form.detalle.length}/1000
            </span>
          </div>
        </label>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary-medium" />
          <p className="text-[12.5px] font-light leading-relaxed text-slate-600">
            La respuesta será brindada por comunicación electrónica al correo
            registrado en un plazo máximo de <strong className="font-semibold text-primary-dark">30 días calendario</strong>.
          </p>
        </div>

        <div className="mt-6">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center mt-0.5">
              <input
                type="checkbox"
                name="accept"
                checked={accept}
                onChange={(e) => {
                  setAccept(e.target.checked)
                  if (e.target.checked) {
                    setErrors((p) => {
                      const n = { ...p }
                      delete n.accept
                      return n
                    })
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
              Declaro ser titular del contenido del presente formulario y acepto los{' '}
              <Link
                to="/v4/terminos-y-condiciones#proteccion-datos"
                className="font-medium text-primary-dark underline-offset-4 hover:underline"
              >
                Términos y Condiciones
              </Link>.
            </span>
          </label>
          <FieldError msg={touched.accept && errors.accept} />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={submitting || !isValid}
            aria-disabled={submitting || !isValid}
            title={!isValid ? 'Completa todos los campos requeridos' : undefined}
            className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            <span className="rounded-full bg-primary-dark px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-500 ease-in-out group-hover:bg-slate-900 group-disabled:group-hover:bg-primary-dark">
              {submitting ? 'Enviando…' : 'Registrar reclamo'}
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
