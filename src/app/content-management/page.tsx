import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { 
  FileText, 
  Edit, 
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  EyeOff,
  Clock,
  Calendar,
  User,
  Tag,
  BookOpen,
  Video,
  Headphones,
  Image,
  Link as LinkIcon,
  Star,
  Heart,
  MessageSquare,
  Share2,
  Copy,
  Archive,
  Settings,
  Globe,
  Lock,
  Unlock,
  CheckCircle,
  AlertCircle,
  Pause,
  Play,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Zap,
  Crown,
  RefreshCw,
  Save,
  Send,
  Layers,
  FolderOpen,
  FileImage,
  FileVideo,
  FileAudio,
  Mic
} from "lucide-react"

export const metadata: Metadata = {
  title: "Content Management System - Tim Catchim APEST Platform",
  description: "Manage all your APEST content including courses, videos, blog posts, assessments, and resources from one central location."
}

export default function ContentManagement() {
  const contentStats = [
    {
      title: "Total Content",
      value: "1,247",
      change: "+23 this week",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Published Items",
      value: "1,089",
      change: "87.3% live",
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Total Views",
      value: "342,591",
      change: "+18.5% this month",
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Avg. Engagement",
      value: "24.7%",
      change: "+2.1% improvement",
      icon: Heart,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const contentTypes = [
    {
      type: "Courses",
      count: 47,
      published: 42,
      draft: 5,
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      type: "Videos",
      count: 189,
      published: 156,
      draft: 33,
      icon: Video,
      color: "text-purple-600"
    },
    {
      type: "Podcasts",
      count: 127,
      published: 127,
      draft: 0,
      icon: Headphones,
      color: "text-green-600"
    },
    {
      type: "Blog Posts",
      count: 234,
      published: 198,
      draft: 36,
      icon: FileText,
      color: "text-orange-600"
    },
    {
      type: "Assessments",
      count: 12,
      published: 8,
      draft: 4,
      icon: Target,
      color: "text-red-600"
    },
    {
      type: "Resources",
      count: 98,
      published: 87,
      draft: 11,
      icon: Archive,
      color: "text-indigo-600"
    }
  ];

  const recentContent = [
    {
      id: 1,
      title: "APEST Leadership Assessment 2.0 - Complete Guide",
      type: "Course",
      status: "published",
      author: "Tim Catchim",
      lastModified: "2 hours ago",
      views: 15247,
      engagement: "89.3%",
      revenue: "$23,450",
      tags: ["Assessment", "Leadership", "APEST"],
      featured: true,
      premium: true
    },
    {
      id: 2,
      title: "Understanding Prophetic Discernment in Modern Ministry",
      type: "Video",
      status: "draft",
      author: "Tim Catchim",
      lastModified: "5 hours ago",
      views: 0,
      engagement: "0%",
      revenue: "$0",
      tags: ["Prophetic", "Ministry", "Discernment"],
      featured: false,
      premium: true
    },
    {
      id: 3,
      title: "Building Apostolic Teams: A Practical Framework",
      type: "Blog Post",
      status: "scheduled",
      author: "Sarah Martinez",
      lastModified: "1 day ago",
      views: 0,
      engagement: "0%",
      revenue: "$0",
      tags: ["Apostolic", "Teams", "Leadership"],
      featured: false,
      premium: false
    },
    {
      id: 4,
      title: "APEST Insights Podcast Episode 127",
      type: "Podcast",
      status: "published",
      author: "Tim Catchim",
      lastModified: "2 days ago",
      views: 8932,
      engagement: "76.4%",
      revenue: "$4,230",
      tags: ["Podcast", "Insights", "Q&A"],
      featured: true,
      premium: false
    },
    {
      id: 5,
      title: "Shepherd Heart, Apostolic Vision: Integration Guide",
      type: "Course",
      status: "published",
      author: "Tim Catchim",
      lastModified: "3 days ago",
      views: 6543,
      engagement: "82.1%",
      revenue: "$18,900",
      tags: ["Shepherd", "Apostolic", "Integration"],
      featured: false,
      premium: true
    }
  ];

  const contentCategories = [
    { name: "All Content", count: 1247, active: true },
    { name: "Courses", count: 47, active: false },
    { name: "Videos", count: 189, active: false },
    { name: "Podcasts", count: 127, active: false },
    { name: "Blog Posts", count: 234, active: false },
    { name: "Assessments", count: 12, active: false },
    { name: "Resources", count: 98, active: false }
  ];

  const workflows = [
    {
      id: 1,
      name: "Course Creation Workflow",
      description: "End-to-end process for creating and publishing new APEST courses",
      status: "active",
      steps: 8,
      avgTime: "2 weeks",
      completionRate: "94.2%"
    },
    {
      id: 2,
      name: "Blog Content Review",
      description: "Editorial review process for blog posts and articles",
      status: "active",
      steps: 5,
      avgTime: "3 days",
      completionRate: "97.8%"
    },
    {
      id: 3,
      name: "Video Production Pipeline",
      description: "From recording to publication for video content",
      status: "active",
      steps: 6,
      avgTime: "1 week",
      completionRate: "89.1%"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-trimtab-blue-4 mb-4">
              Content Management System
            </h1>
            <p className="text-xl text-trimtab-gray-3">
              Create, manage, and optimize all your APEST content from one central location
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-trimtab-gray-2">
              <Upload className="w-4 h-4 mr-2" />
              Import Content
            </Button>
            <Button variant="outline" className="border-trimtab-gray-2">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button className="trimtab-cta-gradient text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Content
            </Button>
          </div>
        </div>

        {/* Content Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contentStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-trimtab-blue-4 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-trimtab-gray-3 mb-1">
                      {stat.title}
                    </div>
                    <div className="text-xs text-green-600">
                      {stat.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Content Types Overview */}
          <div className="lg:col-span-1">
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4">Content Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentTypes.map((contentType, index) => {
                    const IconComponent = contentType.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-5 h-5 ${contentType.color}`} />
                          <div>
                            <div className="font-medium text-trimtab-blue-4">{contentType.type}</div>
                            <div className="text-sm text-trimtab-gray-3">
                              {contentType.published} live, {contentType.draft} draft
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-trimtab-blue-4">{contentType.count}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-6">
              <Card className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                        <Input 
                          placeholder="Search content by title, author, or tags..." 
                          className="pl-10 border-trimtab-gray-2"
                        />
                      </div>
                    </div>
                    <div>
                      <select className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2">
                        <option value="">All Types</option>
                        <option value="course">Courses</option>
                        <option value="video">Videos</option>
                        <option value="podcast">Podcasts</option>
                        <option value="blog">Blog Posts</option>
                        <option value="assessment">Assessments</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2">
                        <option value="">All Status</option>
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Categories */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3">
                {contentCategories.map((category, index) => (
                  <Button
                    key={index}
                    variant={category.active ? "default" : "outline"}
                    className={category.active ? "trimtab-cta-gradient text-white" : "border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0"}
                    size="sm"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Content List */}
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-trimtab-blue-4">Recent Content</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-trimtab-gray-2">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="border-trimtab-gray-2">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContent.map((content) => (
                    <div key={content.id} className="border border-trimtab-gray-1 rounded-lg p-6 hover:bg-trimtab-blue-0 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-trimtab-blue-4">{content.title}</h3>
                            {content.featured && (
                              <Badge className="bg-trimtab-cta text-white">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            {content.premium && (
                              <Badge className="bg-purple-500 text-white">
                                <Crown className="w-3 h-3 mr-1" />
                                Premium
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-trimtab-gray-3 mb-3">
                            <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2">
                              {content.type}
                            </Badge>
                            <span>•</span>
                            <span>by {content.author}</span>
                            <span>•</span>
                            <span>{content.lastModified}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {content.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Badge className={`${
                          content.status === 'published' ? 'bg-green-500' :
                          content.status === 'draft' ? 'bg-yellow-500' :
                          content.status === 'scheduled' ? 'bg-blue-500' : 'bg-gray-500'
                        } text-white`}>
                          {content.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <div className="text-trimtab-gray-3">Views</div>
                          <div className="font-semibold text-trimtab-blue-4">{content.views.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-trimtab-gray-3">Engagement</div>
                          <div className="font-semibold text-trimtab-blue-4">{content.engagement}</div>
                        </div>
                        <div>
                          <div className="text-trimtab-gray-3">Revenue</div>
                          <div className="font-semibold text-green-600">{content.revenue}</div>
                        </div>
                        <div>
                          <div className="text-trimtab-gray-3">Actions</div>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Workflows */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  Content Workflows
                </CardTitle>
                <Button className="trimtab-cta-gradient text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Workflow
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {workflows.map((workflow) => (
                  <div key={workflow.id} className="border border-trimtab-gray-1 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-trimtab-blue-4 mb-2">{workflow.name}</h3>
                        <p className="text-sm text-trimtab-gray-3 mb-3">{workflow.description}</p>
                      </div>
                      <Badge className={`${
                        workflow.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                      } text-white`}>
                        {workflow.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-trimtab-gray-3">Steps</div>
                        <div className="font-semibold text-trimtab-blue-4">{workflow.steps}</div>
                      </div>
                      <div>
                        <div className="text-trimtab-gray-3">Avg Time</div>
                        <div className="font-semibold text-trimtab-blue-4">{workflow.avgTime}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-trimtab-gray-3 mb-1">Completion Rate</div>
                      <div className="font-semibold text-green-600">{workflow.completionRate}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">Create Course</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">Build comprehensive APEST learning experiences</p>
              <Button className="w-full trimtab-cta-gradient text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Course
              </Button>
            </CardContent>
          </Card>

          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Video className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">Upload Video</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">Add video content to your library</p>
              <Button variant="outline" className="w-full border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                <Upload className="w-4 h-4 mr-2" />
                Upload Video
              </Button>
            </CardContent>
          </Card>

          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">Write Article</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">Create blog posts and articles</p>
              <Button variant="outline" className="w-full border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                <Edit className="w-4 h-4 mr-2" />
                New Article
              </Button>
            </CardContent>
          </Card>

          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">Build Assessment</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">Create interactive APEST assessments</p>
              <Button variant="outline" className="w-full border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                <Plus className="w-4 h-4 mr-2" />
                New Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
