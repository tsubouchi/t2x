'use client'

import { NavigationBar } from "@/components/navigation-bar"
import { StorageSettings } from "@/components/storage-settings"
import { UserMenu } from "@/components/user-menu"
import { Suspense } from "react"

export default function StoragePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">t2x</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <UserMenu />
          </Suspense>
        </div>
        <NavigationBar />
        <div className="mt-8">
          <Suspense fallback={<div>Loading storage settings...</div>}>
            <StorageSettings />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

