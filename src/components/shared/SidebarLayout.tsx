import { type ReactNode } from 'react'

interface SidebarLayoutProps {
  children: ReactNode
  /** Content rendered in the sticky right sidebar (e.g. <ContactSidebar> or <QuickContact>) */
  sidebar:  ReactNode
}

/**
 * Two-column layout: scrolling main content on the left, sticky sidebar on the right.
 * Collapses to single column on mobile.
 *
 * Usage inside a <PageContainer>:
 *   <PageContainer>
 *     <SidebarLayout sidebar={<ContactSidebar theme="blue" />}>
 *       <SectionA />
 *       <SectionB />
 *     </SidebarLayout>
 *   </PageContainer>
 */
export default function SidebarLayout({ children, sidebar }: SidebarLayoutProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
      <main className="min-w-0 space-y-20 lg:space-y-24">
        {children}
      </main>
      <aside className="hidden self-start space-y-6 lg:sticky lg:top-24 lg:block">
        {sidebar}
      </aside>
    </div>
  )
}
