import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { 
  Brain, 
  Sparkles, 
  FileText, 
  Edit,
  Lightbulb,
  Target,
  Users,
  Clock,
  Star,
  ArrowRight,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  Bookmark,
  Eye,
  ThumbsUp,
  MessageCircle,
  Zap,
  Wand2,
  Cpu,
  Bot,
  Mic,
  Video,
  Image,
  PenTool,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Globe,
  Layers,
  Settings,
  RefreshCw,
  Send
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Creative Workspace - Tim Catchim APEST Platform",
  description: "Harness AI to enhance your ministry content creation, APEST development, and leadership insights with intelligent tools and prompts."
}

export default function AIWorkspace() {
  const aiTools = [
    {
      id: 1,
      name: "APEST Content Generator",
      description: "Create personalized content based on APEST profiles and ministry contexts",
      icon: Brain,
      category: "Content Creation",
      usage: "4.2k uses",
      rating: 4.9,
      color: "from-purple-500 to-purple-600",
      features: ["Profile-based content", "Ministry context aware", "Multiple formats"]
    },
    {
      id: 2,
      name: "Sermon Outline Builder",
      description: "Generate structured sermon outlines with APEST integration",
      icon: FileText,
      category: "Teaching Tools",
      usage: "3.8k uses",
      rating: 4.8,
      color: "from-blue-500 to-blue-600",
      features: ["Scripture integration", "APEST applications", "Audience targeting"]
    },
    {
      id: 3,
      name: "Leadership Insight Analyzer",
      description: "Analyze leadership scenarios and provide APEST-informed recommendations",
      icon: Target,
      category: "Leadership",
      usage: "2.1k uses", 
      rating: 4.7,
      color: "from-green-500 to-green-600",
      features: ["Scenario analysis", "Multi-gifting perspectives", "Action recommendations"]
    },
    {
      id: 4,
      name: "Ministry Assessment Creator",
      description: "Build custom assessments for team development and gift identification",
      icon: Users,
      category: "Assessment",
      usage: "1.9k uses",
      rating: 4.9,
      color: "from-orange-500 to-orange-600",
      features: ["Custom questions", "Automated scoring", "Team reports"]
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Church Planting Strategy Guide",
      type: "Content Series",
      tool: "APEST Content Generator",
      status: "In Progress",
      lastEdited: "2 hours ago",
      progress: 75,
      collaborators: 3
    },
    {
      id: 2,
      title: "Leadership Team Assessment",
      type: "Assessment",
      tool: "Ministry Assessment Creator",
      status: "Complete",
      lastEdited: "1 day ago",
      progress: 100,
      collaborators: 1
    },
    {
      id: 3,
      title: "Prophetic Ministry Training Outline",
      type: "Teaching Material",
      tool: "Sermon Outline Builder",
      status: "Draft",
      lastEdited: "3 days ago",
      progress: 40,
      collaborators: 2
    }
  ];

  const promptLibrary = [
    {
      id: 1,
      title: "APEST Team Dynamics Analysis",
      description: "Analyze team composition and identify potential blind spots or strengths",
      category: "Team Development",
      uses: 1247,
      saves: 89,
      featured: true
    },
    {
      id: 2,
      title: "Ministry Context Adaptation",
      description: "Adapt APEST principles for different cultural and denominational contexts",
      category: "Cultural Adaptation",
      uses: 892,
      saves: 67,
      featured: true
    },
    {
      id: 3,
      title: "Conflict Resolution with APEST Awareness",
      description: "Navigate team conflicts understanding different gifting perspectives",
      category: "Conflict Resolution",
      uses: 634,
      saves: 45,
      featured: false
    }
  ];

  const workspaceStats = {
    totalProjects: 127,
    activeUsers: "2,341",
    contentGenerated: "15,000+",
    timesSaved: "890 hrs"
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-purple-300 text-purple-600">
            <Brain className="w-4 h-4 mr-2" />
            AI Creative Workspace
          </Badge>
          <h1 className="text-5xl font-bold text-trimtab-blue-4 mb-6">
            Amplify Your Ministry with AI
          </h1>
          <p className="text-xl text-trimtab-gray-3 max-w-4xl mx-auto mb-8">
            Harness the power of artificial intelligence to create better content, 
            develop deeper insights, and enhance your APEST-informed ministry approach. 
            Smart tools that understand your five-fold calling.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-trimtab-gray-3 mb-8">
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-purple-500" />
              <span>{workspaceStats.totalProjects} Active Projects</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-trimtab-cta" />
              <span>{workspaceStats.activeUsers} Monthly Users</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>{workspaceStats.contentGenerated} Content Pieces</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-500" />
              <span>{workspaceStats.timesSaved} Hours Saved</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700">
              <Plus className="w-5 h-5 mr-2" />
              Start New Project
            </Button>
            <Button size="lg" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
              <Eye className="w-5 h-5 mr-2" />
              Browse Templates
            </Button>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* AI Tools Grid */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-trimtab-blue-4">AI Tools</h2>
                <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  View All Tools
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {aiTools.map((tool) => {
                  const IconComponent = tool.icon;
                  return (
                    <Card key={tool.id} className="border-trimtab-gray-2 hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <Badge variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                            {tool.category}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-semibold text-trimtab-blue-4 mb-2">
                          {tool.name}
                        </h3>

                        <p className="text-trimtab-gray-3 mb-4">
                          {tool.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {tool.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-trimtab-gray-2 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {tool.usage}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              {tool.rating}
                            </span>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700">
                          <Wand2 className="w-4 h-4 mr-2" />
                          Use Tool
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Recent Projects */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-trimtab-blue-4">Recent Projects</h2>
                <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  View All Projects
                </Button>
              </div>

              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <Card key={project.id} className="border-trimtab-gray-2 hover:shadow-sm transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-trimtab-blue-4 mb-1">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-trimtab-gray-2">
                            <Badge variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                              {project.type}
                            </Badge>
                            <span>•</span>
                            <span>{project.tool}</span>
                          </div>
                        </div>
                        <Badge 
                          className={`text-xs ${
                            project.status === 'Complete' ? 'bg-green-500 text-white' :
                            project.status === 'In Progress' ? 'bg-blue-500 text-white' :
                            'bg-yellow-500 text-white'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-trimtab-gray-2 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-trimtab-gray-1 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-trimtab-gray-2">
                        <div className="flex items-center gap-3">
                          <span>Last edited {project.lastEdited}</span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {project.collaborators} collaborators
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Prompt Library */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-trimtab-blue-4">Featured Prompts</h2>
                <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  Browse Library
                </Button>
              </div>

              <div className="space-y-4">
                {promptLibrary.map((prompt) => (
                  <Card key={prompt.id} className={`border-trimtab-gray-2 hover:shadow-sm transition-shadow ${prompt.featured ? 'border-l-4 border-l-purple-500' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-trimtab-blue-4">
                              {prompt.title}
                            </h3>
                            {prompt.featured && (
                              <Badge className="text-xs bg-purple-500 text-white">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-trimtab-gray-3 mb-2">
                            {prompt.description}
                          </p>
                          <Badge variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2">
                            {prompt.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-trimtab-gray-2">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {prompt.uses} uses
                          </span>
                          <span className="flex items-center gap-1">
                            <Bookmark className="w-4 h-4" />
                            {prompt.saves} saves
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                            <Download className="w-4 h-4 mr-1" />
                            Use Prompt
                          </Button>
                          <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-8">
              {/* Quick Start */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                    Quick Start
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    New AI Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    <FileText className="w-4 h-4 mr-2" />
                    From Template
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Get Inspiration
                  </Button>
                </CardContent>
              </Card>

              {/* AI Assistant Chat */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4 flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-purple-500" />
                    AI Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <div className="bg-trimtab-blue-0 p-3 rounded-lg">
                      <div className="text-xs text-trimtab-gray-2 mb-1">AI Assistant</div>
                      <div className="text-sm text-trimtab-blue-4">
                        How can I help you with your APEST content creation today?
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Textarea 
                      placeholder="Ask about APEST applications, content ideas, or ministry strategies..."
                      className="resize-none border-trimtab-gray-2"
                      rows={3}
                    />
                    <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Usage Stats */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4">Your Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-trimtab-gray-3">AI Credits Used:</span>
                      <span className="font-semibold text-trimtab-blue-4">847 / 1,000</span>
                    </div>
                    <div className="w-full bg-trimtab-gray-1 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-trimtab-gray-3">Projects Created:</span>
                      <span className="font-semibold text-trimtab-blue-4">23 this month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-trimtab-gray-3">Time Saved:</span>
                      <span className="font-semibold text-trimtab-cta">47 hours</span>
                    </div>
                    <div className="pt-2 border-t border-trimtab-gray-1">
                      <Button size="sm" variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Upgrade Plan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Resources */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4">AI Learning Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Video className="w-4 h-4 text-trimtab-blue-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-trimtab-blue-4 mb-1">AI + APEST Workshop</div>
                        <div className="text-trimtab-gray-2 text-xs">Learn to combine AI with five-fold ministry</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-trimtab-blue-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-trimtab-blue-4 mb-1">Prompt Engineering Guide</div>
                        <div className="text-trimtab-gray-2 text-xs">Master the art of AI prompts for ministry</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-trimtab-blue-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-trimtab-blue-4 mb-1">AI Community Forum</div>
                        <div className="text-trimtab-gray-2 text-xs">Share tips and get help from peers</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="w-full text-trimtab-blue-2 hover:bg-trimtab-blue-0 mt-3">
                      Explore Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
