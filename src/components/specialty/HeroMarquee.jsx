import { motion } from 'framer-motion'

export default function HeroMarquee({ items = [] }) {
  if (!items.length) return null
  const loop = [...items, ...items, ...items]
  return (
    <div className="relative z-20 w-full border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="flex overflow-hidden select-none py-4 lg:py-5">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {loop.map((tag, i) => (
            <div key={i} className="flex items-center">
              <span className="px-6 lg:px-10 text-[10px] lg:text-[11px] font-bold tracking-[0.3em] uppercase text-white/45 hover:text-[rgb(var(--brand-base))] transition-colors duration-300 cursor-default">
                {tag}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--brand-base)/0.5)] mx-1.5" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
