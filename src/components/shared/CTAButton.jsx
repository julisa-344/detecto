import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTAButton({
  label = 'AGENDAR CITA',
  href,
  to,
  baseBg = '#0199C6',
  hoverBg = '#0070A5',
  textColor = '#ffffff',
  hoverTextColor = '#ffffff',
  fullWidth = false,
}) {
  const Comp = to ? Link : href ? 'a' : 'button'
  return (
    <Comp
      {...(to ? { to } : {})}
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group relative inline-flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95 ${fullWidth ? 'w-full' : ''}`}
    >
      <span
        className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] transition-all duration-500 ease-in-out backdrop-blur-md"
        style={{ background: baseBg, color: textColor }}
        onMouseEnter={e => {
          e.currentTarget.style.background = hoverBg
          e.currentTarget.style.color = hoverTextColor
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = baseBg
          e.currentTarget.style.color = textColor
        }}
      >
        {label}
      </span>
      <div
        className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out backdrop-blur-md"
        style={{ background: baseBg, color: textColor }}
        onMouseEnter={e => {
          e.currentTarget.style.background = hoverBg
          e.currentTarget.style.color = hoverTextColor
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = baseBg
          e.currentTarget.style.color = textColor
        }}
      >
        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </Comp>
  )
}
