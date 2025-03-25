"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Check, Upload } from "lucide-react"

export function GoogleCloudConfig() {
  const [isConnected, setIsConnected] = useState(false)
  const [projectId, setProjectId] = useState("")
  const [bucketName, setBucketName] = useState("")
  const [region, setRegion] = useState("us-central1")
  const [hasCredentials, setHasCredentials] = useState(false)

  const handleConnect = () => {
    if (projectId && bucketName && hasCredentials) {
      // Simulate connection
      setTimeout(() => {
        setIsConnected(true)
      }, 1000)
    }
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Google Cloud Storage</h3>
          <p className="text-sm text-white/70">Store your converted content in Google Cloud Storage buckets</p>
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
          <Button
            onClick={handleConnect}
            disabled={!projectId || !bucketName || !hasCredentials}
            className="bg-white text-black hover:bg-white/90 disabled:bg-white/50"
          >
            Connect to Google Cloud
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="project-id">Project ID</Label>
            <Input
              id="project-id"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              className="bg-black border-white/20 focus:border-white"
              disabled={isConnected}
            />
            <p className="text-xs text-white/70">Your Google Cloud project ID</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bucket-name">Bucket Name</Label>
            <Input
              id="bucket-name"
              value={bucketName}
              onChange={(e) => setBucketName(e.target.value)}
              className="bg-black border-white/20 focus:border-white"
              disabled={isConnected}
            />
            <p className="text-xs text-white/70">The storage bucket to use</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="region">Region</Label>
            <Select value={region} onValueChange={setRegion} disabled={isConnected}>
              <SelectTrigger id="region" className="bg-black border-white/20">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20">
                <SelectItem value="us-central1">us-central1</SelectItem>
                <SelectItem value="us-east1">us-east1</SelectItem>
                <SelectItem value="us-west1">us-west1</SelectItem>
                <SelectItem value="europe-west1">europe-west1</SelectItem>
                <SelectItem value="asia-east1">asia-east1</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-white/70">The region where your bucket is located</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="credentials">Service Account Key</Label>
            <div className="flex items-center gap-2">
              <Input
                id="credentials"
                type="file"
                className="hidden"
                onChange={() => setHasCredentials(true)}
                disabled={isConnected}
              />
              <Button
                variant="outline"
                className="w-full border-white/20 hover:bg-white/10 flex items-center gap-2"
                onClick={() => document.getElementById("credentials")?.click()}
                disabled={isConnected}
              >
                <Upload className="h-4 w-4" />
                {hasCredentials ? "Key Uploaded" : "Upload JSON Key File"}
              </Button>
            </div>
            <p className="text-xs text-white/70">Upload your service account key JSON file</p>
          </div>
        </div>

        {isConnected && (
          <>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="public-access">Public Access</Label>
                <p className="text-xs text-white/70">Make uploaded files publicly accessible</p>
              </div>
              <Switch id="public-access" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="folder-prefix">Folder Prefix</Label>
                <p className="text-xs text-white/70">Prefix for organizing files in the bucket</p>
              </div>
              <Input
                id="folder-prefix"
                defaultValue="t2x/"
                className="w-[180px] bg-black border-white/20 focus:border-white"
              />
            </div>
          </>
        )}

        <Alert className="bg-black border-white/20">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Your service account key is stored securely and is only used to authenticate with Google Cloud Storage. We
            recommend creating a service account with limited permissions.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

