'use client'

import { useAuth } from '@/contexts/auth-context'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const PUBLIC_PATHS = ['/login', '/login/']

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
      }, 100) // 短い遅延を追加して、ちらつきを防ぐ
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [user, loading, router, pathname, isPublicPath])

  if (!isInitialized || loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold text-white">t2x</div>
          <div className="text-white text-lg">Loading...</div>
        </div>
      </div>
    )
  }

  if (!user && !isPublicPath) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold text-white">t2x</div>
          <div className="text-white text-lg">Redirecting to login...</div>
        </div>
      </div>
    )
  }

  if (user && isPublicPath) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold text-white">t2x</div>
          <div className="text-white text-lg">Redirecting to home...</div>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 