"use client"

import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useAuth } from '@/contexts/auth-context'

export function UserMenu() {
  const { user } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (!user) return null

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm text-gray-400">
        {user.email}
      </div>
      <button
        onClick={handleSignOut}
        className="text-sm text-white hover:text-gray-300 transition-colors"
      >
        Sign out
      </button>
    </div>
  )
}

