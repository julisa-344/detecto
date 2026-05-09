export default function SectionTitle({ children, light = false, className = '' }) {
  return (
    <h2 className={`text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem] ${light ? 'text-white' : 'text-[#0070A5]'} ${className}`}>
      {children}
    </h2>
  )
}
