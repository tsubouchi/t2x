"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Check } from "lucide-react"

export function GitHubConfig() {
  const [isConnected, setIsConnected] = useState(false)
  const [repository, setRepository] = useState("")
  const [branch, setBranch] = useState("main")
  const [path, setPath] = useState("t2x-outputs")
  const [commitMessage, setCommitMessage] = useState("Add T2X generated content")

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
          <h3 className="text-lg font-medium">GitHub</h3>
          <p className="text-sm text-white/70">Store your converted content in GitHub repositories</p>
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
            Connect to GitHub
          </Button>
        )}
      </div>

      {isConnected && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="repository">Repository</Label>
              <Input
                id="repository"
                value={repository}
                onChange={(e) => setRepository(e.target.value)}
                placeholder="username/repository"
                className="bg-black border-white/20 focus:border-white"
              />
              <p className="text-xs text-white/70">The GitHub repository where your content will be stored</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch">Branch</Label>
              <Input
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="bg-black border-white/20 focus:border-white"
              />
              <p className="text-xs text-white/70">The branch to commit to</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="path">Path</Label>
              <Input
                id="path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="bg-black border-white/20 focus:border-white"
              />
              <p className="text-xs text-white/70">The directory path within the repository</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="commit-message">Commit Message Template</Label>
              <Input
                id="commit-message"
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                className="bg-black border-white/20 focus:border-white"
              />
              <p className="text-xs text-white/70">Template for commit messages</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="create-pr">Create Pull Request</Label>
              <p className="text-xs text-white/70">Create a pull request instead of committing directly</p>
            </div>
            <Switch id="create-pr" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="file-format">File Format</Label>
              <p className="text-xs text-white/70">Format to save files in GitHub</p>
            </div>
            <Select defaultValue="markdown">
              <SelectTrigger id="file-format" className="w-[180px] bg-black border-white/20">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20">
                <SelectItem value="markdown">Markdown</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="raw">Raw Format</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Alert className="bg-black border-white/20">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              T2X will only request access to create and modify files in the specified repository. Make sure you have
              write access to the repository.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  )
}

