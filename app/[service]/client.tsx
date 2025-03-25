'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { ServiceType } from './types'
import { TextInput } from '@/components/text-input'

interface ServiceClientProps {
  service: ServiceType
}

interface ServiceInfo {
  name: string
  description: string
}

const serviceInfo: Record<ServiceType, ServiceInfo> = {
  slides: {
    name: 'TTSLIDES',
    description: 'Convert text into beautiful presentation slides'
  },
  docs: {
    name: 'TTDOCS',
    description: 'Transform text into well-structured documents'
  },
  sheets: {
    name: 'TTSHEETS',
    description: 'Generate spreadsheets from text'
  },
  sql: {
    name: 'TTSQL',
    description: 'Create SQL queries from text'
  },
  codes: {
    name: 'TTCODES',
    description: 'Generate code in various languages'
  },
  images: {
    name: 'TTIMAGES',
    description: 'Create images from text descriptions'
  },
  videos: {
    name: 'TTVIDEOS',
    description: 'Generate video content from text'
  },
  research: {
    name: 'TTRESEARCH',
    description: 'Create research reports from text'
  }
}

export default function ServiceClient({ service }: ServiceClientProps) {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [inputText, setInputText] = useState('')
  const [showContextAddition, setShowContextAddition] = useState(false)
  const [mounted, setMounted] = useState(false)
  const info = serviceInfo[service]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!loading && !user && mounted) {
      router.push('/login')
    }
  }, [user, loading, router, mounted])

  if (!mounted || loading || !user) {
    return null
  }

  return (
    <div className="bg-zinc-900 rounded-lg border border-white/10">
      <div className="flex border-b border-white/10">
        <div className="flex-1 flex">
          <div className="px-4 py-2 border-b-2 border-white">Input</div>
          <div className="px-4 py-2 text-gray-400">Result</div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{info.name}</h2>
          <p className="text-white/70 mt-1">{info.description}</p>
        </div>
        <TextInput />

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
      </div>
    </div>
  )
} 