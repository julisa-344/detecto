import { motion } from 'framer-motion'
import fondoBanner from '../../assets/staffBanner.jpg'

export default function StaffBanner() {
  return (
    <section className="relative overflow-hidden pt-32 pb-40 lg:pt-44 lg:pb-52">
      <div className="absolute inset-0">
        <img
          src={fondoBanner}
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[#021c5492]" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-transparent to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/90 mb-5">
            Nuestro Staff
          </p>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tighter text-white leading-[1.02] max-w-4xl drop-shadow-sm">
            Los mejores especialistas{' '}
            <span className="italic">contigo.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base lg:text-lg font-light text-white/85 leading-relaxed">
            Un equipo multidisciplinario de médicos con trayectoria internacional,
            comprometidos con tu diagnóstico, tratamiento y recuperación.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
