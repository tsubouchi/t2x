'use client'

import { Suspense } from 'react'
import ServiceClient from './client'
import { ServiceType } from './types'

export default function ServiceClientPage({ service }: { service: ServiceType }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-6">
        <Suspense fallback={
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="text-lg mb-2">Loading service...</div>
              <div className="text-sm text-gray-400">Please wait while we prepare your workspace</div>
            </div>
          </div>
        }>
          <ServiceClient service={service} />
        </Suspense>
      </div>
    </div>
  )
} 