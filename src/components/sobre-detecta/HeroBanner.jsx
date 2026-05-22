import { motion } from 'framer-motion'
import clinicaBg from '../../assets/clinica.jpg'

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40 pb-24 lg:pb-32">
      <div className="absolute inset-0 z-0">
        <img
          src={clinicaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0A2A3F]/85 via-primary-dark/75 to-primary-medium/60" />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-sm backdrop-blur-md">
            Sobre Detecta
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-light tracking-tighter text-white leading-[1.02] max-w-4xl">
            Cuidamos lo que más importa:{' '}
            <span className="italic">tu salud.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base lg:text-lg font-light text-white/85 leading-relaxed">
            8 años acompañando a pacientes con atención médica especializada,
            Innovación Tecnológica y un equipo humano comprometido con tu bienestar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
