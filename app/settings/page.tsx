import { Suspense } from 'react'
import ClientWrapper from '@/components/client-wrapper'
import { SettingsPanel } from '@/components/settings-panel'

export default function SettingsPage() {
  return (
    <ClientWrapper>
      <Suspense fallback={<div>Loading settings...</div>}>
        <SettingsPanel />
      </Suspense>
    </ClientWrapper>
  )
}

