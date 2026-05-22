import { AlertCircle } from 'lucide-react'

export default function FieldError({ msg }) {
  if (!msg) return null
  return (
    <span className="mt-1.5 flex items-center gap-1.5 text-[11.5px] font-light text-rose-500">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      {msg}
    </span>
  )
}
