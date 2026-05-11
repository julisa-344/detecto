import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowUpRight, ArrowDownAZ, ArrowUpAZ, ChevronDown, Check } from 'lucide-react'
import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import WhatsAppButton from '../components/WhatsAppButton'
import Pagination from '../components/ui/Pagination'
import fondoBanner from '../assets/staffBanner.jpg'
import { doctors, specialties } from '../data/staff'

const PAGE_SIZE = 12 // 4 columnas x 4 filas

// Path del shadow.svg (616x868) escalado a objectBoundingBox (0-1)
const CARD_CLIP_PATH =
  'M0 32C0 14.3269 14.3269 0 32 0H584C601.673 0 616 14.3269 616 32V694C616 711.673 601.673 726 584 726H538C502.654 726 474 754.654 474 790V836C474 853.673 459.673 868 442 868H32C14.3269 868 0 853.673 0 836V32Z'

const SORT_OPTIONS = [
  { value: 'az', label: 'A — Z', hint: 'Orden alfabético', Icon: ArrowDownAZ },
  { value: 'za', label: 'Z — A', hint: 'Orden inverso', Icon: ArrowUpAZ },
]

function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = SORT_OPTIONS.find((o) => o.value === value) ?? SORT_OPTIONS[0]
  const CurrentIcon = current.Icon

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`group inline-flex items-center gap-2.5 rounded-full border bg-white pl-3.5 pr-3 py-2.5 text-[12px] font-medium text-slate-700 transition-all cursor-pointer shadow-sm ${
          open
            ? 'border-primary-dark ring-2 ring-primary-dark/15'
            : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <CurrentIcon className="h-4 w-4 text-slate-500" />
        <span className="text-[10px] tracking-[0.18em] uppercase text-slate-400 font-semibold">
          Ordenar
        </span>
        <span className="text-slate-900">{current.label}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)] p-1.5 z-30"
          >
            {SORT_OPTIONS.map((opt) => {
              const Icon = opt.Icon
              const selected = opt.value === value
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange(opt.value)
                      setOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                      selected ? 'bg-slate-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[13px] font-medium text-slate-900">
                        {opt.label}
                      </span>
                      <span className="block text-[11px] text-slate-500 font-light">
                        {opt.hint}
                      </span>
                    </span>
                    {selected && <Check className="h-4 w-4 text-primary-dark" />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

function CardClipDef() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="staff-card-clip" clipPathUnits="objectBoundingBox">
          <path
            d={CARD_CLIP_PATH}
            transform="scale(0.00162338 0.00115207)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function DoctorCard({ doctor, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % PAGE_SIZE) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[616/868] w-full">
        {/* Card recortada con la forma de shadow.svg */}
        <div
          className="absolute inset-0 overflow-hidden bg-[#DCF1F8]"
          style={{
            clipPath: 'url(#staff-card-clip)',
            WebkitClipPath: 'url(#staff-card-clip)',
          }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Chip minimalista — esquina superior izquierda */}
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-slate-900/35 backdrop-blur-md px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] uppercase text-white shadow-sm">
            {doctor.specialty}
          </span>
        </div>

        {/* Botón en el notch (más pequeño) */}
        <button
          aria-label={`Ver perfil de ${doctor.name}`}
          className="absolute bottom-[2%] right-[2%] flex h-[11%] w-[16%] items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-300 hover:bg-[#0070A5] active:scale-95 cursor-pointer"
        >
          <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Información fuera de la card */}
      <div className="mt-5 px-1">
        <h3 className="text-base lg:text-lg font-normal text-slate-900 leading-tight tracking-tight">
          {doctor.name}
        </h3>
        <p className="mt-1.5 text-[10px] font-mono tracking-[0.18em] text-slate-500">
          {doctor.reg}
        </p>
      </div>
    </motion.article>
  )
}

export default function StaffMedico() {
  const [page, setPage] = useState(1)
  const [activeChip, setActiveChip] = useState('Todas')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('az')

  const sortedDoctors = [...doctors].sort((a, b) =>
    sort === 'az'
      ? a.name.localeCompare(b.name, 'es')
      : b.name.localeCompare(a.name, 'es')
  )

  const totalPages = Math.max(1, Math.ceil(sortedDoctors.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * PAGE_SIZE
  const visible = sortedDoctors.slice(start, start + PAGE_SIZE)

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <HeaderV3 />
      <CardClipDef />

      {/* Banner */}
      <section className="relative overflow-hidden pt-32 pb-40 lg:pt-44 lg:pb-52">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src={fondoBanner}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-[#021c5492]" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-transparent to-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/90 mb-5">
              Nuestro Staff
            </p>
            <h1 className="text-5xl lg:text-7xl font-light tracking-tighter text-white leading-[1.02] max-w-4xl drop-shadow-sm">
              Especialistas de{' '}
              <span className="italic">clase mundial</span> a tu lado.
            </h1>
            <p className="mt-6 max-w-2xl text-base lg:text-lg font-light text-white/85 leading-relaxed">
              Un equipo multidisciplinario de médicos con trayectoria internacional, comprometidos
              con tu diagnóstico, tratamiento y recuperación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Chips — overlap mitad banner / mitad página */}
      <section className="relative -mt-24 lg:-mt-32 z-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-5 lg:p-7 shadow-[0_20px_60px_-15px_rgba(0,112,165,0.25)]"
          >
            {/* Search */}
            <div className="relative flex items-center">
              <Search className="absolute left-5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nombre, especialidad o CMP..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-5 text-sm font-light text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary-dark/15"
              />
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {specialties.map((chip) => {
                const active = chip === activeChip
                return (
                  <button
                    key={chip}
                    onClick={() => setActiveChip(chip)}
                    className={`rounded-full px-4 py-2 text-[11px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-primary-dark text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-primary-dark'
                    }`}
                  >
                    {chip}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Página <span className="text-slate-900">{String(safePage).padStart(2, '0')}</span> / {String(totalPages).padStart(2, '0')}
            </p>

            <SortDropdown value={sort} onChange={setSort} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {visible.map((doctor, i) => (
              <DoctorCard key={start + i} doctor={doctor} index={i} />
            ))}
          </div>

          {/* Paginación */}
          <Pagination
            page={safePage}
            totalPages={totalPages}
            onChange={(p) => setPage(p)}
          />
        </div>
      </section>

      <FooterV4 showCTA={false} />
      <WhatsAppButton />
    </div>
  )
}
