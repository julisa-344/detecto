import { useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { LOCALES } from './data'

export default function UbicacionMapa() {
  const [activeLocal, setActiveLocal] = useState(0)

  return (
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
  )
}
