import { motion } from 'framer-motion'
import heroVideo from '../../assets/medicinaoncologicahero.mp4'
import { fadeUp } from './data'
import CTAButton from './CTAButton'

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-slate-950 pb-20 pt-24 lg:items-center lg:pb-0 lg:pt-20">
      <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover opacity-55">
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Diagnóstico y{' '}
            <br />
            <span className="font-light text-[#52C0E1]">tratamiento integral.</span>
          </h1>

          <p className="max-w-lg text-base font-light leading-relaxed text-slate-300 sm:text-lg">
            Tecnología de vanguardia y calidez humana para acompañarte en cada etapa de tu recuperación.
          </p>

          <div className="pt-2">
            <CTAButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
