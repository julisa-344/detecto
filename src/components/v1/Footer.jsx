import React from 'react';
import logoColor from '../../assets/logo.png'; 

export default function Footer() {
  return (
    // Fondo con degradado solicitado: #EEFBFF -> #AFEAFC
    <section className="relative w-full py-28 px-4 md:px-10 bg-gradient-to-br from-[#EEFBFF] to-[#AFEAFC] overflow-hidden">
      
      {/* Brillo ambiental sutil */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 blur-[150px] rounded-full -mr-60 -mt-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 1. CTA SUPERIOR (FUERA DEL CONTENEDOR) --- */}
<div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-extralight text-slate-900 mb-8 tracking-tight leading-tight">
            Toma el control de <br /> 
            <span className="font-light italic text-primary-dark tracking-tighter">tu salud hoy mismo.</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Diagnósticos de precisión con tecnología de última generación y el respaldo de los mejores especialistas del país.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* CTA Principal: Acción de alta prioridad */}
            <button className="px-12 py-4 bg-primary-dark text-white font-medium rounded-full hover:shadow-2xl hover:scale-[1.02] transition-all active:scale-95 text-lg flex items-center gap-3">
              Reserva tu cita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            {/* CTA Secundario: Orientación */}
            <button className="px-12 py-4 bg-white/40 text-slate-700 border border-white/60 font-medium rounded-full hover:bg-white/60 transition-all active:scale-95 text-lg">
              Hablar con un asesor
            </button>
          </div>
        </div>

        {/* --- 2. CONTENEDOR NAV (GLASS FROSTED) --- */}
        <div className="bg-white/30 backdrop-blur-3xl border border-white/60 rounded-[56px] shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="px-8 md:px-16 pt-20 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
              
              {/* Brand Column - Logo y Redes Sociales */}
              <div className="lg:col-span-4 flex flex-col gap-10">
                <img src={logoColor} alt="Detecta Clínica" className="h-16 w-auto object-contain self-start" />
                <p className="text-[15px] font-light text-slate-500 leading-relaxed max-w-[320px]">
                  Líderes en detección temprana e innovación oncológica en el Perú. Tecnología que salva vidas.
                </p>
                
                {/* Redes Sociales con SVGs Inline */}
                <div className="flex gap-4 items-center">
                  <a href="#" className="w-11 h-11 rounded-full bg-white/50 flex items-center justify-center hover:bg-primary-dark hover:text-white transition-all text-slate-600 shadow-sm border border-white/50 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-white/50 flex items-center justify-center hover:bg-primary-dark hover:text-white transition-all text-slate-600 shadow-sm border border-white/50 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-white/50 flex items-center justify-center hover:bg-primary-dark hover:text-white transition-all text-slate-600 shadow-sm border border-white/50 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>

              {/* Links Grid */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
                <div className="flex flex-col gap-6">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-900">Servicios</h3>
                  <ul className="flex flex-col gap-4 text-[14px] font-light text-slate-500">
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Diagnóstico Precisión</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Oncología</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Select Staff</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Telemedicina</a></li>
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-900">Nosotros</h3>
                  <ul className="flex flex-col gap-4 text-[14px] font-light text-slate-500">
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Sobre Detecta</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Investigación</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Sostenibilidad</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Trabaja con nosotros</a></li>
                  </ul>
                </div>
{/* 
                <div className="flex flex-col gap-6">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-900">Soporte</h3>
                  <ul className="flex flex-col gap-4 text-[14px] font-light text-slate-500">
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Citas Online</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Resultados</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">FAQ</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Contacto</a></li>
                  </ul>
                </div> */}

                <div className="flex flex-col gap-6">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-900">Legal</h3>
                  <ul className="flex flex-col gap-4 text-[14px] font-light text-slate-500">
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Privacidad</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Ética</a></li>
                    <li><a href="#" className="hover:text-primary-dark transition-colors">Libro de Reclamaciones</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Barra Inferior Final */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-900/5 pt-12 gap-8 text-[11px] font-light text-slate-400 tracking-[0.2em] uppercase">
              <p>
                © {new Date().getFullYear()} DETECTA CLÍNICA — Precision Medicine.
              </p>
              <div className="flex gap-10 items-center">
                <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Políticas</a>
                <div className="flex gap-3 ml-4">
                   <div className="w-1.5 h-1.5 bg-primary-dark rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}