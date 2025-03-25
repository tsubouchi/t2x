'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import Link from 'next/link'

const validServices = ["slides", "docs", "sheets", "sql", "codes", "images", "videos", "research"]

interface ServiceClientProps {
  service: string
}

export default function ServiceClient({ service }: ServiceClientProps) {
  const router = useRouter()
  const { user, loading } = useAuth()
  const serviceKey = service.toLowerCase()
  const [inputText, setInputText] = useState('')
  const [showContextAddition, setShowContextAddition] = useState(false)
  const [showBasicOptions, setShowBasicOptions] = useState(false)
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)

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

  const serviceMap: Record<string, { name: string, icon: string }> = {
    slides: { name: "TTSLIDES", icon: "⬜" },
    docs: { name: "TTDOCS", icon: "📄" },
    sheets: { name: "TTSHEETS", icon: "📊" },
    sql: { name: "TTSQL", icon: "📋" },
    codes: { name: "TTCODES", icon: "💻" },
    images: { name: "TTIMAGES", icon: "🖼️" },
    videos: { name: "TTVIDEOS", icon: "🎥" },
    research: { name: "TTRESEARCH", icon: "🔍" },
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <Link href="/" className="text-xl font-bold">t2x</Link>
        <button className="p-2 rounded-full hover:bg-zinc-800">
          <span className="sr-only">User menu</span>
          <div className="w-8 h-8 bg-zinc-800 rounded-full"></div>
        </button>
      </div>

      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8">
            {validServices.map((s) => (
              <Link
                key={s}
                href={`/${s}`}
                className={`flex items-center space-x-2 py-4 ${
                  s === serviceKey
                    ? 'border-b-2 border-white -mb-[1px]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{serviceMap[s].icon}</span>
                <span>{serviceMap[s].name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4">
        <div className="bg-zinc-900 rounded-lg border border-white/10">
          <div className="flex border-b border-white/10">
            <div className="flex-1 flex">
              <div className="px-4 py-2 border-b-2 border-white">Input</div>
              <div className="px-4 py-2 text-gray-400">Result</div>
            </div>
          </div>

          <div className="p-4">
            <button
              onClick={() => setShowContextAddition(!showContextAddition)}
              className="w-full flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border border-white/10 mb-4"
            >
              <span>Context Addition</span>
              <span className={`transform transition-transform ${showContextAddition ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {showContextAddition && (
              <div className="mb-4 space-y-4">
                <div className="grid grid-cols-5 gap-4">
                  <button className="flex items-center justify-center space-x-2 p-2 bg-zinc-800 rounded-lg border border-white/10">
                    <span>📎</span>
                    <span>Attachments</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-2 bg-zinc-800 rounded-lg border border-white/10">
                    <span>🖼️</span>
                    <span>Images</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-2 bg-zinc-800 rounded-lg border border-white/10">
                    <span>🔗</span>
                    <span>URLs</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-2 bg-zinc-800 rounded-lg border border-white/10">
                    <span>💻</span>
                    <span>GitHub</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-2 bg-zinc-800 rounded-lg border border-white/10">
                    <span>💾</span>
                    <span>Database</span>
                  </button>
                </div>
                <button className="w-full p-3 bg-zinc-800 rounded-lg border border-white/10 text-center">
                  Upload Files
                </button>
              </div>
            )}

            <textarea
              className="w-full h-[300px] bg-zinc-800 text-white p-4 rounded-lg border border-white/10 focus:outline-none focus:border-white/20 mb-4"
              placeholder="Enter your text here to convert..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-gray-400">Auto-save to:</span>
              <select
                className="bg-zinc-800 text-white px-3 py-1 rounded border border-white/10 focus:outline-none focus:border-white/20 text-sm"
                defaultValue="No auto-save"
              >
                <option>No auto-save</option>
                <option>Google Drive</option>
                <option>GitHub</option>
                <option>Google Cloud</option>
                <option>AWS S3</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg">Service Options</h3>
                <select
                  className="bg-zinc-800 text-white px-3 py-1 rounded border border-white/10 focus:outline-none focus:border-white/20 text-sm"
                  defaultValue={serviceMap[serviceKey].name}
                >
                  <option>{serviceMap[serviceKey].name}</option>
                </select>
              </div>

              <button
                onClick={() => setShowBasicOptions(!showBasicOptions)}
                className="w-full flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border border-white/10"
              >
                <span>Basic Options</span>
                <span className={`transform transition-transform ${showBasicOptions ? 'rotate-180' : ''}`}>▼</span>
              </button>

              <button
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="w-full flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border border-white/10"
              >
                <span>Advanced Options</span>
                <span className={`transform transition-transform ${showAdvancedOptions ? 'rotate-180' : ''}`}>▼</span>
              </button>

              <div className="flex space-x-4 mt-4">
                <button className="px-4 py-2 bg-zinc-800 text-white rounded border border-white/10">
                  Convert
                </button>
                <button className="px-4 py-2 bg-transparent text-white rounded border border-white/10">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 