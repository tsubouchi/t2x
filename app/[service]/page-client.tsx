'use client'

import { ServiceType } from './types'
import ServiceClientPage from './client-page'

export default function ServicePageClient({ service }: { service: ServiceType }) {
  return <ServiceClientPage service={service} />
} 