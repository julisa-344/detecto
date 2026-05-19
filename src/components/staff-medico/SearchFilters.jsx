import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function SearchFilters({
  query,
  onQueryChange,
  chips,
  activeChip,
  onChipChange,
}) {
  return (
    <section className="relative -mt-20 sm:-mt-24 lg:-mt-32 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-5 lg:p-7 shadow-[0_20px_60px_-15px_rgba(0,112,165,0.25)]"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar nombre, especialidad o CMP..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-5 text-sm font-light text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-primary-dark focus:bg-white focus:ring-2 focus:ring-primary-dark/15"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {chips.map((chip) => {
              const active = chip === activeChip
              return (
                <button
                  key={chip}
                  onClick={() => onChipChange(chip)}
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
  )
}
