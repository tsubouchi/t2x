'use client'

import { useAuth } from '@/contexts/auth-context'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { AuthProvider } from '@/contexts/auth-context'

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <p>Loading...</p>
      </div>
    </div>
  )
}

function AuthContent({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  useEffect(() => {
    if (!loading) {
      if (!user && !isLoginPage) {
        router.push('/login')
      } else if (user && isLoginPage) {
        router.push('/')
      }
    }
  }, [user, loading, router, isLoginPage])

  if (loading) {
    return <LoadingScreen />
  }

  if (!isLoginPage && !user) {
    return <LoadingScreen />
  }

  if (isLoginPage && user) {
    return <LoadingScreen />
  }

  return children
}

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthContent>
        {children}
      </AuthContent>
    </AuthProvider>
  )
} 