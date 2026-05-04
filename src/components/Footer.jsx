import logoWhite from '../assets/LogoDetectaHorizontalblanco.png' // Asegúrate de tener tu logo en blanco

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <img src={logoWhite} alt="Detecta Clínica" className="h-10 mb-6" />
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Tecnología de vanguardia y rigor científico para un diagnóstico preciso. Tu salud, nuestra prioridad.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Clínica</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#pacientes" className="hover:text-primary transition-colors">Pacientes</a></li>
              <li><a href="#staff" className="hover:text-primary transition-colors">Select Staff</a></li>
              <li><a href="#medico" className="hover:text-primary transition-colors">Médico</a></li>
              <li><a href="#investigacion" className="hover:text-primary transition-colors">Investigación</a></li>
            </ul>
          </div>

          {/* Ética Column */}
          <div>
            <h3 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Transparencia</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#comite-etica" className="hover:text-primary transition-colors">Comité de ética</a></li>
              <li><a href="#gestion-etica" className="hover:text-primary transition-colors">Gestión ética</a></li>
              <li><a href="#terminos" className="hover:text-primary transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li>Lima, Perú</li>
              <li><a href="mailto:hola@detecta.pe" className="hover:text-primary transition-colors">hola@detecta.pe</a></li>
              <li><a href="tel:+51999999999" className="hover:text-primary transition-colors">+51 999 999 999</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Detecta Clínica. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}