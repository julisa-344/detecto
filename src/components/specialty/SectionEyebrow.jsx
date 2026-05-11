export default function SectionEyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] ${
        light ? 'text-[rgb(var(--brand-base))]' : 'text-[rgb(var(--brand-med))]'
      }`}
    >
      {children}
    </p>
  )
}
