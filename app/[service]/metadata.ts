import { Metadata } from 'next'
import { serviceNames } from './types'

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = params.service.toLowerCase()
  const serviceName = serviceNames[service as keyof typeof serviceNames] || service.toUpperCase()
  return {
    title: `t2x - ${serviceName}`,
    description: 'Convert text to everything you need',
  }
} 