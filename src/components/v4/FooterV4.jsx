import React from 'react';
import { motion } from 'framer-motion';
import logoColor from '../../assets/logo.png';
import { ArrowUpRight } from "lucide-react";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 001.38 2.13 5.86 5.86 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.21-.11.51-.11.81V19h-3V8h3v1.27c.4-.62 1.11-1.5 2.7-1.5 1.97 0 3.46 1.29 3.46 4.05V19z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
);

const socials = [
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { Icon: YoutubeIcon, label: 'YouTube', href: '#' },
];

export default function FooterV4() {
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
            Prevenir <br />
            <span className="font-normal text-slate-900">Es quererte.</span>
          </h2>
          <p className="text-base md:text-lg font-light text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Agenda tu chequeo preventivo y da el primer paso hacia una vida más tranquila.
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

                {/* Redes Sociales */}
                <div className="flex flex-col gap-3">
               
                  <div className="flex gap-3 items-center">
                    {socials.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="group w-11 h-11 rounded-full bg-white/50 flex items-center justify-center text-slate-600 border border-white/60 shadow-sm transition-all duration-300 hover:bg-[#0070A5] hover:text-white hover:border-[#0070A5] hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#0070A5]/20"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
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

