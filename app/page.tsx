import { Suspense } from 'react'
import ClientWrapper from '@/components/client-wrapper'
import HomeClient from '@/components/home-client'

export default function HomePage() {
  return (
    <ClientWrapper showNav={true}>
      <Suspense fallback={<div className="text-center py-4">Loading home...</div>}>
        <HomeClient />
      </Suspense>
    </ClientWrapper>
  )
}

