import React from 'react';
import { motion } from 'framer-motion';
import logoColor from '../../assets/logo.png';
import { ArrowUpRight } from "lucide-react";

export default function FooterV3() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ fontFamily: 'Lexend, sans-serif' }}>

      {/* --- 1. CTA SUPERIOR: fondo blanco full-width con arco inferior --- */}
      <div className="relative w-full bg-white pb-0 text-center">

        {/* Contenido centrado */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 px-6 pb-24"
        >
          <h2 className="text-4xl md:text-7xl font-light text-[#0070A5] mb-8 tracking-tighter leading-none uppercase">
            Toma el control de <br />
            <span className="font-normal text-slate-900">tu salud hoy mismo.</span>
          </h2>
          <p className="text-base md:text-lg font-light text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Diagnósticos de precisión con tecnología de última generación y el respaldo de los mejores especialistas del país.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
              <span
                className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-[#0070A5] transition-all duration-500 ease-in-out bg-[#0070A5]/10 group-hover:bg-[#0070A5] group-hover:text-white"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,112,165,0.25)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                RESERVA TU CITA
              </span>
              <div
                className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-[#0070A5]/15 text-[#0070A5] group-hover:bg-[#0070A5] group-hover:text-white"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,112,165,0.25)',
                  zIndex: 2,
                }}
              >
                <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </button>

            <button className="px-10 py-4 bg-slate-50 text-slate-600 border border-slate-200 font-medium rounded-full hover:bg-slate-100 transition-all active:scale-95 text-sm tracking-wide">
              Hablar con un asesor
            </button>
          </motion.div>
        </motion.div>

        {/* Arco SVG que curva hacia el fondo de gradiente */}
        <div className="relative w-full overflow-hidden leading-none" style={{ height: '80px' }}>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full"
          >
            <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#EEFBFF" />
          </svg>
        </div>
      </div>

      {/* --- 2. SECCIÓN INFERIOR: gradiente + nav glass --- */}
      <div className="relative w-full bg-gradient-to-br from-[#EEFBFF] to-[#AFEAFC] px-6 lg:px-10 pb-24">

        {/* Brillo ambiental */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 blur-[150px] rounded-full -mr-60 -mt-60 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 pt-10">

        {/* --- 3. CONTENEDOR NAV: Glass Exacto del Header V3 --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[56px] shadow-2xl shadow-blue-900/5 overflow-hidden transition-all duration-500"
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <div className="px-8 md:px-16 pt-20 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

              {/* Brand Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-4 flex flex-col gap-10"
              >
                <img src={logoColor} alt="Detecta Clínica" className="h-12 w-auto object-contain self-start" />
                <p className="text-[14px] font-light text-slate-600 leading-relaxed max-w-[280px]">
                  Líderes en detección temprana e innovación oncológica en el Perú. Tecnología que salva vidas.
                </p>

                {/* Redes Sociales con texto simple */}
                <div className="flex gap-4 items-center">
                  <a href="#" className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center hover:bg-[#0070A5] hover:text-white transition-all text-slate-600 shadow-sm border border-white/50">
                    <span className="text-xs font-bold">F</span>
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center hover:bg-[#0070A5] hover:text-white transition-all text-slate-600 shadow-sm border border-white/50">
                    <span className="text-xs font-bold">L</span>
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center hover:bg-[#0070A5] hover:text-white transition-all text-slate-600 shadow-sm border border-white/50">
                    <span className="text-xs font-bold">I</span>
                  </a>
                </div>
              </motion.div>

              {/* Links Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12"
              >
                <div className="flex flex-col gap-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0070A5]">Servicios</h3>
                  <ul className="flex flex-col gap-4 text-[13px] font-light text-slate-600">
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Diagnóstico Precisión</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Oncología</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Select Staff</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Telemedicina</a></li>
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0070A5]">Nosotros</h3>
                  <ul className="flex flex-col gap-4 text-[13px] font-light text-slate-600">
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Sobre Detecta</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Investigación</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Sostenibilidad</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Trabaja con nosotros</a></li>
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0070A5]">Legal</h3>
                  <ul className="flex flex-col gap-4 text-[13px] font-light text-slate-600">
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Privacidad</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Ética</a></li>
                    <li><a href="#" className="hover:text-[#0199C6] transition-colors">Libro de Reclamaciones</a></li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Barra Inferior Final */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-900/5 pt-12 gap-8 text-[10px] font-medium text-slate-400 tracking-[0.2em] uppercase">
              <p>© {new Date().getFullYear()} DETECTA CLÍNICA — Precision Medicine.</p>
              <div className="flex gap-10 items-center">
                <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Políticas</a>
                <div className="flex gap-3 ml-4">
                  <div className="w-1.5 h-1.5 bg-[#0070A5] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  );
}

