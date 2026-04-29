import detecto from '../assets/detecto.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24">
      
      {/* Bottom gradient fuerte */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>
      </div>

      {/* Glow sutil tecnológico */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/30 blur-[160px] opacity-60"></div>

      {/* Grid ultra sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-gray-900">
              Detectar a tiempo
              <span className="block text-primary">
                cambia todo
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Tecnología avanzada para diagnóstico temprano, con la precisión
              que necesitas y la tranquilidad que buscas.
            </p>

            {/* CTA mejorado */}
            <div className="mt-10">
              <a
                href="#agendar"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-medium overflow-hidden"
              >
                <span className="relative z-10">
                  Comenzar evaluación
                </span>

                {/* efecto innovador */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 transition-transform group-hover:translate-x-1">
                  →
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            
            {/* Halo detrás */}
            <div className="absolute w-[320px] h-[320px] bg-primary/20 rounded-full blur-3xl"></div>

            {/* Mascota */}
            <img
              src={detecto}
              alt="Detecto IA"
              className="relative z-10 w-56 sm:w-64 lg:w-72 drop-shadow-2xl"
            />

            {/* Detalle innovador: orb flotante */}
            <div className="absolute -top-6 right-10 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}