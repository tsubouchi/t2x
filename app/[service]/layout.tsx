import { Suspense } from 'react'

const validServices = ["slides", "docs", "sheets", "sql", "codes", "images", "videos", "research"]

export function generateStaticParams() {
  return validServices.map((service) => ({
    service,
  }))
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      {children}
    </Suspense>
  )
} 