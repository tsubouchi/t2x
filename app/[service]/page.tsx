import { Metadata } from 'next'
import ServiceClient from './client'

export const metadata: Metadata = {
  title: 't2x - Text to Everything',
  description: 'Convert text to everything you need',
}

const validServices = ["slides", "docs", "sheets", "sql", "codes", "images", "videos", "research"]

export function generateStaticParams() {
  return validServices.map((service) => ({
    service,
  }))
}

export default function ServicePage({ params }: { params: { service: string } }) {
  return <ServiceClient service={params.service} />
}

