import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section className="relative w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-6"
      >
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-primary-medium md:text-[11px]">
          Compromiso
        </p>
        <h2 className="mb-6 text-4xl font-light leading-[1.05] tracking-tighter text-primary-dark md:text-6xl">
          Una clínica confiable se construye con <br />
          <span className="font-normal italic text-slate-900">
            principios claros y acciones consistentes.
          </span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-slate-500 md:text-lg">
          Detecta Clínica reafirma su compromiso con una atención íntegra,
          humana y profesional. La ética no es un discurso institucional: es
          una práctica diaria que protege a las personas y fortalece la
          calidad de nuestra atención.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="mailto:gestionetica@detecta.pe"
            className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
          >
            <span
              className="relative z-1 rounded-full bg-primary-dark/10 px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-primary-dark transition-all duration-500 ease-in-out group-hover:bg-primary-dark group-hover:text-white"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,112,165,0.25)',
              }}
            >
              IR AL CANAL DE ÉTICA
            </span>
            <div
              className="relative z-2 flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-primary-dark/15 text-primary-dark transition-all duration-500 ease-in-out group-hover:bg-primary-dark group-hover:text-white"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,112,165,0.25)',
              }}
            >
              <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </a>

          <a
            href="#documentos"
            className="inline-flex cursor-pointer items-center rounded-full border border-slate-200 bg-slate-50 px-10 py-4 text-sm font-medium tracking-wide text-slate-600 transition-all hover:bg-slate-100 active:scale-95"
          >
            Ver documentos
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
