import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Palette,
  Type,
  Grid,
  Zap,
  Play,
  Volume2,
  Lightbulb,
  MessageCircle,
  Target,
  Users,
  BookOpen,
  CheckCircle,
  Download
} from "lucide-react";

export default function EBookStyleGuide() {
  const colorPalette = [
    { name: "Primary Blue", hex: "#1857A4", class: "bg-[#1857A4]", usage: "Main brand color, buttons, links" },
    { name: "Secondary Blue", hex: "#4592D1", class: "bg-[#4592D1]", usage: "Gradients, accents" },
    { name: "Light Blue", hex: "#E3F0FF", class: "bg-[#E3F0FF]", usage: "Backgrounds, highlights" },
    { name: "Success Green", hex: "#10B981", class: "bg-green-500", usage: "Completed states, positive actions" },
    { name: "Warning Yellow", hex: "#F59E0B", class: "bg-yellow-500", usage: "Attention, reflection sections" },
    { name: "Gray 900", hex: "#111827", class: "bg-gray-900", usage: "Primary text, headings" },
    { name: "Gray 600", hex: "#4B5563", class: "bg-gray-600", usage: "Secondary text" },
    { name: "Gray 100", hex: "#F3F4F6", class: "bg-gray-100", usage: "Subtle backgrounds" }
  ];

  const typography = [
    { name: "Hero Heading", size: "text-4xl md:text-5xl", weight: "font-bold", usage: "Main page titles" },
    { name: "Section Heading", size: "text-3xl md:text-4xl", weight: "font-bold", usage: "Section titles" },
    { name: "Chapter Title", size: "text-2xl", weight: "font-bold", usage: "Chapter headings" },
    { name: "Body Large", size: "text-xl", weight: "font-normal", usage: "Introductory text" },
    { name: "Body Text", size: "text-lg", weight: "font-normal", usage: "Main content" },
    { name: "Small Text", size: "text-sm", weight: "font-normal", usage: "Captions, metadata" }
  ];

  const components = [
    {
      name: "Progress Indicator",
      description: "Shows learning progress through chapters",
      element: (
        <div className="w-full">
          <div className="bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <p className="text-sm text-gray-600">2 of 6 chapters completed</p>
        </div>
      )
    },
    {
      name: "Audio Player",
      description: "Interactive audio content from webinars",
      element: (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Play className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Chapter Audio</h4>
                  <p className="text-xs text-gray-600">Tim Catchim • 8:32</p>
                </div>
              </div>
              <Button size="sm">Play</Button>
            </div>
          </CardContent>
        </Card>
      )
    },
    {
      name: "Key Insight Box",
      description: "Highlighted important concepts",
      element: (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-3 w-3 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Key Insight</h4>
                <p className="text-sm text-gray-700">Important concept highlighted for emphasis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    },
    {
      name: "Chapter Status Badge",
      description: "Visual status indicators for learning progress",
      element: (
        <div className="flex space-x-2">
          <Badge className="bg-green-100 text-green-800">Completed</Badge>
          <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
          <Badge variant="outline" className="text-gray-500">Locked</Badge>
        </div>
      )
    },
    {
      name: "Discussion Section",
      description: "Reflection questions and community interaction",
      element: (
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-3 w-3 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Discussion Questions</h4>
                <p className="text-sm text-gray-700">Reflection prompts for deeper learning</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }
  ];

  const iconLibrary = [
    { icon: Play, name: "Play", usage: "Audio/video content" },
    { icon: Volume2, name: "Volume", usage: "Audio controls" },
    { icon: Lightbulb, name: "Lightbulb", usage: "Key insights" },
    { icon: MessageCircle, name: "Message Circle", usage: "Discussion/comments" },
    { icon: CheckCircle, name: "Check Circle", usage: "Completed items" },
    { icon: Target, name: "Target", usage: "Goals/objectives" },
    { icon: Users, name: "Users", usage: "Community/team" },
    { icon: BookOpen, name: "Book Open", usage: "Reading/content" },
    { icon: Download, name: "Download", usage: "Resources" },
    { icon: Zap, name: "Zap", usage: "Brand icon/energy" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Design System
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              TrimTab eBook
              <span className="block trimtab-gradient bg-clip-text text-transparent">
                Style Guide
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design system for the interactive digital learning experience, 
              featuring modern aesthetics, intuitive navigation, and engaging multimedia elements.
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Palette className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Color Palette</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalette.map((color, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className={`w-full h-20 rounded-lg ${color.class} mb-4`}></div>
                  <h3 className="font-semibold text-gray-900 mb-1">{color.name}</h3>
                  <p className="text-sm text-gray-600 font-mono mb-2">{color.hex}</p>
                  <p className="text-xs text-gray-500">{color.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Type className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Typography</h2>
          </div>
          
          <div className="space-y-8">
            {typography.map((type, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Classes: <code className="bg-gray-100 px-2 py-1 rounded">{type.size} {type.weight}</code>
                      </p>
                      <p className="text-xs text-gray-500">{type.usage}</p>
                    </div>
                    <div>
                      <p className={`${type.size} ${type.weight} text-gray-900`}>
                        The quick brown fox jumps over the lazy dog
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UI Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Grid className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">UI Components</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {component.element}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Library */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Zap className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Icon Library</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
            {iconLibrary.map((iconItem, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <iconItem.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">{iconItem.name}</h4>
                  <p className="text-xs text-gray-500">{iconItem.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Design Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="trimtab-card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Clarity & Focus</h3>
                <p className="text-gray-600">
                  Clean layouts with generous white space ensure content remains the primary focus, 
                  reducing cognitive load for learners.
                </p>
              </CardContent>
            </Card>
            
            <Card className="trimtab-card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Forward Movement</h3>
                <p className="text-gray-600">
                  Progressive disclosure and clear navigation create a sense of momentum 
                  through the learning journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="trimtab-card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Integration</h3>
                <p className="text-gray-600">
                  Interactive elements and discussion prompts encourage community 
                  engagement and collaborative learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Technology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Framework:</span>
                  <span className="font-semibold">Next.js 15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Styling:</span>
                  <span className="font-semibold">Tailwind CSS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Components:</span>
                  <span className="font-semibold">shadcn/ui</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Icons:</span>
                  <span className="font-semibold">Lucide React</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Typography:</span>
                  <span className="font-semibold">Inter, system fonts</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Responsive Breakpoints</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mobile:</span>
                  <span className="font-semibold">&lt; 768px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tablet:</span>
                  <span className="font-semibold">768px - 1024px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Desktop:</span>
                  <span className="font-semibold">&gt; 1024px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Width:</span>
                  <span className="font-semibold">1280px (content)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reading Width:</span>
                  <span className="font-semibold">70 characters max</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
