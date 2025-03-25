'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import Image from 'next/image'

export default function LoginPage() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { signInWithGoogle } = useAuth()

  const handleGoogleSignIn = async () => {
    try {
      setError('')
      setIsLoading(true)
      await signInWithGoogle()
      router.push('/')
    } catch (error: any) {
      console.error('Login error:', error)
      setError('Failed to sign in with Google')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter text-white">
            t2x
          </h1>
          <p className="text-xl text-gray-400 tracking-wide">
            Text to Everything
          </p>
        </div>

        {error && (
          <div className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded text-center text-sm">
            {error}
          </div>
        )}

        <div>
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-medium rounded px-4 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Image
              src="/google.svg"
              alt="Google logo"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            {isLoading ? 'Signing in...' : 'Continue with Google'}
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
} 