'use client'

import { useAuth } from '@/contexts/auth-context'
import { UserMenu } from '@/components/user-menu'
import { NavigationBar } from '@/components/navigation-bar'
import { Suspense } from 'react'

interface SiteHeaderProps {
  showNav?: boolean
  showUser?: boolean
}

export function SiteHeader({ showNav = true, showUser = true }: SiteHeaderProps) {
  return (
    <header>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">t2x</h1>
          {showUser && (
            <Suspense fallback={<div>Loading...</div>}>
              <UserMenu />
            </Suspense>
          )}
        </div>
        {showNav && <NavigationBar />}
      </div>
    </header>
  )
} 