/**
 * Fallback minimalista para `<Suspense>` mientras se cargan chunks lazy.
 *
 * Es invisible porque el `<PageTransition>` overlay ya cubre los 2.9s
 * de la transición — esto solo entra en juego en el load inicial o si
 * el splash se desactiva en el futuro.
 */
export default function RouteFallback() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Cargando contenido"
      className="fixed inset-0 z-0 flex items-center justify-center bg-white"
    >
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-[#EEFBFF] border-t-[#52C0E1]"
      />
    </div>
  )
}
