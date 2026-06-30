import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  /** UI custom para mostrar en caso de error (opcional). */
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Atrapa errores de rendering de React en su subtree.
 *
 * Sin un ErrorBoundary, un crash en cualquier componente tumba toda la SPA
 * y deja al usuario con una pantalla blanca. Aquí mostramos una UI de
 * fallback con opciones de recuperación.
 *
 * Nota: NO atrapa errores en event handlers, async code, server-side
 * rendering ni errores lanzados en el propio ErrorBoundary.
 */
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // En producción acá iría un servicio de tracking (Sentry, LogRocket, etc.)
    // Por ahora solo log a consola.
    console.error('[ErrorBoundary] Uncaught error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          role="alert"
          className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center"
          style={{ fontFamily: 'Lexend, sans-serif' }}
        >
          <div className="max-w-md">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0199C6]">
              Algo salió mal
            </p>
            <h1 className="mb-4 text-4xl font-extralight leading-tight tracking-tight text-[#0070A5] sm:text-5xl">
              Disculpa, ocurrió un problema.
            </h1>
            <p className="mb-8 text-[15px] font-light leading-relaxed text-slate-500">
              Estamos trabajando para resolverlo. Puedes intentar recargar la
              página o regresar al inicio.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="rounded-full bg-[#52C0E1] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#0070A5] active:scale-95"
              >
                Recargar página
              </button>
              <a
                href="/"
                className="rounded-full border border-[#52C0E1]/40 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0070A5] transition-all duration-300 hover:bg-[#EEFBFF] active:scale-95"
              >
                Ir al inicio
              </a>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-10 max-h-48 overflow-auto rounded-lg bg-slate-50 p-4 text-left text-[11px] text-slate-600">
                {this.state.error.message}
                {'\n\n'}
                {this.state.error.stack}
              </pre>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
