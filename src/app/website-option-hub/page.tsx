"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { 
  Compass,
  BookOpen,
  Users,
  BarChart3,
  Calendar,
  MessageCircle,
  Star,
  ArrowRight,
  Play,
  Download,
  Search,
  Filter,
  Grid,
  List,
  Target,
  Award,
  Clock,
  TrendingUp,
  Heart,
  Eye,
  Shield,
  Brain,
  Lightbulb,
  Zap,
  Globe,
  Building,
  Settings,
  Bell,
  User,
  HelpCircle,
  CheckCircle,
  Video,
  Headphones,
  FileText,
  Image,
  ExternalLink,
  ChevronRight,
  Plus,
  Minus,
  Edit,
  Share2,
  Bookmark,
  Flag,
  Navigation,
  Map,
  Telescope,
  Radar,
  Activity,
  PieChart,
  LineChart,
  Layers,
  Archive
} from "lucide-react";
import Footer from "@/components/Footer";

export default function WebsiteOptionHub() {
  const [activeHub, setActiveHub] = useState("learning");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Central Hub Data
  const learningHubs = [
    {
      id: "learning",
      title: "Learning Hub",
      subtitle: "Courses & Development",
      description: "Comprehensive APEST courses, interactive content, and skill development pathways",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      stats: { courses: 24, hours: 156, participants: 2847 },
      features: ["Interactive Courses", "Video Library", "Skill Assessments", "Progress Tracking"]
    },
    {
      id: "assessment",
      title: "Assessment Hub", 
      subtitle: "Discovery & Analytics",
      description: "Advanced APEST assessments, analytics, and personalized development insights",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      stats: { assessments: 8, completed: 12563, accuracy: 96 },
      features: ["APEST Assessment", "Team Analysis", "Growth Planning", "Competency Mapping"]
    },
    {
      id: "community",
      title: "Community Hub",
      subtitle: "Connection & Collaboration", 
      description: "Forums, study groups, mentoring connections, and peer learning networks",
      icon: Users,
      color: "from-green-500 to-green-600",
      stats: { members: 5420, groups: 187, discussions: 3241 },
      features: ["Discussion Forums", "Study Groups", "Peer Mentoring", "Expert Q&A"]
    },
    {
      id: "resources",
      title: "Resource Hub",
      subtitle: "Tools & Materials",
      description: "Downloadable content, templates, guides, and practical ministry tools",
      icon: Archive,
      color: "from-orange-500 to-orange-600", 
      stats: { resources: 847, downloads: 23156, templates: 94 },
      features: ["Download Library", "Ministry Tools", "Templates", "Research Papers"]
    },
    {
      id: "coaching",
      title: "Coaching Hub",
      subtitle: "Personal Development",
      description: "One-on-one coaching, group sessions, and personalized development plans",
      icon: Compass,
      color: "from-indigo-500 to-indigo-600",
      stats: { coaches: 34, sessions: 1256, satisfaction: 98 },
      features: ["Personal Coaching", "Group Sessions", "Development Plans", "Expert Guidance"]
    },
    {
      id: "analytics",
      title: "Analytics Hub",
      subtitle: "Insights & Reporting",
      description: "Learning analytics, progress tracking, and organizational reporting tools",
      icon: BarChart3,
      color: "from-teal-500 to-teal-600",
      stats: { reports: 45, insights: 1247, organizations: 156 },
      features: ["Progress Analytics", "Team Reports", "Growth Insights", "ROI Tracking"]
    }
  ];

  const quickActions = [
    { title: "Take APEST Assessment", description: "Discover your primary ministry gifts", icon: Target, href: "#" },
    { title: "Join Live Session", description: "Weekly Q&A with Tim Catchim", icon: Video, href: "#" },
    { title: "Browse Course Library", description: "24+ courses across all APEST gifts", icon: BookOpen, href: "#" },
    { title: "Connect with Coach", description: "Schedule personalized guidance", icon: Users, href: "#" },
    { title: "Download Resources", description: "Templates and ministry tools", icon: Download, href: "#" },
    { title: "View Progress", description: "Track your development journey", icon: BarChart3, href: "#" }
  ];

  const featuredContent = [
    {
      id: 1,
      type: "course",
      title: "Mastering Your APEST Profile",
      description: "Deep dive into understanding and developing your primary ministry gifts",
      instructor: "Tim Catchim",
      duration: "6 weeks",
      participants: 423,
      rating: 4.9,
      image: "/api/placeholder/300/200",
      tags: ["Foundational", "All Gifts", "Popular"]
    },
    {
      id: 2,
      type: "workshop",
      title: "Building Effective APEST Teams",
      description: "Learn to construct balanced ministry teams using APEST principles",
      instructor: "Dr. Sarah Johnson",
      duration: "3 hours",
      participants: 156,
      rating: 4.8,
      image: "/api/placeholder/300/200",
      tags: ["Leadership", "Team Building", "Live"]
    },
    {
      id: 3,
      type: "assessment",
      title: "Advanced Leadership Assessment",
      description: "Comprehensive evaluation of leadership competencies and growth areas",
      instructor: "Assessment Team",
      duration: "45 minutes",
      participants: 892,
      rating: 4.7,
      image: "/api/placeholder/300/200",
      tags: ["Assessment", "Leadership", "Advanced"]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly APEST Leaders Gathering",
      date: "August 20, 2025",
      time: "2:00 PM CST",
      type: "Virtual",
      attendees: 234,
      speaker: "Tim Catchim"
    },
    {
      id: 2,
      title: "Shepherding Excellence Workshop",
      date: "August 25, 2025", 
      time: "10:00 AM CST",
      type: "In-Person",
      attendees: 67,
      speaker: "Dr. Maria Santos"
    },
    {
      id: 3,
      title: "Evangelistic Breakthrough Training",
      date: "September 1, 2025",
      time: "1:00 PM CST",
      type: "Hybrid",
      attendees: 189,
      speaker: "Pastor David Kim"
    }
  ];

  const learningPathways = [
    {
      title: "Foundation Track",
      description: "Essential APEST principles and personal discovery",
      courses: 4,
      duration: "8 weeks",
      level: "Beginner",
      color: "blue"
    },
    {
      title: "Leadership Development",
      description: "Advanced ministry leadership using APEST framework", 
      courses: 6,
      duration: "12 weeks",
      level: "Intermediate",
      color: "purple"
    },
    {
      title: "Team Building Mastery",
      description: "Creating and leading effective APEST teams",
      courses: 5,
      duration: "10 weeks", 
      level: "Advanced",
      color: "green"
    },
    {
      title: "Organizational Transformation",
      description: "Implementing APEST across entire organizations",
      courses: 8,
      duration: "16 weeks",
      level: "Expert",
      color: "orange"
    }
  ];

  const getHubData = (hubId: string) => {
    const hub = learningHubs.find(h => h.id === hubId);
    
    const hubContent = {
      learning: {
        sections: ["Featured Courses", "Learning Pathways", "Skill Development", "Video Library"],
        items: [
          { title: "APEST Foundations", progress: 100, type: "course" },
          { title: "Prophetic Discernment", progress: 67, type: "course" },
          { title: "Evangelistic Excellence", progress: 34, type: "course" },
          { title: "Shepherding Hearts", progress: 0, type: "course" }
        ]
      },
      assessment: {
        sections: ["Primary Assessment", "Team Analysis", "Growth Planning", "Progress Tracking"],
        items: [
          { title: "Core APEST Assessment", progress: 100, type: "assessment" },
          { title: "Leadership Competency", progress: 85, type: "assessment" },
          { title: "Team Dynamics", progress: 45, type: "assessment" },
          { title: "Ministry Readiness", progress: 0, type: "assessment" }
        ]
      },
      community: {
        sections: ["Active Discussions", "Study Groups", "Mentorship", "Expert Sessions"],
        items: [
          { title: "Shepherding Challenges", progress: 100, type: "discussion" },
          { title: "Evangelism in Digital Age", progress: 78, type: "discussion" },
          { title: "Prophetic Discernment Group", progress: 56, type: "group" },
          { title: "Leadership Cohort 2025", progress: 23, type: "group" }
        ]
      },
      resources: {
        sections: ["Ministry Tools", "Templates", "Research", "Downloads"],
        items: [
          { title: "APEST Team Builder Template", progress: 100, type: "template" },
          { title: "Ministry Assessment Toolkit", progress: 100, type: "tool" },
          { title: "Leadership Development Guide", progress: 100, type: "guide" },
          { title: "Sermon Series Outlines", progress: 100, type: "resource" }
        ]
      },
      coaching: {
        sections: ["Personal Coaching", "Group Sessions", "Workshops", "Intensive Programs"],
        items: [
          { title: "Personal Development Plan", progress: 78, type: "coaching" },
          { title: "Leadership Coaching Track", progress: 45, type: "coaching" },
          { title: "Team Building Workshop", progress: 23, type: "workshop" },
          { title: "Executive Intensive", progress: 0, type: "intensive" }
        ]
      },
      analytics: {
        sections: ["Personal Analytics", "Team Reports", "Organizational Insights", "ROI Analysis"],
        items: [
          { title: "Learning Progress Report", progress: 100, type: "report" },
          { title: "Team Effectiveness Analysis", progress: 67, type: "analysis" },
          { title: "Ministry Impact Assessment", progress: 34, type: "assessment" },
          { title: "Organizational Health Scan", progress: 12, type: "scan" }
        ]
      }
    };

    return { hub, content: hubContent[hubId as keyof typeof hubContent] };
  };

  const currentHub = getHubData(activeHub);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">APEST Learning Platform</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">My Learning</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Resources</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search everything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Master Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ministry Calling</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover, develop, and deploy your APEST gifts through our comprehensive learning platform. 
            Join thousands of leaders transforming their ministries.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Play className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline">
              <Target className="w-5 h-5 mr-2" />
              Take Assessment
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15,000+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Learning Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">500+</div>
              <div className="text-gray-600">Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Hubs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Hubs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six specialized hubs designed to support every aspect of your APEST development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningHubs.map((hub) => (
              <Card 
                key={hub.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group ${
                  activeHub === hub.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveHub(hub.id)}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hub.color}`} />
                
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${hub.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <hub.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{hub.title}</h3>
                      <p className="text-blue-600 font-medium">{hub.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{hub.description}</p>

                  {/* Hub Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(hub.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {hub.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Explore Hub
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Active Hub Detail */}
      {currentHub.hub && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-r ${currentHub.hub.color} flex items-center justify-center`}>
                <currentHub.hub.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentHub.hub.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentHub.hub.description}</p>
            </div>

            <Tabs defaultValue={currentHub.content?.sections[0].toLowerCase().replace(' ', '-')} className="space-y-8">
              <div className="flex items-center justify-between">
                <TabsList className="grid w-full max-w-2xl grid-cols-4">
                  {currentHub.content?.sections.map((section, index) => (
                    <TabsTrigger key={index} value={section.toLowerCase().replace(' ', '-')}>
                      {section}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {currentHub.content?.sections.map((section, index) => (
                <TabsContent key={index} value={section.toLowerCase().replace(' ', '-')}>
                  <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                    {currentHub.content?.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                        <CardContent className={`p-6 ${viewMode === 'list' ? 'flex items-center space-x-4' : ''}`}>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                            <Badge variant="outline" className="mb-3 text-xs">
                              {item.type}
                            </Badge>
                            {item.progress > 0 && (
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">Progress</span>
                                  <span className="font-medium">{item.progress}%</span>
                                </div>
                                <Progress value={item.progress} />
                              </div>
                            )}
                          </div>
                          <Button size="sm" className={viewMode === 'grid' ? 'w-full mt-4' : ''}>
                            {item.progress === 0 ? 'Start' : item.progress === 100 ? 'Review' : 'Continue'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      )}

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-xl text-gray-600">Jump right into the most popular activities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors">
                    <action.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                  <Button size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h2>
            <p className="text-xl text-gray-600">Popular courses and workshops chosen by learners like you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <Card key={content.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-blue-600 text-white mb-2">
                      {content.type}
                    </Badge>
                    <h3 className="font-bold text-lg">{content.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{content.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>By {content.instructor}</span>
                    <span>{content.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{content.rating}</span>
                      <span className="text-gray-500 text-sm">({content.participants})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full">
                    {content.type === 'course' ? 'Enroll Now' : 
                     content.type === 'workshop' ? 'Register' : 'Take Assessment'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Pathways</h2>
            <p className="text-xl text-gray-600">Structured development tracks for every stage of your journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {learningPathways.map((pathway, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pathway.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{pathway.description}</p>
                    </div>
                    <Badge className={`
                      ${pathway.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        pathway.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        pathway.color === 'green' ? 'bg-green-100 text-green-700' :
                        'bg-orange-100 text-orange-700'
                      }
                    `}>
                      {pathway.level}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{pathway.courses}</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{pathway.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>

                  <Button className="w-full">
                    View Pathway
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join live sessions, workshops, and community gatherings</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                          <Badge variant="outline" className="text-xs">{event.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">Speaker: {event.speaker}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{event.attendees}</div>
                        <div className="text-xs text-gray-500">registered</div>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Event Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Calendar className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive calendar would be embedded here</p>
                    <p className="text-sm">Showing all upcoming events and deadlines</p>
                  </div>
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
