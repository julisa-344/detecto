"use client"

import { Sparkles } from "@/components/ui/sparkles"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import logo1 from '../../assets/logo1.webp'
import logo2 from '../../assets/logo2.webp'
import logo3 from '../../assets/logo3.webp'
import logo4 from '../../assets/logo4.webp'
import logo5 from '../../assets/logo5.webp'

const logos = [
  { id: 1, src: logo1, alt: "Logo 1" },
  { id: 2, src: logo2, alt: "Logo 2" },
  { id: 3, src: logo3, alt: "Logo 3" },
  { id: 4, src: logo4, alt: "Logo 4" },
  { id: 5, src: logo5, alt: "Logo 5" },
]

export default function PartnersV3() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center">
      
      {/* Header de Sección Centrado */}
      <div className="relative z-20 max-w-2xl w-full text-center px-6 mb-16">
        <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-primary-medium mb-4">
          Red de Confianza
        </p>
        <h2 className="text-4xl lg:text-5xl font-light text-primary-dark tracking-tighter leading-tight uppercase">
          Instituciones que <br /> 
          <span className="font-normal italic text-gray-900">respaldan tu salud.</span>
        </h2>
      </div>

      {/* Slider Infinito de Logos */}
      <div className="relative z-20 w-full max-w-5xl px-6">
        <div className="relative h-[200px] w-full flex items-center overflow-hidden">
          <InfiniteSlider duration={35} gap={120} className="flex items-center">
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center h-40 px-4">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                  style={{ filter: 'invert(1) grayscale(1) brightness(0.3)', opacity: 0.5 }}
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* Blur progresivo en los bordes */}
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 left-0 h-[200px] w-[150px] z-10'
            direction='left'
            blurIntensity={1.5}
          />
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 right-0 h-[200px] w-[150px] z-10'
            direction='right'
            blurIntensity={1.5}
          />
        </div>
      </div>

      {/* Efecto Sparkles Atmosférico (Bottom Glow) */}
      <div className="relative w-full h-64 -mt-20 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] pointer-events-none">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--gradient-color),transparent_70%)] before:opacity-20" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.6] z-10 w-[200%] rounded-[100%] border-t border-[#C0DDE5]/20 bg-white" />
        <Sparkles
          density={800}
          speed={1.5}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#0199C6"
        />
      </div>
    </section>
  )
}
