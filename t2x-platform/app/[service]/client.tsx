'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Header } from "@/components/header"

const validServices = ["slides", "docs", "sheets", "sql", "codes", "images", "videos", "research"]

interface ServiceClientProps {
  service: string
}

export default function ServiceClient({ service }: ServiceClientProps) {
  const router = useRouter()
  const { user, loading } = useAuth()
  const serviceKey = service.toLowerCase()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (!validServices.includes(serviceKey)) {
    return null
  }

  const serviceMap: Record<string, string> = {
    slides: "TTSLIDES",
    docs: "TTDOCS",
    sheets: "TTSHEETS",
    sql: "TTSQL",
    codes: "TTCODES",
    images: "TTIMAGES",
    videos: "TTVIDEOS",
    research: "TTRESEARCH",
  }

  const serviceName = serviceMap[serviceKey]

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <div className="flex-grow">
        <Header />
        <div className="container mx-auto px-4">
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-4">{serviceName}</h1>
            <p className="text-xl text-gray-400">
              Transform your text into {serviceName.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2025 Bonginkan. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  )
} 