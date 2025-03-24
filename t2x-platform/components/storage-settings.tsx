"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GoogleDriveConfig } from "@/components/storage/google-drive-config"
import { GitHubConfig } from "@/components/storage/github-config"
import { GoogleCloudConfig } from "@/components/storage/google-cloud-config"
import { AWSConfig } from "@/components/storage/aws-config"
import { HardDrive, Github, Cloud, Database } from "lucide-react"

export function StorageSettings() {
  const [activeTab, setActiveTab] = useState("google-drive")

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Storage Settings</h2>
        <p className="text-white/70">Configure where your converted content will be stored</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black border border-white/20">
          <TabsTrigger value="google-drive" className="data-[state=active]:bg-white/10 flex items-center gap-2">
            <HardDrive className="h-4 w-4" />
            <span className="hidden sm:inline">Google Drive</span>
          </TabsTrigger>
          <TabsTrigger value="github" className="data-[state=active]:bg-white/10 flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </TabsTrigger>
          <TabsTrigger value="google-cloud" className="data-[state=active]:bg-white/10 flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            <span className="hidden sm:inline">Google Cloud</span>
          </TabsTrigger>
          <TabsTrigger value="aws" className="data-[state=active]:bg-white/10 flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">AWS</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="google-drive" className="mt-6">
          <GoogleDriveConfig />
        </TabsContent>

        <TabsContent value="github" className="mt-6">
          <GitHubConfig />
        </TabsContent>

        <TabsContent value="google-cloud" className="mt-6">
          <GoogleCloudConfig />
        </TabsContent>

        <TabsContent value="aws" className="mt-6">
          <AWSConfig />
        </TabsContent>
      </Tabs>

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

