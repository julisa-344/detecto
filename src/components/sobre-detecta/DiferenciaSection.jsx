import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import StackCard from './StackCard';
import { DIFERENCIADORES } from './data';

export default function DiferenciaSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animación para el texto de fondo "DETECTA"
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.05, 0.03]);

  return (
    /* Fondo celeste bajo inspirado en image_9ecb40.png */
    <section ref={containerRef} className="relative bg-[#F0F7FA] text-slate-900 overflow-visible">
      
      {/* Texto de Fondo: DETECTA */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.h2 
          style={{ scale: textScale, opacity: textOpacity }}
          className="text-[18vw] font-black tracking-tighter uppercase leading-none text-primary-dark select-none whitespace-nowrap"
        >
          Detecta
        </motion.h2>
      </div>

      {/* Encabezado Editorial */}
      <div className="absolute top-0 left-0 w-full z-10 p-8 lg:p-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-primary-medium font-bold text-[10px] tracking-[0.5em] uppercase mb-4">
              Nuestros Pilares
            </p>
            <h2 className="text-5xl lg:text-7xl font-light tracking-tighter text-primary-dark leading-[0.95]">
              Una atención <br /> 
              <span className="italic  font-normal text-primary">pensada para ti.</span>
            </h2>

          </motion.div>
          
          <div className="hidden lg:block">
            <span className="text-[10px] font-bold text-primary-medium/40 uppercase tracking-[0.3em] vertical-text">
              Estándar Detecta — 2026
            </span>
          </div>
        </div>
      </div>

      {/* Stack de Cards */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 -mt-[15vh]">
        {DIFERENCIADORES.map((d, i) => (
          <StackCard
            key={i}
            diff={d}
            index={i}
          />
        ))}
      </div>

      <div className="h-[10vh]" />
    </section>
  );
}