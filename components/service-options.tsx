"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ServiceOptions() {
  const [isBasicOpen, setIsBasicOpen] = useState(false)
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("TTSLIDES")
  const [activeTab, setActiveTab] = useState("basic")

  const toggleBasicOptions = () => {
    setIsBasicOpen(!isBasicOpen)
  }

  const toggleAdvancedOptions = () => {
    setIsAdvancedOpen(!isAdvancedOpen)
  }

  const renderBasicOptions = () => {
    switch (selectedService) {
      case "TTSLIDES":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="slide-layout">Slide Layout</Label>
              <Select defaultValue="standard">
                <SelectTrigger id="slide-layout" className="bg-black border-white/20">
                  <SelectValue placeholder="Select layout" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="widescreen">Widescreen</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="slide-theme">Theme</Label>
              <Select defaultValue="dark">
                <SelectTrigger id="slide-theme" className="bg-black border-white/20">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case "TTDOCS":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="doc-style">Document Style</Label>
              <Select defaultValue="report">
                <SelectTrigger id="doc-style" className="bg-black border-white/20">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="report">Report</SelectItem>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="letter">Letter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="section-splitting">Section Splitting</Label>
              <Select defaultValue="auto">
                <SelectTrigger id="section-splitting" className="bg-black border-white/20">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="auto">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case "TTSHEETS":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sheet-format">Sheet Format</Label>
              <Select defaultValue="table">
                <SelectTrigger id="sheet-format" className="bg-black border-white/20">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="table">Table</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="pivot">Pivot Table</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="data-type">Data Type</Label>
              <Select defaultValue="text">
                <SelectTrigger id="data-type" className="bg-black border-white/20">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="numeric">Numeric</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case "TTSQL":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sql-dialect">SQL Dialect</Label>
              <Select defaultValue="postgresql">
                <SelectTrigger id="sql-dialect" className="bg-black border-white/20">
                  <SelectValue placeholder="Select dialect" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="postgresql">PostgreSQL</SelectItem>
                  <SelectItem value="mysql">MySQL</SelectItem>
                  <SelectItem value="sqlserver">SQL Server</SelectItem>
                  <SelectItem value="oracle">Oracle</SelectItem>
                  <SelectItem value="sqlite">SQLite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="query-type">Query Type</Label>
              <Select defaultValue="select">
                <SelectTrigger id="query-type" className="bg-black border-white/20">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="select">SELECT</SelectItem>
                  <SelectItem value="insert">INSERT</SelectItem>
                  <SelectItem value="update">UPDATE</SelectItem>
                  <SelectItem value="delete">DELETE</SelectItem>
                  <SelectItem value="create">CREATE</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case "TTCODES":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="programming-language">Programming Language</Label>
              <Select defaultValue="javascript">
                <SelectTrigger id="programming-language" className="bg-black border-white/20">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="code-style">Code Style</Label>
              <Select defaultValue="standard">
                <SelectTrigger id="code-style" className="bg-black border-white/20">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="functional">Functional</SelectItem>
                  <SelectItem value="object-oriented">Object-Oriented</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case "TTIMAGES":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="image-style">Image Style</Label>
              <Select defaultValue="realistic">
                <SelectTrigger id="image-style" className="bg-black border-white/20">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="realistic">Realistic</SelectItem>
                  <SelectItem value="cartoon">Cartoon</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="sketch">Sketch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="image-size">Image Size</Label>
              <Select defaultValue="medium">
                <SelectTrigger id="image-size" className="bg-black border-white/20">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="small">Small (512x512)</SelectItem>
                  <SelectItem value="medium">Medium (1024x1024)</SelectItem>
                  <SelectItem value="large">Large (2048x2048)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case "TTVIDEOS":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="video-style">Video Style</Label>
              <Select defaultValue="standard">
                <SelectTrigger id="video-style" className="bg-black border-white/20">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="animated">Animated</SelectItem>
                  <SelectItem value="slideshow">Slideshow</SelectItem>
                  <SelectItem value="kinetic">Kinetic Typography</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="video-duration">Duration</Label>
              <Select defaultValue="short">
                <SelectTrigger id="video-duration" className="bg-black border-white/20">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="short">Short (15-30s)</SelectItem>
                  <SelectItem value="medium">Medium (30-60s)</SelectItem>
                  <SelectItem value="long">Long (1-2 min)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case "TTRESEARCH":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="research-type">Research Type</Label>
              <Select defaultValue="summary">
                <SelectTrigger id="research-type" className="bg-black border-white/20">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="summary">Summary</SelectItem>
                  <SelectItem value="analysis">Analysis</SelectItem>
                  <SelectItem value="comparison">Comparison</SelectItem>
                  <SelectItem value="literature">Literature Review</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="research-depth">Research Depth</Label>
              <Select defaultValue="standard">
                <SelectTrigger id="research-depth" className="bg-black border-white/20">
                  <SelectValue placeholder="Select depth" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/20">
                  <SelectItem value="brief">Brief</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                  <SelectItem value="comprehensive">Comprehensive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      default:
        return <div className="text-white/70 italic">Select a service to see specific options</div>
    }
  }

  const renderAdvancedOptions = () => {
    switch (selectedService) {
      case "TTSLIDES":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Slide Structure</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="slide-count">Slide Count</Label>
                  <div className="flex items-center gap-4">
                    <Slider id="slide-count" defaultValue={[10]} max={50} step={1} className="flex-1" />
                    <span className="w-12 text-center">10</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content-density">Content Density</Label>
                  <Select defaultValue="balanced">
                    <SelectTrigger id="content-density" className="bg-black border-white/20">
                      <SelectValue placeholder="Select density" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="detailed">Detailed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Visual Elements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-images">Auto-generate Images</Label>
                  <Switch id="auto-images" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="include-charts">Include Charts</Label>
                  <Switch id="include-charts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations">Include Animations</Label>
                  <Switch id="animations" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="speaker-notes">Generate Speaker Notes</Label>
                  <Switch id="speaker-notes" defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Export Options</h4>
              <RadioGroup defaultValue="pptx">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pptx" id="pptx" />
                  <Label htmlFor="pptx">PowerPoint (.pptx)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pdf" id="pdf" />
                  <Label htmlFor="pdf">PDF (.pdf)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="google-slides" id="google-slides" />
                  <Label htmlFor="google-slides">Google Slides</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )
      case "TTDOCS":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Document Structure</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doc-format">Document Format</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="doc-format" className="bg-black border-white/20">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language-style">Language Style</Label>
                  <Select defaultValue="professional">
                    <SelectTrigger id="language-style" className="bg-black border-white/20">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Content Elements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-toc">Auto Table of Contents</Label>
                  <Switch id="auto-toc" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="include-references">Include References</Label>
                  <Switch id="include-references" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="include-images">Include Images</Label>
                  <Switch id="include-images" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="include-footnotes">Include Footnotes</Label>
                  <Switch id="include-footnotes" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Export Options</h4>
              <RadioGroup defaultValue="docx">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="docx" id="docx" />
                  <Label htmlFor="docx">Word Document (.docx)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pdf" id="pdf-doc" />
                  <Label htmlFor="pdf-doc">PDF (.pdf)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="markdown" id="markdown" />
                  <Label htmlFor="markdown">Markdown (.md)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="google-docs" id="google-docs" />
                  <Label htmlFor="google-docs">Google Docs</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )
      // Add other service advanced options as needed
      default:
        return <div className="text-white/70 italic">Select a service to see advanced options</div>
    }
  }

  return (
    <div className="border border-white/20 rounded-md bg-black/50 p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Service Options</h3>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-[180px] bg-black border-white/20">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent className="bg-black border-white/20">
              <SelectItem value="TTSLIDES">TTSLIDES</SelectItem>
              <SelectItem value="TTDOCS">TTDOCS</SelectItem>
              <SelectItem value="TTSHEETS">TTSHEETS</SelectItem>
              <SelectItem value="TTSQL">TTSQL</SelectItem>
              <SelectItem value="TTCODES">TTCODES</SelectItem>
              <SelectItem value="TTIMAGES">TTIMAGES</SelectItem>
              <SelectItem value="TTVIDEOS">TTVideos</SelectItem>
              <SelectItem value="TTRESEARCH">TTRESEARCH</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div
            className="flex items-center justify-between w-full border border-white/20 p-2 hover:bg-white/10 cursor-pointer"
            onClick={toggleBasicOptions}
          >
            <span>Basic Options</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isBasicOpen ? "transform rotate-180" : ""}`} />
          </div>

          {isBasicOpen && <div className="border border-white/20 p-4 rounded-md">{renderBasicOptions()}</div>}
        </div>

        <div className="space-y-4">
          <div
            className="flex items-center justify-between w-full border border-white/20 p-2 hover:bg-white/10 cursor-pointer"
            onClick={toggleAdvancedOptions}
          >
            <span>Advanced Options</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isAdvancedOpen ? "transform rotate-180" : ""}`} />
          </div>

          {isAdvancedOpen && (
            <div className="border border-white/20 p-4 rounded-md">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 bg-black border border-white/20">
                  <TabsTrigger value="basic" className="data-[state=active]:bg-white/10">
                    Format
                  </TabsTrigger>
                  <TabsTrigger value="content" className="data-[state=active]:bg-white/10">
                    Content
                  </TabsTrigger>
                  <TabsTrigger value="export" className="data-[state=active]:bg-white/10">
                    Export
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="mt-4">
                  {renderAdvancedOptions()}
                </TabsContent>
                <TabsContent value="content" className="mt-4">
                  {renderAdvancedOptions()}
                </TabsContent>
                <TabsContent value="export" className="mt-4">
                  {renderAdvancedOptions()}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

