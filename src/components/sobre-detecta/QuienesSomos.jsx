import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import equipoImg from '../../assets/about.jpg'
import { QUIENES_SOMOS_PARAGRAPHS } from './data'

// Renderiza párrafos con **bold** simple (sin librerías markdown)
function RichParagraph({ children }) {
  const parts = children.split(/(\*\*[^*]+\*\*)/g)
  return (
    <p>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-medium text-slate-800">
            {p.slice(2, -2)}
          </strong>
        ) : (
          p
        )
      )}
    </p>
  )
}

export default function QuienesSomos() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] shadow-[0_30px_60px_-20px_rgba(0,112,165,0.35)]">
              <img
                src={equipoImg}
                alt="Equipo médico de Detecta Clínica"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary-medium mb-4">
              ¿Quiénes somos?
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tighter leading-[1.05]">
              Experiencia y dedicación en{' '}
              <span className=" text-primary-dark">
                atención especializada.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base font-light text-slate-600 leading-relaxed max-w-xl">
              {QUIENES_SOMOS_PARAGRAPHS.map((text, i) => (
                <RichParagraph key={i}>{text}</RichParagraph>
              ))}
            </div>

            <Link
              to="/v4/staff-medico"
              className="group mt-10 inline-flex items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
            >
              <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-primary-dark group-hover:bg-slate-900">
                CONOCE A NUESTRO STAFF MÉDICO
              </span>
              <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-primary-dark text-white group-hover:bg-slate-900">
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
