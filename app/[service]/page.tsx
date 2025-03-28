import { Metadata } from 'next'
import { validServices, ServiceType, serviceNames } from './types'
import ServiceClient from './page-client'

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = params.service.toLowerCase()
  const serviceName = serviceNames[service as keyof typeof serviceNames] || service.toUpperCase()
  return {
    title: `t2x - ${serviceName}`,
    description: 'Convert text to everything you need',
  }
}

export async function generateStaticParams() {
  return validServices.map((service) => ({
    service,
  }))
}

export const dynamic = 'error'
export const dynamicParams = false

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = params.service.toLowerCase()
  if (!validServices.includes(service as ServiceType)) {
    return null
  }

  return <ServiceClient service={service as ServiceType} />
}

