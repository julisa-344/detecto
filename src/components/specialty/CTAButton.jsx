import { ArrowUpRight } from 'lucide-react'

export default function CTAButton({ label = 'AGENDAR CITA' }) {
  return (
    <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
      <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-[rgb(var(--brand-base))] group-hover:bg-[rgb(var(--brand-dark))] backdrop-blur-md">
        {label}
      </span>
      <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-[rgb(var(--brand-base))] text-white group-hover:bg-[rgb(var(--brand-dark))] backdrop-blur-md">
        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </button>
  )
}
