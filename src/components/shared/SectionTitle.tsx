interface SectionTitleProps {
  children: React.ReactNode
  color?: string
  light?: boolean
  className?: string
}

export default function SectionTitle({
  children,
  color = '#0070A5',
  light = false,
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem] ${className}`}
      style={{ color: light ? '#ffffff' : color }}
    >
      {children}
    </h2>
  )
}
