'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const router = useRouter()
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (!user) return null

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">t2x</Link>
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 rounded-full overflow-hidden border border-white/20 hover:border-white/40 transition-colors"
          >
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="User profile"
                width={32}
                height={32}
              />
            ) : (
              <div className="w-full h-full bg-white/10 flex items-center justify-center text-sm">
                {user.email?.[0]?.toUpperCase()}
              </div>
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/20 rounded-md shadow-lg py-1">
              <div className="px-4 py-2 text-sm text-gray-400 border-b border-white/10">
                {user.email}
              </div>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                サインアウト
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 