'use client'

import { NavigationBar } from "@/components/navigation-bar"
import { TextInput } from "@/components/text-input"
import { UserMenu } from "@/components/user-menu"

interface ServiceContentProps {
  serviceName: string
  description: string
}

export function ServiceContent({ serviceName, description }: ServiceContentProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">t2x</h1>
          <UserMenu />
        </div>
        <NavigationBar />
        <div className="mt-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">{serviceName}</h2>
            <p className="text-white/70 mt-1">{description}</p>
          </div>
          <TextInput />
        </div>
      </div>
    </main>
  )
} 