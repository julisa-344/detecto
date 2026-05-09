import { ArrowUpRight } from 'lucide-react'

export default function CTAButton({ label = 'AGENDAR CITA' }) {
  return (
    <button className="group relative flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent p-0 transition-all active:scale-95">
      <span className="rounded-full px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-500 ease-in-out bg-[#52C0E1]/100 group-hover:bg-[#0070A5] group-hover:text-white backdrop-blur-md border border-[#52C0E1]/0">
        {label}
      </span>
      <div className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-in-out bg-[#52C0E1]/100 text-white group-hover:bg-[#0070A5] group-hover:text-white backdrop-blur-md border border-[#52C0E1]/0">
        <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </button>
  )
}
