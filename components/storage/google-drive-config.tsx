"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Check } from "lucide-react"

export function GoogleDriveConfig() {
  const [isConnected, setIsConnected] = useState(false)
  const [isAutoSync, setIsAutoSync] = useState(true)
  const [defaultFolder, setDefaultFolder] = useState("T2X Outputs")
  const [folderStructure, setFolderStructure] = useState("service-date")

  const handleConnect = () => {
    // Simulate OAuth connection
    setTimeout(() => {
      setIsConnected(true)
    }, 1000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Google Drive</h3>
          <p className="text-sm text-white/70">Store your converted content in Google Drive</p>
        </div>
        {isConnected ? (
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-green-500" />
            <span>Connected</span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDisconnect}
              className="ml-4 border-white/20 hover:bg-white/10"
            >
              Disconnect
            </Button>
          </div>
        ) : (
          <Button onClick={handleConnect} className="bg-white text-black hover:bg-white/90">
            Connect to Google Drive
          </Button>
        )}
      </div>

      {isConnected && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="default-folder">Default Folder</Label>
              <Input
                id="default-folder"
                value={defaultFolder}
                onChange={(e) => setDefaultFolder(e.target.value)}
                className="bg-black border-white/20 focus:border-white"
              />
              <p className="text-xs text-white/70">The folder where your converted content will be stored</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="folder-structure">Folder Structure</Label>
              <Select value={folderStructure} onValueChange={setFolderStructure}>
                <SelectTrigger id="folder-structure" className="bg-black border-white/20">
                  <SelectValue placeholder="Select folder structure" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-black border-white/20">
                  <SelectItem value="service-date">By Service, then Date</SelectItem>
                  <SelectItem value="date-service">By Date, then Service</SelectItem>
                  <SelectItem value="flat">Flat Structure</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-white/70">How files will be organized in Google Drive</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="auto-sync">Auto Sync</Label>
              <p className="text-xs text-white/70">Automatically sync converted content to Google Drive</p>
            </div>
            <Switch id="auto-sync" checked={isAutoSync} onCheckedChange={setIsAutoSync} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="create-shareable-link">Create Shareable Link</Label>
              <p className="text-xs text-white/70">Generate a shareable link for each uploaded file</p>
            </div>
            <Switch id="create-shareable-link" defaultChecked />
          </div>

          <Alert className="bg-black border-white/20">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              T2X will only request access to create and modify files in the folders it creates. We will never access
              your other Google Drive content.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  )
}

