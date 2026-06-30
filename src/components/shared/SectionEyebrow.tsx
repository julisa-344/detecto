interface SectionEyebrowProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export default function SectionEyebrow({
  children,
  color = '#0199C6',
  className = '',
}: SectionEyebrowProps) {
  return (
    <p
      className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  )
}
