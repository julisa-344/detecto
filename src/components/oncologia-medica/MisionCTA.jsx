import { motion } from 'framer-motion'
import heroFoto from '../../assets/bannerOncologia.jpg'
import SectionEyebrow from './SectionEyebrow'
import CTAButton from './CTAButton'
import { fadeUp } from './data'

export default function MisionCTA() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative -mx-6 overflow-hidden rounded-none sm:mx-0 sm:rounded-[32px]"
    >
      <div className="relative isolate min-h-[460px] overflow-hidden bg-slate-900 sm:rounded-[32px]">

        {/* Imagen con mayor opacidad para que se vea más clara */}
        <img
          src={heroFoto}
          alt="Misión de la oncología médica"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        {/* Overlay principal más transparente (bajé de /45 y /25 a /30 y /15) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003F5C]/30 via-[#0070A5]/15 to-transparent" />
        
        {/* Gradiente inferior más sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

        {/* Círculo de luz decorativo con opacidad reducida */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#52C0E1]/20 to-transparent blur-3xl"
        />

        <div className="relative z-10 flex min-h-[460px] flex-col justify-between p-8 sm:p-12 lg:p-14">
          <SectionEyebrow light>Nuestro compromiso</SectionEyebrow>

          <div className="max-w-xl">
            <h3 className="text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-5xl">
              Tu salud,<br />
              <span className="italic font-light text-[#52C0E1]">nuestra misión.</span>
            </h3>

            <p className="mt-5 max-w-md text-[14px] font-light leading-7 text-white/90 sm:text-[15px]">
              Combinamos ciencia, tecnología y humanidad para acompañarte en cada etapa del
              tratamiento oncológico. Da el primer paso hacia tu recuperación hoy mismo.
            </p>

            <div className="mt-8">
              <CTAButton label="AGENDAR CITA" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}