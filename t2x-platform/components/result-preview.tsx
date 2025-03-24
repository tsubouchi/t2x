"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Edit, RefreshCw, Save } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { StorageSelector } from "@/components/storage-selector"

export function ResultPreview() {
  const [activeTab, setActiveTab] = useState("preview")
  const [isStorageDialogOpen, setIsStorageDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Conversion Result</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 hover:bg-white/10"
            onClick={() => setIsStorageDialogOpen(true)}
          >
            <Save className="h-4 w-4 mr-2" />
            Save to Cloud
          </Button>
          <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reconvert
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black border border-white/20">
          <TabsTrigger value="preview" className="data-[state=active]:bg-white/10">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="data-[state=active]:bg-white/10">
            Code
          </TabsTrigger>
          <TabsTrigger value="data" className="data-[state=active]:bg-white/10">
            Data
          </TabsTrigger>
          <TabsTrigger value="export" className="data-[state=active]:bg-white/10">
            Export
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-video border border-white/20 rounded-md flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <p className="text-white/70">Preview {item}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-white/20 rounded-md p-4 min-h-[300px] flex items-center justify-center">
            <p className="text-white/70">Detailed preview will appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <div className="border border-white/20 rounded-md p-4 min-h-[400px] bg-black font-mono">
            <pre className="text-white/80">
              {`// Generated code
function createPresentation() {
  const slides = [];
  
  // Title slide
  slides.push({
    title: "Presentation Title",
    subtitle: "Generated by T2X Platform"
  });
  
  // Content slides
  slides.push({
    title: "Key Points",
    bullets: [
      "First important point",
      "Second important point",
      "Third important point"
    ]
  });
  
  return slides;
}`}
            </pre>
          </div>
        </TabsContent>

        <TabsContent value="data" className="mt-4">
          <div className="border border-white/20 rounded-md p-4 min-h-[400px] bg-black">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-white/20 p-2 text-left">ID</th>
                    <th className="border border-white/20 p-2 text-left">Title</th>
                    <th className="border border-white/20 p-2 text-left">Content</th>
                    <th className="border border-white/20 p-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <tr key={row}>
                      <td className="border border-white/20 p-2">{row}</td>
                      <td className="border border-white/20 p-2">Slide {row}</td>
                      <td className="border border-white/20 p-2">Content for slide {row}</td>
                      <td className="border border-white/20 p-2">{row === 1 ? "Title" : "Content"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="export" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/20 rounded-md p-4 hover:bg-white/5 transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">PowerPoint (.pptx)</h3>
              <p className="text-white/70 text-sm">Export as Microsoft PowerPoint presentation</p>
            </div>
            <div className="border border-white/20 rounded-md p-4 hover:bg-white/5 transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">PDF (.pdf)</h3>
              <p className="text-white/70 text-sm">Export as PDF document</p>
            </div>
            <div className="border border-white/20 rounded-md p-4 hover:bg-white/5 transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">Google Slides</h3>
              <p className="text-white/70 text-sm">Export to Google Slides</p>
            </div>
            <div className="border border-white/20 rounded-md p-4 hover:bg-white/5 transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">HTML</h3>
              <p className="text-white/70 text-sm">Export as HTML presentation</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isStorageDialogOpen} onOpenChange={setIsStorageDialogOpen}>
        <DialogContent className="bg-black border-white/20 text-white">
          <DialogHeader>
            <DialogTitle>Save to Cloud Storage</DialogTitle>
            <DialogDescription className="text-white/70">
              Select where you want to save your converted content
            </DialogDescription>
          </DialogHeader>
          <StorageSelector onClose={() => setIsStorageDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

