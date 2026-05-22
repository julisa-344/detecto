export default function Label({ children, optional }) {
  return (
    <span className="mb-2 block text-[12px] font-semibold text-slate-700">
      {children}{' '}
      {optional ? (
        <span className="font-light text-slate-400">(opcional)</span>
      ) : (
        <span className="text-primary-medium">*</span>
      )}
    </span>
  )
}
