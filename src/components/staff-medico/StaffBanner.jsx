import { motion } from 'framer-motion'
import fondoBanner from '../../assets/staffBanner.jpg'

export default function StaffBanner() {
  return (
    <section className="relative overflow-hidden pt-32 pb-40 lg:pt-44 lg:pb-52">
      {/* Imagen + degradado innovador (misma paleta que DoctorDetail) */}
      <div className="absolute inset-0">
        <img
          src={fondoBanner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
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

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="mb-6 inline-flex items-center gap-2  px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-white">
            <span className="relative flex h-1.5 w-1.5">
            </span>
            Nuestro Staff
          </span>

          <h1 className="max-w-4xl text-5xl font-extralight leading-[1.02] tracking-tighter text-white drop-shadow-sm lg:text-7xl">
            Conocimiento, sensibilidad y{' '}
            <span className="italic font-medium text-[rgb(var(--brand-base))]">
              excelencia para tu bienestar
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-white/85 lg:text-lg">
            Un equipo multidisciplinario de médicos con trayectoria
            internacional, comprometidos con tu diagnóstico, tratamiento y
            recuperación.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
