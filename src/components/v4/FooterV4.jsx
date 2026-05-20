import React from 'react';
import { motion } from 'framer-motion';
import logoColor from '../../assets/logo.png';
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";

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

export default function FooterV4({ showCTA = true }) {
  return (
    <footer className="relative w-full overflow-hidden" style={{ fontFamily: 'Lexend, sans-serif' }}>

      {/* --- 1. CTA SUPERIOR: fondo blanco full-width con arco inferior --- */}
      {showCTA && (
      <div className="relative w-full bg-white pb-0 text-center">

        {/* Contenido centrado */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 px-6 pb-24"
        >
          <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.4em] uppercase text-primary-medium mb-5">
            Por eso no estás solo
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-[#0070A5] mb-6 tracking-tighter leading-[1.05]">
            Da el primer paso hacia un <br />
            <span className="font-normal italic text-slate-900">diagnóstico certero.</span>
          </h2>
          <p className="text-base md:text-lg font-light text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Agenda una cita con nuestros médicos y recibe un tratamiento preciso con
            acompañamiento real.
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
                AGENDAR CITA POR WHATSAPP
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

            <a href="tel:+5112175100" className="px-10 py-4 bg-slate-50 text-slate-600 border border-slate-200 font-medium rounded-full hover:bg-slate-100 transition-all active:scale-95 text-sm tracking-wide inline-flex items-center">
              Llamar al (01) 217 5100
            </a>
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
            <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#F7FCFE" />
          </svg>
        </div>
      </div>
      )}

      {/* --- 2. SECCIÓN INFERIOR: light editorial --- */}
      <div className="relative w-full px-6 lg:px-10 pb-10 pt-14 lg:pt-16 bg-[#F7FCFE] overflow-hidden">
        {/* Grid pattern decorativo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(0,112,165) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Brillos ambientales */}
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl -mr-40 -mt-20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary-light/15 blur-3xl -ml-40 -mb-20" />

        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* MIDDLE: contact cards + links */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-10">

            {/* Brand + contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-5">
                <img src={logoColor} alt="Detecta Clínica" className="h-10 w-auto object-contain self-start" />
                <p className="text-[14px] font-light text-slate-500 leading-relaxed max-w-md">
                  Líderes en detección temprana e innovación oncológica en el Perú. Tecnología que salva vidas.
                </p>
              </div>

              {/* Contact micro-cards */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+5112175100"
                  className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-md p-4 transition-all hover:border-primary-dark/40 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-25px_rgba(0,112,165,0.4)]"
                >
                  <Phone className="h-4 w-4 text-primary-dark" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">Atención 24/7</p>
                    <p className="text-[13px] font-medium text-slate-800 mt-0.5">(01) 217 5100</p>
                  </div>
                </a>
                <a
                  href="mailto:contacto@detecta.pe"
                  className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-md p-4 transition-all hover:border-primary-dark/40 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-25px_rgba(0,112,165,0.4)]"
                >
                  <Mail className="h-4 w-4 text-primary-dark" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">Escríbenos</p>
                    <p className="text-[13px] font-medium text-slate-800 mt-0.5 truncate">contacto@detecta.pe</p>
                  </div>
                </a>
                <div className="col-span-2 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-md p-4">
                  <MapPin className="h-4 w-4 text-primary-dark mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">Detecta Clínica</p>
                    <p className="text-[13px] font-light text-slate-700 mt-0.5 leading-relaxed">
                      Av. Principal · Lima, Perú
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-primary-dark whitespace-nowrap">
                    <Clock className="h-3 w-3" /> 24/7
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-2.5 items-center pt-2">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 border border-slate-200 transition-all duration-300 hover:bg-primary-dark hover:text-white hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary-dark/15"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Links grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-12"
            >
              <div className="flex flex-col gap-5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary-dark">Servicios</h3>
                <ul className="flex flex-col gap-3 text-[13px] font-light text-slate-600">
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Diagnóstico Precisión <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Oncología <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Select Staff <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Telemedicina <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary-dark">Nosotros</h3>
                <ul className="flex flex-col gap-3 text-[13px] font-light text-slate-600">
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Sobre Detecta <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Investigación <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Sostenibilidad <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Trabaja con nosotros <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary-dark">Legal</h3>
                <ul className="flex flex-col gap-3 text-[13px] font-light text-slate-600">
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Privacidad <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Ética <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                  <li><a href="#" className="group inline-flex items-center gap-1.5 hover:text-primary-dark transition-colors">Libro de Reclamaciones <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" /></a></li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Barra inferior */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200/70 pt-6 gap-4 text-[10px] font-medium text-slate-400 tracking-[0.2em] uppercase">
            <p>© {new Date().getFullYear()} Detecta Clínica — Todos los derechos reservados.</p>
            <div className="flex gap-8 items-center">
              <a href="#" className="hover:text-primary-dark transition-colors">Cookies</a>
              <a href="#" className="hover:text-primary-dark transition-colors">Políticas</a>
              <div className="flex gap-2 ml-2">
                <div className="w-1.5 h-1.5 bg-primary-dark rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

