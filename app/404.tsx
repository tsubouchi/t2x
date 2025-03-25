'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="text-gray-400">The page you are looking for does not exist.</p>
        <Link href="/" className="text-white hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
} 