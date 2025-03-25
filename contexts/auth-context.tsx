'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { 
  onAuthStateChanged,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const unsubscribe = onAuthStateChanged(auth, 
      (user) => {
        if (mounted) {
          setUser(user)
          setLoading(false)
        }
      },
      (error) => {
        console.error('Auth state error:', error)
        if (mounted) {
          setLoading(false)
        }
      }
    )

    // 500ms後にローディング状態を解除（認証状態の初期化に失敗した場合のフォールバック）
    const timeoutId = setTimeout(() => {
      if (mounted) {
        setLoading(false)
      }
    }, 500)

    return () => {
      mounted = false
      clearTimeout(timeoutId)
      unsubscribe()
    }
  }, [])

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Sign in with Google error:', error)
      throw error
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
    } catch (error) {
      console.error('Sign out error:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signInWithGoogle,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 