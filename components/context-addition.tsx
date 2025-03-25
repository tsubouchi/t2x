"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, Image, Link, Github, Database, Plus, X, ChevronDown, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

export function ContextAddition() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("attachments")
  const [attachments, setAttachments] = useState<string[]>([])
  const [images, setImages] = useState<string[]>([])
  const [urls, setUrls] = useState<string[]>([])
  const [githubRepos, setGithubRepos] = useState<string[]>([])
  const [databases, setDatabases] = useState<string[]>([])
  const [newUrl, setNewUrl] = useState("")
  const [newGithubRepo, setNewGithubRepo] = useState("")
  const [newDatabase, setNewDatabase] = useState("")

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "attachment" | "image") => {
    const files = e.target.files
    if (!files) return

    // Simulate file upload
    Array.from(files).forEach((file) => {
      if (type === "attachment") {
        setAttachments((prev) => [...prev, file.name])
      } else {
        setImages((prev) => [...prev, file.name])
      }
    })

    // Reset input
    e.target.value = ""
  }

  const handleAddUrl = () => {
    if (!newUrl.trim()) return
    setUrls((prev) => [...prev, newUrl])
    setNewUrl("")
  }

  const handleAddGithubRepo = () => {
    if (!newGithubRepo.trim()) return
    setGithubRepos((prev) => [...prev, newGithubRepo])
    setNewGithubRepo("")
  }

  const handleAddDatabase = () => {
    if (!newDatabase.trim()) return
    setDatabases((prev) => [...prev, newDatabase])
    setNewDatabase("")
  }

  const handleRemoveItem = (index: number, type: "attachment" | "image" | "url" | "github" | "database") => {
    switch (type) {
      case "attachment":
        setAttachments((prev) => prev.filter((_, i) => i !== index))
        break
      case "image":
        setImages((prev) => prev.filter((_, i) => i !== index))
        break
      case "url":
        setUrls((prev) => prev.filter((_, i) => i !== index))
        break
      case "github":
        setGithubRepos((prev) => prev.filter((_, i) => i !== index))
        break
      case "database":
        setDatabases((prev) => prev.filter((_, i) => i !== index))
        break
    }
  }

  const getTotalContextItems = () => {
    return attachments.length + images.length + urls.length + githubRepos.length + databases.length
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border border-white/20 rounded-md bg-black/50 overflow-hidden w-full">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 w-full"
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">Context Addition</h3>
          {getTotalContextItems() > 0 && <Badge className="bg-white text-black">{getTotalContextItems()}</Badge>}
        </div>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="px-4 pb-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 bg-black border border-white/20">
              <TabsTrigger value="attachments" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <FileUp className="h-4 w-4" />
                <span className="hidden sm:inline">Attachments</span>
                {attachments.length > 0 && <Badge className="ml-1 bg-white text-black">{attachments.length}</Badge>}
              </TabsTrigger>
              <TabsTrigger value="images" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <Image className="h-4 w-4" />
                <span className="hidden sm:inline">Images</span>
                {images.length > 0 && <Badge className="ml-1 bg-white text-black">{images.length}</Badge>}
              </TabsTrigger>
              <TabsTrigger value="urls" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <Link className="h-4 w-4" />
                <span className="hidden sm:inline">URLs</span>
                {urls.length > 0 && <Badge className="ml-1 bg-white text-black">{urls.length}</Badge>}
              </TabsTrigger>
              <TabsTrigger value="github" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
                {githubRepos.length > 0 && <Badge className="ml-1 bg-white text-black">{githubRepos.length}</Badge>}
              </TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-white/10 flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Database</span>
                {databases.length > 0 && <Badge className="ml-1 bg-white text-black">{databases.length}</Badge>}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="attachments" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label htmlFor="file-upload" className="sr-only">
                    Upload Files
                  </Label>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, "attachment")}
                  />
                  <Button
                    variant="outline"
                    className="w-full border-white/20 hover:bg-white/10 flex items-center gap-2"
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    <FileUp className="h-4 w-4" />
                    Upload Files
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black border-white/20 text-white">
                        <p>Upload documents, PDFs, spreadsheets, etc.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {attachments.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Uploaded Files</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 border border-white/20 rounded-md"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <FileUp className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{file}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full hover:bg-white/10"
                            onClick={() => handleRemoveItem(index, "attachment")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="images" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label htmlFor="image-upload" className="sr-only">
                    Upload Images
                  </Label>
                  <Input
                    id="image-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, "image")}
                  />
                  <Button
                    variant="outline"
                    className="w-full border-white/20 hover:bg-white/10 flex items-center gap-2"
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    <Image className="h-4 w-4" />
                    Upload Images
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black border-white/20 text-white">
                        <p>Upload images for context (JPG, PNG, etc.)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {images.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Uploaded Images</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group aspect-square border border-white/20 rounded-md bg-white/5 flex items-center justify-center"
                        >
                          <Image className="h-8 w-8 text-white/50" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full absolute top-1 right-1 opacity-0 group-hover:opacity-100 hover:bg-white/10"
                            onClick={() => handleRemoveItem(index, "image")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <span className="absolute bottom-1 left-1 right-1 text-xs truncate text-white/70">
                            {image}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="urls" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Enter URL (e.g., https://example.com)"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    className="bg-black border-white/20 focus:border-white"
                  />
                  <Button
                    variant="outline"
                    className="border-white/20 hover:bg-white/10"
                    onClick={handleAddUrl}
                    disabled={!newUrl.trim()}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black border-white/20 text-white">
                        <p>Add URLs to websites for context</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {urls.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Added URLs</h4>
                    <div className="space-y-2">
                      {urls.map((url, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 border border-white/20 rounded-md"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Link className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{url}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full hover:bg-white/10"
                            onClick={() => handleRemoveItem(index, "url")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="github" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Enter GitHub repo (e.g., username/repo)"
                    value={newGithubRepo}
                    onChange={(e) => setNewGithubRepo(e.target.value)}
                    className="bg-black border-white/20 focus:border-white"
                  />
                  <Button
                    variant="outline"
                    className="border-white/20 hover:bg-white/10"
                    onClick={handleAddGithubRepo}
                    disabled={!newGithubRepo.trim()}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black border-white/20 text-white">
                        <p>Add GitHub repositories for code context</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {githubRepos.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Added GitHub Repositories</h4>
                    <div className="space-y-2">
                      {githubRepos.map((repo, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 border border-white/20 rounded-md"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Github className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{repo}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full hover:bg-white/10"
                            onClick={() => handleRemoveItem(index, "github")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="database" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Enter database connection string or name"
                    value={newDatabase}
                    onChange={(e) => setNewDatabase(e.target.value)}
                    className="bg-black border-white/20 focus:border-white"
                  />
                  <Button
                    variant="outline"
                    className="border-white/20 hover:bg-white/10"
                    onClick={handleAddDatabase}
                    disabled={!newDatabase.trim()}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black border-white/20 text-white">
                        <p>Add database connections for data context</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {databases.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Added Databases</h4>
                    <div className="space-y-2">
                      {databases.map((db, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 border border-white/20 rounded-md"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Database className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{db}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full hover:bg-white/10"
                            onClick={() => handleRemoveItem(index, "database")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

