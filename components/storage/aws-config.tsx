"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Check } from "lucide-react"

export function AWSConfig() {
  const [isConnected, setIsConnected] = useState(false)
  const [accessKeyId, setAccessKeyId] = useState("")
  const [secretAccessKey, setSecretAccessKey] = useState("")
  const [bucketName, setBucketName] = useState("")
  const [region, setRegion] = useState("us-east-1")

  const handleConnect = () => {
    if (accessKeyId && secretAccessKey && bucketName) {
      // Simulate connection
      setTimeout(() => {
        setIsConnected(true)
      }, 1000)
    }
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setSecretAccessKey("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">AWS S3</h3>
          <p className="text-sm text-white/70">Store your converted content in Amazon S3 buckets</p>
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
            disabled={!accessKeyId || !secretAccessKey || !bucketName}
            className="bg-white text-black hover:bg-white/90 disabled:bg-white/50"
          >
            Connect to AWS
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="access-key-id">Access Key ID</Label>
            <Input
              id="access-key-id"
              value={accessKeyId}
              onChange={(e) => setAccessKeyId(e.target.value)}
              className="bg-black border-white/20 focus:border-white"
              disabled={isConnected}
            />
            <p className="text-xs text-white/70">Your AWS access key ID</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="secret-access-key">Secret Access Key</Label>
            <Input
              id="secret-access-key"
              type="password"
              value={secretAccessKey}
              onChange={(e) => setSecretAccessKey(e.target.value)}
              className="bg-black border-white/20 focus:border-white"
              disabled={isConnected}
            />
            <p className="text-xs text-white/70">Your AWS secret access key</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="bucket-name">Bucket Name</Label>
            <Input
              id="bucket-name"
              value={bucketName}
              onChange={(e) => setBucketName(e.target.value)}
              className="bg-black border-white/20 focus:border-white"
              disabled={isConnected}
            />
            <p className="text-xs text-white/70">The S3 bucket to use</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="region">Region</Label>
            <Select value={region} onValueChange={setRegion} disabled={isConnected}>
              <SelectTrigger id="region" className="bg-black border-white/20">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20">
                <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                <SelectItem value="us-east-2">US East (Ohio)</SelectItem>
                <SelectItem value="us-west-1">US West (N. California)</SelectItem>
                <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
                <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
                <SelectItem value="eu-central-1">EU (Frankfurt)</SelectItem>
                <SelectItem value="ap-northeast-1">Asia Pacific (Tokyo)</SelectItem>
                <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-white/70">The region where your bucket is located</p>
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
                <Label htmlFor="storage-class">Storage Class</Label>
                <p className="text-xs text-white/70">S3 storage class for uploaded files</p>
              </div>
              <Select defaultValue="STANDARD">
                <SelectTrigger id="storage-class" className="w-[180px] bg-black border-white/20">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="STANDARD">Standard</SelectItem>
                  <SelectItem value="REDUCED_REDUNDANCY">Reduced Redundancy</SelectItem>
                  <SelectItem value="STANDARD_IA">Standard-IA</SelectItem>
                  <SelectItem value="ONEZONE_IA">One Zone-IA</SelectItem>
                  <SelectItem value="GLACIER">Glacier</SelectItem>
                </SelectContent>
              </Select>
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
            Your AWS credentials are stored securely. We recommend using an IAM user with limited permissions to only
            the specified S3 bucket.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

