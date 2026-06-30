import { type MotionValue, motion, useTransform } from 'framer-motion'

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  dimColor: string
  activeColor: string
}

function Word({ children, progress, range, dimColor, activeColor }: WordProps) {
  const color = useTransform(progress, range, [dimColor, activeColor])
  return (
    <motion.span style={{ color }} className="mr-2 inline-block lg:mr-3">
      {children}
    </motion.span>
  )
}

interface ScrollRevealParagraphProps {
  text: string
  progress: MotionValue<number>
  className?: string
  /** Color de las palabras aún no "leídas". Default: gris claro (tema claro). */
  dimColor?: string
  /** Color de las palabras ya reveladas. Default: slate-900 (tema claro). */
  activeColor?: string
}

/**
 * Párrafo cuyas palabras pasan de un color tenue a uno activo a medida que
 * `progress` (un MotionValue 0→1, normalmente ligado al scroll) avanza.
 */
export default function ScrollRevealParagraph({
  text,
  progress,
  className = '',
  dimColor = '#CBD5E1',
  activeColor = '#0F172A',
}: ScrollRevealParagraphProps) {
  const words = text.split(' ')

  return (
    <p className={className}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={progress} range={[start, end]} dimColor={dimColor} activeColor={activeColor}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}
