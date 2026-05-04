import { motion } from 'framer-motion'
import logo1 from '../../assets/logo1negro.webp'
import logo2 from '../../assets/logo2negro.webp'
import logo3 from '../../assets/logo3negro.webp'
import logo4 from '../../assets/logo4negro.webp'
import logo5 from '../../assets/logo5negro.webp'

const logos = [logo1, logo2, logo3, logo4, logo5]

export default function PartnersV2() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-300 mb-12"
        >
          Respaldados por instituciones líderes
        </motion.p>

        {/* Marquee de logos */}
        <div className="relative">
          {/* Máscara izquierda */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          {/* Máscara derecha */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 items-center animate-[marquee_25s_linear_infinite]" style={{ width: 'max-content' }}>
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Partner"
                className="h-8 w-auto object-contain transition-all duration-300"
                style={{ opacity: 0.6 }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.6' }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
