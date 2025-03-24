"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HardDrive, Github, Cloud, Database, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StorageSelectorProps {
  onClose: () => void
}

export function StorageSelector({ onClose }: StorageSelectorProps) {
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null)
  const [fileName, setFileName] = useState("t2x-output")
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    if (!selectedStorage || !fileName) return

    setIsSaving(true)

    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false)
      setIsSaved(true)

      // Close dialog after showing success
      setTimeout(() => {
        onClose()
      }, 1500)
    }, 1500)
  }

  const storageOptions = [
    { id: "google-drive", name: "Google Drive", icon: HardDrive },
    { id: "github", name: "GitHub", icon: Github },
    { id: "google-cloud", name: "Google Cloud", icon: Cloud },
    { id: "aws", name: "AWS S3", icon: Database },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {storageOptions.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className={`flex items-center justify-start gap-3 p-4 h-auto border-white/20 hover:bg-white/10 ${
              selectedStorage === option.id ? "bg-white/10 border-white" : ""
            }`}
            onClick={() => setSelectedStorage(option.id)}
          >
            <option.icon className="h-5 w-5" />
            <span>{option.name}</span>
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        <Label htmlFor="file-name">File Name</Label>
        <Input
          id="file-name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="bg-black border-white/20 focus:border-white"
          disabled={isSaving || isSaved}
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="border-white/20 hover:bg-white/10" onClick={onClose} disabled={isSaving}>
          Cancel
        </Button>
        <Button
          className="bg-white text-black hover:bg-white/90 disabled:bg-white/50"
          onClick={handleSave}
          disabled={!selectedStorage || !fileName || isSaving || isSaved}
        >
          {isSaving ? (
            "Saving..."
          ) : isSaved ? (
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Saved
            </span>
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </div>
  )
}

