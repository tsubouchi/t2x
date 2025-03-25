'use client'

import { useAuth } from '@/contexts/auth-context'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const PUBLIC_PATHS = ['/login']

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isInitialized, setIsInitialized] = useState(false)
  const isPublicPath = PUBLIC_PATHS.includes(pathname)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!loading) {
      timeoutId = setTimeout(() => {
        setIsInitialized(true)
        if (!user && !isPublicPath) {
          router.push('/login')
        } else if (user && isPublicPath) {
          router.push('/')
        }
      }, 100)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [user, loading, router, pathname, isPublicPath])

  if (!isInitialized || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-2">t2x</h1>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!user && !isPublicPath) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-2">t2x</h1>
          <p>Redirecting to login...</p>
        </div>
      </div>
    )
  }

  if (user && isPublicPath) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-2">t2x</h1>
          <p>Redirecting to home...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 