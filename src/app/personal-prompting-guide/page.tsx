import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { 
  Code2, 
  GitBranch,
  FileText,
  Play,
  Coffee,
  Lightbulb,
  Shield,
  Rocket,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Copy,
  Download,
  Settings,
  Search,
  Edit,
  Save,
  Folder,
  Terminal,
  Globe,
  Zap,
  BookOpen,
  MessageSquare,
  HelpCircle,
  AlertCircle,
  Info,
  Sparkles,
  Brain,
  Target,
  Users,
  Wrench,
  Key,
  Lock,
  Unlock,
  RefreshCw,
  Database,
  Server,
  Layout,
  Palette,
  Type,
  Image,
  Link
} from "lucide-react"

export const metadata: Metadata = {
  title: "Personal Prompting Guide - Tim's Development Reference",
  description: "Your complete guide to working with VS Code, GitHub Copilot, and the React/Next.js environment - designed specifically for Tim Catchim."
}

export default function PersonalPromptingGuide() {
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
  ];

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
  ];

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
      icon: Image
    },
    {
      path: "src/lib/",
      description: "Helper functions and configurations (don't worry about this)",
      example: "Behind-the-scenes code that makes things work",
      icon: Settings
    }
  ];

  const developmentConcepts = [
    {
      term: "Component",
      definition: "Like a LEGO block - a reusable piece of your website",
      example: "A 'Course Card' component shows course info the same way everywhere",
      analogy: "Like having a template for how to display each course"
    },
    {
      term: "Props",
      definition: "Information you pass to a component to customize it",
      example: "Giving the Course Card the course title, description, and price",
      analogy: "Like filling in the blanks on a template"
    },
    {
      term: "State",
      definition: "Information that can change (like form inputs or toggles)",
      example: "Whether a menu is open/closed, what's typed in a search box",
      analogy: "Like the current state of your TV - on/off, volume level, channel"
    },
    {
      term: "Responsive Design",
      definition: "Your website looks good on phones, tablets, and computers",
      example: "Course grid shows 3 columns on desktop, 1 on mobile",
      analogy: "Like text that automatically gets bigger when you need reading glasses"
    },
    {
      term: "API",
      definition: "A way for your website to get information from other services",
      example: "Getting course enrollment numbers, user profiles, payment status",
      analogy: "Like having a secretary who fetches information from different departments"
    }
  ];

  const copilotTips = [
    {
      tip: "Be Specific About Context",
      explanation: "Tell Copilot what you're working on and what you want to achieve",
      good: "Create a course enrollment button for the APEST Leadership course that shows the price and redirects to checkout",
      bad: "Make a button"
    },
    {
      tip: "Mention Your Brand",
      explanation: "Copilot knows about your Trimtab colors and APEST themes from the instructions",
      good: "Style this section with Trimtab brand colors and APEST ministry focus",
      bad: "Make it look nice"
    },
    {
      tip: "Ask for Explanations",
      explanation: "Don't hesitate to ask Copilot to explain what it's doing",
      good: "Explain what this code does and why you structured it this way",
      bad: "Just accepting code you don't understand"
    },
    {
      tip: "Request Alternatives",
      explanation: "Ask for different approaches if the first solution doesn't feel right",
      good: "Show me 3 different ways to layout this course information",
      bad: "Settling for the first option"
    }
  ];

  const reassurancePoints = [
    {
      icon: Shield,
      title: "You Can't Break Anything",
      description: "Git version control means you can always go back to a working version. It's like having infinite 'undo' buttons."
    },
    {
      icon: Heart,
      title: "Your Content Skills Still Matter Most",
      description: "This is just a new way to publish your APEST wisdom. Your expertise in ministry and leadership is what makes the platform valuable."
    },
    {
      icon: Lightbulb,
      title: "Copilot Does the Heavy Lifting",
      description: "You describe what you want in plain English, Copilot writes the code. It's like having a technical translator."
    },
    {
      icon: Coffee,
      title: "Start Small, Build Confidence",
      description: "Begin with simple changes like updating text or adding images. As you get comfortable, you can try bigger modifications."
    }
  ];

  const troubleshootingGuide = [
    {
      problem: "Website won't load after changes",
      solution: "Check the terminal for red error messages. Usually it's a missing comma or bracket - Copilot can fix it.",
      prevention: "Always run 'npm run dev' to catch errors early"
    },
    {
      problem: "Changes aren't showing up",
      solution: "Make sure you saved the file (Cmd+S) and the dev server is running",
      prevention: "VS Code auto-saves, but double-check the file tab doesn't have a white dot"
    },
    {
      problem: "Too many files changed",
      solution: "Use 'git status' to see what changed. You can reset unwanted changes with Copilot's help",
      prevention: "Make small changes and test frequently"
    },
    {
      problem: "Can't find where to edit something",
      solution: "Use VS Code's search (Cmd+Shift+F) to find text that appears on the page",
      prevention: "Learn the file structure - most content is in src/app/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-trimtab-cta" />
            <h1 className="text-4xl font-bold text-trimtab-blue-4">
              Tim's Personal Prompting Guide
            </h1>
            <Sparkles className="w-8 h-8 text-trimtab-cta" />
          </div>
          <p className="text-xl text-trimtab-gray-3 max-w-3xl mx-auto">
            Your complete reference for working with VS Code, GitHub Copilot, and your APEST platform. 
            This is your safe space to learn, experiment, and create without fear.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge className="bg-green-500 text-white">
              <CheckCircle className="w-4 h-4 mr-2" />
              Beginner Friendly
            </Badge>
            <Badge className="bg-blue-500 text-white">
              <Shield className="w-4 h-4 mr-2" />
              Safe to Experiment
            </Badge>
            <Badge className="bg-purple-500 text-white">
              <Rocket className="w-4 h-4 mr-2" />
              Unlimited Potential
            </Badge>
          </div>
        </div>

        {/* Reassurance Section */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2 bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 text-center flex items-center justify-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                First, Take a Deep Breath
                <Heart className="w-6 h-6 ml-3 text-red-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {reassurancePoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <IconComponent className="w-6 h-6 text-trimtab-cta" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-trimtab-blue-4 mb-2">{point.title}</h3>
                        <p className="text-trimtab-gray-3">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Start Section */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <Play className="w-6 h-6 mr-3" />
                Quick Start: Essential Commands
              </CardTitle>
              <p className="text-trimtab-gray-3">
                These are the four commands you'll use 90% of the time. Think of them as your basic tools.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quickStartCommands.map((cmd, index) => (
                  <div key={index} className="border border-trimtab-gray-1 rounded-lg p-4 hover:bg-trimtab-blue-0 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <code className="bg-gray-100 px-3 py-1 rounded text-trimtab-blue-4 font-mono">
                        {cmd.command}
                      </code>
                      <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-trimtab-gray-3 mb-1">{cmd.description}</p>
                    <p className="text-sm text-trimtab-gray-2 italic">When to use: {cmd.when}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Copilot Instructions Reference */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <FileText className="w-6 h-6 mr-3" />
                Your Secret Weapon: copilot-instructions.md
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    What It Is
                  </h3>
                  <p className="text-trimtab-gray-3">
                    This file tells Copilot everything about your project - your brand colors (Trimtab), 
                    your focus (APEST ministry), your preferred components (shadcn/ui), and how you like things structured. 
                    It's like giving Copilot a detailed brief about your ministry and style preferences.
                  </p>
                </div>
                
                <div className="bg-white border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-2 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Why It's Powerful
                  </h3>
                  <p className="text-trimtab-gray-3">
                    Instead of explaining "I want this to match my APEST platform with Trimtab colors" every time, 
                    Copilot already knows. You can copy this file to other projects and have the same intelligent assistance everywhere.
                  </p>
                </div>

                <div className="bg-white border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-2 flex items-center">
                    <Edit className="w-5 h-5 mr-2" />
                    How to Modify It
                  </h3>
                  <p className="text-trimtab-gray-3">
                    Found at <code className="bg-gray-100 px-2 py-1 rounded">.github/copilot-instructions.md</code> - 
                    you can edit it like any other file. Add new preferences, update your style guide, 
                    or include specific instructions for new types of content you're creating.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* File Structure Guide */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <Folder className="w-6 h-6 mr-3" />
                Understanding Your Website's File Structure
              </CardTitle>
              <p className="text-trimtab-gray-3">
                Think of this like organizing a filing cabinet - everything has its place.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fileStructureGuide.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="border border-trimtab-gray-1 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-trimtab-blue-1 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-trimtab-blue-2" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
                              {item.path}
                            </code>
                          </div>
                          <p className="text-trimtab-gray-3 mb-1">{item.description}</p>
                          <p className="text-sm text-trimtab-gray-2 italic">Example: {item.example}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Prompts */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3" />
                Your Prompt Library
              </CardTitle>
              <p className="text-trimtab-gray-3">
                Copy and customize these prompts for common tasks. Replace [bracketed items] with your specific needs.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {keyPrompts.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.prompts.map((prompt, promptIndex) => (
                        <div key={promptIndex} className="border border-trimtab-gray-1 rounded-lg p-3 bg-gray-50">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-trimtab-gray-3 font-mono text-sm flex-1">{prompt}</p>
                            <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0 flex-shrink-0">
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Development Concepts */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-3" />
                Key Concepts Explained Simply
              </CardTitle>
              <p className="text-trimtab-gray-3">
                Understanding these concepts will help you communicate more effectively with Copilot.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {developmentConcepts.map((concept, index) => (
                  <div key={index} className="border border-trimtab-gray-1 rounded-lg p-4">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-1">{concept.term}</h3>
                      <p className="text-trimtab-gray-3">{concept.definition}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-trimtab-gray-2 mb-1"><strong>Example:</strong></p>
                        <p className="text-trimtab-gray-3">{concept.example}</p>
                      </div>
                      <div>
                        <p className="text-trimtab-gray-2 mb-1"><strong>Think of it like:</strong></p>
                        <p className="text-trimtab-gray-3 italic">{concept.analogy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Copilot Tips */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <Brain className="w-6 h-6 mr-3" />
                How to Get the Best Results from Copilot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {copilotTips.map((tip, index) => (
                  <div key={index} className="border border-trimtab-gray-1 rounded-lg p-4">
                    <h3 className="font-semibold text-trimtab-blue-4 mb-2">{tip.tip}</h3>
                    <p className="text-trimtab-gray-3 mb-3">{tip.explanation}</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="text-green-700 font-medium mb-1">✅ Good Example:</p>
                        <p className="text-green-600 italic">"{tip.good}"</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded p-3">
                        <p className="text-red-700 font-medium mb-1">❌ Avoid This:</p>
                        <p className="text-red-600 italic">"{tip.bad}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <Wrench className="w-6 h-6 mr-3" />
                Common Issues & Solutions
              </CardTitle>
              <p className="text-trimtab-gray-3">
                Don't panic if something goes wrong - these are the most common issues and how to fix them.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {troubleshootingGuide.map((issue, index) => (
                  <div key={index} className="border border-trimtab-gray-1 rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-trimtab-blue-4 mb-1">Problem: {issue.problem}</h3>
                        <p className="text-trimtab-gray-3">{issue.solution}</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <p className="text-blue-700 text-sm">
                        <strong>Prevention:</strong> {issue.prevention}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Management Options */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <Edit className="w-6 h-6 mr-3" />
                Remember: You Have Options for Content Creation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3 flex items-center">
                    <Code2 className="w-5 h-5 mr-2" />
                    Working with Code (This Guide)
                  </h3>
                  <ul className="space-y-2 text-trimtab-gray-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unlimited customization and creativity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Direct control over every aspect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Learning valuable digital skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Copilot handles the technical complexity</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white border border-pink-200 rounded-lg p-4">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3 flex items-center">
                    <Type className="w-5 h-5 mr-2" />
                    Content Editors (Alternative)
                  </h3>
                  <ul className="space-y-2 text-trimtab-gray-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>TipTap composer for rich text editing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Familiar word processor experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Perfect for blog posts and articles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No code knowledge required</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-trimtab-blue-4 mb-2 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  The Best Approach
                </h3>
                <p className="text-trimtab-gray-3">
                  Start with whatever feels comfortable - content editors for regular updates, 
                  and code for special features or major changes. As you get more comfortable with 
                  Copilot, you'll find yourself naturally gravitating toward the code approach for 
                  its creative freedom and precise control.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* GitHub Basics */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <GitBranch className="w-6 h-6 mr-3" />
                GitHub Basics: Think of it as Your Digital Filing System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-trimtab-gray-1 rounded-lg p-4 text-center">
                    <Save className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-trimtab-blue-4 mb-2">Commit</h3>
                    <p className="text-sm text-trimtab-gray-3">
                      Like saving a document with a note about what you changed
                    </p>
                  </div>
                  <div className="border border-trimtab-gray-1 rounded-lg p-4 text-center">
                    <GitBranch className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-trimtab-blue-4 mb-2">Branch</h3>
                    <p className="text-sm text-trimtab-gray-3">
                      Like working on a copy while keeping the original safe
                    </p>
                  </div>
                  <div className="border border-trimtab-gray-1 rounded-lg p-4 text-center">
                    <RefreshCw className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-trimtab-blue-4 mb-2">Merge</h3>
                    <p className="text-sm text-trimtab-gray-3">
                      Like incorporating your changes into the main version
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-2">Why This Matters</h3>
                  <p className="text-trimtab-gray-3">
                    GitHub keeps track of every change you make, who made it, and when. 
                    If something breaks, you can always go back to a working version. 
                    It's like having a detailed history of every edit to your manuscript, 
                    with the ability to restore any previous version instantly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyword Reference */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                <Key className="w-6 h-6 mr-3" />
                Your Keyword Toolkit
              </CardTitle>
              <p className="text-trimtab-gray-3">
                Use these terms when talking to Copilot - they'll help you get exactly what you want.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3">Layout Terms</h3>
                  <div className="space-y-1 text-sm">
                    {["Responsive", "Mobile-first", "Grid layout", "Flexbox", "Hero section", "Sidebar", "Navigation", "Footer"].map((term, i) => (
                      <div key={i} className="bg-gray-50 px-2 py-1 rounded">{term}</div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3">Interactive Elements</h3>
                  <div className="space-y-1 text-sm">
                    {["Form validation", "Modal dialog", "Dropdown menu", "Tabs", "Accordion", "Progress bar", "Loading state", "Hover effects"].map((term, i) => (
                      <div key={i} className="bg-gray-50 px-2 py-1 rounded">{term}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3">APEST-Specific</h3>
                  <div className="space-y-1 text-sm">
                    {["Assessment form", "Course enrollment", "Member portal", "Leadership content", "Ministry resources", "Community features", "Progress tracking", "Certificate display"].map((term, i) => (
                      <div key={i} className="bg-gray-50 px-2 py-1 rounded">{term}</div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Encouragement */}
        <Card className="border-trimtab-gray-2 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <Rocket className="w-12 h-12 text-trimtab-cta mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-trimtab-blue-4 mb-4">
              You're Ready to Build Something Amazing
            </h2>
            <p className="text-lg text-trimtab-gray-3 mb-6 max-w-2xl mx-auto">
              Remember, every expert was once a beginner. Your unique perspective on APEST ministry 
              combined with these digital tools will create something truly special. Start small, 
              experiment fearlessly, and watch your platform grow.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-trimtab-cta text-white text-lg px-4 py-2">
                <Heart className="w-5 h-5 mr-2" />
                You've Got This!
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
