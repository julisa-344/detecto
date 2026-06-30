import { type ReactNode } from 'react'

interface PageContainerProps {
  children:   ReactNode
  /** Adds lg:px-12 — for full-width pages without a sidebar */
  wide?:      boolean
  className?: string
}

/**
 * Standard page-level content wrapper.
 * Applies the project-wide max-width, horizontal padding and vertical rhythm.
 *
 * Usage:
 *   <PageContainer>…</PageContainer>
 *   <PageContainer wide>…</PageContainer>   ← adds lg:px-12
 */
export default function PageContainer({
  children,
  wide      = false,
  className = '',
}: PageContainerProps) {
  const px = wide ? 'px-6 lg:px-12' : 'px-6'
  return (
    <div className={`mx-auto max-w-7xl ${px} py-20 lg:py-28 ${className}`.trim()}>
      {children}
    </div>
  )
}
