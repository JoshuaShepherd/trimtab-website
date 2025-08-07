"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  BookOpen,
  Lightbulb,
  Target,
  Users,
  Calendar,
  FileText,
  TrendingUp,
  Archive,
  ExternalLink,
  Zap,
  Brain,
  CheckCircle,
  Clock,
  Settings
} from "lucide-react";

// Import dashboard components
import QuickCapture from "@/components/dashboard/QuickCapture";
import ProjectKanban from "@/components/dashboard/ProjectKanban";
import APESTHub from "@/components/dashboard/APESTHub";

interface Note {
  id: string;
  content: string;
  tags: string[];
  timestamp: Date;
}

interface Prompt {
  id: string;
  title: string;
  content: string;
  category: string;
  usage: number;
}

export default function TrimTabDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for demo
  const recentNotes: Note[] = [
    {
      id: '1',
      content: 'APEST framework application in digital ministry contexts - need to explore how virtual teams can express all five gifts effectively',
      tags: ['APEST', 'digital', 'ministry'],
      timestamp: new Date()
    },
    {
      id: '2',
      content: 'Idea for new course: "Missional Leadership in Post-Christian Context" - 8-week intensive program',
      tags: ['course', 'leadership', 'missional'],
      timestamp: new Date(Date.now() - 86400000)
    },
    {
      id: '3',
      content: 'Research needed: How do apostolic gifts manifest in online church planting movements?',
      tags: ['research', 'apostolic', 'church-planting'],
      timestamp: new Date(Date.now() - 172800000)
    }
  ];

  const topPrompts: Prompt[] = [
    {
      id: '1',
      title: 'APEST Assessment Generator',
      content: 'Create a comprehensive APEST assessment tool that helps individuals identify their primary and secondary gifting patterns. Include scenario-based questions that reveal authentic ministry motivations...',
      category: 'Assessment',
      usage: 15
    },
    {
      id: '2',
      title: 'Missional Strategy Framework',
      content: 'Develop a strategic framework for local churches wanting to become more missional. Include practical steps, potential challenges, and success metrics...',
      category: 'Strategy',
      usage: 12
    },
    {
      id: '3',
      title: 'Leadership Development Plan',
      content: 'Design a 12-month leadership development program based on APEST principles. Focus on identifying, developing, and deploying emerging leaders...',
      category: 'Leadership',
      usage: 8
    }
  ];

  const quickLinks = [
    { name: 'Trello Ideas', url: 'https://trello.com', icon: Target, color: 'bg-blue-500', description: 'Idea management' },
    { name: 'Asana Projects', url: 'https://asana.com', icon: CheckCircle, color: 'bg-purple-500', description: 'Project tracking' },
    { name: 'Google Drive', url: 'https://drive.google.com', icon: FileText, color: 'bg-green-500', description: 'File storage' },
    { name: 'Calendar', url: 'https://calendar.google.com', icon: Calendar, color: 'bg-red-500', description: 'Schedule management' },
    { name: 'Calendly', url: 'https://calendly.com', icon: Clock, color: 'bg-orange-500', description: 'Meeting booking' },
    { name: 'TrimTab Site', url: '/', icon: ExternalLink, color: 'bg-indigo-500', description: 'Website admin' }
  ];

  const stats = [
    { label: 'Notes Captured', value: '127', trend: '+12 this week', color: 'text-blue-600' },
    { label: 'Active Projects', value: '8', trend: '3 in progress', color: 'text-green-600' },
    { label: 'Saved Prompts', value: '34', trend: '5 new this month', color: 'text-purple-600' },
    { label: 'APEST Resources', value: '156', trend: '23 updated', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 trimtab-gradient rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TrimTab</h1>
                <p className="text-sm text-gray-600">Missional Productivity Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search everything..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="capture">Quick Capture</TabsTrigger>
            <TabsTrigger value="prompts">Prompt Archive</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="apest">APEST Hub</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Welcome Section */}
            <Card className="trimtab-gradient text-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome back, Tim!</h2>
                    <p className="text-blue-100">Ready to advance the missional movement today?</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-blue-100">Today</div>
                    <div className="text-xl font-semibold">{new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="trimtab-card-hover">
                  <CardContent className="p-4">
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.trend}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Access */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Quick Access
                </CardTitle>
                <CardDescription>Jump to your most-used tools and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {quickLinks.map((link, index) => (
                    <Card key={index} className="trimtab-card-hover hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-4">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="block text-center">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${link.color} flex items-center justify-center`}>
                            <link.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-medium text-sm text-gray-900 mb-1">{link.name}</h4>
                          <p className="text-xs text-gray-500">{link.description}</p>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    Recent Thoughts
                  </CardTitle>
                  <CardDescription>Your latest captured ideas and notes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentNotes.map((note) => (
                    <div key={note.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 trimtab-card-hover">
                      <p className="text-sm text-gray-700 mb-3 line-clamp-3">{note.content}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1 flex-wrap">
                          {note.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          {note.timestamp.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full flow-arrow">
                    View All Notes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Archive className="h-5 w-5 text-indigo-600" />
                    Top Prompts
                  </CardTitle>
                  <CardDescription>Your most-used AI prompts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPrompts.map((prompt) => (
                    <div key={prompt.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 trimtab-card-hover">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{prompt.title}</h4>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">{prompt.category}</Badge>
                          <Badge variant="secondary" className="text-xs">Used {prompt.usage}x</Badge>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">{prompt.content}</p>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline" className="text-xs">Copy</Button>
                        <Button size="sm" variant="outline" className="text-xs">Edit</Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full flow-arrow">
                    View All Prompts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Quick Capture Tab */}
          <TabsContent value="capture">
            <QuickCapture />
          </TabsContent>

          {/* Prompt Archive Tab */}
          <TabsContent value="prompts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Archive className="h-5 w-5 text-indigo-600" />
                  AI Prompt Library
                </CardTitle>
                <CardDescription>
                  Save, organize, and reuse your best ChatGPT/Claude prompts for APEST and missional work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {topPrompts.map((prompt) => (
                    <Card key={prompt.id} className="trimtab-card-hover">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-semibold text-gray-900 text-lg">{prompt.title}</h4>
                          <div className="flex gap-2">
                            <Badge variant="outline">{prompt.category}</Badge>
                            <Badge variant="secondary">Used {prompt.usage}x</Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">{prompt.content}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flow-arrow">Edit</Button>
                          <Button size="sm" variant="outline">Copy to Clipboard</Button>
                          <Button size="sm">Use Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <ProjectKanban />
          </TabsContent>

          {/* APEST Hub Tab */}
          <TabsContent value="apest">
            <APESTHub />
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-indigo-600" />
                  Tool Integrations
                </CardTitle>
                <CardDescription>
                  Connect and manage your productivity tools for seamless workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      name: 'Trello', 
                      description: 'Idea boards and visual project planning', 
                      status: 'Connected', 
                      color: 'green',
                      lastSync: '2 hours ago',
                      url: 'https://trello.com'
                    },
                    { 
                      name: 'Asana', 
                      description: 'Advanced task and project management', 
                      status: 'Connected', 
                      color: 'green',
                      lastSync: '1 hour ago',
                      url: 'https://asana.com'
                    },
                    { 
                      name: 'Google Drive', 
                      description: 'Cloud file storage and document management', 
                      status: 'Connected', 
                      color: 'green',
                      lastSync: '30 minutes ago',
                      url: 'https://drive.google.com'
                    },
                    { 
                      name: 'Google Calendar', 
                      description: 'Schedule and event management', 
                      status: 'Connected', 
                      color: 'green',
                      lastSync: '15 minutes ago',
                      url: 'https://calendar.google.com'
                    },
                    { 
                      name: 'Calendly', 
                      description: 'Automated meeting scheduling', 
                      status: 'Connected', 
                      color: 'green',
                      lastSync: '1 hour ago',
                      url: 'https://calendly.com'
                    },
                    { 
                      name: 'WordPress (TrimTab)', 
                      description: 'Website content management', 
                      status: 'Connected', 
                      color: 'green',
                      lastSync: '3 hours ago',
                      url: 'https://wordpress.com'
                    },
                  ].map((integration, index) => (
                    <Card key={index} className="trimtab-card-hover">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-medium text-gray-900 text-lg mb-1">{integration.name}</h4>
                            <p className="text-sm text-gray-600">{integration.description}</p>
                          </div>
                          <Badge className={`bg-${integration.color}-100 text-${integration.color}-800`}>
                            {integration.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-500 mb-4">
                          Last sync: {integration.lastSync}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1 flow-arrow" asChild>
                            <a href={integration.url} target="_blank" rel="noopener noreferrer">
                              Open Tool
                            </a>
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
