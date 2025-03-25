'use client'

interface ClientWrapperProps {
  children: React.ReactNode
  showNav?: boolean
}

export default function ClientWrapper({ children, showNav = true }: ClientWrapperProps) {
  return (
    <>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>
    </>
  )
} 