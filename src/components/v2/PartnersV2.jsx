import { useState } from 'react'
import { motion } from 'framer-motion'
import logo1 from '../../assets/logo1negro.webp'
import logo2 from '../../assets/logo2negro.webp'
import logo3 from '../../assets/logo3negro.webp'
import logo4 from '../../assets/logo4negro.webp'
import logo5 from '../../assets/logo5negro.webp'

const logos = [logo1, logo2, logo3, logo4, logo5]

export default function PartnersV3() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <p className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-16">
          Instituciones que confían en nosotros
        </p>

        {/* Contenedor del Marquee */}
        <div className="relative w-full">
          {/* Máscaras laterales suaves (menos agresivas) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Motion */}
          <div 
            className="flex items-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex gap-20 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{ animationPlayState: isHovered ? "paused" : "running" }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo}
                  alt="Partner"
                  className="h-10 w-auto object-contain flex-shrink-0"
                  // Logos visibles, pero con un toque elegante en reposo
                  initial={{ filter: "grayscale(30%)", opacity: 0.7 }}
                  whileHover={{ 
                    filter: "grayscale(0%)", 
                    opacity: 1,
                    scale: 1.05 
                  }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}