import { motion } from 'framer-motion'
import { Sparkles } from '../ui/sparkles'
import { ProgressiveBlur } from '../ui/progressive-blur'
import logo1 from '../../assets/logo1negro.webp'
import logo2 from '../../assets/logo2negro.webp'
import logo3 from '../../assets/logo3negro.webp'
import logo4 from '../../assets/logo4negro.webp'
import logo5 from '../../assets/logo5negro.webp'

const logos = [logo1, logo2, logo3, logo4, logo5]

export default function PartnersV3() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center pt-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-2xl w-full text-center px-6 mb-16"
      >
        <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-primary-medium mb-4">
          Red de Confianza
        </p>
        <h2 className="text-4xl lg:text-5xl font-light text-primary-dark tracking-tighter leading-tight">
          Instituciones que <br />
          <span className="font-normal text-gray-900">respaldan tu salud.</span>
        </h2>
      </motion.div>

      {/* Marquee con blur progresivo en bordes */}
      <div className="relative z-20 w-full max-w-5xl h-[100px] overflow-hidden">
        {/* Logos animados */}
        <div
          className="flex items-center gap-20 h-full"
          style={{
            width: 'max-content',
            animation: 'marquee-v3 30s linear infinite',
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Partner"
              className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>

        {/* Blur progresivo — izquierda */}
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[80px]"
          direction="left"
          blurIntensity={0.4}
        />
        {/* Blur progresivo — derecha */}
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[80px]"
          direction="right"
          blurIntensity={0.4}
        />
      </div>

      {/* Sparkles — más espacio y más densidad */}
      <div className="relative w-full h-96 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] pointer-events-none">
        {/* Glow radial */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at bottom center, #0199C655 0%, transparent 65%)',
          }}
        />
        {/* Arco blanco curvo */}
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.6] z-10 w-[200%] rounded-[100%] border-t border-[#C0DDE5]/40 bg-white" />
        {/* Partículas */}
        <Sparkles
          density={1200}
          speed={1.5}
          color="#0199C6"
          opacity={0.8}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>

      <style>{`
        @keyframes marquee-v3 {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}
