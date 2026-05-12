import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StackCard({ diff, index }) {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Configuración de la Ilusión de Pausa
  // 0.3 a 0.7 es el tiempo que la card se queda "pegada" y visible
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [150, 0, 0, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  
  // Efecto de sombra dinámica basado en el scroll
  const shadow = useTransform(
    scrollYProgress, 
    [0.2, 0.3, 0.7, 0.8], 
    ["0px 0px 0px rgba(0,0,0,0)", "0px 40px 80px rgba(10,42,63,0.15)", "0px 40px 80px rgba(10,42,63,0.15)", "0px 0px 0px rgba(0,0,0,0)"]
  );

  const Icon = diff.icon;

  return (
    <div
      ref={cardRef}
      className="relative h-[75vh] w-full flex items-start justify-center"
    >
      <div className="sticky top-[22vh] w-full max-w-2xl">
        <motion.article
          style={{ y, scale, opacity, boxShadow: shadow }}
          className="group relative w-full bg-white rounded-[24px] overflow-hidden border border-slate-50"
        >
          {/* Barra de acento superior con tu color primary */}
          <div className="h-1.5 w-full bg-primary" />

          <div className="p-6 lg:p-10 flex flex-col gap-5">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 rounded-full bg-primary-dark text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                {Icon && <Icon size={20} strokeWidth={1.5} />}
              </div>
              <span className="text-3xl font-light text-slate-100 tracking-tighter">
                0{index + 1}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl lg:text-4xl font-light text-primary-dark tracking-tighter leading-tight">
                {diff.title}
              </h3>
              <p className="text-slate-500 text-sm lg:text-base font-light leading-relaxed max-w-lg">
                {diff.desc}
              </p>
            </div>

            {/* Tags minimalistas */}
            <div className="flex flex-wrap gap-2 pt-2">
              {diff.tags?.map((tag) => (
                <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-slate-50 text-primary-medium rounded-full border border-slate-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}