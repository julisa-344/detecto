import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { contactoInfo } from './data'

const TIPOS_TRAMITE = [
  'Consulta general',
  'Sometimiento de protocolo',
  'Enmienda',
  'Reporte de seguridad',
  'Otro',
]

export default function ContactoMapa() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    tipo: TIPOS_TRAMITE[0],
    mensaje: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[CIEI] ${form.tipo} — ${form.nombre}`)
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nCorreo: ${form.correo}\nTipo de trámite: ${form.tipo}\n\n${form.mensaje}`
    )
    window.location.href = `mailto:comitedeetica@detecta.pe?subject=${subject}&body=${body}`
  }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section className="relative">
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
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-slate-100 bg-slate-100">
            <iframe
              title="Ubicación Detecta Clínica"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-77.045%2C-12.115%2C-77.025%2C-12.095&layer=mapnik"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
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
          className="relative flex flex-col gap-4 rounded-4xl border border-slate-100 bg-white p-7 lg:p-9"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--brand-base))]">
            Formulario de contacto
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nombre completo" required>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={set('nombre')}
                className="form-input"
              />
            </Field>
            <Field label="Correo electrónico" required>
              <input
                type="email"
                required
                value={form.correo}
                onChange={set('correo')}
                className="form-input"
              />
            </Field>
          </div>

          <Field label="Tipo de trámite">
            <select value={form.tipo} onChange={set('tipo')} className="form-input cursor-pointer">
              {TIPOS_TRAMITE.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>

          <Field label="Mensaje">
            <textarea
              rows={5}
              required
              value={form.mensaje}
              onChange={set('mensaje')}
              placeholder="Escribe tu mensaje..."
              className="form-input resize-none"
            />
          </Field>

          <button
            type="submit"
            className="group mt-2 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[rgb(var(--brand-base))] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[rgb(var(--brand-dark))] active:scale-95"
          >
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            Enviar consulta
          </button>

          <p className="text-[11px] font-light text-slate-400">
            Se abrirá tu cliente de correo para completar el envío.
          </p>

          <style>{`
            .form-input {
              width: 100%;
              border: 1px solid rgb(226 232 240);
              background: white;
              border-radius: 0.875rem;
              padding: 0.75rem 1rem;
              font-size: 14px;
              color: rgb(15 23 42);
              transition: border-color .2s, box-shadow .2s;
              outline: none;
            }
            .form-input:focus {
              border-color: rgb(var(--brand-base));
              box-shadow: 0 0 0 4px rgb(var(--brand-base) / 0.12);
            }
            .form-input::placeholder { color: rgb(148 163 184); }
          `}</style>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
        {required && <span className="ml-1 text-[rgb(var(--brand-base))]">*</span>}
      </span>
      {children}
    </label>
  )
}
