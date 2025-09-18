'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from 'react'
import { 
  GitBranch,
  FileText,
  Play,
  Lightbulb,
  Shield,
  Heart,
  CheckCircle,
  Copy,
  Edit,
  Save,
  Folder,
  BookOpen,
  MessageSquare,
  Info,
  Brain,
  Users,
  Wrench,
  Key,
  Menu,
  X,
  ChevronRight,
  Eye,
  TrendingUp,
  Filter,
  RotateCw,
  Split,
  CheckSquare,
  AlertTriangle,
  Maximize2,
  Layout,
  Palette,
  FileImage,
  Settings
} from "lucide-react"

export default function PromptingDashboard() {
  const [activeSection, setActiveSection] = useState('advanced-techniques')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const sidebarSections = [
    {
      id: 'advanced-techniques',
      title: 'Advanced Prompting Techniques',
      icon: Brain,
      description: 'Professional-grade prompting patterns'
    },
    {
      id: 'quick-start',
      title: 'Quick Start Commands',
      icon: Play,
      description: 'Essential development commands'
    },
    {
      id: 'copilot-instructions',
      title: 'Copilot Instructions Guide',
      icon: FileText,
      description: 'Understanding your secret weapon'
    },
    {
      id: 'file-structure',
      title: 'File Structure Guide',
      icon: Folder,
      description: 'Website organization explained'
    },
    {
      id: 'prompt-library',
      title: 'Prompt Library',
      icon: MessageSquare,
      description: 'Ready-to-use prompts'
    },
    {
      id: 'development-concepts',
      title: 'Development Concepts',
      icon: BookOpen,
      description: 'Key concepts explained simply'
    },
    {
      id: 'copilot-tips',
      title: 'Copilot Best Practices',
      icon: Lightbulb,
      description: 'Getting the best results'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Guide',
      icon: Wrench,
      description: 'Common issues and solutions'
    },
    {
      id: 'github-basics',
      title: 'GitHub Basics',
      icon: GitBranch,
      description: 'Version control explained'
    },
    {
      id: 'keyword-toolkit',
      title: 'Keyword Toolkit',
      icon: Key,
      description: 'Essential terminology'
    }
  ]

  const advancedTechniques = [
    {
      id: 1,
      title: 'The "Rewrite Me" Move',
      icon: RotateCw,
      pattern: '"Act as a prompt engineer and rewrite what I\'m about to say so it\'s clearer/stronger/more detailed."',
      why: 'Takes advantage of the model\'s ability to meta-process your raw input. It instantly upgrades sloppy, half-baked prompts into structured ones without needing you to learn "prompt grammar."',
      failsafe: 'Ensures that even if you say something vague, you can force the system to clarify before execution.',
      example: 'Instead of "make my course better" → AI rewrites to "Create a comprehensive improvement plan for my APEST course including content updates, engagement strategies, and assessment methods."'
    },
    {
      id: 2,
      title: 'Persona Prompting',
      icon: Users,
      pattern: '"Act as [role]." E.g., "Act as a skeptical donor," "Act as a futurist strategist," or "Act as a prompt engineer."',
      why: 'Anchors the model\'s tone, perspective, and heuristics.',
      failsafe: 'Guarantees that the output is "fit for audience" rather than generic. Especially helpful for role-play, testing, or creative brainstorming.',
      example: '"Act as a ministry leader evaluating APEST implementation" gives you practical, leadership-focused insights rather than academic theory.'
    },
    {
      id: 3,
      title: 'The Dual Pass (Draft + Critic)',
      icon: Eye,
      pattern: '"First give me a draft. Then, in a second step, critique your own work as if you were an editor/consultant."',
      why: 'Models are stronger when they play both builder and evaluator.',
      failsafe: 'Forces quality control inside the AI itself, so you don\'t have to catch every weakness.',
      example: 'Get both a course outline AND a critical analysis of potential gaps or improvements.'
    },
    {
      id: 4,
      title: 'Structure by Checklist',
      icon: CheckSquare,
      pattern: '"Answer in a checklist with 3 sections: [A], [B], [C]. Don\'t skip."',
      why: 'Humans drift, models drift. Checklists prevent omissions.',
      failsafe: 'Ensures coverage, consistency, and easy-to-digest formatting.',
      example: 'Perfect for course planning, assessment creation, or systematic APEST implementation steps.'
    },
    {
      id: 5,
      title: 'The "Don\'t Hallucinate" Guardrail',
      icon: Shield,
      pattern: '"If you don\'t know, say \'I don\'t know.\' Do not invent."',
      why: 'It\'s a simple override to reduce the most dangerous failure mode: confident nonsense.',
      failsafe: 'Turns hallucination risk into a controlled "shrug."',
      example: 'Crucial when asking about specific ministry contexts, biblical references, or technical implementation details.'
    },
    {
      id: 6,
      title: 'The "Two Voices" Trick',
      icon: Split,
      pattern: '"Respond twice: once in plain, practical English for a lay audience, once in technical depth for experts."',
      why: 'Forces dual translation — clarity + rigor.',
      failsafe: 'Prevents over-jargon OR oversimplification dominating the answer.',
      example: 'Perfect for APEST content that needs both pastoral accessibility and scholarly depth.'
    },
    {
      id: 7,
      title: 'Scenario Stress-Testing',
      icon: AlertTriangle,
      pattern: '"What would break this plan? List edge cases or reasons it might fail."',
      why: 'Models are great at generating blind spots when you ask for them.',
      failsafe: 'Moves from "only positive output" to realistic risk assessment.',
      example: 'Test your APEST implementation plans, course structures, or ministry strategies for potential pitfalls.'
    },
    {
      id: 8,
      title: 'Iterative Compression/Expansion',
      icon: Maximize2,
      pattern: '"Summarize this in 50 words." → "Now expand to 1,000 words with examples."',
      why: 'Cycling between compression and expansion exposes missing logic.',
      failsafe: 'Produces layered documentation — quick elevator pitch + deep dive.',
      example: 'Create both tweet-length APEST insights and comprehensive teaching materials from the same core idea.'
    },
    {
      id: 9,
      title: 'Meta-Learning Prompt',
      icon: TrendingUp,
      pattern: '"Tell me what\'s unclear about my request. Suggest how I could reframe it for better results."',
      why: 'You don\'t know what you don\'t know. The model can coach your prompt-writing.',
      failsafe: 'Builds a virtuous cycle of better inputs without formal training.',
      example: 'Let AI teach you to be a better prompter for ministry and platform development tasks.'
    },
    {
      id: 10,
      title: 'The "Split Channels" Move',
      icon: Filter,
      pattern: '"Give me a draft answer. Then separately list 3 alternative directions I could have asked you to take."',
      why: 'Expands your range of options.',
      failsafe: 'Ensures you don\'t anchor prematurely to one mediocre output.',
      example: 'Discover multiple approaches to APEST teaching, course development, or platform features you hadn\'t considered.'
    }
  ]

  const quickStartCommands = [
    {
      command: "npm run dev",
      description: "Starts your development server - like turning on the lights in your workshop",
      when: "Every time you want to see your website changes live"
    },
    {
      command: "npm run build",
      description: "Packages everything for production - like preparing your book for the printer",
      when: "Before deploying or checking for errors"
    },
    {
      command: "git status",
      description: "Shows what files you've changed - like checking your notes",
      when: "To see what you've modified since last save"
    },
    {
      command: "git add .",
      description: "Stages all changes - like putting papers in an envelope",
      when: "Before committing your changes"
    }
  ]

  const fileStructureGuide = [
    {
      path: "src/app/",
      description: "Your main pages live here - each folder becomes a URL",
      example: "src/app/about/ becomes yoursite.com/about",
      icon: Folder
    },
    {
      path: "src/components/",
      description: "Reusable pieces like buttons, cards, forms",
      example: "Button component used across multiple pages",
      icon: Layout
    },
    {
      path: "src/components/ui/",
      description: "Pre-built beautiful components from shadcn/ui",
      example: "Professional buttons, forms, cards already styled",
      icon: Palette
    },
    {
      path: "public/",
      description: "Images, PDFs, and files people can download",
      example: "Course materials, profile photos, resources",
      icon: FileImage
    },
    {
      path: "src/lib/",
      description: "Helper functions and configurations (don't worry about this)",
      example: "Behind-the-scenes code that makes things work",
      icon: Settings
    }
  ]

  const keyPrompts = [
    {
      category: "Content Creation",
      prompts: [
        "Create a new blog post page about [topic] with proper APEST themes and styling",
        "Add a new course landing page for [course name] with enrollment features",
        "Build a resource page for [resource type] with download functionality",
        "Create an assessment page for [gift type] with interactive elements"
      ]
    },
    {
      category: "UI/UX Improvements", 
      prompts: [
        "Improve the mobile responsiveness of [page name]",
        "Add better accessibility features to [component]",
        "Create a more engaging hero section for [page]",
        "Add interactive elements to make [feature] more user-friendly"
      ]
    },
    {
      category: "Functionality",
      prompts: [
        "Add form validation to [form name] with helpful error messages",
        "Create a search function for [content type]",
        "Add filtering and sorting to [list/catalog page]",
        "Implement progress tracking for [learning content]"
      ]
    },
    {
      category: "Content Management",
      prompts: [
        "Help me organize the file structure for [new content type]",
        "Create a consistent template for [content category]",
        "Add metadata and SEO optimization to [page]",
        "Set up a workflow for publishing [content type]"
      ]
    }
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'advanced-techniques':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-4 flex items-center">
                <Brain className="w-8 h-8 mr-3" />
                Advanced Prompting Techniques
              </h2>
              <p className="text-lg text-trimtab-gray-3 mb-8">
                Professional-grade prompting patterns that will transform how you work with AI. 
                These are the techniques that separate good prompts from great ones.
              </p>
            </div>
            
            <div className="grid gap-6">
              {advancedTechniques.map((technique) => {
                const IconComponent = technique.icon;
                return (
                  <Card key={technique.id} className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                        <IconComponent className="w-6 h-6 mr-3 text-trimtab-cta" />
                        {technique.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-trimtab-blue-4 mb-2">Pattern:</h4>
                        <p className="text-trimtab-gray-3 italic">{technique.pattern}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-trimtab-blue-4 mb-2">Why It Works:</h4>
                        <p className="text-trimtab-gray-3">{technique.why}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-trimtab-blue-4 mb-2">Failsafe:</h4>
                        <p className="text-trimtab-gray-3">{technique.failsafe}</p>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-trimtab-blue-4 mb-2 flex items-center">
                          <Lightbulb className="w-4 h-4 mr-2" />
                          Example:
                        </h4>
                        <p className="text-trimtab-gray-3">{technique.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      
      case 'quick-start':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-4 flex items-center">
                <Play className="w-8 h-8 mr-3" />
                Quick Start Commands
              </h2>
              <p className="text-lg text-trimtab-gray-3 mb-8">
                These are the four commands you'll use 90% of the time. Think of them as your basic tools.
              </p>
            </div>
            
            <div className="space-y-4">
              {quickStartCommands.map((cmd, index) => (
                <Card key={index} className="border-trimtab-gray-1 hover:bg-trimtab-blue-0 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <code className="bg-gray-100 px-3 py-1 rounded text-trimtab-blue-4 font-mono text-lg">
                        {cmd.command}
                      </code>
                      <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-trimtab-gray-3 mb-1">{cmd.description}</p>
                    <p className="text-sm text-trimtab-gray-2 italic">When to use: {cmd.when}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'file-structure':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-4 flex items-center">
                <Folder className="w-8 h-8 mr-3" />
                Understanding Your Website's File Structure
              </h2>
              <p className="text-lg text-trimtab-gray-3 mb-8">
                Think of this like the filing system in your office - everything has its place for a reason.
              </p>
            </div>
            
            <div className="space-y-4">
              {fileStructureGuide.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="border-trimtab-gray-2">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-trimtab-blue-0 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-trimtab-cta" />
                        </div>
                        <div className="flex-1">
                          <code className="bg-gray-100 px-3 py-1 rounded text-trimtab-blue-4 font-mono text-lg">
                            {item.path}
                          </code>
                          <p className="text-trimtab-gray-3 mt-2">{item.description}</p>
                          <p className="text-sm text-trimtab-gray-2 italic mt-1">Example: {item.example}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 'prompt-library':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-4 flex items-center">
                <MessageSquare className="w-8 h-8 mr-3" />
                Your Prompt Library
              </h2>
              <p className="text-lg text-trimtab-gray-3 mb-8">
                Copy-paste prompts organized by what you want to accomplish.
              </p>
            </div>
            
            <div className="space-y-6">
              {keyPrompts.map((category, index) => (
                <Card key={index} className="border-trimtab-gray-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-trimtab-blue-4 mb-3 flex items-center">
                      <ChevronRight className="w-5 h-5 mr-2" />
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.prompts.map((prompt, promptIndex) => (
                        <div key={promptIndex} className="bg-gray-50 p-3 rounded-lg flex items-start justify-between group">
                          <p className="text-trimtab-gray-3 flex-1">{prompt}</p>
                          <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'copilot-instructions':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-4 flex items-center">
                <FileText className="w-8 h-8 mr-3" />
                Your Secret Weapon: copilot-instructions.md
              </h2>
              <p className="text-lg text-trimtab-gray-3 mb-8">
                Understanding your project's secret sauce and how to leverage it.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    What It Is
                  </h3>
                  <p className="text-trimtab-gray-3">
                    This file tells Copilot everything about your project - your brand colors (Trimtab), 
                    your focus (APEST ministry), your preferred components (shadcn/ui), and how you like things structured. 
                    It's like giving Copilot a detailed brief about your ministry and style preferences.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Why It's Powerful
                  </h3>
                  <p className="text-trimtab-gray-3">
                    Instead of explaining "I want this to match my APEST platform with Trimtab colors" every time, 
                    Copilot already knows. You can copy this file to other projects and have the same intelligent assistance everywhere.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3 flex items-center">
                    <Edit className="w-5 h-5 mr-2" />
                    How to Modify It
                  </h3>
                  <p className="text-trimtab-gray-3">
                    Found at <code className="bg-gray-100 px-2 py-1 rounded">.github/copilot-instructions.md</code> - 
                    you can edit it like any other file. Add new preferences, update your style guide, 
                    or include specific instructions for new types of content you're creating.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-trimtab-blue-4 mb-4">Section Coming Soon</h2>
            <p className="text-trimtab-gray-3">This section is being developed. Check back soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/trimtab-logo.webp" 
                alt="Trimtab Logo" 
                width={40} 
                height={40}
              />
              <div>
                <h1 className="text-2xl font-bold text-trimtab-blue-4">
                  Tim's Prompting Dashboard
                </h1>
                <p className="text-sm text-trimtab-gray-3">
                  Your complete AI development reference
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500 text-white">
                <CheckCircle className="w-4 h-4 mr-1" />
                Safe
              </Badge>
              <Badge className="bg-blue-500 text-white">
                <Brain className="w-4 h-4 mr-1" />
                Smart
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          fixed lg:static top-[73px] lg:top-0 left-0 z-30
          w-80 h-[calc(100vh-73px)] lg:h-screen
          bg-white border-r border-gray-200 overflow-y-auto
        `}>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-trimtab-blue-4 mb-4">Navigation</h2>
            <nav className="space-y-2">
              {sidebarSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full text-left p-3 rounded-lg transition-colors
                      flex items-start gap-3 group
                      ${activeSection === section.id 
                        ? 'bg-trimtab-blue-0 border border-trimtab-blue-1 text-trimtab-blue-4' 
                        : 'hover:bg-gray-50 text-trimtab-gray-3 hover:text-trimtab-blue-4'
                      }
                    `}
                  >
                    <IconComponent className={`
                      w-5 h-5 mt-0.5 flex-shrink-0
                      ${activeSection === section.id ? 'text-trimtab-cta' : 'text-trimtab-gray-2'}
                    `} />
                    <div>
                      <div className="font-medium">{section.title}</div>
                      <div className="text-sm opacity-75 mt-1">{section.description}</div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="container mx-auto px-6 py-8 max-w-5xl">
            {renderSection()}
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
