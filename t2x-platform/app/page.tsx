'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { NavigationBar } from "@/components/navigation-bar"
import { Header } from "@/components/header"
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
}

function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block p-6 bg-zinc-900 border border-white/10 rounded-lg hover:bg-zinc-800 transition-colors">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Link>
  )
}

export default function HomePage() {
  const router = useRouter()
  const { user, loading } = useAuth()

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

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <div className="flex-grow">
        <Header />
        <div className="container mx-auto px-4">
          <NavigationBar />
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to T2X Platform</h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your text into anything with our AI-powered services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="TTSLIDES"
                description="Convert text into beautiful presentation slides"
                href="/slides"
              />
              <ServiceCard
                title="TTDOCS"
                description="Transform text into well-structured documents"
                href="/docs"
              />
              <ServiceCard
                title="TTSHEETS"
                description="Generate spreadsheets from text"
                href="/sheets"
              />
              <ServiceCard
                title="TTSQL"
                description="Create SQL queries from text"
                href="/sql"
              />
              <ServiceCard
                title="TTCODES"
                description="Generate code in various languages"
                href="/codes"
              />
              <ServiceCard
                title="TTIMAGES"
                description="Create images from text descriptions"
                href="/images"
              />
              <ServiceCard
                title="TTVIDEOS"
                description="Generate video content from text"
                href="/videos"
              />
              <ServiceCard
                title="TTRESEARCH"
                description="Create research reports from text"
                href="/research"
              />
            </div>
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

