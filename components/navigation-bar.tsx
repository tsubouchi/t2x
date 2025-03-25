"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { validServices } from '@/app/[service]/types'

interface ServiceInfo {
  name: string
  icon: string
}

const serviceInfo: Record<string, ServiceInfo> = {
  slides: {
    name: 'TTSLIDES',
    icon: '📊'
  },
  docs: {
    name: 'TTDOCS',
    icon: '📝'
  },
  sheets: {
    name: 'TTSHEETS',
    icon: '📈'
  },
  sql: {
    name: 'TTSQL',
    icon: '💾'
  },
  codes: {
    name: 'TTCODES',
    icon: '💻'
  },
  images: {
    name: 'TTIMAGES',
    icon: '🖼️'
  },
  videos: {
    name: 'TTVIDEOS',
    icon: '🎥'
  },
  research: {
    name: 'TTRESEARCH',
    icon: '📚'
  }
}

export function NavigationBar() {
  const pathname = usePathname()
  const currentService = pathname.split('/')[1]

  return (
    <div className="flex items-center space-x-8 py-2 overflow-x-auto">
      {validServices.map((service) => (
        <Link
          key={service}
          href={`/${service}`}
          className={`flex items-center space-x-2 py-2 border-b-2 ${
            service === currentService
              ? 'border-white text-white'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <span role="img" aria-label={service}>
            {serviceInfo[service].icon}
          </span>
          <span>{serviceInfo[service].name}</span>
        </Link>
      ))}
    </div>
  )
}

