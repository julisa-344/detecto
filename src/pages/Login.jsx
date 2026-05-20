import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, User, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/login.mp4'
import logoWhite from '../assets/LogoDetectaHorizontalblanco.png'
import detecto from '../assets/detectoLaboratorio.png'

export default function Login() {
  const [dni, setDni] = useState('')
  const [clave, setClave] = useState('')
  const [showClave, setShowClave] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ dni, clave })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      {/* Autofill fix */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #ffffff;
          -webkit-box-shadow: 0 0 0px 1000px rgba(0,0,0,0.1) inset;
          transition: background-color 9999s ease-in-out 0s;
          caret-color: #ffffff;
        }
      `}</style>

      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlays Balanceados */}
      <div className="absolute inset-0 bg-gray-950/35 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(3,7,18,0.4)_100%)] z-10" />

      {/* Top bar: volver + logo */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 lg:px-10 pt-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/v4"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 pl-2 pr-5 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-primary">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </span>
            Volver
          </Link>
          <Link to="/v4" aria-label="Detecta Clínica">
            <img src={logoWhite} alt="Detecta Clínica" className="h-8 drop-shadow-md hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_auto] gap-12 items-center">

        {/* Columna izquierda: copy + mascota */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col items-start relative"
        >
          <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-primary drop-shadow-md">
            Portal del paciente
          </p>

          <h1 className="mt-5 text-5xl xl:text-6xl font-extralight text-white leading-[1.02] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Tus resultados<br />
            <span className="font-medium italic text-primary">siempre al alcance.</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-white/80 font-light leading-relaxed drop-shadow-md">
            Consulta tus exámenes, imágenes e informes clínicos de forma segura, en cualquier momento.
          </p>

          {/* Mascota */}
          <div className="relative mt-8 w-72 xl:w-80">
            <div className="pointer-events-none absolute inset-0 -translate-y-6 bg-[radial-gradient(circle_at_center,rgba(82,192,225,0.35)_0%,rgba(82,192,225,0.08)_40%,transparent_70%)] blur-3xl" />

            <motion.img
              src={detecto}
              alt="Detecto"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />

            <motion.div
              animate={{ scaleX: [1, 0.85, 1], opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-1/2 -bottom-1 h-3 w-44 -translate-x-1/2 rounded-full bg-black/60 blur-md"
            />
          </div>
        </motion.div>

        {/* Card glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full max-w-md mx-auto"
        >
          {/* Mascota en móvil */}
          <img
            src={detecto}
            alt="Detecto"
            className="lg:hidden mx-auto w-32 mb-4 drop-shadow-[0_15px_30px_rgba(82,192,225,0.35)]"
          />

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gray-950/30 backdrop-blur-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.55)] p-8 lg:p-10">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-medium/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/25 px-3 py-1 text-[9px] font-bold tracking-[0.3em] uppercase text-primary backdrop-blur-md">
                <ShieldCheck className="h-3 w-3" />
                Detecta Clínica
              </span>

              <h2 className="mt-5 text-3xl font-extralight text-white tracking-tight leading-tight drop-shadow-md">
                Accede a tus <span className="font-medium text-primary">resultados</span>
              </h2>
              <p className="mt-2 text-sm text-white/75 font-light leading-relaxed">
                Ingresa tu DNI y clave de acceso para ver tus exámenes.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* DNI */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 mb-2 drop-shadow-sm">
                    Número de DNI
                  </label>
                  <div className="group relative flex items-center rounded-xl border border-white/20 bg-black/30 backdrop-blur-md transition-all focus-within:border-primary/60 focus-within:bg-black/40">
                    <User className="ml-4 h-4 w-4 text-white/60 group-focus-within:text-primary transition-colors" />
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={8}
                      value={dni}
                      onChange={(e) => setDni(e.target.value.replace(/\D/g, ''))}
                      placeholder="12345678"
                      className="w-full bg-transparent px-3 py-3.5 text-sm font-light text-white placeholder-white/40 outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Clave */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 mb-2 drop-shadow-sm">
                    Clave de acceso
                  </label>
                  <div className="group relative flex items-center rounded-xl border border-white/20 bg-black/30 backdrop-blur-md transition-all focus-within:border-primary/60 focus-within:bg-black/40">
                    <Lock className="ml-4 h-4 w-4 text-white/60 group-focus-within:text-primary transition-colors" />
                    <input
                      type={showClave ? 'text' : 'password'}
                      value={clave}
                      onChange={(e) => setClave(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-transparent px-3 py-3.5 text-sm font-light text-white placeholder-white/40 outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowClave((v) => !v)}
                      className="mr-3 p-1.5 text-white/60 hover:text-white transition-colors"
                    >
                      {showClave ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Botón estilo sitio */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95"
                  >
                    <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-500 ease-in-out bg-primary group-hover:bg-primary-dark">
                      Ver mis resultados
                    </span>
                    <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-primary text-white transition-all duration-500 ease-in-out group-hover:bg-primary-dark">
                      <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}