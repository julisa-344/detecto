export default function SectionEyebrow({ children, light = false }) {
  return (
    <p className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] ${light ? 'text-[#52C0E1]' : 'text-[#0199C6]'}`}>
      {children}
    </p>
  )
}
