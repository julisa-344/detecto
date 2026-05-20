import { motion } from 'framer-motion'
import { Sparkles } from '../ui/sparkles'
import { ProgressiveBlur } from '../ui/progressive-blur'

import logo1 from '../../assets/logo1negro.webp'
import logo2 from '../../assets/logo2negro.webp'
import logo3 from '../../assets/logo3negro.webp'
import logo4 from '../../assets/logo4negro.webp'
import logo5 from '../../assets/logo5negro.webp'

const IMG_BASE = import.meta.env.VITE_BASE_IMAGE_URL

const aseguradoras = [logo1, logo2, logo3, logo4, logo5]
const proveedores = [
  `${IMG_BASE}home/proveedor1.png`,
  `${IMG_BASE}home/proveedor2.png`,
  `${IMG_BASE}home/proveedor3.png`,
  `${IMG_BASE}home/proveedor4.png`,
  `${IMG_BASE}home/proveedor5.png`,
  `${IMG_BASE}home/proveedor6.png`,
]

export default function PartnersV3() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-white pt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mb-14 w-full max-w-2xl px-6 text-center"
      >
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-primary-medium">
          Red de Confianza
        </p>

        <h2 className="text-4xl font-light leading-tight tracking-tighter text-primary-dark lg:text-5xl">
          Instituciones que <br />
          <span className="font-normal text-gray-900">respaldan tu salud.</span>
        </h2>
      </motion.div>

      {/* Bloque logos */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-5xl px-6"
      >
        <div className="relative overflow-hidden">
          {/* Fila superior - Aseguradoras */}
          <div className="relative h-[54px] overflow-hidden">
            <div
              className="flex h-full items-center gap-20"
              style={{
                width: 'max-content',
                animation: 'marquee-v3 32s linear infinite',
              }}
            >
              {[...aseguradoras, ...aseguradoras, ...aseguradoras, ...aseguradoras].map((logo, i) => (
                <img
                  key={`aseguradora-${i}`}
                  src={logo}
                  alt="Aseguradora"
                  className="h-9 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>

          {/* Título central */}
          <div className="relative z-10 my-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-slate-200 md:w-20" />
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-slate-400">
                Nuestros Proveedores
              </p>
            </div>
            <span className="h-px w-12 bg-slate-200 md:w-20" />
          </div>

          {/* Fila inferior - Proveedores */}
          <div className="relative h-[54px] overflow-hidden">
            <div
              className="flex h-full items-center gap-20"
              style={{
                width: 'max-content',
                animation: 'marquee-v3-reverse 36s linear infinite',
              }}
            >
              {[...proveedores, ...proveedores, ...proveedores, ...proveedores].map((logo, i) => (
                <img
                  key={`proveedor-${i}`}
                  src={logo}
                  alt="Proveedor estratégico"
                  className="h-9 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>

          {/* Blur progresivo */}
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[90px]"
            direction="left"
            blurIntensity={0.4}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[90px]"
            direction="right"
            blurIntensity={0.4}
          />

          {/* Limpieza de bordes */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </motion.div>

      {/* Sparkles */}
      <div className="relative h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at bottom center, #0199C655 0%, transparent 65%)',
          }}
        />

        <div className="absolute -left-1/2 top-1/2 z-10 aspect-[1/0.6] w-[200%] rounded-[100%] border-t border-[#C0DDE5]/40 bg-white" />

        <Sparkles
          density={1200}
          speed={1.5}
          color="#082f3a"
          opacity={0.9}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>

      <style>{`
        @keyframes marquee-v3 {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }

        @keyframes marquee-v3-reverse {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}