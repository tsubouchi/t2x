"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SettingsPanel() {
  const [engine, setEngine] = useState("gpt-4")

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <p className="text-white/70">Configure your T2X platform settings</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Conversion Engine</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="engine">Select Engine</Label>
            <Select value={engine} onValueChange={setEngine}>
              <SelectTrigger id="engine" className="bg-black border-white/20">
                <SelectValue placeholder="Select engine" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20">
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
                <SelectItem value="claude">Claude</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="api-key">API Key (if applicable)</Label>
            <input
              id="api-key"
              type="password"
              className="w-full p-2 rounded-md bg-black border border-white/20 focus:border-white focus:outline-none"
              placeholder="Enter API key"
            />
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Service-specific Settings</h3>

        <div className="space-y-4">
          <h4 className="font-medium">TTSLIDES</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="slides-theme">Default Theme</Label>
              <Select defaultValue="dark">
                <SelectTrigger id="slides-theme" className="w-[180px] bg-black border-white/20">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="slides-layout">Default Layout</Label>
              <Select defaultValue="standard">
                <SelectTrigger id="slides-layout" className="w-[180px] bg-black border-white/20">
                  <SelectValue placeholder="Select layout" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="widescreen">Widescreen</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">TTDOCS</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="docs-style">Default Style</Label>
              <Select defaultValue="report">
                <SelectTrigger id="docs-style" className="w-[180px] bg-black border-white/20">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="report">Report</SelectItem>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="letter">Letter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="auto-section">Auto Section Splitting</Label>
                <p className="text-xs text-white/70">Automatically split content into sections</p>
              </div>
              <Switch id="auto-section" defaultChecked />
            </div>
          </div>
        </div>

        {/* Add more service-specific settings as needed */}
      </div>

      <Separator className="bg-white/20" />

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="border-white/20 hover:bg-white/10">
          Cancel
        </Button>
        <Button className="bg-white text-black hover:bg-white/90">Save Settings</Button>
      </div>
    </div>
  )
}

