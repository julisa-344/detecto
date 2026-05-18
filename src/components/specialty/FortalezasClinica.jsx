import { motion } from 'framer-motion'

function MarqueeRow({ items, duration = 50, reverse = false, className = '' }) {
  const loop = [...items, ...items]
  return (
    <div className={`pointer-events-none flex w-max items-center ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-12"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration, repeat: Infinity }}
      >
        {loop.map((word, i) => (
          <span key={i} className="flex shrink-0 items-center gap-12">
            <span className="whitespace-nowrap text-[clamp(2.5rem,7vw,6rem)] font-extralight uppercase tracking-tight text-[rgb(var(--brand-dark)/0.85)] italic">
              {word}
            </span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--brand-base)/0.7)]" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function FortalezasClinica({ image, imageAlt = 'Detecto', words = [] }) {
  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden">
        <div className="relative flex min-h-[70vh] items-center justify-center py-16">
          {image && (
            <motion.img
              src={image}
              alt={imageAlt}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-20 h-[55vh] w-auto max-w-[55vw] object-contain"
            />
          )}

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center gap-8">
            <MarqueeRow items={words} duration={55} />
            <MarqueeRow
              items={[...words].reverse()}
              duration={48}
              reverse
              className="opacity-60"
            />
            <MarqueeRow items={words} duration={65} className="opacity-40" />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-30 w-32"
            style={{
              background:
                'linear-gradient(to right, var(--brand-fade), var(--brand-fade), transparent)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-30 w-32"
            style={{
              background:
                'linear-gradient(to left, var(--brand-fade), var(--brand-fade), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
