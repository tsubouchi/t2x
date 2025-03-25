"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Presentation, FileText, Table, Database, Code, ImageIcon, Video, BookOpen } from "lucide-react"

const services = [
  { name: "TTSLIDES", icon: Presentation, href: "/slides" },
  { name: "TTDOCS", icon: FileText, href: "/docs" },
  { name: "TTSHEETS", icon: Table, href: "/sheets" },
  { name: "TTSQL", icon: Database, href: "/sql" },
  { name: "TTCODES", icon: Code, href: "/codes" },
  { name: "TTIMAGES", icon: ImageIcon, href: "/images" },
  { name: "TTVIDEOS", icon: Video, href: "/videos" },
  { name: "TTRESEARCH", icon: BookOpen, href: "/research" },
]

export function NavigationBar() {
  const [activeService, setActiveService] = useState("TTSLIDES")

  return (
    <nav className="border-b border-white/10">
      <div className="flex overflow-x-auto hide-scrollbar">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className={cn(
              "flex items-center gap-2 px-4 py-3 border-b-2 whitespace-nowrap transition-colors",
              activeService === service.name
                ? "border-white text-white"
                : "border-transparent text-white/60 hover:text-white hover:border-white/60",
            )}
            onClick={() => setActiveService(service.name)}
          >
            <service.icon className="h-4 w-4" />
            <span>{service.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

