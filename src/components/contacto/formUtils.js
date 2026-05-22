export const baseInputCls =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm font-light text-slate-700 placeholder:text-slate-300 outline-none transition'

export const inputOk =
  'border-slate-200 focus:border-primary-medium focus:ring-2 focus:ring-primary-medium/15'

export const inputErr =
  'border-rose-300 bg-rose-50/30 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/40'

export const inputClsFor = (err) => `${baseInputCls} ${err ? inputErr : inputOk}`

export const validateForm = (f, accept) => {
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
