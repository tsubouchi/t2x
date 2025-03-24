"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceOptions } from "@/components/service-options"
import { ResultPreview } from "@/components/result-preview"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HardDrive, Github, Cloud, Database } from "lucide-react"
import { ContextAddition } from "@/components/context-addition"

export function TextInput() {
  const [text, setText] = useState("")
  const [isConverting, setIsConverting] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [activeTab, setActiveTab] = useState("input")
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null)

  const handleConvert = () => {
    if (!text.trim()) return

    setIsConverting(true)

    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false)
      setShowResult(true)
      setActiveTab("result")
    }, 1500)
  }

  const handleReset = () => {
    setText("")
    setShowResult(false)
    setActiveTab("input")
  }

  const storageOptions = [
    { id: "none", name: "No auto-save" },
    { id: "google-drive", name: "Google Drive", icon: HardDrive },
    { id: "github", name: "GitHub", icon: Github },
    { id: "google-cloud", name: "Google Cloud", icon: Cloud },
    { id: "aws", name: "AWS S3", icon: Database },
  ]

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-black border border-white/20">
          <TabsTrigger value="input" className="data-[state=active]:bg-white/10">
            Input
          </TabsTrigger>
          <TabsTrigger value="result" className="data-[state=active]:bg-white/10" disabled={!showResult}>
            Result
          </TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="mt-4">
          <div className="space-y-4">
            <ContextAddition />

            <Textarea
              placeholder="Enter your text here to convert..."
              className="min-h-[300px] bg-black border-white/20 focus:border-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Auto-save to:</span>
                <Select value={selectedStorage || "none"} onValueChange={setSelectedStorage}>
                  <SelectTrigger className="w-[180px] bg-black border-white/20">
                    <SelectValue placeholder="Select storage" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    {storageOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        <div className="flex items-center gap-2">
                          {option.icon && <option.icon className="h-4 w-4" />}
                          <span>{option.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <ServiceOptions />

            <div className="flex gap-4">
              <Button
                onClick={handleConvert}
                disabled={isConverting || !text.trim()}
                className="bg-white text-black hover:bg-white/90"
              >
                {isConverting ? "Converting..." : "Convert"}
              </Button>

              <Button variant="outline" onClick={handleReset} className="border-white/20 text-white hover:bg-white/10">
                Reset
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="result" className="mt-4">
          {showResult && <ResultPreview />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

